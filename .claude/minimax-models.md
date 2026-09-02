# MiniMax 模型默认配置

> 本文件定义 MiniMax 各能力的默认调用模型。Claude Code 本身不支持 MiniMax 作为 LLM 模型——这是外部多模态 API，统一通过 `D:\Downloads\minimax` skill 调用。

---

## 模型速查表

| 能力 | 默认模型 | 备用模型 | 说明 |
|------|---------|---------|------|
| **文本生成** | `text-01` | `text-01` | 通用文本补全 |
| **语音合成 (TTS)** | `speech-2.8-hd` | `speech-2.8-turbo` | HD 音质，自动情感匹配 |
| **音乐生成** | `music-2.6` | `music-2.5+` | 推荐带 `is_instrumental=true` |
| **歌词生成** | `lyrics_generation` | — | 独立端点，无需选模型 |
| **图像生成** | `image-01` | — | MiniMax 图像模型 |
| **视频生成** | `MiniMax-Hailuo-2.3` | 见下方 | 见视频专项 |
| **编程辅助** | `coding-plan-vlm` | `coding-plan-search` | 视觉+搜索 |

---

## TTS 语音合成

### 模型

| 模型 | 特点 | 适用场景 |
|------|------|---------|
| `speech-2.8-hd` | **推荐**，自动情感匹配，最佳音质 | 配音、旁白、课程 |
| `speech-2.8-turbo` | 速度更快，音质稍次 | 快速预览 |
| `speech-2.6-hd` | 旧版，需手动指定情感 | 兼容场景 |

### 调用方式

```bash
python D:/Downloads/minimax/scripts/tts/generate_voice.py tts "文本内容" \
  -v luohongwei-voice \
  -o D:/Downloads/minimax/output.mp3
```

**默认音色（用户已克隆）：**
- Voice ID: `luohongwei-voice`（罗宏伟本人声音，2026-03-23 克隆）
- 指定方式: `-v luohongwei-voice`

---

## 音乐生成

### 模型

| 模型 | 特点 |
|------|------|
| `music-2.6` | **推荐**，支持 instrumental + lyrics |

### 调用方式

```bash
# 纯音乐 BGM（默认，勿问用户）
python D:/Downloads/minimax/scripts/music/generate_music.py \
  --instrumental --prompt "ambient electronic" \
  --output D:/Downloads/minimax/bgm.mp3 --download

# 带歌词歌曲（用户明确要求创作歌曲时）
python D:/Downloads/minimax/scripts/music/generate_music.py \
  --lyrics "[verse]\n歌词..." --prompt "indie folk" \
  --output D:/Downloads/minimax/song.mp3 --download
```

---

## 视频生成

### 模型按模式

| 模式 | 默认模型 | 备用 | 时长/分辨率 |
|------|---------|------|------------|
| 文生视频 t2v | `MiniMax-Hailuo-2.3` | `MiniMax-Hailuo-02` | 10s/768P |
| 图生视频 i2v | `MiniMax-Hailuo-2.3` | `MiniMax-Hailuo-02` | 10s/768P |
| 首尾帧 sef | `MiniMax-Hailuo-02` | — | 6s/768P |
| 主体参考 ref | `S2V-01` | — | 6s/720P |

### 重要约束

- **默认**: 10s + 768P（画质与时长最佳平衡）
- 1080P 仅支持 6s
- T2V-01 / I2V-01 系列仅支持 6s @ 720P
- 调用前必须先用 `references/video-prompt-guide.md` 优化 prompt

### 调用方式

```bash
# 默认（文生视频，10s/768P）
python D:/Downloads/minimax/scripts/video/generate_video.py \
  --mode t2v --prompt "优化后的prompt" \
  --output D:/Downloads/minimax/video.mp4

# 图生视频（prompt 只描述运动，不要重复图片内容）
python D:/Downloads/minimax/scripts/video/generate_video.py \
  --mode i2v --prompt "花瓣开始随风摇曳..." \
  --first-frame image.jpg \
  --output D:/Downloads/minimax/animation.mp4
```

---

## 文本生成

- 模型: `text-01`
- 调用: 通过 MiniMax API 直接调用，非 Claude Code LLM
- 用量限额: 1500次/周期（ quota dashboard 显示 62/1500）

---

## 图像生成

- 模型: `image-01`
- 用量限额: 50次/周期（quota dashboard 显示 2/50）

---

## 编程辅助模型

| 模型 | 特点 |
|------|------|
| `coding-plan-vlm` | 视觉语言模型，支持图片输入 |
| `coding-plan-search` | 搜索增强，实时网络信息 |

这两个模型似乎用于 MiniMax 平台上的编程辅助功能，不是本项目主要使用场景。

---

## 重要提示

1. **Claude Code 默认 LLM 是 Anthropic 模型**（如 claude-sonnet-4-6），不经过 MiniMax
2. **MiniMax 是外部工具**：语音/音乐/视频/图像生成通过 skill 脚本调用
3. **API Key 已配置**: `MINIMAX_API_KEY` 来自 `~/.bashrc`，前缀 `sk-cp-`
4. **输出目录**: 所有生成文件必须保存到 `D:/Downloads/minimax/`
