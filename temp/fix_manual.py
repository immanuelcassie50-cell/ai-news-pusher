#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""批量修复中高考零失误心理工作手册的合规问题。"""
import os
import re
from pathlib import Path

MANUAL_DIR = r"D:\Downloads\xinjian\中高考零失误心理工作手册"

# 类型标签映射：文件名 -> H1要附加的标签
TYPE_TAGS = {
    "01-这不是一本讲知识的书.md": "【公理展开】",
    "02-你的平时水平是个伪命题.md": "【公理展开】",
    "03-一分压倒千人.md": "【原创新增】",
    "04-粗心是注意力被劫持.md": "【原创新增】",
    "05-躯体化反应.md": "【迁移改写】",
    "06-表层焦虑.md": "【原创新增】",
    "07-复杂的潜意识.md": "【原创新增】",
    "08-不同分段的设障.md": "【原创新增】",
    "09-考前的三个时间点.md": "【原创新增】",
    "10-考中的四类突发.md": "【原创新增】",
    "11-父母心理状态.md": "【原创新增】",
    "12-父母的语言清单.md": "【原创新增】",
    "13-真正要准备的是上场就能用.md": "【公理展开】",
    "14-长期状态建设.md": "【原创新增】",
    "15-副产品论.md": "【公理展开】",
    "16-写给考生.md": "",
    "17-写给同行.md": "",
}

AUTHOR_LINE = "\n\n—— 策略师叶修（罗宏伟）\n"

# 把 bullet 列表转换为流畅叙事的函数
def bullets_to_prose(lines):
    """将连续 bullet 行合并为自然段落。"""
    result = []
    in_bullets = False
    bullet_buffer = []

    def flush_bullets():
        if not bullet_buffer:
            return ""
        # 用中文标点连接
        text = []
        for i, item in enumerate(bullet_buffer):
            item = item.strip()
            # 去掉开头的 - 或 * 和空格
            item = re.sub(r'^[-\*]\s+', '', item)
            text.append(item)
        # 用 "。" 或 "；" 连接
        joined = "；".join(text)
        # 最后一个改为"。"
        if not joined.endswith("。"):
            joined += "。"
        return joined

    for line in lines:
        stripped = line.strip()
        if re.match(r'^[-\*]\s+\S', stripped):
            bullet_buffer.append(stripped)
            in_bullets = True
        else:
            if in_bullets:
                result.append(flush_bullets())
                bullet_buffer = []
                in_bullets = False
            result.append(line)

    if in_bullets:
        result.append(flush_bullets())

    return result


def process_file(filepath, tag):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')

    # 1. 在 H1 标题后添加类型标签
    if tag:
        for i, line in enumerate(lines):
            if re.match(r'^#\s+', line) and tag not in line:
                # 只改第一个 H1
                lines[i] = line.rstrip() + ' ' + tag
                break

    # 2. 将 bullet 列表转换为流畅叙述
    lines = bullets_to_prose(lines)

    # 3. 删除 --- 横线
    new_lines = []
    for line in lines:
        if re.match(r'^---+\s*$', line):
            continue
        new_lines.append(line)
    lines = new_lines

    # 4. 替换"你应该"为其他表达
    content = '\n'.join(lines)
    content = content.replace("你应该", "你可以")
    content = content.replace("你应该做", "你可以做")
    content = content.replace("你应该去", "可以去")
    content = content.replace("你应该要", "可以要")

    # 5. 删除"这是一个很好的问题"等Q&A禁句
    content = content.replace("这是一个很好的问题", "这个问题")
    content = content.replace("希望以上内容对你有所帮助", "希望这些对你有用")
    content = content.replace("希望对大家有所帮助", "希望这些对你有用")

    # 6. 在文末添加作者署名（如果文件还没有的话）
    if "罗宏伟" not in content and "策略师叶修" in content:
        # 在文件末尾添加
        if not content.endswith('\n'):
            content += '\n'
        content += AUTHOR_LINE

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return content


# 处理所有章节文件
chapter_files = [
    "01-这不是一本讲知识的书.md",
    "02-你的平时水平是个伪命题.md",
    "03-一分压倒千人.md",
    "04-粗心是注意力被劫持.md",
    "05-躯体化反应.md",
    "06-表层焦虑.md",
    "07-复杂的潜意识.md",
    "08-不同分段的设障.md",
    "09-考前的三个时间点.md",
    "10-考中的四类突发.md",
    "11-父母心理状态.md",
    "12-父母的语言清单.md",
    "13-真正要准备的是上场就能用.md",
    "14-长期状态建设.md",
    "15-副产品论.md",
    "16-写给考生.md",
    "17-写给同行.md",
    "Q-A-PART1.md",
    "Q-A-PART2.md",
]

for filename in chapter_files:
    filepath = os.path.join(MANUAL_DIR, filename)
    if not os.path.exists(filepath):
        print(f"SKIP: {filename} not found")
        continue

    tag = TYPE_TAGS.get(filename, "")
    process_file(filepath, tag)
    print(f"OK: {filename}")

print("\n全部处理完成。")
