#!/usr/bin/env node
/**
 * tts-sing.js — 赵雷词曲全能创作系统 MP3生成脚本
 *
 * 功能：读取歌词+旋律注释文件，调用MiniMax TTS API逐句生成语音，
 *       按节奏参数拼接，最终输出MP3试听文件。
 *
 * 使用方式：
 *   node scripts/tts-sing.js --lyrics <文件路径> --tempo 78 --key "G major" --output D:/Downloads/output.mp3
 *   node scripts/tts-sing.js --lyrics <歌词文件> --voice "male-qing" --tempo 78 --output D:/Downloads/zhaolei_demo.mp3
 *
 * 依赖：
 *   - Node.js 18+
 *   - ffmpeg (用于音频拼接与混响)
 *
 * 赵雷系统特殊配置：
 *   - 默认BPM: 78 (适合走路的步频，参考《成都》)
 *   - 默认调式: G major (温暖怀旧底色)
 *   - 核心音色: male-qing 或 male-shaonian (干净、稍沙、第一人身感)
 *   - 情绪风格: 微沙、贴近、少修饰、真实感
 *   - 语速: 偏慢，说话感强，不朗诵
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawn } = require('child_process');

const MINIMAX_API_BASE = 'https://api.minimax.chat';
// MiniMax API Key（已配置在环境变量或直接使用）
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || 'sk-cp-zJ6mafAjzSDD5GzVDSqk2u2ohxKb7w35XWK4WGZVNNWB2DOshq28O6LVgVylEO0I0ObRHz1GnLqPNG1lZxboutZuxOpUIE6dJFqvhZFMYQFzJPBekeFJWzg';
const DEFAULT_VOICE_ID = 'male-shaonian';  // 赵雷：干净、少年气、第一人身感
const DEFAULT_TEMPO = 78;                   // 赵雷典型BPM（70-85区间）
const DEFAULT_KEY = 'G major';              // 赵雷主调式
const OUTPUT_DIR = 'D:/Downloads/xinjian/赵雷词曲创作系统/outputs';

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    lyricsFile: null,
    tempo: DEFAULT_TEMPO,
    key: DEFAULT_KEY,
    output: null,
    voiceId: DEFAULT_VOICE_ID,
    emotion: 'male-narrator', // 赵雷风格：叙述感、自言自语
  };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--lyrics' && args[i + 1]) config.lyricsFile = args[++i];
    if (args[i] === '--tempo' && args[i + 1]) config.tempo = parseInt(args[++i]);
    if (args[i] === '--key' && args[i + 1]) config.key = args[++i];
    if (args[i] === '--output' && args[i + 1]) config.output = args[++i];
    if (args[i] === '--voice' && args[i + 1]) config.voiceId = args[++i];
    if (args[i] === '--emotion' && args[i + 1]) config.emotion = args[++i];
  }
  if (!config.lyricsFile) {
    console.error('缺少参数：--lyrics <歌词文件路径>');
    process.exit(1);
  }
  if (!config.output) {
    const base = path.basename(config.lyricsFile, path.extname(config.lyricsFile));
    config.output = path.join(OUTPUT_DIR, base + '_zhaolei_' + config.tempo + 'bpm_' + config.key.replace(/[\s#]/g, '_') + '.mp3');
  }
  return config;
}

/**
 * 读取歌词文件，解析节拍信息
 * 支持格式：
 *   [Verse1]
 *   歌词歌词歌词（G调，4/4，和弦G–Em–C–D）
 *   歌词歌词歌词（旋律：音域G3–D4）
 */
function parseLyricsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const sections = [];
  let currentSection = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // 检测章节标签：[Verse1]、[Chorus]、[Pre-C]等
    const sectionMatch = trimmed.match(/^\[(Verse|Pre-C|Chorus|Bridge|Outro|Solo)(\d*)\]$/);
    if (sectionMatch) {
      currentSection = {
        type: sectionMatch[1],
        index: sectionMatch[2] || '',
        lines: [],
        tempo: DEFAULT_TEMPO,
        key: DEFAULT_KEY,
        chords: [],
      };
      sections.push(currentSection);
      continue;
    }

    // 解析歌词行：歌词 + （元信息）
    const lyricMatch = trimmed.match(/^(.+?)（(.+?)）$/);
    if (lyricMatch && currentSection) {
      const lyricText = lyricMatch[1].trim();
      const metaText = lyricMatch[2];
      currentSection.lines.push({
        text: lyricText,
        meta: metaText,
      });

      // 解析元信息中的节拍/调式/和弦
      const tempoMatch = metaText.match(/(\d+)\s*bpm/i);
      if (tempoMatch) currentSection.tempo = parseInt(tempoMatch[1]);

      const keyMatch = metaText.match(/(G|C|D|A|E|F|B)([\s#]*(?:major|minor|m))?/i);
      if (keyMatch) currentSection.key = metaText;

      const chordMatch = metaText.match(/和弦[：:](.+)/);
      if (chordMatch) currentSection.chords.push(chordMatch[1].trim());
    } else if (currentSection) {
      // 无元信息的纯歌词行
      currentSection.lines.push({ text: trimmed, meta: '' });
    }
  }

  return sections;
}

/**
 * 计算每句时长（基于BPM和字数）
 * 赵雷风格：说话节奏，字数决定时长
 * 4/4拍，一拍 = 60000/BPM 毫秒
 */
function calcDuration(text, tempo, hasChord = false) {
  const beatMs = 60000 / tempo;
  // 赵雷口语节奏：每个字约 0.4-0.6拍（比标准稍慢）
  // 加停顿、留白
  const pauseBeats = 0.5; // 句末停顿
  const charBeats = text.length * 0.45;
  const totalBeats = charBeats + pauseBeats + (hasChord ? 0.5 : 0);
  return Math.round(totalBeats * beatMs);
}

/**
 * 调用MiniMax TTS API
 * 音色配置：male-shaonian（干净少年气）或 male-qing（干净清澈）
 * 赵雷感：微沙、贴近、少修饰、叙述感
 */
function callMiniMaxTTS(text, voiceId, speed = 0.85, emotion = '') {
  return new Promise((resolve, reject) => {
    const apiPath = '/v1/text/voice_proxy';
    const body = JSON.stringify({
      model: 'speech-2.8-hd',
      text: text,
      voice_id: voiceId,
      speed: speed,      // 赵雷：稍慢于正常（0.80-0.90），说话感
      pitch: 0,
      vol: 1.0,
      emotion: emotion || undefined,
    });

    const options = {
      hostname: 'api.minimax.chat',
      port: 443,
      path: apiPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + MINIMAX_API_KEY,
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        resolve(res); // 返回流，稍后写入文件
      } else {
        let errData = '';
        res.on('data', d => errData += d);
        res.on('end', () => reject(new Error(`TTS API错误 ${res.statusCode}: ${errData}`)));
      }
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

/**
 * 逐句生成TTS并拼接成MP3
 * 赵雷风格：每句之间留白，用ffmpeg连接
 */
async function generateMP3(sections, config) {
  // 确保输出目录存在
  const outputDir = path.dirname(config.output);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const tempDir = path.join(outputDir, '.temp_zhaolei_' + Date.now());
  fs.mkdirSync(tempDir, { recursive: true });

  console.log(`[赵雷系统] 开始生成MP3...`);
  console.log(`  调式: ${config.key} | BPM: ${config.tempo} | 音色: ${config.voiceId}`);
  console.log(`  输出: ${config.output}`);
  console.log('');

  let segmentIndex = 0;

  for (const section of sections) {
    console.log(`[${section.type}${section.index}] ${section.lines.length}句`);

    for (const line of section.lines) {
      if (!line.text.trim()) continue;

      const duration = calcDuration(line.text, section.tempo || config.tempo);
      const segmentFile = path.join(tempDir, `seg_${String(segmentIndex).padStart(3, '0')}.wav`);
      const mp3File = path.join(tempDir, `seg_${String(segmentIndex).padStart(3, '0')}.mp3`);

      try {
        // 调用TTS
        const response = await callMiniMaxTTS(line.text, config.voiceId, 0.85);

        // 保存为临时MP3
        await new Promise((resolve, reject) => {
          const stream = fs.createWriteStream(mp3File);
          response.pipe(stream);
          stream.on('finish', resolve);
          stream.on('error', reject);
        });

        // 转换为WAV并加入前后留白（赵雷风格：留白感）
        await runFFmpeg([
          '-y', '-i', mp3File,
          '-af', `apad=whole_dur=0.3,volume=1.0`,
          '-ar', '44100',
          '-ac', '2',
          segmentFile,
        ]);

        console.log(`  ✓ "${line.text}" (${duration}ms)`);
        segmentIndex++;
      } catch (err) {
        console.error(`  ✗ 失败: "${line.text}" — ${err.message}`);
      }
    }
  }

  // 合并所有段落为最终MP3
  console.log(`\n[赵雷系统] 合并 ${segmentIndex} 个段落...`);

  // 生成文件列表
  const listFile = path.join(tempDir, 'concat_list.txt');
  const listContent = Array.from({ length: segmentIndex }, (_, i) => {
    const idx = String(i).padStart(3, '0');
    return `file '${tempDir}/seg_${idx}.wav'`;
  }).join('\n');
  fs.writeFileSync(listFile, listContent);

  // ffmpeg concat
  await runFFmpeg([
    '-y', '-f', 'concat', '-safe', '0',
    '-i', listFile,
    '-af', `atrim=0:${Math.max(1, segmentIndex * 3 / config.tempo * 60)}.5,asetpts=PTS-STARTPTS`,
    '-b:a', '192k',
    config.output,
  ]);

  // 清理临时文件
  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log(`\n✅ 赵雷风格MP3已生成: ${config.output}`);
  console.log(`   调式: ${config.key} | BPM: ${config.tempo} | 音色: ${config.voiceId}`);
  console.log(`   风格: 微沙、贴近、少修饰、走路步频感`);
  return config.output;
}

function runFFmpeg(args) {
  return new Promise((resolve, reject) => {
    const ffmpeg = spawn('ffmpeg', args);
    let stderr = '';
    ffmpeg.stderr.on('data', d => stderr += d.toString());
    ffmpeg.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg错误: ${stderr.slice(-300)}`));
    });
    ffmpeg.on('error', err => reject(err));
  });
}

// 主入口
async function main() {
  const config = parseArgs();

  if (!fs.existsSync(config.lyricsFile)) {
    console.error(`歌词文件不存在: ${config.lyricsFile}`);
    process.exit(1);
  }

  console.log('============================================');
  console.log('  赵雷词曲全能创作系统 — MP3生成');
  console.log('============================================\n');

  const sections = parseLyricsFile(config.lyricsFile);
  console.log(`解析到 ${sections.length} 个段落，共 ${sections.reduce((s, sec) => s + sec.lines.length, 0)} 句歌词\n`);

  await generateMP3(sections, config);
}

main().catch(err => {
  console.error('生成失败:', err.message);
  process.exit(1);
});
