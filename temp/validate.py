#!/usr/bin/env python3
"""
validate.py — 工作手册格式合规检查脚本
作者：罗宏伟

【重要】本脚本专用于检查 output/ 目录中的生成内容文件（ch01.md, ch02.md 等）。
        不适用于 examples/ 目录中的参考文件（参考文件中允许numbered list和注释）。

用法：python scripts/validate.py output/ch01.md
     python scripts/validate.py output/  # 检查目录下所有.md文件

检查项：
- 正文中的bullet list（违禁）
- 横线分隔符 ---（违禁）
- "你应该"句式（违禁）
- 禁用词句模式
- 作者署名是否存在
- 推演案例标注提示
- 字数统计
"""

import sys
import os
import re
from pathlib import Path

# ============================================================
# 违禁模式：发现即报告违规
# ============================================================

BANNED_PATTERNS = [
    # (正则表达式, 违规描述, 严重度: ERROR/WARN)
    (r'^[ \t]*[-*]\s+\S', "正文bullet list（禁止使用）", "ERROR"),
    (r'^[ \t]*\d+\.\s+\S.*$', "正文numbered list（禁止使用，除非在明确标注的操作步骤章节中）", "WARN"),
    (r'^---+\s*$', "横线分隔符 ---（绝对禁止）", "ERROR"),
    (r'你应该', '"你应该"句式（禁止）', "ERROR"),
    (r'在当今.{0,8}(竞争|时代|环境|社会)', '"在当今……"空话开场（禁止）', "ERROR"),
    (r'是一个非常重要', '"是一个非常重要的"（禁止）', "ERROR"),
    (r'让我们来谈谈', '"让我们来谈谈X"开场（禁止）', "ERROR"),
    (r'相信很多人都有过这种', '"相信很多人都有过"（禁止）', "WARN"),
    (r'以下几点值得注意|主要体现在以下|分为以下几个方面', 'list预告语（禁止）', "ERROR"),
    (r'有研究表明|根据调查显示|数据显示', '学术借势开场（禁止）', "WARN"),
    (r'首先[^，,。]*其次[^，,。]*最后', '"首先…其次…最后"三段论（禁止）', "ERROR"),
    (r'这是一个很好的问题', '"这是一个很好的问题"（Q&A禁句）', "ERROR"),
    (r'希望以上内容对你有所帮助|希望对大家有所帮助', '"希望以上内容有所帮助"（结尾禁句）', "ERROR"),
    (r'总的来说[，,]我们需要', '"总的来说，我们需要"（说教总结）', "WARN"),
]

# 需要存在的元素（缺失则警告）
REQUIRED_ELEMENTS = [
    (r'罗宏伟', '作者署名"罗宏伟"（必须存在）'),
]

# 推演案例检测（提示性，不算违规）
INFER_PATTERN = re.compile(r'[\uff08\u0028]此处|这里[\uff09\u0029].{0,20}(需要作者|请作者|推演)', re.MULTILINE)


def count_chinese_chars(text):
    """统计中文字符数（包含标点）"""
    return len(re.findall(r'[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]', text))


def count_total_chars(text):
    """统计总字符数（去除markdown标记和空行）"""
    # 去除markdown标题标记
    text = re.sub(r'^#{1,6}\s+', '', text, flags=re.MULTILINE)
    # 去除引用标记
    text = re.sub(r'^>\s*', '', text, flags=re.MULTILINE)
    # 去除空行
    text = re.sub(r'\n\s*\n', '\n', text)
    return len(text.strip())


def detect_chapter_type(text):
    """从章节标题中识别类型标签"""
    types = {'迁移改写': 0, '原创新增': 0, '公理展开': 0, '未标注': 0}
    headers = re.findall(r'^##\s+.+', text, re.MULTILINE)
    for h in headers:
        if '迁移改写' in h:
            types['迁移改写'] += 1
        elif '原创新增' in h:
            types['原创新增'] += 1
        elif '公理展开' in h:
            types['公理展开'] += 1
        else:
            types['未标注'] += 1
    return types, headers


def validate_file(filepath):
    """验证单个文件，返回(错误列表, 警告列表, 统计信息)"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    errors = []
    warnings = []

    # 检查违禁模式
    in_code_block = False
    for i, line in enumerate(lines, 1):
        # 跳过代码块
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        # 跳过DNA注释行（包含〔或〕的行是示例文件中的注释标记，不是输出内容）
        if '〔' in line or '〕' in line:
            continue
        # 跳过示例标记行
        if line.strip().startswith('→') or line.strip().startswith('✗') or line.strip().startswith('✓'):
            continue

        for pattern, description, level in BANNED_PATTERNS:
            if re.search(pattern, line):
                msg = f"  行{i:3d}: {description}\n         → {line.strip()[:80]}"
                if level == "ERROR":
                    errors.append(msg)
                else:
                    warnings.append(msg)

    # 检查必要元素
    for pattern, description in REQUIRED_ELEMENTS:
        if not re.search(pattern, content):
            warnings.append(f"  缺失: {description}")

    # 统计信息
    zh_chars = count_chinese_chars(content)
    total_chars = count_total_chars(content)
    chapter_types, headers = detect_chapter_type(content)

    # 推演案例提示
    infer_matches = INFER_PATTERN.findall(content)
    infer_note = f"  检测到 {len(infer_matches)} 处推演标注（正常，请确认内容）" if infer_matches else ""

    stats = {
        'zh_chars': zh_chars,
        'total_chars': total_chars,
        'chapter_types': chapter_types,
        'headers': headers,
        'infer_note': infer_note,
    }

    return errors, warnings, stats


def format_report(filepath, errors, warnings, stats):
    """格式化输出报告"""
    filename = Path(filepath).name
    lines = []
    lines.append(f"\n{'='*60}")
    lines.append(f"文件：{filename}")
    lines.append(f"{'='*60}")

    # 统计
    lines.append(f"字数统计：中文字符约 {stats['zh_chars']:,} 字 / 总字符约 {stats['total_chars']:,} 字")

    types = stats['chapter_types']
    if any(v > 0 for v in types.values()):
        total = sum(types.values())
        original = types.get('原创新增', 0)
        ratio = (original / total * 100) if total > 0 else 0
        lines.append(f"章节类型：迁移改写 {types['迁移改写']} | 原创新增 {types['原创新增']} | 公理展开 {types['公理展开']} | 未标注 {types['未标注']}")
        if total > 0:
            status = "✓ 达标" if ratio >= 30 else "✗ 不足30%，需补充原创章节"
            lines.append(f"原创新增比例：{ratio:.0f}% {status}")

    if stats['infer_note']:
        lines.append(stats['infer_note'])

    # 错误
    if errors:
        lines.append(f"\n❌ 违规项（{len(errors)}条，必须修改后重新验证）：")
        lines.extend(errors)
    else:
        lines.append("\n✓ 无违规项")

    # 警告
    if warnings:
        lines.append(f"\n⚠  警告项（{len(warnings)}条，建议检查）：")
        lines.extend(warnings)
    else:
        lines.append("✓ 无警告项")

    # 结论
    if errors:
        lines.append(f"\n结论：❌ 不通过（{len(errors)}处违规需修改）")
    elif warnings:
        lines.append(f"\n结论：⚠  通过（有 {len(warnings)} 条警告，请确认）")
    else:
        lines.append("\n结论：✓ 通过")

    return '\n'.join(lines)


def main():
    if len(sys.argv) < 2:
        print("用法：python scripts/validate.py <文件或目录>")
        print("示例：python scripts/validate.py output/ch01.md")
        print("      python scripts/validate.py output/")
        sys.exit(1)

    target = sys.argv[1]
    files = []

    if os.path.isfile(target):
        files = [target]
    elif os.path.isdir(target):
        files = sorted(Path(target).glob('*.md'))
        if not files:
            print(f"目录 {target} 中未找到 .md 文件")
            sys.exit(1)
    else:
        print(f"路径不存在：{target}")
        sys.exit(1)

    total_errors = 0
    total_warnings = 0

    for filepath in files:
        errors, warnings, stats = validate_file(filepath)
        report = format_report(filepath, errors, warnings, stats)
        print(report)
        total_errors += len(errors)
        total_warnings += len(warnings)

    if len(files) > 1:
        print(f"\n{'='*60}")
        print(f"总计：{len(files)} 个文件 | {total_errors} 处违规 | {total_warnings} 条警告")
        if total_errors == 0:
            print("整体状态：✓ 全部通过")
        else:
            print(f"整体状态：❌ {total_errors} 处违规需修改")


if __name__ == '__main__':
    main()
