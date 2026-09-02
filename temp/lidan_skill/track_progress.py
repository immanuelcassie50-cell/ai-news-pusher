#!/usr/bin/env python3
"""
track_progress.py — 工作手册创作进度追踪脚本
作者：罗宏伟

用法：python scripts/track_progress.py output/
     python scripts/track_progress.py output/ --target 45000

功能：
- 统计已完成章节数和字数
- 显示章节类型分布和原创比例
- 对比目标字数的完成进度
- 列出所有章节标题
"""

import sys
import os
import re
import argparse
from pathlib import Path


TARGET_MIN = 40000
TARGET_MAX = 55000
ORIGINAL_RATIO_MIN = 0.30


def count_chinese_chars(text):
    return len(re.findall(r'[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]', text))


def extract_chapters(text, filename):
    """从文件中提取章节信息"""
    chapters = []
    lines = text.split('\n')
    current_chapter = None
    current_content = []

    for line in lines:
        h2_match = re.match(r'^##\s+(.+)', line)
        if h2_match:
            if current_chapter:
                content = '\n'.join(current_content)
                current_chapter['chars'] = count_chinese_chars(content)
                chapters.append(current_chapter)

            title = h2_match.group(1).strip()
            # 识别类型标签
            type_tag = '未标注'
            if '迁移改写' in title:
                type_tag = '迁移改写'
            elif '原创新增' in title:
                type_tag = '原创新增'
            elif '公理展开' in title:
                type_tag = '公理展开'
            elif 'Q&A' in title or '问与答' in title:
                type_tag = 'Q&A'

            current_chapter = {
                'title': title,
                'type': type_tag,
                'file': filename,
                'chars': 0,
            }
            current_content = []
        elif current_chapter:
            current_content.append(line)

    if current_chapter:
        content = '\n'.join(current_content)
        current_chapter['chars'] = count_chinese_chars(content)
        chapters.append(current_chapter)

    return chapters


def analyze_directory(directory, target_chars=None):
    """分析目录中所有输出文件"""
    files = sorted(Path(directory).glob('*.md'))
    if not files:
        print(f"目录 {directory} 中未找到 .md 文件")
        sys.exit(1)

    all_chapters = []
    file_stats = []

    for filepath in files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        total_chars = count_chinese_chars(content)
        chapters = extract_chapters(content, filepath.name)
        all_chapters.extend(chapters)
        file_stats.append({
            'file': filepath.name,
            'chars': total_chars,
            'chapters': len(chapters),
        })

    return all_chapters, file_stats


def print_report(all_chapters, file_stats, target_chars=None):
    target = target_chars or 45000

    # 字数统计
    total_chars = sum(c['chars'] for c in all_chapters)
    progress_pct = (total_chars / target * 100) if target > 0 else 0

    # 章节类型统计（排除Q&A）
    content_chapters = [c for c in all_chapters if c['type'] != 'Q&A' and c['type'] != '未标注（前言/结语）']
    type_counts = {'迁移改写': 0, '原创新增': 0, '公理展开': 0, 'Q&A': 0, '未标注': 0}
    for c in all_chapters:
        type_counts[c['type']] = type_counts.get(c['type'], 0) + 1

    total_content = type_counts['迁移改写'] + type_counts['原创新增'] + type_counts['公理展开'] + type_counts['未标注']
    original_count = type_counts['原创新增']
    original_ratio = (original_count / total_content) if total_content > 0 else 0

    print(f"\n{'='*60}")
    print(f"工作手册创作进度报告")
    print(f"{'='*60}")

    # 总体进度
    bar_len = 40
    filled = int(bar_len * min(progress_pct / 100, 1))
    bar = '█' * filled + '░' * (bar_len - filled)
    print(f"\n字数进度：{total_chars:,} / 目标 {target:,} 字")
    print(f"  [{bar}] {progress_pct:.0f}%")

    if total_chars < TARGET_MIN:
        remaining = TARGET_MIN - total_chars
        print(f"  距最低要求（{TARGET_MIN:,}字）还差 {remaining:,} 字")
    elif total_chars > TARGET_MAX:
        over = total_chars - TARGET_MAX
        print(f"  ⚠  已超出上限（{TARGET_MAX:,}字）{over:,} 字，考虑精简")
    else:
        print(f"  ✓ 字数在目标区间内（{TARGET_MIN:,}~{TARGET_MAX:,}字）")

    # 章节类型分布
    print(f"\n章节类型分布（共 {total_content} 个内容章节）：")
    print(f"  迁移改写：{type_counts['迁移改写']:2d} 章")
    print(f"  原创新增：{type_counts['原创新增']:2d} 章")
    print(f"  公理展开：{type_counts['公理展开']:2d} 章")
    if type_counts['未标注'] > 0:
        print(f"  未标注  ：{type_counts['未标注']:2d} 章  ⚠  请补充类型标签")
    if type_counts['Q&A'] > 0:
        print(f"  Q&A     ：{type_counts['Q&A']:2d} 组")

    # 原创比例检查
    if total_content > 0:
        ratio_status = "✓ 达标" if original_ratio >= ORIGINAL_RATIO_MIN else f"❌ 不足（需 ≥30%，当前 {original_ratio:.0%}）"
        print(f"\n原创新增比例：{original_ratio:.0%} {ratio_status}")
        if original_ratio < ORIGINAL_RATIO_MIN:
            needed = int(total_content * ORIGINAL_RATIO_MIN) - original_count + 1
            print(f"  → 需再增加 {needed} 个「原创新增」类章节")

    # 各文件字数
    if len(file_stats) > 1:
        print(f"\n各文件字数：")
        for fs in file_stats:
            print(f"  {fs['file']:<20} {fs['chars']:>6,} 字  ({fs['chapters']} 章)")

    # 章节列表
    print(f"\n已完成章节列表：")
    type_icons = {'迁移改写': '→', '原创新增': '★', '公理展开': '◉', 'Q&A': 'Q', '未标注': '?'}
    for i, ch in enumerate(all_chapters, 1):
        icon = type_icons.get(ch['type'], '?')
        title_short = ch['title'][:50] + ('…' if len(ch['title']) > 50 else '')
        print(f"  {icon} {i:2d}. {title_short:<52} {ch['chars']:>5,}字")

    # 图例
    print(f"\n图例：★原创新增  →迁移改写  ◉公理展开  Q:Q&A  ?未标注")
    print(f"{'='*60}")


def main():
    parser = argparse.ArgumentParser(description='工作手册创作进度追踪')
    parser.add_argument('directory', help='输出目录路径')
    parser.add_argument('--target', type=int, default=45000, help='目标字数（默认45000）')
    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print(f"目录不存在：{args.directory}")
        sys.exit(1)

    all_chapters, file_stats = analyze_directory(args.directory)
    print_report(all_chapters, file_stats, args.target)


if __name__ == '__main__':
    main()
