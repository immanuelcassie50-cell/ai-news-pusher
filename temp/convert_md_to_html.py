import re
import os

def convert_markdown_to_html(markdown_content, title):
    html_content = markdown_content

    # Code block replacements (must be done before other inline replacements)
    html_content = re.sub(r'```(\w*)\n(.*?)```', r'<pre><code>\2</code></pre>', html_content, flags=re.DOTALL)

    # Inline code
    html_content = re.sub(r'`([^`]+)`', r'<code>\1</code>', html_content)

    # Headers (from lowest to highest level to avoid conflicts)
    html_content = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', html_content, flags=re.MULTILINE)
    html_content = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html_content, flags=re.MULTILINE)
    html_content = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html_content, flags=re.MULTILINE)
    html_content = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html_content, flags=re.MULTILINE)

    # Bold and italic
    html_content = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html_content)
    html_content = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html_content)

    # Horizontal rule
    html_content = re.sub(r'^---$', '<hr>', html_content, flags=re.MULTILINE)

    # Blockquote
    html_content = re.sub(r'^> (.+)$', r'<blockquote>\1</blockquote>', html_content, flags=re.MULTILINE)

    # Table processing - more complex, needs to handle rows
    lines = html_content.split('\n')
    new_lines = []
    in_table = False
    table_rows = []

    for line in lines:
        if re.match(r'^\|.+\|$', line):
            # It's a table row
            cells = [c.strip() for c in line.split('|')[1:-1]]
            # Check if it's a separator row (|---|---|)
            if all(re.match(r'^[-:]+$', c) for c in cells):
                continue  # Skip separator rows
            # Check if it's a header row (contains **th** markers or is first row)
            is_header = False
            for i, cell in enumerate(cells):
                if re.search(r'\*\*(.+?)\*\*', cell):
                    is_header = True
                    break
            if not in_table:
                in_table = True
                table_rows = []
            table_rows.append(cells)
        else:
            if in_table:
                # Close the table
                if table_rows:
                    new_lines.append('<table>')
                    for row_idx, row in enumerate(table_rows):
                        tag = 'th' if row_idx == 0 else 'td'
                        # Check if any cell in this row has bold (header row)
                        is_header_row = any(re.search(r'\*\*(.+?)\*\*', cell) for cell in row)
                        if row_idx == 0 and is_header_row:
                            new_lines.append('<tr>')
                            for cell in row:
                                cell_content = re.sub(r'\*\*(.+?)\*\*', r'\1', cell)
                                new_lines.append(f'<th>{cell_content}</th>')
                            new_lines.append('</tr>')
                        else:
                            new_lines.append('<tr>')
                            for cell in row:
                                new_lines.append(f'<td>{cell}</td>')
                            new_lines.append('</tr>')
                    new_lines.append('</table>')
                table_rows = []
                in_table = False
            new_lines.append(line)

    # Handle remaining table at end
    if in_table and table_rows:
        new_lines.append('<table>')
        for row_idx, row in enumerate(table_rows):
            tag = 'th' if row_idx == 0 else 'td'
            new_lines.append('<tr>')
            for cell in row:
                new_lines.append(f'<{tag}>{cell}</{tag}>')
            new_lines.append('</tr>')
        new_lines.append('</table>')

    html_content = '\n'.join(new_lines)

    # List items - need to group consecutive li elements
    html_content = re.sub(r'^- (.+)$', r'<li>\1</li>', html_content, flags=re.MULTILINE)

    # Group consecutive <li> elements into <ul>
    html_content = re.sub(r'(<li>.*?</li>\n?)+', lambda m: '<ul>' + m.group() + '</ul>', html_content)

    return html_content

def get_title_from_content(content):
    match = re.search(r'^# (.+)$', content, re.MULTILINE)
    if match:
        return match.group(1)
    return 'Untitled'

HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TITLE_HERE</title>
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #f7fafc;
            color: #2d3748;
            line-height: 1.8;
        }
        h1 {
            color: #1a365d;
            border-bottom: 3px solid #2b6cb0;
            padding-bottom: 15px;
            margin-top: 40px;
            font-size: 2em;
        }
        h2 {
            color: #1a365d;
            border-left: 4px solid #ed8936;
            padding-left: 15px;
            margin-top: 30px;
            font-size: 1.5em;
        }
        h3 {
            color: #2b6cb0;
            margin-top: 25px;
            font-size: 1.25em;
        }
        h4 {
            color: #4a5568;
            margin-top: 20px;
            font-size: 1.1em;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
            background: white;
        }
        th, td {
            border: 1px solid #e2e8f0;
            padding: 12px 15px;
            text-align: left;
        }
        th {
            background-color: #1a365d;
            color: white;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f8fafc;
        }
        code {
            background-color: #edf2f7;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: "Consolas", "Source Code Pro", monospace;
            font-size: 0.9em;
            color: #c53030;
        }
        pre {
            background-color: #edf2f7;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
            border-left: 4px solid #2b6cb0;
        }
        pre code {
            background: none;
            padding: 0;
            color: #2d3748;
        }
        blockquote {
            border-left: 4px solid #ed8936;
            margin: 20px 0;
            padding: 15px 20px;
            background-color: #fffaf0;
            color: #744210;
            font-style: italic;
        }
        hr {
            border: none;
            border-top: 2px solid #bee3f8;
            margin: 30px 0;
        }
        ul, ol {
            margin: 15px 0;
            padding-left: 25px;
        }
        li {
            margin: 8px 0;
        }
        strong {
            color: #1a365d;
        }
        em {
            color: #c53030;
        }
        @media print {
            body { background: white; max-width: 100%; }
            h1, h2, h3 { page-break-after: avoid; }
            table { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
CONTENT_HERE
</body>
</html>'''

files = [
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\05_金融业_场景集.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\06_零售业_场景集.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\互联网科技_场景集.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\制造业_场景集.md',
    r'D:\新课开发\管理学\12-绩效管理进化史\06_场景库\金融业_场景集.md'
]

for md_file in files:
    if os.path.exists(md_file):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        title = get_title_from_content(content)
        html_body = convert_markdown_to_html(content, title)

        html = HTML_TEMPLATE.replace('TITLE_HERE', title).replace('CONTENT_HERE', html_body)

        html_file = md_file.replace('.md', '.html')
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html)

        print(f'Converted: {md_file} -> {html_file}')
    else:
        print(f'File not found: {md_file}')
