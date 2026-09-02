#!/usr/bin/env python3
"""
预处理录音转写文字。

这是纯机械化的文本处理，不做任何内容判断或总结——它只负责：
  1. 清洗空白、统一说话人标注格式
  2. 按说话人切分成一条条发言
  3. 如果转写文字里有阶段标记（比如"阶段一""【阶段二】"这类，对应语音录音指引
     的六阶段结构），按阶段切块
  4. 统计字数（总字数、每个说话人字数、每个阶段字数），给后续判断内容是否
     充分提供一个客观依据

输出一份结构化 JSON，供后续撰写手册正文时参考，同时在终端打印一份摘要。

用法:
    python preprocess_transcript.py <转写文字.txt> [-o 输出.json]
"""

import argparse
import json
import re
import sys
from pathlib import Path

# 匹配 "说话人：内容" 或 "说话人:内容"，说话人限定为2-8个中文字/字母数字，
# 避免把正文里偶然出现的冒号误判成说话人标注
SPEAKER_PATTERN = re.compile(r"^\s*([\u4e00-\u9fa5A-Za-z0-9]{1,8})[:：]\s*(.+)$")

# 阶段标记，兼容几种常见写法："阶段一"、"【阶段一】"、"# 阶段一"、"阶段1"
STAGE_PATTERN = re.compile(
    r"^\s*[#【\[]*\s*阶段\s*([一二三四五六1-6])\s*[】\]：:、]?\s*(.*)$"
)

STAGE_NUM_MAP = {"一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6}


def count_chars(text: str) -> int:
    """统计中文字符数（不含标点和空白），作为字数统计的口径，跟中文写作
    习惯的"字数"更接近，而不是简单的 len()。"""
    return len(re.findall(r"[\u4e00-\u9fa5]", text))


def normalize_stage_num(raw: str) -> int:
    if raw in STAGE_NUM_MAP:
        return STAGE_NUM_MAP[raw]
    try:
        return int(raw)
    except ValueError:
        return 0


def parse_transcript(raw_text: str):
    lines = [ln.rstrip() for ln in raw_text.splitlines()]

    turns = []          # [{speaker, text, stage}]
    current_stage = 0   # 0 表示还没遇到阶段标记 / 未分阶段
    stage_found = False

    for line in lines:
        if not line.strip():
            continue

        stage_match = STAGE_PATTERN.match(line)
        if stage_match:
            current_stage = normalize_stage_num(stage_match.group(1))
            stage_found = True
            continue

        speaker_match = SPEAKER_PATTERN.match(line)
        if speaker_match:
            speaker, text = speaker_match.groups()
            turns.append({
                "speaker": speaker,
                "text": text.strip(),
                "stage": current_stage,
            })
        else:
            # 没有说话人标注的行，追加到上一条发言，避免被丢弃
            if turns:
                turns[-1]["text"] += " " + line.strip()
            else:
                turns.append({
                    "speaker": "未标注",
                    "text": line.strip(),
                    "stage": current_stage,
                })

    return turns, stage_found


def build_stats(turns):
    total_chars = sum(count_chars(t["text"]) for t in turns)

    by_speaker = {}
    for t in turns:
        by_speaker.setdefault(t["speaker"], 0)
        by_speaker[t["speaker"]] += count_chars(t["text"])

    by_stage = {}
    for t in turns:
        by_stage.setdefault(t["stage"], 0)
        by_stage[t["stage"]] += count_chars(t["text"])

    return {
        "total_chars": total_chars,
        "by_speaker": by_speaker,
        "by_stage": by_stage,
    }


def main():
    ap = argparse.ArgumentParser(description="预处理录音转写文字（机械清洗+切分+统计，不做内容判断）")
    ap.add_argument("input", help="转写文字txt文件路径")
    ap.add_argument("-o", "--output", default=None, help="输出json路径，默认与输入同名.json")
    args = ap.parse_args()

    in_path = Path(args.input)
    if not in_path.exists():
        print(f"找不到文件: {in_path}", file=sys.stderr)
        sys.exit(1)

    raw_text = in_path.read_text(encoding="utf-8")
    turns, stage_found = parse_transcript(raw_text)
    stats = build_stats(turns)

    result = {
        "source_file": str(in_path),
        "stage_markers_found": stage_found,
        "turn_count": len(turns),
        "stats": stats,
        "turns": turns,
    }

    out_path = Path(args.output) if args.output else in_path.with_suffix(".json")
    out_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")

    # ---- 终端摘要，方便快速判断内容是否够写手册 ----
    print(f"共识别 {result['turn_count']} 条发言，总字数约 {stats['total_chars']} 字")
    if stage_found:
        print("已识别阶段标记，各阶段字数：")
        for stage in sorted(stats["by_stage"].keys()):
            label = f"阶段{stage}" if stage else "未标注阶段"
            print(f"  {label}: {stats['by_stage'][stage]} 字")
    else:
        print("未识别到阶段标记（如'阶段一''【阶段二】'），后续撰写手册时需要人工判断内容对应哪个任务模块。")

    print("说话人字数分布：")
    for speaker, n in sorted(stats["by_speaker"].items(), key=lambda x: -x[1]):
        print(f"  {speaker}: {n} 字")

    # 粗略提醒：2-3万字手册通常需要转写素材本身有一定信息密度，
    # 经验上原始转写字数明显偏少时提示一下，具体够不够仍需人工通读判断
    if stats["total_chars"] < 8000:
        print("提醒：转写文字总字数偏少，最终手册内容密度可能不足，建议核实是否需要补充访谈。")

    print(f"结构化结果已保存到: {out_path}")


if __name__ == "__main__":
    main()
