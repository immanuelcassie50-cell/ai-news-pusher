#!/usr/bin/env python3
"""
检查手册草稿（markdown）的篇幅与结构是否达标。

纯统计脚本，不判断内容好坏，只负责：
  1. 按标题层级统计每一章/节的字数
  2. 统计全文总字数，跟目标区间（2-3万字）对比
  3. 标记出明显偏薄的章节（低于该层级平均字数的40%），供撰写者回头补充判断

用法:
    python check_length.py <手册草稿.md>
"""

import argparse
import re
import sys
from pathlib import Path

HEADING_PATTERN = re.compile(r"^(#{1,3})\s+(.*)$")
TARGET_MIN = 20000
TARGET_MAX = 30000
THIN_THRESHOLD_RATIO = 0.4


def count_chars(text: str) -> int:
    return len(re.findall(r"[\u4e00-\u9fa5]", text))


def split_sections(md_text: str):
    """按一级/二级标题切分正文，返回 [{level, title, chars}]"""
    lines = md_text.splitlines()
    sections = []
    current = None
    buffer = []

    def flush():
        if current is not None:
            current["chars"] = count_chars("\n".join(buffer))
            sections.append(current)

    for line in lines:
        m = HEADING_PATTERN.match(line)
        if m:
            flush()
            level = len(m.group(1))
            title = m.group(2).strip()
            current = {"level": level, "title": title, "chars": 0}
            buffer = []
        else:
            buffer.append(line)
    flush()
    return sections


def main():
    ap = argparse.ArgumentParser(description="检查带教手册草稿篇幅与结构")
    ap.add_argument("input", help="手册草稿markdown路径")
    args = ap.parse_args()

    path = Path(args.input)
    if not path.exists():
        print(f"找不到文件: {path}", file=sys.stderr)
        sys.exit(1)

    text = path.read_text(encoding="utf-8")
    total_chars = count_chars(text)
    sections = split_sections(text)

    print(f"全文总字数（不含标点空白）: {total_chars}")
    if total_chars < TARGET_MIN:
        print(f"⚠ 低于目标下限 {TARGET_MIN} 字，差 {TARGET_MIN - total_chars} 字。"
              f"检查是否有任务模块内容还没深挖够，而不是靠注水凑字数。")
    elif total_chars > TARGET_MAX:
        print(f"⚠ 超过目标上限 {TARGET_MAX} 字，超出 {total_chars - TARGET_MAX} 字。"
              f"检查是否有内容偏离转写文字素材、属于凭空发挥的部分，可考虑精简。")
    else:
        print("✓ 总字数在 20000-30000 目标区间内")

    # 按一级标题（章）统计，找出偏薄的章节
    chapters = [s for s in sections if s["level"] == 1]
    if chapters:
        avg = sum(c["chars"] for c in chapters) / len(chapters)
        print("\n各章字数：")
        thin_chapters = []
        for c in chapters:
            flag = ""
            if c["chars"] < avg * THIN_THRESHOLD_RATIO:
                flag = "  ⚠ 明显偏薄"
                thin_chapters.append(c["title"])
            print(f"  {c['title']}: {c['chars']} 字{flag}")

        if thin_chapters:
            print(f"\n以下章节内容明显偏薄，建议回到转写文字核实是否遗漏，"
                  f"如果转写素材本身就单薄，如实在附录'待补充清单'注明，不要注水：")
            for t in thin_chapters:
                print(f"  - {t}")
    else:
        print("\n未识别到一级标题（#），无法按章统计，请确认草稿使用了标准markdown标题层级。")


if __name__ == "__main__":
    main()
