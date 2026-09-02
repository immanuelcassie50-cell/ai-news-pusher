import re
import os

def convert_markdown_to_html(markdown_content, title, output_path):
    """Convert markdown to HTML with light theme, print-friendly styles"""

    html_template = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        @page {{
            size: A4;
            margin: 2cm;
        }}

        * {{
            box-sizing: border-box;
        }}

        body {{
            font-family: "Source Han Sans SC", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif;
            font-size: 14px;
            line-height: 1.8;
            color: #333;
            background-color: #ffffff;
            margin: 0;
            padding: 40px;
            max-width: 1000px;
            margin: 0 auto;
        }}

        h1 {{
            font-size: 28px;
            font-weight: 600;
            color: #1a1a1a;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 12px;
            margin-top: 0;
            margin-bottom: 24px;
        }}

        h2 {{
            font-size: 22px;
            font-weight: 600;
            color: #1e3a5f;
            border-left: 4px solid #2563eb;
            padding-left: 12px;
            margin-top: 36px;
            margin-bottom: 16px;
            background-color: #f8fafc;
            padding: 10px 12px;
        }}

        h3 {{
            font-size: 18px;
            font-weight: 600;
            color: #334155;
            margin-top: 24px;
            margin-bottom: 12px;
        }}

        h4 {{
            font-size: 16px;
            font-weight: 600;
            color: #475569;
            margin-top: 18px;
            margin-bottom: 8px;
        }}

        p {{
            margin: 12px 0;
            text-align: justify;
        }}

        blockquote {{
            background-color: #f1f5f9;
            border-left: 4px solid #2563eb;
            margin: 20px 0;
            padding: 16px 20px;
            font-style: italic;
            color: #475569;
        }}

        blockquote p {{
            margin: 0;
        }}

        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 13px;
        }}

        th {{
            background-color: #2563eb;
            color: white;
            padding: 12px 16px;
            text-align: left;
            font-weight: 600;
        }}

        td {{
            padding: 10px 16px;
            border-bottom: 1px solid #e2e8f0;
        }}

        tr:nth-child(even) {{
            background-color: #f8fafc;
        }}

        tr:hover {{
            background-color: #f1f5f9;
        }}

        ul, ol {{
            margin: 12px 0;
            padding-left: 28px;
        }}

        li {{
            margin: 8px 0;
        }}

        code {{
            background-color: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: "JetBrains Mono", "Fira Code", monospace;
            font-size: 13px;
        }}

        pre {{
            background-color: #1e293b;
            color: #e2e8f0;
            padding: 16px 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
        }}

        pre code {{
            background: none;
            padding: 0;
            color: inherit;
        }}

        hr {{
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 32px 0;
        }}

        .content {{
            margin-top: 20px;
        }}

        .module-header {{
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            color: white;
            padding: 32px 40px;
            margin: -40px -40px 40px -40px;
        }}

        .module-header h1 {{
            color: white;
            border: none;
            margin: 0;
            font-size: 28px;
        }}

        .highlight-box {{
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            border: 1px solid #2563eb;
            border-radius: 8px;
            padding: 20px 24px;
            margin: 24px 0;
        }}

        .key-point {{
            background-color: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 12px 16px;
            margin: 16px 0;
        }}

        .case-study {{
            background-color: #f0fdf4;
            border-left: 4px solid #22c55e;
            padding: 16px 20px;
            margin: 24px 0;
        }}

        .subtitle {{
            font-size: 16px;
            opacity: 0.9;
            margin-top: 8px;
        }}

        @media print {{
            body {{
                background: white;
                padding: 0;
                font-size: 12px;
            }}

            .module-header {{
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
            }}

            table {{
                font-size: 11px;
            }}

            h1 {{
                font-size: 22px;
            }}

            h2 {{
                font-size: 18px;
            }}
        }}
    </style>
</head>
<body>
    <div class="content">
        {content}
    </div>
</body>
</html>'''

    # Convert markdown to HTML content
    html_content = convert_markdown_content(markdown_content)

    final_html = html_template.format(title=title, content=html_content)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)

    print(f"Converted: {output_path}")

def convert_markdown_content(md):
    """Convert markdown content to HTML"""
    lines = md.split('\n')
    html_lines = []
    in_code_block = False
    in_table = False
    table_rows = []
    in_list = False
    list_items = []

    for line in lines:
        # Code blocks
        if line.strip().startswith('```'):
            if in_code_block:
                html_lines.append('</code></pre>')
                in_code_block = False
            else:
                lang = line.strip()[3:] if len(line.strip()) > 3 else ''
                html_lines.append('<pre><code class="language-' + lang + '">')
                in_code_block = True
            continue

        if in_code_block:
            html_lines.append(line)
            continue

        # Headers
        if line.startswith('#### '):
            html_lines.append('<h4>' + convert_inline(line[5:]) + '</h4>')
            continue
        elif line.startswith('### '):
            html_lines.append('<h3>' + convert_inline(line[4:]) + '</h3>')
            continue
        elif line.startswith('## '):
            html_lines.append('<h2>' + convert_inline(line[3:]) + '</h2>')
            continue
        elif line.startswith('# '):
            html_lines.append('<h1>' + convert_inline(line[2:]) + '</h1>')
            continue

        # Horizontal rule
        if line.strip() == '---' or line.strip() == '***' or line.strip() == '___':
            html_lines.append('<hr>')
            continue

        # Table handling
        if '|' in line and line.strip().startswith('|'):
            parts = [p.strip() for p in line.split('|')]
            parts = [p for p in parts if p or p == '']
            if all(re.match(r'^[-:]+$', p) for p in parts):
                continue  # Skip separator row
            tag = 'th' if not in_table else 'td'
            if not in_table:
                in_table = True
                table_rows = []
            table_rows.append('<tr>')
            for p in parts:
                table_rows.append('<' + tag + '>' + convert_inline(p) + '</' + tag + '>')
            table_rows.append('</tr>')
            continue
        else:
            if in_table:
                html_lines.append('<table><tbody>')
                html_lines.extend(table_rows)
                html_lines.append('</tbody></table>')
                table_rows = []
                in_table = False

        # Blockquote
        if line.startswith('>'):
            content = line[1:].strip()
            if content.startswith('**') and content.endswith('**') and content.count('**') == 2:
                content = content[2:-2]
                html_lines.append('<blockquote><strong>' + convert_inline(content) + '</strong></blockquote>')
            else:
                html_lines.append('<blockquote><p>' + convert_inline(content) + '</p></blockquote>')
            continue

        # Case study or special block
        case_match = re.match(r'\*\*([^*]+)：(.+)\*\*', line)
        if case_match:
            title, content = case_match.groups()
            html_lines.append('<div class="case-study"><strong>' + convert_inline(title) + '：</strong>' + convert_inline(content) + '</div>')
            continue

        # List items
        if line.startswith('- ') or line.startswith('* '):
            content = line[2:].strip()
            html_lines.append('<li>' + convert_inline(content) + '</li>')
            continue
        elif re.match(r'^\d+\. ', line):
            content = re.sub(r'^\d+\. ', '', line).strip()
            html_lines.append('<li>' + convert_inline(content) + '</li>')
            continue

        # Empty lines
        if not line.strip():
            html_lines.append('<p></p>')
            continue

        # Regular paragraphs
        html_lines.append('<p>' + convert_inline(line) + '</p>')

    # Close any open table
    if in_table:
        html_lines.append('<table><tbody>')
        html_lines.extend(table_rows)
        html_lines.append('</tbody></table>')

    return '\n'.join(html_lines)

def convert_inline(text):
    """Convert inline markdown elements to HTML"""
    # Bold: **text** or __text__
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'__(.+?)__', r'<strong>\1</strong>', text)

    # Italic: *text* or _text_
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    text = re.sub(r'_(.+?)_', r'<em>\1</em>', text)

    # Inline code: `code`
    text = re.sub(r'`(.+?)`', r'<code>\1</code>', text)

    # Links: [text](url)
    text = re.sub(r'\[(.+?)\]\((.+?)\)', r'<a href="\2">\1</a>', text)

    return text

# File mapping
source_dir = "D:/新课开发/德鲁克/非营利精神/B-商业企业版/完整课程包"
output_dir = "D:/新课开发/德鲁克/非营利精神/B-商业企业版/完整课程包/教学文档HTML"

files = [
    ("00-课程总览.md", "00-课程总览.html", "课程总览：非营利精神——商业企业的使命管理"),
    ("02_教学文档/01-模块0-开场震动.md", "01-模块0_开场震动.html", "模块0：开场震动"),
    ("02_教学文档/02-模块1-非营利组织的管理实验室.md", "02-模块1_非营利组织的管理实验室.html", "模块1：非营利组织的管理实验室"),
    ("02_教学文档/03-模块2-使命测试三问.md", "03-模块2_使命测试三问.html", "模块2：使命测试三问"),
    ("02_教学文档/04-模块3-有组织的放弃.md", "04-模块3_有组织的放弃.html", "模块3：有组织的放弃"),
    ("02_教学文档/05-模块4-AI时代的使命重塑.md", "05-模块4_AI时代的使命重塑.html", "模块4：AI时代的使命重塑"),
    ("02_教学文档/06-模块5B-生态型商业模式.md", "06-模块5B_生态型商业模式.html", "模块5B：生态型商业模式"),
    ("02_教学文档/07-模块6-整合工作坊.md", "07-模块6_整合工作坊.html", "模块6：整合工作坊"),
    ("02_教学文档/08-模块7-课程收尾.md", "08-模块7_课程收尾.html", "模块7：课程收尾"),
]

for source_file, output_file, title in files:
    source_path = os.path.join(source_dir, source_file)
    output_path = os.path.join(output_dir, output_file)

    if os.path.exists(source_path):
        with open(source_path, 'r', encoding='utf-8') as f:
            content = f.read()
        convert_markdown_to_html(content, title, output_path)
    else:
        print("File not found: " + source_path)

print("Conversion complete!")