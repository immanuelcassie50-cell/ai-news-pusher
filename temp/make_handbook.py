#!/usr/bin/env python3
"""
Convert markdown handbook to styled HTML with print optimization.
"""

import re
from pathlib import Path


def markdown_to_html(markdown_content: str) -> str:
    """Convert markdown to HTML with custom styling."""

    # Skip first 55 lines
    lines = markdown_content.split('\n')
    skip_count = 0
    for i, line in enumerate(lines):
        if skip_count < 55:
            # Check if line is non-empty (cover content)
            if line.strip():
                skip_count = i + 1
            continue
        break
    content_lines = lines[skip_count:]
    content = '\n'.join(content_lines)

    # Process content through multiple passes
    html_parts = []

    # Split into lines for processing
    lines = content.split('\n')
    i = 0
    in_code_block = False
    in_table = False
    table_rows = []

    while i < len(lines):
        line = lines[i]

        # Code blocks
        if line.strip().startswith('```'):
            if not in_code_block:
                in_code_block = True
                html_parts.append('<pre><code>')
            else:
                in_code_block = False
                html_parts.append('</code></pre>')
            i += 1
            continue

        if in_code_block:
            html_parts.append(escape_html(line))
            i += 1
            continue

        # Tables
        if '|' in line and line.strip().startswith('|'):
            # Check if it's a table row or separator
            if re.match(r'^[\|\s\-:]+$', line.strip()):
                # Separator line
                i += 1
                continue

            cells = [c.strip() for c in line.split('|')[1:-1]]
            is_header = False

            # Check next line for table separator
            if i + 1 < len(lines) and re.match(r'^[\|\s\-:]+$', lines[i + 1].strip()):
                is_header = True

                if cells and not in_table:
                    in_table = True
                    table_rows = []

                if is_header:
                    html_parts.append('<table class="data-table"><thead><tr>')
                    for cell in cells:
                        html_parts.append(f'<th>{cell}</th>')
                    html_parts.append('</tr></thead><tbody>')
                    i += 2
                    continue

            if in_table:
                row_class = 'even' if len(table_rows) % 2 == 0 else 'odd'
                html_parts.append(f'<tr class="{row_class}">')
                for cell in cells:
                    html_parts.append(f'<td>{cell}</td>')
                html_parts.append('</tr>')
                table_rows.append(cells)
                i += 1
                continue
            else:
                html_parts.append('<table class="data-table"><tbody>')
                row_class = 'even' if len(table_rows) % 2 == 0 else 'odd'
                html_parts.append(f'<tr class="{row_class}">')
                for cell in cells:
                    html_parts.append(f'<td>{cell}</td>')
                html_parts.append('</tr>')
                table_rows.append(cells)
                i += 1
                continue
        else:
            if in_table:
                html_parts.append('</tbody></table>')
                in_table = False
                table_rows = []
                continue

        # Blockquotes (scene cards and self-reflection)
        if line.strip().startswith('> '):
            quote_content = line.strip()[2:]
            # Check for scene card pattern
            if '场景' in quote_content or '案例' in quote_content:
                html_parts.append('<div class="scene-card"><div class="scene-badge">场景</div>')
                html_parts.append(f'<p>{inline_format(quote_content)}</p>')
                # Check next lines for continuation
                i += 1
                while i < len(lines) and lines[i].strip().startswith('>'):
                    inner = lines[i].strip()[2:]
                    html_parts.append(f'<p>{inline_format(inner)}</p>')
                    i += 1
                html_parts.append('</div>')
                continue
            elif '反思' in quote_content or '思考' in quote_content:
                html_parts.append('<div class="reflection-box"><div class="reflection-badge">自我反思</div>')
                html_parts.append(f'<p>{inline_format(quote_content)}</p>')
                i += 1
                while i < len(lines) and lines[i].strip().startswith('>'):
                    inner = lines[i].strip()[2:]
                    html_parts.append(f'<p>{inline_format(inner)}</p>')
                    i += 1
                html_parts.append('</div>')
                continue
            else:
                html_parts.append(f'<blockquote>{inline_format(quote_content)}</blockquote>')
                i += 1
                continue

        # Close table if we hit a non-table line
        if in_table:
            html_parts.append('</tbody></table>')
            in_table = False
            table_rows = []
            continue

        # Headers
        if line.strip().startswith('#### '):
            html_parts.append(f'<h4>{inline_format(line.strip()[5:])}</h4>')
            i += 1
            continue
        if line.strip().startswith('### '):
            html_parts.append(f'<h3>{inline_format(line.strip()[4:])}</h3>')
            i += 1
            continue
        if line.strip().startswith('## '):
            html_parts.append(f'<h2>{inline_format(line.strip()[3:])}</h2>')
            i += 1
            continue
        if line.strip().startswith('# '):
            html_parts.append(f'<h1>{inline_format(line.strip()[2:])}</h1>')
            i += 1
            continue

        # Horizontal rule
        if line.strip() in ['---', '***', '___']:
            html_parts.append('<hr>')
            i += 1
            continue

        # Lists
        if line.strip().startswith('- ') or line.strip().startswith('* '):
            if not html_parts or not isinstance(html_parts[-1], str) or '<ul>' not in html_parts[-1]:
                html_parts.append('<ul>')
            html_parts.append(f'<li>{inline_format(line.strip()[2:])}</li>')
            # Check for continuation
            i += 1
            while i < len(lines) and (lines[i].strip().startswith('- ') or lines[i].strip().startswith('* ')):
                html_parts.append(f'<li>{inline_format(lines[i].strip()[2:])}</li>')
                i += 1
            html_parts.append('</ul>')
            continue

        # Numbered lists
        num_match = re.match(r'^(\d+)\.\s+(.*)', line.strip())
        if num_match:
            if not html_parts or not isinstance(html_parts[-1], str) or '<ol>' not in html_parts[-1]:
                html_parts.append('<ol>')
            html_parts.append(f'<li>{inline_format(num_match.group(2))}</li>')
            i += 1
            while i < len(lines):
                nested_match = re.match(r'^(\d+)\.\s+(.*)', lines[i].strip())
                if nested_match:
                    html_parts.append(f'<li>{inline_format(nested_match.group(2))}</li>')
                    i += 1
                else:
                    break
            html_parts.append('</ol>')
            continue

        # Empty lines
        if not line.strip():
            html_parts.append('')
            i += 1
            continue

        # Regular paragraphs
        html_parts.append(f'<p>{inline_format(line.strip())}</p>')
        i += 1

    # Close any open table
    if in_table:
        html_parts.append('</tbody></table>')

    body_content = '\n'.join(html_parts)

    # Build complete HTML
    html = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>从生产管理到真经营 - 学员手册</title>
    <style>
        * {{
            box-sizing: border-box;
        }}

        body {{
            font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
            background-color: #f8f8f8;
            color: #4a4e69;
            line-height: 1.8;
            margin: 0;
            padding: 0;
        }}

        .container {{
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0,0,0,0.05);
        }}

        /* Cover Section */
        .cover {{
            background: linear-gradient(135deg, #2b2d42 0%, #c41e3a 100%);
            color: white;
            padding: 60px 40px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 40px;
        }}

        .cover h1 {{
            font-size: 2.5em;
            margin: 0 0 20px 0;
            color: white;
        }}

        .cover .subtitle {{
            font-size: 1.3em;
            opacity: 0.9;
        }}

        /* Learning Goals Box */
        .learning-goals {{
            background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%);
            border-left: 4px solid #c41e3a;
            padding: 20px 25px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }}

        .learning-goals h3 {{
            color: #c41e3a;
            margin-top: 0;
        }}

        /* Headings */
        h1, h2, h3, h4, h5 {{
            color: #2b2d42;
            margin-top: 30px;
            margin-bottom: 15px;
            font-weight: 600;
        }}

        h1 {{ font-size: 2em; border-bottom: 2px solid #c41e3a; padding-bottom: 10px; }}
        h2 {{ font-size: 1.6em; border-bottom: 1px solid #ddd; padding-bottom: 8px; }}
        h3 {{ font-size: 1.3em; }}
        h4 {{ font-size: 1.1em; }}
        h5 {{ font-size: 1em; }}

        /* Tables */
        .data-table {{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 0.95em;
        }}

        .data-table th {{
            background-color: #2b2d42;
            color: white;
            padding: 12px 15px;
            text-align: left;
            font-weight: 600;
        }}

        .data-table td {{
            padding: 10px 15px;
            border: 1px solid #ddd;
        }}

        .data-table tr.odd {{
            background-color: #f9f9f9;
        }}

        .data-table tr.even {{
            background-color: #ffffff;
        }}

        .data-table {{ border: 1px solid #ddd; }}

        /* Code blocks */
        pre {{
            background-color: #2b2d42;
            color: #f8f8f8;
            padding: 20px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 20px 0;
        }}

        pre code {{
            font-family: "Consolas", "Monaco", monospace;
            font-size: 0.9em;
            line-height: 1.6;
        }}

        code {{
            background-color: #f0f0f0;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: "Consolas", "Monaco", monospace;
            font-size: 0.9em;
            color: #c41e3a;
        }}

        /* Scene Cards */
        .scene-card {{
            background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);
            border: 1px solid #ffcccc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            position: relative;
        }}

        .scene-badge {{
            position: absolute;
            top: -10px;
            left: 20px;
            background-color: #c41e3a;
            color: white;
            padding: 4px 15px;
            border-radius: 12px;
            font-size: 0.85em;
            font-weight: 600;
        }}

        .scene-card p {{
            margin: 10px 0;
        }}

        /* Reflection Box */
        .reflection-box {{
            background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%);
            border: 1px solid #cce0ff;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            position: relative;
        }}

        .reflection-badge {{
            position: absolute;
            top: -10px;
            left: 20px;
            background-color: #2b2d42;
            color: white;
            padding: 4px 15px;
            border-radius: 12px;
            font-size: 0.85em;
            font-weight: 600;
        }}

        /* Tool Forms */
        .tool-form {{
            background-color: #fafafa;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            margin: 20px 0;
            overflow: hidden;
        }}

        .tool-form-header {{
            background-color: #2b2d42;
            color: white;
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}

        .tool-form-tag {{
            background-color: #c41e3a;
            color: white;
            padding: 3px 12px;
            border-radius: 10px;
            font-size: 0.8em;
        }}

        .tool-form-content {{
            padding: 20px;
        }}

        /* Blockquotes */
        blockquote {{
            border-left: 3px solid #c41e3a;
            margin: 20px 0;
            padding: 10px 20px;
            background-color: #f9f9f9;
            font-style: italic;
        }}

        /* Lists */
        ul, ol {{
            margin: 15px 0;
            padding-left: 30px;
        }}

        li {{
            margin: 8px 0;
        }}

        /* Horizontal rule */
        hr {{
            border: none;
            height: 2px;
            background: linear-gradient(90deg, transparent, #c41e3a, transparent);
            margin: 30px 0;
        }}

        /* Paragraphs */
        p {{
            margin: 15px 0;
        }}

        /* Bold and Italic */
        strong, b {{
            color: #2b2d42;
            font-weight: 600;
        }}

        em, i {{
            font-style: italic;
        }}

        /* Print Optimization */
        @media print {{
            body {{
                background-color: white;
                font-size: 11pt;
            }}

            .container {{
                box-shadow: none;
                max-width: 100%;
                padding: 0;
            }}

            .cover {{
                background: #2b2d42 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                page-break-after: avoid;
            }}

            .cover h1 {{
                color: white !important;
            }}

            .scene-badge, .reflection-badge, .tool-form-tag {{
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }}

            .data-table {{
                page-break-inside: avoid;
            }}

            .data-table th {{
                background-color: #2b2d42 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }}

            h1, h2, h3, h4, h5 {{
                page-break-after: avoid;
            }}

            pre {{
                page-break-inside: avoid;
            }}

            @page {{
                size: A4;
                margin: 2cm;
            }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="cover">
            <h1>从生产管理到真经营</h1>
            <div class="subtitle">中层生产经营管理培训手册</div>
        </div>

        <div class="learning-goals">
            <h3>学习目标</h3>
            <p>本手册帮助中层管理者从传统的生产管理思维转向真正的经营思维，掌握经营的核心要素，提升企业的整体竞争力。</p>
        </div>

        {body_content}
    </div>
</body>
</html>'''

    return html


def inline_format(text: str) -> str:
    """Apply inline formatting to text."""
    # Bold
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)', r'<em>\1</em>', text)
    # Inline code
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    return text


def escape_html(text: str) -> str:
    """Escape HTML special characters."""
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;')
            .replace("'", '&#39;'))


def main():
    # File paths
    md_path = Path('D:/新课开发/制造/9-中层生产经营管理从生产管理到真经营/学员手册/学员手册_从生产管理到真经营.md')
    html_path = Path('D:/新课开发/制造/9-中层生产经营管理从生产管理到真经营/学员手册/学员手册_从生产管理到真经营.html')

    # Read markdown
    print(f'Reading markdown from: {md_path}')
    with open(md_path, 'r', encoding='utf-8') as f:
        markdown_content = f.read()

    # Convert to HTML
    print('Converting markdown to HTML...')
    html_content = markdown_to_html(markdown_content)

    # Write HTML
    print(f'Writing HTML to: {html_path}')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)

    print('Done!')


if __name__ == '__main__':
    main()
