#!/usr/bin/env node
/**
 * tts-sing.js — 陈辉阳×林夕词曲融合系统 MP3生成脚本
 *
 * 功能：读取歌词+旋律注释文件，调用MiniMax TTS API逐句生成语音，
 *       按节奏参数拼接，最终输出MP3试听文件。
 *
 * 使用方式：
 *   node scripts/tts-sing.js --lyrics <文件路径> --tempo 75 --key "C major" --output <mp3路径>
 *   node scripts/tts-sing.js --lyrics <歌词文件> --voice "male-qing" --tempo 75 --output D:/Downloads/output.mp3
 *
 * 依赖：
 *   - Node.js 18+
 *   - ffmpeg (用于音频拼接与混响)
 *
 * 陈辉阳×林夕系统特殊配置：
 *   - 默认BPM: 75 (慢中带一点力)
 *   - 默认调式: C major (都市冷调)
 *   - 情绪风格: 克制、优雅、内心翻涌(全程不崩溃，但全身都在裂)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawn } = require('child_process');

const MINIMAX_API_BASE = 'https://api.minimax.chat';
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || 'sk-cp-zJ6mafAjzSDD5GzVDSqk2u2ohxKb7w35XWK4WGZVNNWB2DOshq28O6LVgVylEO0I0ObRHz1GnLqPNG1lZxboutZuxOpUIE6dJFqvhZFMYQFzJPBekeFJWzg';
const DEFAULT_VOICE_ID = 'male-qing';
const DEFAULT_TEMPO = 75;
const DEFAULT_KEY = 'C major';
const OUTPUT_DIR = 'D:/Downloads/xinjian/陈辉阳林夕词曲融合系统/outputs';

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
    console.error('缺少参数：--lyrics <歌词文件路径>');
    process.exit(1);
  }
  if (!config.output) {
    const base = path.basename(config.lyricsFile, path.extname(config.lyricsFile));
    config.output = path.join(OUTPUT_DIR, base + '_' + config.tempo + 'bpm_' + config.key.replace(/[\s#]/g, '_') + '.mp3');
  }
  return config;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function callMinimaxTTS(text, voiceId, emotion) {
  return new Promise((resolve, reject) => {
    const emotionMap = {
      'neutral': 'neutral',
      'sad': 'sad',
      'emotional': 'neutral',
      'excited': 'neutral',
      'dramatic': 'sad',
      'intelligent': 'neutral',
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
        'Authorization': 'Bearer ' + MINIMAX_API_KEY,
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
            reject(new Error('MiniMax API错误: ' + JSON.stringify(json)));
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

function parseLyricsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const sections = [];
  let currentSection = null;
  for (const line of lines) {
    const match = line.match(/\[(Verse\d*|Pre-Chorus|Chorus|Bridge|Outro|Chorus\s*-\s*末)\]/);
    if (match) {
      currentSection = { name: match[1], lines: [], sectionComment: null };
      sections.push(currentSection);
      continue;
    }
    if (currentSection) {
      const cleanLine = line.replace(/^##.*$/, '').trim();
      if (cleanLine && !cleanLine.startsWith('**') && !cleanLine.startsWith('---')) {
        const bracketMatch = cleanLine.match(/^(.+?)（(.+?)）$/);
        if (bracketMatch) {
          currentSection.lines.push({ lyric: bracketMatch[1].trim(), annotation: bracketMatch[2] });
        } else if (cleanLine.match(/^[^\[].+[，。！？、…——\w「」『』\/]+$/)) {
          currentSection.lines.push({ lyric: cleanLine, annotation: '' });
        }
      }
    }
  }
  return sections;
}

function inferEmotion(sectionName, annotation) {
  const sectionEmotions = {
    'Verse1': 'sad',
    'Verse2': 'sad',
    'Pre-Chorus': 'neutral',
    'Chorus': 'neutral',
    'Chorus - 末': 'neutral',
    'Bridge': 'sad',
    'Outro': 'neutral',
  };
  const base = sectionEmotions[sectionName] || 'neutral';
  if (annotation.includes('爆发') || annotation.includes('高潮') || annotation.includes('高呼')) return 'neutral';
  if (annotation.includes('哲思') || annotation.includes('深沉') || annotation.includes('留白')) return 'sad';
  if (annotation.includes('自嘲') || annotation.includes('淡然')) return 'neutral';
  if (annotation.includes('延音') || annotation.includes('悬空')) return 'neutral';
  if (annotation.includes('刺') || annotation.includes('心痛')) return 'sad';
  return base;
}

function concatAudioFiles(tempFiles, outputFile) {
  return new Promise((resolve, reject) => {
    const concatList = tempFiles.map(f => "file '" + f.replace(/\\/g, '/') + "'").join('\n');
    const listFile = path.join(OUTPUT_DIR, '__concat_list_' + Date.now() + '.txt');
    fs.writeFileSync(listFile, concatList);
    const args = ['-f', 'concat', '-safe', '0', '-i', listFile, '-c', 'copy', outputFile.replace(/\\/g, '/')];
    const ffmpeg = spawn('ffmpeg', args);
    let stderr = '';
    ffmpeg.stderr.on('data', (d) => { stderr += d.toString(); });
    ffmpeg.on('close', (code) => {
      fs.unlinkSync(listFile);
      if (code === 0) {
        console.log('MP3已生成：' + outputFile);
        resolve();
      } else {
        reject(new Error('ffmpeg失败，code=' + code + '\n' + stderr));
      }
    });
    ffmpeg.on('error', reject);
  });
}

function addReverb(inputFile, outputFile, sectionName) {
  return new Promise((resolve, reject) => {
    const reverbPresets = {
      'Verse1': 'room=0.25',
      'Verse2': 'room=0.25',
      'Pre-Chorus': 'room=0.28',
      'Chorus': 'hall=0.30',
      'Chorus - 末': 'hall=0.32',
      'Bridge': 'hall=0.32',
      'Outro': 'hall=0.35',
    };
    const preset = reverbPresets[sectionName] || 'hall=0.28';
    let inputArg;
    if (Buffer.isBuffer(inputFile)) {
      const tmpPath = path.join(OUTPUT_DIR, '__reverb_input_' + Date.now() + '.tmp');
      fs.writeFileSync(tmpPath, inputFile);
      inputArg = tmpPath.replace(/\\/g, '/');
    } else {
      inputArg = inputFile.replace(/\\/g, '/');
    }
    const args = ['-i', inputArg, '-af', 'aecho=0.8:0.9:500:0.3,' + preset, '-y', outputFile.replace(/\\/g, '/')];
    const ffmpeg = spawn('ffmpeg', args);
    let stderr = '';
    ffmpeg.stderr.on('data', (d) => { stderr += d.toString(); });
    ffmpeg.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error('混响处理失败: ' + stderr));
    });
    ffmpeg.on('error', reject);
  });
}

async function main() {
  const config = parseArgs();
  console.log('陈辉阳林夕词曲融合系统 - MP3生成器');
  console.log('歌词文件：' + config.lyricsFile);
  console.log('调式：' + config.key + '  节拍：' + config.tempo + ' BPM');
  console.log('音色：' + config.voiceId);
  console.log('输出：' + config.output);

  ensureDir(OUTPUT_DIR);
  ensureDir(path.dirname(config.output));

  const sections = parseLyricsFile(config.lyricsFile);
  console.log('解析到 ' + sections.length + ' 个段落');
  sections.forEach((s) => console.log('   ' + s.name + ': ' + s.lines.length + ' 句'));

  if (sections.length === 0) {
    console.error('歌词文件解析失败');
    process.exit(1);
  }

  const tempFiles = [];
  let totalLines = 0;

  for (const section of sections) {
    console.log('处理 ' + section.name + '...');
    for (let i = 0; i < section.lines.length; i++) {
      const lineData = section.lines[i];
      const text = lineData.lyric;
      const emotion = inferEmotion(section.name, lineData.annotation);
      const tempFile = path.join(OUTPUT_DIR, '__temp_' + Date.now() + '_' + totalLines + '.mp3');
      try {
        const shortText = text.length > 18 ? text.substring(0, 18) + '...' : text;
        console.log('  [' + (totalLines + 1) + '] "' + shortText + '" (' + emotion + '/' + section.name + ')');
        const audioRef = await callMinimaxTTS(text, config.voiceId, emotion);
        let audioData;
        if (audioRef.startsWith('http')) {
          audioData = await downloadAudio(audioRef);
        } else if (audioRef.length > 1000) {
          audioData = Buffer.from(audioRef, 'base64');
        } else {
          audioData = fs.readFileSync(audioRef);
        }
        await addReverb(audioData, tempFile, section.name);
        tempFiles.push(tempFile);
        totalLines++;
        await new Promise(r => setTimeout(r, 200));
      } catch (err) {
        console.error('  第' + (totalLines + 1) + '句生成失败（跳过）：' + err.message);
        totalLines++;
      }
    }
  }

  if (tempFiles.length > 0) {
    console.log('拼接 ' + tempFiles.length + ' 个音频片段...');
    await concatAudioFiles(tempFiles, config.output);
    for (const f of tempFiles) {
      try { fs.unlinkSync(f); } catch (_) {}
    }
  } else {
    console.error('没有任何音频片段生成');
    process.exit(1);
  }
  console.log('完成！MP3文件已保存至：' + config.output);
}

main().catch(console.error);
