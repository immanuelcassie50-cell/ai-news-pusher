#!/usr/bin/env node
/**
 * tts-sing.js — 林振强×施立词曲融合系统 MP3生成脚本
 *
 * 功能：读取歌词+旋律注释文件，调用MiniMax TTS API逐句生成语音，
 *       按节奏参数拼接，最终输出MP3试听文件。
 *
 * 使用方式：
 *   node scripts/tts-sing.js --lyrics <文件路径> --tempo 90 --key "C minor" --output <mp3路径>
 *   node scripts/tts-sing.js --lyrics <歌词文件> --voice "male-qing" --tempo 90 --output D:/Downloads/output.mp3
 *
 * 依赖：
 *   - Node.js 18+
 *   - ffmpeg (用于音频拼接与混响)
 *
 * MiniMax TTS API:
 *   Base URL: https://api.minimax.chat
 *   Voice ID: 详见 ~/.bashrc 中的 MINIMAX 配置
 *
 * 林振强×施立系统特殊配置：
 *   - 默认BPM: 90 (都市律动)
 *   - 默认调式: C minor (情绪中性偏冷)
 *   - 情绪风格: 克制、理性、机智 (非悲伤/爆发)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawn } = require('child_process');

// ============ 配置区（固化，不需要AI决策） ============

const MINIMAX_API_BASE = 'https://api.minimax.chat';
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || 'sk-cp-zJ6mafAjzSDD5GzVDSqk2u2ohxKb7w35XWK4WGZVNNWB2DOshq28O6LVgVylEO0I0ObRHz1GnLqPNG1lZxboutZuxOpUIE6dJFqvhZFMYQFzJPBekeFJWzg';
const DEFAULT_VOICE_ID = 'male-qing';   // 默认理性男声（克制冷静）
const MALE_VOICE_FALLBACK = 'male-shaonian'; // 男声备选
const DEFAULT_TEMPO = 90;              // 都市律动BPM
const DEFAULT_KEY = 'C minor';         // 情绪中性偏冷
const OUTPUT_DIR = 'D:/Downloads/xinjian/林振强施立词曲融合系统/outputs';

// ============ 工具函数 ============

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    lyricsFile: null,
    tempo: DEFAULT_TEMPO,
    key: DEFAULT_KEY,
    output: null,
    voiceId: DEFAULT_VOICE_ID,
  };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--lyrics' && args[i + 1]) config.lyricsFile = args[++i];
    if (args[i] === '--tempo' && args[i + 1]) config.tempo = parseInt(args[++i]);
    if (args[i] === '--key' && args[i + 1]) config.key = args[++i];
    if (args[i] === '--output' && args[i + 1]) config.output = args[++i];
    if (args[i] === '--voice' && args[i + 1]) config.voiceId = args[++i];
  }
  if (!config.lyricsFile) {
    console.error('❌ 缺少参数：--lyrics <歌词文件路径>');
    process.exit(1);
  }
  if (!config.output) {
    // 自动生成输出文件名
    const base = path.basename(config.lyricsFile, path.extname(config.lyricsFile));
    config.output = path.join(OUTPUT_DIR, `${base}_${config.tempo}bpm_${config.key.replace(/[\s#]/g, '_')}.mp3`);
  }
  return config;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * 调用MiniMax TTS API生成单句语音
 * 林振强×施立系统：emotion参数使用克制/理性类（而非悲伤/爆发）
 * @param {string} text - 要合成的文字
 * @param {string} voiceId - 音色ID
 * @param {string} emotion - 情绪参数（克制类）
 * @returns {Promise<Buffer|string>} - MP3音频文件路径或base64
 */
function callMinimaxTTS(text, voiceId = DEFAULT_VOICE_ID, emotion = 'neutral') {
  return new Promise((resolve, reject) => {
    // 林振强×施立系统：情绪全部用克制类
    // 可选值: neutral, sad, happy, angry, fearful, disgusted,surprised
    // 施立旋律强调克制，所以统一用neutral或轻微sad，不用excited
    const emotionMap = {
      'neutral': 'neutral',
      'sad': 'sad',          // 仅Verse适用
      'emotional': 'neutral', // 施立系统不用爆发
      'excited': 'neutral',  // 施立系统不用激动
      'dramatic': 'sad',     // Bridge用轻微sad（克制版dramatic）
      'intelligent': 'neutral', // 自创：理性、机智感
    };

    const mappedEmotion = emotionMap[emotion] || 'neutral';

    const body = JSON.stringify({
      model: 'speech-2.8-hd',
      text: text,
      stream: false,
      voice_setting: {
        voice_id: voiceId,
        speed: 1.0,
        pitch: 0,
        volume: 0,
        emotion: mappedEmotion,
      },
    });

    const options = {
      hostname: 'api.minimax.chat',
      path: '/v1/t2a_v2?GroupId=' + process.env.MINIMAX_GROUP_ID,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MINIMAX_API_KEY}`,
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const data = Buffer.concat(chunks);
        try {
          const json = JSON.parse(data.toString());
          if (json.data && json.data.audio_file) {
            resolve(json.data.audio_file);
          } else {
            reject(new Error(`MiniMax API错误: ${JSON.stringify(json)}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

/**
 * 下载音频文件（URL → Buffer）
 */
function downloadAudio(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * 解析歌词文件，提取各段落的句子与旋律参数
 * 文件格式：markdown中嵌入旋律注释
 * 支持林振强×施立系统的段落结构：
 *   [Verse1] [Pre-Chorus] [Chorus] [Verse2] [Bridge] [Chorus - 末] [Outro]
 */
function parseLyricsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const sections = [];
  let currentSection = null;

  for (const line of lines) {
    // 匹配林振强×施立系统段落标签
    const match = line.match(/\[(Verse\d*|Pre-Chorus|Chorus|Bridge|Outro|Chorus\s*-\s*末)\]/);
    if (match) {
      currentSection = {
        name: match[1],
        lines: [],
        sectionComment: null,
      };
      sections.push(currentSection);
      continue;
    }

    if (currentSection) {
      const cleanLine = line.replace(/^##.*$/, '').trim();
      if (cleanLine && !cleanLine.startsWith('**') && !cleanLine.startsWith('---')) {
        // 提取括号内的旋律注释（中文括号）
        const bracketMatch = cleanLine.match(/^(.+?)（(.+?)）$/);
        if (bracketMatch) {
          currentSection.lines.push({
            lyric: bracketMatch[1].trim(),
            annotation: bracketMatch[2],
          });
        } else if (cleanLine.match(/^[^\[].+[，。！？、…——\w「」『』\/]+$/)) {
          currentSection.lines.push({
            lyric: cleanLine,
            annotation: '',
          });
        }
      }
    }
  }

  return sections;
}

/**
 * 根据旋律注释推断情绪参数
 * 林振强×施立系统：全程克制，不用excited
 */
function inferEmotion(sectionName, annotation) {
  // 林振强×施立：全程克制
  const sectionEmotions = {
    'Verse1': 'sad',       // 轻微sad（冷调叙事，非悲伤）
    'Verse2': 'sad',       // 轻微sad
    'Pre-Chorus': 'neutral', // 蓄力但克制
    'Chorus': 'neutral',   // 核心Hook：中性克制
    'Chorus - 末': 'neutral', // 末Chorus：永恒回响
    'Bridge': 'sad',       // 克制dramatic（理性哲思）
    'Outro': 'neutral',    // 留白
  };

  const base = sectionEmotions[sectionName] || 'neutral';

  // 根据注释中的关键词微调（全程克制）
  if (annotation.includes('爆发') || annotation.includes('高潮') || annotation.includes('高呼')) {
    return 'neutral'; // 林振强系统：即使标注爆发，实际也用克制
  }
  if (annotation.includes('哲思') || annotation.includes('深沉') || annotation.includes('留白')) {
    return 'sad'; // 克制dramatic
  }
  if (annotation.includes('自嘲') || annotation.includes('讽喻')) {
    return 'neutral'; // 机智感
  }
  if (annotation.includes('延音') || annotation.includes('悬空')) {
    return 'neutral'; // 延音尾：中性
  }

  return base;
}

/**
 * 用ffmpeg拼接多个MP3片段成一个完整文件
 * @param {string[]} tempFiles - 临时文件路径数组
 * @param {string} outputFile - 最终输出文件路径
 */
function concatAudioFiles(tempFiles, outputFile) {
  return new Promise((resolve, reject) => {
    const concatList = tempFiles
      .map(f => `file '${f.replace(/\\/g, '/')}'`)
      .join('\n');
    const listFile = path.join(OUTPUT_DIR, `__concat_list_${Date.now()}.txt`);
    fs.writeFileSync(listFile, concatList);

    const args = [
      '-f', 'concat',
      '-safe', '0',
      '-i', listFile,
      '-c', 'copy',
      outputFile.replace(/\\/g, '/'),
    ];

    const ffmpeg = spawn('ffmpeg', args);
    let stderr = '';
    ffmpeg.stderr.on('data', (d) => { stderr += d.toString(); });
    ffmpeg.on('close', (code) => {
      fs.unlinkSync(listFile);
      if (code === 0) {
        console.log(`✅ MP3已生成：${outputFile}`);
        resolve();
      } else {
        reject(new Error(`ffmpeg失败，code=${code}\n${stderr}`));
      }
    });
    ffmpeg.on('error', reject);
  });
}

/**
 * 为单个MP3添加混响效果（城市夜行声场参数）
 * 林振强×施立系统：全程小混响，贴近人声真实环境
 * @param {string} inputFile - 输入文件（Buffer或路径）
 * @param {string} outputFile - 输出文件路径
 * @param {string} sectionName - 段落名称
 */
function addReverb(inputFile, outputFile, sectionName) {
  return new Promise((resolve, reject) => {
    // 林振强×施立系统：混响整体偏小，营造真实夜行感
    const reverbPresets = {
      'Verse1': 'room=0.25',        // 小空间：深夜便利店/咖啡馆
      'Verse2': 'room=0.25',
      'Pre-Chorus': 'room=0.28',   // 轻微蓄力，空间略增
      'Chorus': 'room=0.30',       // 副歌：room 0.30，不超0.32
      'Chorus - 末': 'room=0.32',  // 末Chorus：留白感，混响略大
      'Bridge': 'hall=0.32',        // Bridge：轻hall，哲思空间
      'Outro': 'hall=0.35',         // Outro：最大混响，留白延时≥2s
    };
    const preset = reverbPresets[sectionName] || 'room=0.28';

    // 构建ffmpeg输入参数
    let inputArg;
    if (Buffer.isBuffer(inputFile)) {
      // 如果是Buffer，先写临时文件
      const tmpPath = path.join(OUTPUT_DIR, `__reverb_input_${Date.now()}.tmp`);
      fs.writeFileSync(tmpPath, inputFile);
      inputArg = tmpPath.replace(/\\/g, '/');
    } else {
      inputArg = inputFile.replace(/\\/g, '/');
    }

    const args = [
      '-i', inputArg,
      '-af', `aecho=0.8:0.9:500:0.3,${preset}`,
      '-y',
      outputFile.replace(/\\/g, '/'),
    ];

    const ffmpeg = spawn('ffmpeg', args);
    let stderr = '';
    ffmpeg.stderr.on('data', (d) => { stderr += d.toString(); });
    ffmpeg.on('close', (code) => {
      // 清理临时输入文件
      if (Buffer.isBuffer(inputFile)) {
        try { fs.unlinkSync(inputFile.replace ? inputFile : ''); } catch (_) {}
      }
      if (code === 0) resolve();
      else reject(new Error(`混响处理失败: ${stderr}`));
    });
    ffmpeg.on('error', reject);
  });
}

// ============ 主流程（固化，不需要AI决策） ============

async function main() {
  const config = parseArgs();
  console.log('🎵 林振强×施立词曲融合系统 - MP3生成器');
  console.log('────────────────────────────────────────');
  console.log(`📄 歌词文件：${config.lyricsFile}`);
  console.log(`🎼 调式：${config.key}  节拍：${config.tempo} BPM（都市律动）`);
  console.log(`🔊 音色：${config.voiceId}（理性克制风格）`);
  console.log(`📦 输出：${config.output}`);

  ensureDir(OUTPUT_DIR);
  ensureDir(path.dirname(config.output));

  // 1. 解析歌词文件
  const sections = parseLyricsFile(config.lyricsFile);
  console.log(`\n📖 解析到 ${sections.length} 个段落`);
  sections.forEach((s) => console.log(`   ${s.name}: ${s.lines.length} 句`));

  if (sections.length === 0) {
    console.error('❌ 歌词文件解析失败，请检查文件格式');
    process.exit(1);
  }

  // 2. 逐句生成TTS
  const tempFiles = [];
  let totalLines = 0;

  for (const section of sections) {
    console.log(`\n🎤 处理 ${section.name}...`);
    for (let i = 0; i < section.lines.length; i++) {
      const lineData = section.lines[i];
      const text = lineData.lyric;
      const emotion = inferEmotion(section.name, lineData.annotation);
      const tempFile = path.join(OUTPUT_DIR, `__temp_${Date.now()}_${totalLines}.mp3`);

      try {
        const shortText = text.length > 18 ? text.substring(0, 18) + '…' : text;
        console.log(`  [${totalLines + 1}] "${shortText}" (${emotion}/${section.name})`);

        // 调用MiniMax TTS
        const audioRef = await callMinimaxTTS(text, config.voiceId, emotion);

        // 下载音频文件
        let audioData;
        if (audioRef.startsWith('http')) {
          audioData = await downloadAudio(audioRef);
        } else if (audioRef.length > 1000) {
          audioData = Buffer.from(audioRef, 'base64');
        } else {
          audioData = fs.readFileSync(audioRef);
        }

        // 添加混响效果（城市夜行声场）
        await addReverb(audioData, tempFile, section.name);

        tempFiles.push(tempFile);
        totalLines++;

        // 限速：MiniMax API QPS限制
        await new Promise(r => setTimeout(r, 200));
      } catch (err) {
        console.error(`  ⚠️  第${totalLines + 1}句生成失败（跳过）：${err.message}`);
        totalLines++;
      }
    }
  }

  // 3. 拼接所有片段
  if (tempFiles.length > 0) {
    console.log(`\n🔗 拼接 ${tempFiles.length} 个音频片段...`);
    await concatAudioFiles(tempFiles, config.output);

    // 清理临时文件
    for (const f of tempFiles) {
      try { fs.unlinkSync(f); } catch (_) {}
    }
    console.log('✅ 临时文件已清理');
  } else {
    console.error('❌ 没有任何音频片段生成，输出文件未创建');
    process.exit(1);
  }

  console.log('\n🎉 完成！MP3文件已保存至：');
  console.log(`   ${config.output}`);
  console.log('💡 林振强×施立系统：全程克制，智性疏离，城市夜行声场');
}

main().catch(console.error);
