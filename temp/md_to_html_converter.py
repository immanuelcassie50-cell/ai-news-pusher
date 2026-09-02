# -*- coding: utf-8 -*-
"""
Markdown to HTML Converter for Teaching Documents
Converts .md files to styled .html files with print optimization
"""

import re
import os


def get_html_template(title, content):
    """Return complete HTML document with embedded CSS"""
    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>
:root {{
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --text-primary: #1A1A1A;
  --text-secondary: #4A4748;
  --text-muted: #7A7678;
  --border-color: #E0DEDC;
  --accent-red: #B81025;
  --accent-blue: #2563EB;
  --accent-green: #059669;
  --accent-orange: #D97706;
  --code-bg: #F5F5F5;
  --table-alt: #FAFAF9;
}}

*, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}

body {{
  font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-primary);
  background: var(--bg-primary);
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 48px;
}}

h1 {{
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--accent-red);
  line-height: 1.3;
}}

h2 {{
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 40px 0 16px 0;
  padding-left: 12px;
  border-left: 4px solid var(--accent-red);
  line-height: 1.4;
}}

h3 {{
  font-size: 16px;
  font-weight: 700;
  color: var(--text-secondary);
  margin: 28px 0 12px 0;
  line-height: 1.4;
}}

h4 {{
  font-size: 14px;
  font-weight: 700;
  color: var(--text-muted);
  margin: 20px 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}}

hr {{
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 32px 0;
}}

p {{
  margin: 0 0 16px 0;
}}

ul, ol {{
  margin: 0 0 16px 0;
  padding-left: 24px;
}}

li {{
  margin-bottom: 8px;
}}

li > ul, li > ol {{
  margin-top: 8px;
  margin-bottom: 0;
}}

strong {{
  font-weight: 700;
  color: var(--text-primary);
}}

em {{
  font-style: italic;
  color: var(--text-secondary);
}}

blockquote {{
  margin: 20px 0;
  padding: 16px 20px;
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent-red);
  border-radius: 0 4px 4px 0;
}}

blockquote p:last-child {{
  margin-bottom: 0;
}}

code {{
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  font-size: 13px;
  background: var(--code-bg);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--accent-red);
}}

pre {{
  background: var(--code-bg);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 16px 20px;
  margin: 16px 0;
  overflow-x: auto;
}}

pre code {{
  background: none;
  padding: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-primary);
}}

table {{
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
}}

thead {{
  background: var(--text-primary);
  color: #FFF;
}}

th {{
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.03em;
}}

td {{
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
}}

tbody tr:nth-child(even) {{
  background: var(--table-alt);
}}

tbody tr:hover {{
  background: #FFF5F5;
}}

@media print {{
  @page {{
    size: A4;
    margin: 20mm 15mm;
  }}

  body {{
    font-size: 11pt;
    line-height: 1.6;
    padding: 0;
    max-width: 100%;
    background: #FFF;
  }}

  h1 {{
    font-size: 22pt;
    page-break-after: avoid;
  }}

  h2 {{
    font-size: 16pt;
    page-break-after: avoid;
  }}

  h3 {{
    font-size: 13pt;
    page-break-after: avoid;
  }}

  table {{
    font-size: 9pt;
    page-break-inside: avoid;
  }}

  pre {{
    page-break-inside: avoid;
    background: #F5F5F5 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  blockquote {{
    page-break-inside: avoid;
    background: #F8F8F8 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  thead {{
    background: #333 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  tbody tr:nth-child(even) {{
    background: #F5F5F5 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
}}

@media (max-width: 768px) {{
  body {{
    padding: 24px 20px;
    font-size: 14px;
  }}

  h1 {{
    font-size: 24px;
  }}

  h2 {{
    font-size: 18px;
  }}

  table {{
    font-size: 12px;
  }}

  th, td {{
    padding: 8px 10px;
  }}
}}
</style>
</head>
<body>
{content}
</body>
</html>'''


def parse_markdown(md_content):
    """Convert markdown content to HTML"""
    lines = md_content.split('\n')
    html_lines = []
    in_code_block = False
    code_block_content = []
    i = 0

    while i < len(lines):
        line = lines[i]

        # Code block handling
        if line.strip().startswith('```'):
            if not in_code_block:
                in_code_block = True
                code_block_content = []
            else:
                in_code_block = False
                code_html = '<pre><code>' + escape_html('\n'.join(code_block_content)) + '</code></pre>'
                html_lines.append(code_html)
            i += 1
            continue

        if in_code_block:
            code_block_content.append(line)
            i += 1
            continue

        # Process line
        processed = process_line(line, lines, i)
        if processed:
            if isinstance(processed, list):
                html_lines.extend(processed)
            else:
                html_lines.append(processed)
        i += 1

    return '\n'.join(html_lines)


def process_line(line, lines, idx):
    """Process a single line and return HTML"""
    result = []

    # Empty line
    if not line.strip():
        return result

    # Horizontal rule
    if re.match(r'^---+$', line.strip()) or re.match(r'^_{3,}$', line.strip()):
        result.append('<hr>')
        return result

    # ATX Heading 1
    if line.startswith('# '):
        title = escape_html(line[2:].strip())
        result.append(f'<h1>{title}</h1>')
        return result

    # ATX Heading 2
    if line.startswith('## '):
        title = escape_html(line[3:].strip())
        result.append(f'<h2>{title}</h2>')
        return result

    # ATX Heading 3
    if line.startswith('### '):
        title = escape_html(line[4:].strip())
        result.append(f'<h3>{title}</h3>')
        return result

    # ATX Heading 4
    if line.startswith('#### '):
        title = escape_html(line[5:].strip())
        result.append(f'<h4>{title}</h4>')
        return result

    # Blockquote
    if line.startswith('>'):
        content = line[1:].strip()
        content = process_inline(content)
        result.append(f'<blockquote><p>{content}</p></blockquote>')
        return result

    # Table detection
    if re.match(r'^\|.+\|$', line.strip()):
        # Collect table lines
        table_lines = []
        j = idx
        while j < len(lines):
            stripped = lines[j].strip()
            # Skip alignment rows like | --- | --- |
            if re.match(r'^[\|\s\-:]+$', stripped) or is_alignment_row(stripped):
                j += 1
                continue
            if re.match(r'^\|.+\|$', stripped):
                table_lines.append(lines[j])
                j += 1
            else:
                break

        table_html = parse_table(table_lines)
        result.append(table_html)
        return result

    # Unordered list
    if re.match(r'^[-*+]\s', line):
        content = process_inline(line[2:].strip())
        result.append(f'<li>{content}</li>')
        return result

    # Ordered list
    if re.match(r'^\d+\.\s', line):
        content = process_inline(line[line.index('.') + 2:].strip())
        result.append(f'<li>{content}</li>')
        return result

    # Checkbox list
    checkbox_match = re.match(r'^-\s+\[(x| )\]\s+(.*)', line)
    if checkbox_match:
        checked = 'checked' if checkbox_match.group(1).lower() == 'x' else ''
        content = process_inline(checkbox_match.group(2))
        result.append(f'<li><input type="checkbox" {checked} disabled> {content}</li>')
        return result

    # Regular paragraph
    content = process_inline(line.strip())
    if content:
        result.append(f'<p>{content}</p>')

    return result


def is_alignment_row(line):
    """Check if a line is a markdown table alignment row"""
    cells = line.strip().strip('|').split('|')
    for cell in cells:
        cell = cell.strip()
        # Check if cell contains only dashes, spaces, colons (alignment markers)
        if cell == '' or re.match(r'^:?-+:?$', cell):
            continue
        return False
    return True


def parse_table(lines):
    """Parse markdown table to HTML"""
    headers = []
    rows = []

    for i, line in enumerate(lines):
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if i == 0:
            headers = cells
        else:
            rows.append(cells)

    html = ['<table>', '<thead>', '<tr>']
    for header in headers:
        html.append(f'<th>{escape_html(header)}</th>')
    html.append('</tr>')
    html.append('</thead>')
    html.append('<tbody>')

    for row in rows:
        html.append('<tr>')
        for cell in row:
            html.append(f'<td>{process_inline(cell)}</td>')
        html.append('</tr>')

    html.append('</tbody>')
    html.append('</table>')

    return '\n'.join(html)


def process_inline(text):
    """Process inline markdown elements"""
    if not text:
        return ''

    # Code spans
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)

    # Bold
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)

    # Italic
    text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', text)

    # Links
    text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', text)

    return text


def escape_html(text):
    """Escape HTML special characters"""
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))


def extract_title(md_content):
    """Extract title from markdown content"""
    match = re.search(r'^#\s+(.+)$', md_content, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return 'Untitled Document'


def wrap_lists(html_content):
    """Wrap consecutive <li> elements in <ul> tags"""
    lines = html_content.split('\n')
    result = []
    in_list = False
    buffer = []

    for line in lines:
        stripped = line.strip()
        if stripped.startswith('<li>'):
            if not in_list:
                in_list = True
            buffer.append(line)
        else:
            if in_list:
                result.append('<ul>')
                result.extend(buffer)
                result.append('</ul>')
                buffer = []
                in_list = False
            result.append(line)

    if buffer:
        result.append('<ul>')
        result.extend(buffer)
        result.append('</ul>')

    return '\n'.join(result)


def convert_file(input_path, output_path):
    """Convert a single markdown file to HTML"""
    print(f'Converting: {input_path}')

    with open(input_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    title = extract_title(md_content)
    html_content = parse_markdown(md_content)
    html_content = wrap_lists(html_content)

    html_full = get_html_template(title, html_content)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_full)

    print(f'  -> {output_path}')


def main():
    base_dir = r'D:\新课开发\营销\一线销售\10 业绩复盘与风险预判：从看结果到看过程信号'
    input_dir = os.path.join(base_dir, '教学文档')
    output_dir = os.path.join(base_dir, '教学文档HTML')

    os.makedirs(output_dir, exist_ok=True)

    files = [
        '00-课程总览与场景卡.md',
        '01-模块1：为什么结果复盘已经不够用了.md',
        '02-模块2：看懂过程信号——四类关键预警信号.md',
        '03-模块3：AI辅助的商机风险扫描实操.md',
        '04-模块4：从信号到干预——把预判转化为行动.md',
        '05-模块5：团队预判节奏设计.md',
        '06-模块6：实战综合演炼.md',
    ]

    for filename in files:
        input_path = os.path.join(input_dir, filename)
        output_filename = filename.replace('.md', '.html')
        output_path = os.path.join(output_dir, output_filename)

        if os.path.exists(input_path):
            convert_file(input_path, output_path)
        else:
            print(f'File not found: {input_path}')


if __name__ == '__main__':
    main()
