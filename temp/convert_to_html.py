#!/usr/bin/env python3
"""Convert markdown exercise files to HTML."""

import os
import re

OUT_BASE = "D:/新课开发/家庭教育/3、家庭学习环境系统设计实战指南/完整课程包/07_练习题库"

def md_to_html(md_content, title):
    """Convert markdown content to HTML with print-friendly styling."""
    html_escape_table = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;",
        ">": "&gt;",
        "<": "&lt;",
    }
    def escape(text):
        for char, escape_item in html_escape_table.items():
            text = text.replace(char, escape_item)
        return text

    lines = md_content.split('\n')
    html_lines = []
    in_code_block = False

    for line in lines:
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            html_lines.append(line)
            continue
        if in_code_block:
            html_lines.append(escape(line))
            continue
        if line.startswith('#### '):
            html_lines.append(f'<h4>{escape(line[5:])}</h4>')
        elif line.startswith('### '):
            html_lines.append(f'<h3>{escape(line[4:])}</h3>')
        elif line.startswith('## '):
            html_lines.append(f'<h2>{escape(line[3:])}</h2>')
        elif line.startswith('# '):
            html_lines.append(f'<h1>{escape(line[2:])}</h1>')
        elif line.strip() == '---':
            html_lines.append('<hr>')
        elif line.startswith('- '):
            content = line[2:]
            content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
            html_lines.append(f'<li>{content}</li>')
        elif re.match(r'^\d+\. ', line):
            content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line[line.index(' ')+1:])
            html_lines.append(f'<li>{content}</li>')
        elif line.startswith('|'):
            cells = [c.strip() for c in line.split('|')[1:-1]]
            if all(c in ['------', '---'] or re.match(r'^[-:]+$', c) for c in cells):
                continue
            row_html = '<tr>' + ''.join(f'<td>{escape(c)}</td>' for c in cells) + '</tr>'
            html_lines.append(row_html)
        elif line.strip() == '':
            html_lines.append('')
        else:
            line = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line)
            html_lines.append(f'<p>{escape(line)}</p>')

    body_html = '\n'.join(html_lines)
    body_html = re.sub(r'(<tr>.*?</tr>)', r'<table class="data-table">\1</table>', body_html, flags=re.DOTALL)

    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
  font-family: "Microsoft YaHei", "PingFang SC", "SimHei", sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: #333;
  background: #ffffff;
  padding: 20mm 15mm;
  max-width: 210mm;
}}
@media print {{
  body {{ padding: 0; font-size: 12px; }}
  @page {{ size: A4; margin: 15mm 10mm; }}
  h1, h2, h3, h4 {{ page-break-after: avoid; }}
}}
h1 {{ font-size: 22px; color: #1a5f7a; margin: 20px 0 12px; border-bottom: 2px solid #1a5f7a; padding-bottom: 6px; }}
h2 {{ font-size: 18px; color: #2c7873; margin: 18px 0 10px; }}
h3 {{ font-size: 15px; color: #333; margin: 14px 0 8px; }}
h4 {{ font-size: 13px; color: #555; margin: 10px 0 6px; }}
p {{ margin: 6px 0; }}
ul {{ margin: 6px 0 6px 24px; }}
li {{ margin: 4px 0; }}
hr {{ border: none; border-top: 1px solid #ddd; margin: 16px 0; }}
table.data-table {{ width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 13px; }}
td, th {{ border: 1px solid #ccc; padding: 6px 10px; text-align: left; vertical-align: top; }}
th {{ background: #f0f0f0; font-weight: bold; color: #333; }}
strong {{ color: #222; }}
</style>
</head>
<body>
{body_html}
</body>
</html>'''

md_files = [
    "G01_开场暖场练习.md",
    "G02_模块一练习_五种失效模式识别.md",
    "G03_模块二练习_时间与空间设计.md",
    "G04_模块三练习_AI工具分级判断.md",
    "G05_模块四练习_回教法实操.md",
    "G06_模块五练习_家长角色定位.md",
    "G07_模块六练习_方案设计实战.md",
    "G08_结业练习_综合方案设计.md",
    "G09_讲师配套答案与评分标准.md",
]

for fname in md_files:
    md_path = f"{OUT_BASE}/{fname}"
    html_path = f"{OUT_BASE}/{fname[:-3]}.html"
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    title_match = re.search(r'^# (.+)$', md_content, re.MULTILINE)
    title = title_match.group(1) if title_match else fname[:-3]
    if md_content.startswith('---'):
        end_idx = md_content.find('\n---\n', 4)
        if end_idx != -1:
            md_content = md_content[end_idx+5:]
    html_content = md_to_html(md_content, title)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Created: {fname[:-3]}.html")

print("\nAll HTML files created!")
