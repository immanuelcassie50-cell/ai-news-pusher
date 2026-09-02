#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Convert markdown files to HTML for course materials."""

import re
import os

# HTML template
HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        * {{ box-sizing: border-box; }}
        body {{
            font-family: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #f7fafc;
            color: #2d3748;
            line-height: 1.8;
        }}
        h1 {{
            color: #1a365d;
            border-bottom: 3px solid #2b6cb0;
            padding-bottom: 15px;
            margin-top: 40px;
            font-size: 2em;
        }}
        h2 {{
            color: #1a365d;
            border-left: 4px solid #ed8936;
            padding-left: 15px;
            margin-top: 30px;
            font-size: 1.5em;
        }}
        h3 {{
            color: #2b6cb0;
            margin-top: 25px;
            font-size: 1.25em;
        }}
        h4 {{
            color: #4a5568;
            margin-top: 20px;
            font-size: 1.1em;
        }}
        table {{
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
            background: white;
        }}
        th, td {{
            border: 1px solid #e2e8f0;
            padding: 12px 15px;
            text-align: left;
        }}
        th {{
            background-color: #1a365d;
            color: white;
            font-weight: bold;
        }}
        tr:nth-child(even) {{
            background-color: #f8fafc;
        }}
        code {{
            background-color: #edf2f7;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: "Consolas", "Source Code Pro", monospace;
            font-size: 0.9em;
            color: #c53030;
        }}
        pre {{
            background-color: #edf2f7;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
            border-left: 4px solid #2b6cb0;
        }}
        pre code {{
            background: none;
            padding: 0;
            color: #2d3748;
        }}
        blockquote {{
            border-left: 4px solid #ed8936;
            margin: 20px 0;
            padding: 15px 20px;
            background-color: #fffaf0;
            color: #744210;
            font-style: italic;
        }}
        hr {{
            border: none;
            border-top: 2px solid #bee3f8;
            margin: 30px 0;
        }}
        ul, ol {{
            margin: 15px 0;
            padding-left: 25px;
        }}
        li {{
            margin: 8px 0;
        }}
        strong {{
            color: #1a365d;
        }}
        em {{
            color: #c53030;
        }}
        @media print {{
            body {{ background: white; max-width: 100%; }}
            h1, h2, h3 {{ page-break-after: avoid; }}
            table {{ page-break-inside: avoid; }}
        }}
    </style>
</head>
<body>
{content}
</body>
</html>'''


def convert_markdown_to_html(md_content):
    """Convert markdown content to HTML."""

    lines = md_content.split('\n')
    html_lines = []
    in_code_block = False
    code_block_content = []
    in_table = False
    table_lines = []
    in_list = False
    list_items = []

    def close_list():
        nonlocal in_list, list_items
        if in_list and list_items:
            html_lines.append('<ul>')
            for item in list_items:
                html_lines.append(f'<li>{item}</li>')
            html_lines.append('</ul>')
            list_items = []
        in_list = False

    def parse_table_row(line):
        """Parse a markdown table row and return HTML."""
        # Remove | at start and end, split by |
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        is_header = all(re.match(r'^-+$', c.replace(' ', '')) for c in cells) if all(re.match(r'^-+$', c.replace(' ', '')) for c in cells) else False

        if all(re.match(r'^-+$', c.replace(' ', '')) for c in cells if cells):
            return None

        row_html = '<tr>'
        for cell in cells:
            if re.match(r'^-+$', cell.replace(' ', '')):
                continue
            row_html += f'<td>{cell}</td>'
        row_html += '</tr>'
        return row_html

    def is_table_separator(line):
        """Check if line is a table separator."""
        stripped = line.strip().strip('|').replace(' ', '')
        return all(re.match(r'^-+$', cell) for cell in stripped.split('|'))

    i = 0
    while i < len(lines):
        line = lines[i]

        # Handle code blocks
        if line.strip().startswith('```'):
            if not in_code_block:
                close_list()
                in_code_block = True
                code_block_content = []
            else:
                # End code block
                in_code_block = False
                code_content = '\n'.join(code_block_content)
                # Apply inline formatting to code content
                code_content = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', code_content)
                code_content = re.sub(r'\*(.+?)\*', r'<em>\1</em>', code_content)
                code_content = re.sub(r'`(.+?)`', r'<code>\1</code>', code_content)
                html_lines.append(f'<pre><code>{code_content}</code></pre>')
            i += 1
            continue

        if in_code_block:
            code_block_content.append(line)
            i += 1
            continue

        # Handle headers
        header_match = re.match(r'^(#{1,4})\s+(.+)$', line)
        if header_match:
            close_list()
            level = len(header_match.group(1))
            text = header_match.group(2)
            text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
            text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
            text = re.sub(r'`(.+?)`', r'<code>\1</code>', text)
            html_lines.append(f'<h{level}>{text}</h{level}>')
            i += 1
            continue

        # Handle horizontal rule
        if line.strip() == '---':
            close_list()
            html_lines.append('<hr>')
            i += 1
            continue

        # Handle blockquote
        if line.strip().startswith('> '):
            close_list()
            quote_text = line.strip()[2:]
            quote_text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', quote_text)
            quote_text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', quote_text)
            quote_text = re.sub(r'`(.+?)`', r'<code>\1</code>', quote_text)
            html_lines.append(f'<blockquote>{quote_text}</blockquote>')
            i += 1
            continue

        # Handle table rows
        if '|' in line and line.strip().startswith('|'):
            close_list()
            if is_table_separator(line):
                in_table = True
                i += 1
                continue

            row_html = parse_table_row(line)
            if row_html:
                table_lines.append(row_html)
            in_table = True
            i += 1
            continue
        elif in_table and not line.strip():
            # End of table
            if table_lines:
                html_lines.append('<table>')
                for row in table_lines:
                    html_lines.append(row)
                html_lines.append('</table>')
                table_lines = []
            in_table = False
            i += 1
            continue
        elif in_table and not line.strip().startswith('|'):
            # End of table, next line is not a table
            if table_lines:
                html_lines.append('<table>')
                for row in table_lines:
                    html_lines.append(row)
                html_lines.append('</table>')
                table_lines = []
            in_table = False
            continue

        # Handle list items
        list_match = re.match(r'^-\s+(.+)$', line)
        if list_match:
            item_text = list_match.group(1)
            item_text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', item_text)
            item_text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', item_text)
            item_text = re.sub(r'`(.+?)`', r'<code>\1</code>', item_text)
            list_items.append(item_text)
            in_list = True
            i += 1
            continue

        # Close list if we hit a non-list line
        if in_list:
            close_list()

        # Handle inline formatting and regular text
        if line.strip():
            processed = line
            processed = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', processed)
            processed = re.sub(r'\*(.+?)\*', r'<em>\1</em>', processed)
            processed = re.sub(r'`(.+?)`', r'<code>\1</code>', processed)
            html_lines.append(processed)

        i += 1

    # Close any open elements
    if in_list and list_items:
        close_list()
    if in_table and table_lines:
        html_lines.append('<table>')
        for row in table_lines:
            html_lines.append(row)
        html_lines.append('</table>')

    return '\n'.join(html_lines)


def extract_title(md_content):
    """Extract title from first # heading."""
    lines = md_content.split('\n')
    for line in lines:
        match = re.match(r'^#\s+(.+)$', line.strip())
        if match:
            title = match.group(1)
            # Clean up inline formatting for display
            title = re.sub(r'\*\*(.+?)\*\*', r'\1', title)
            title = re.sub(r'\*(.+?)\*', r'\1', title)
            return title
    return 'Untitled'


def convert_file(md_path):
    """Convert a single markdown file to HTML."""
    html_path = md_path.replace('.md', '.html')

    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    title = extract_title(md_content)
    html_content = convert_markdown_to_html(md_content)
    full_html = HTML_TEMPLATE.format(title=title, content=html_content)

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(full_html)

    print(f'Converted: {md_path} -> {html_path}')
    return html_path


# Files to convert
files = [
    r'D:\新课开发\管理学\12-绩效管理进化史\05_练习题库\G6_模块五练习_持续绩效对话.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\05_练习题库\G7_模块六练习_绩效转型规划.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\05_练习题库\G8_综合演练_完整绩效方案设计.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\05_练习题库\G9_课后作业_真实绩效体系诊断.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\05_练习题库\G10_讲师配套答案与评分标准.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\00_场景库_总览_使用指南.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\01_场景设计公式.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\02_讲师使用手册.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\03_互联网科技_场景集.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\04_制造业_场景集.md',
]

if __name__ == '__main__':
    for md_file in files:
        if os.path.exists(md_file):
            convert_file(md_file)
        else:
            print(f'File not found: {md_file}')
