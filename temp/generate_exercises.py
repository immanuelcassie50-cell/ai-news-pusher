#!/usr/bin/env python3
"""
Generate HTML exercise files from MD source files
"""
import os
import re

# Template for HTML with proper styling
HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {{
            --bg-primary: #F6F3EF;
            --bg-secondary: #FFFFFF;
            --bg-accent: #B81025;
            --text-primary: #1A1A1A;
            --text-secondary: #4A4A4A;
            --text-muted: #7A7A7A;
            --border-color: #E0DCD5;
            --shadow-soft: 0 2px 8px rgba(0,0,0,0.06);
        }}

        * {{ margin: 0; padding: 0; box-sizing: border-box; }}

        body {{
            font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.7;
            font-size: 14px;
        }}

        .page {{
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px;
            background: var(--bg-secondary);
            min-height: 100vh;
        }}

        @media print {{
            @page {{ size: A3 landscape; margin: 15mm; }}
            body {{ background: white; font-size: 12px; }}
            .page {{ padding: 20px; box-shadow: none; }}
            .answer-section {{ display: block !important; }}
            .print-hide, .answer-toggle {{ display: none !important; }}
        }}

        .header {{
            display: flex;
            align-items: center;
            gap: 24px;
            margin-bottom: 40px;
            padding-bottom: 24px;
            border-bottom: 3px solid var(--bg-accent);
        }}

        .header-badge {{
            background: var(--bg-accent);
            color: white;
            font-size: 24px;
            font-weight: 700;
            padding: 16px 24px;
            border-radius: 4px;
            font-family: 'Noto Serif SC', serif;
            letter-spacing: 2px;
        }}

        .header-title {{
            font-family: 'Noto Serif SC', serif;
            font-size: 32px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
        }}

        .header-subtitle {{
            font-size: 16px;
            color: var(--text-secondary);
        }}

        .meta-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 40px;
        }}

        .meta-card {{
            background: linear-gradient(135deg, #FAFAFA 0%, #F0EFED 100%);
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid var(--bg-accent);
        }}

        .meta-label {{
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-muted);
            margin-bottom: 6px;
        }}

        .meta-value {{
            font-size: 15px;
            font-weight: 500;
            color: var(--text-primary);
        }}

        .section {{
            margin-bottom: 48px;
        }}

        .section-header {{
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
        }}

        .section-number {{
            background: var(--bg-accent);
            color: white;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 16px;
        }}

        .section-title {{
            font-family: 'Noto Serif SC', serif;
            font-size: 22px;
            font-weight: 600;
            color: var(--text-primary);
        }}

        .question {{
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 28px;
            margin-bottom: 24px;
            box-shadow: var(--shadow-soft);
            position: relative;
            overflow: hidden;
        }}

        .question::before {{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--bg-accent);
        }}

        .question-number {{
            font-family: 'Noto Serif SC', serif;
            font-size: 14px;
            font-weight: 600;
            color: var(--bg-accent);
            margin-bottom: 12px;
        }}

        .question-text {{
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 16px;
            font-style: italic;
        }}

        .table-wrapper {{
            overflow-x: auto;
            margin: 20px 0;
        }}

        table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }}

        th, td {{
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }}

        th {{
            background: linear-gradient(135deg, #FAFAFA 0%, #F5F4F2 100%);
            font-weight: 600;
            color: var(--text-primary);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}

        td {{ color: var(--text-secondary); }}
        tr:hover td {{ background: #FAFAFA; }}

        .answer-section {{
            display: none;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px dashed var(--border-color);
        }}

        .answer-section.visible {{ display: block; }}

        .answer-toggle {{
            background: linear-gradient(135deg, var(--bg-accent) 0%, #D0122D 100%);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }}

        .answer-toggle:hover {{
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(184, 16, 37, 0.3);
        }}

        .guide-section {{
            background: linear-gradient(135deg, #FDFCFB 0%, #F8F7F5 100%);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 28px;
            margin-top: 40px;
        }}

        .guide-title {{
            font-family: 'Noto Serif SC', serif;
            font-size: 18px;
            font-weight: 600;
            color: var(--bg-accent);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }}

        .guide-title::before {{
            content: '';
            width: 4px;
            height: 24px;
            background: var(--bg-accent);
            border-radius: 2px;
        }}

        .page-footer {{
            margin-top: 60px;
            padding-top: 24px;
            border-top: 2px solid var(--border-color);
            text-align: center;
            color: var(--text-muted);
            font-size: 12px;
        }}

        @keyframes fadeIn {{
            from {{ opacity: 0; transform: translateY(10px); }}
            to {{ opacity: 1; transform: translateY(0); }}
        }}

        .section {{ animation: fadeIn 0.4s ease-out forwards; }}
        .section:nth-child(2) {{ animation-delay: 0.1s; }}
        .section:nth-child(3) {{ animation-delay: 0.2s; }}
        .section:nth-child(4) {{ animation-delay: 0.3s; }}
    </style>
</head>
<body>
    <div class="page">
        <header class="header">
            <div class="header-badge">{badge}</div>
            <div class="header-info">
                <h1 class="header-title">{title}</h1>
                <p class="header-subtitle">{subtitle}</p>
            </div>
        </header>

        {content}

        <footer class="page-footer">
            <p>管理者的AI课 · {footer}</p>
        </footer>
    </div>

    <script>
        function toggleAnswer(btn) {{
            const answerSection = btn.nextElementSibling;
            const isVisible = answerSection.classList.contains('visible');

            if (isVisible) {{
                answerSection.classList.remove('visible');
                btn.innerHTML = '<span>显示参考答案</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';
            }} else {{
                answerSection.classList.add('visible');
                btn.innerHTML = '<span>隐藏参考答案</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>';
            }}
        }}
    </script>
</body>
</html>'''


def md_to_html(md_content, badge, title, subtitle, footer):
    """Convert MD content to HTML"""

    # Extract meta info from MD
    meta_pattern = r'\*\*设计目的\*\*：([^\n]+)'
    purpose_match = re.search(meta_pattern, md_content)
    purpose = purpose_match.group(1) if purpose_match else ""

    meta_pattern2 = r'\*\*适用时机\*\*：([^\n]+)'
    timing_match = re.search(meta_pattern2, md_content)
    timing = timing_match.group(1) if timing_match else ""

    meta_pattern3 = r'\*\*建议用时\*\*：([^\n]+)'
    duration_match = re.search(meta_pattern3, md_content)
    duration = duration_match.group(1) if duration_match else ""

    meta_pattern4 = r'\*\*题目数量\*\*：([^\n]+)'
    count_match = re.search(meta_pattern4, md_content)
    count = count_match.group(1) if count_match else ""

    # Build meta grid
    meta_html = f'''
        <div class="meta-grid">
            <div class="meta-card">
                <div class="meta-label">设计目的</div>
                <div class="meta-value">{purpose}</div>
            </div>
            <div class="meta-card">
                <div class="meta-label">适用时机</div>
                <div class="meta-value">{timing}</div>
            </div>
            <div class="meta-card">
                <div class="meta-label">建议用时</div>
                <div class="meta-value">{duration}</div>
            </div>
            <div class="meta-card">
                <div class="meta-label">题目数量</div>
                <div class="meta-value">{count}</div>
            </div>
        </div>
    '''

    # Process content - convert markdown to HTML
    content = process_markdown(md_content)

    return HTML_TEMPLATE.format(
        badge=badge,
        title=title,
        subtitle=subtitle,
        content=meta_html + content,
        footer=footer
    )


def process_markdown(md):
    """Process markdown content to HTML"""
    html_parts = []

    lines = md.split('\n')
    i = 0
    in_table = False
    table_rows = []

    while i < len(lines):
        line = lines[i]

        # Skip meta lines
        if line.startswith('# ') or line.startswith('## 主题') or line.startswith('**设计目的**') or line.startswith('**适用时机**') or line.startswith('**题目数量**') or line.startswith('**练习方式**') or line.startswith('---'):
            i += 1
            continue

        # Section headers (##)
        if line.startswith('## '):
            section_title = line[3:].strip()
            html_parts.append(f'''
            <section class="section">
                <div class="section-header">
                    <div class="section-number">{len(html_parts) + 1}</div>
                    <h2 class="section-title">{section_title}</h2>
                </div>
            ''')
            i += 1
            continue

        # Question headers (### 题目)
        if line.startswith('### 题目') or line.startswith('### 参考答案'):
            html_parts.append('</section>')
            i += 1
            continue

        # Question (## 题目X)
        if line.startswith('## 题目') or (line.startswith('### ') and '场景' in line):
            question_title = line.replace('## ', '').replace('### ', '').strip()
            # Extract question number
            q_match = re.search(r'(\d+)', question_title)
            q_num = q_match.group(1) if q_match else ""
            html_parts.append(f'''
            <div class="question">
                <div class="question-number">{question_title}</div>
            ''')
            i += 1
            continue

        # Closing question div
        if line.startswith('---') and '<div class="question">' in '\n'.join(html_parts[-10:]):
            html_parts.append('</div>')
            i += 1
            continue

        # Answer section
        if '### 参考答案' in line:
            html_parts.append('''
                <button class="answer-toggle" onclick="toggleAnswer(this)">
                    <span>显示参考答案</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div class="answer-section">
            ''')
            i += 1
            continue

        # Close answer section on ---
        if line.startswith('---') and 'answer-section' in '\n'.join(html_parts[-5:]):
            html_parts.append('</div>')
            i += 1
            continue

        # Table processing
        if '|' in line and line.strip().startswith('|'):
            table_rows.append(line)
            i += 1
            continue
        elif table_rows:
            # Process table
            table_html = process_table(table_rows)
            html_parts.append(table_html)
            table_rows = []
            continue

        # Checkbox items
        if '- [ ]' in line or '- [' in line:
            checkbox_html = line.replace('- [ ]', '<input type="checkbox">').replace('- [x]', '<input type="checkbox" checked>')
            html_parts.append(f'<label class="checkbox-item">{checkbox_html}</label>')
            i += 1
            continue

        # Regular text
        if line.strip():
            # Clean markdown formatting
            clean_line = line.replace('**', '').replace('*', '').replace('`', '')
            if clean_line.strip():
                html_parts.append(f'<p>{clean_line}</p>')

        i += 1

    return '\n'.join(html_parts)


def process_table(rows):
    """Process markdown table to HTML"""
    if not rows:
        return ""

    html_parts = ['<div class="table-wrapper"><table>']

    for i, row in enumerate(rows):
        cells = [c.strip() for c in row.split('|')[1:-1]]

        if i == 0:  # Header
            html_parts.append('<thead><tr>')
            for cell in cells:
                html_parts.append(f'<th>{cell}</th>')
            html_parts.append('</tr></thead><tbody>')
        elif i == 1 and set(cells[0]) == {'-', ' ', ':'}:  # Separator row
            continue
        else:  # Body
            html_parts.append('<tr>')
            for cell in cells:
                html_parts.append(f'<td>{cell}</td>')
            html_parts.append('</tr>')

    html_parts.append('</tbody></table></div>')
    return '\n'.join(html_parts)


def main():
    source_dir = "D:/新课开发/管理者的AI课/B-AI改造管理动作-共读型教学文档/全流程练习题库-html打印版/"
    output_dir = "D:/新课开发/管理者的AI课/B-AI改造管理动作-共读型教学文档/完整课程包/练习题库/"

    files = [
        ("G1_开场暖场练习题.md", "G1", "开场暖场练习题", "AI与管理的基本认知建立", "开场暖场练习题 · G1"),
        ("G2_模块一练习_管理动作扫描.md", "G2", "模块一练习——管理动作扫描", "识别与评估管理动作的AI改造潜力", "模块一练习 · G2"),
        ("G3_模块二练习_三层框架应用.md", "G3", "模块二练习——三层框架应用", "运用三层框架分析管理场景与人机协作模式", "模块二练习 · G3"),
        ("G4_模块三练习_高频场景实战.md", "G4", "模块三练习——高频场景实战", "方案评审、述职汇报、信息整合", "模块三练习 · G4"),
        ("G5_模块四练习_高频场景实战二.md", "G5", "模块四练习——高频场景实战二", "绩效面谈、跨部门协调、会议纪要", "模块四练习 · G5"),
        ("G6_模块五练习_中频场景实战.md", "G6", "模块五练习——中频场景实战", "团队1:1沟通、员工问题处理、战略分解传递", "模块五练习 · G6"),
        ("G7_模块六练习_中频场景实战二.md", "G7", "模块六练习——中频场景实战二", "人才发展、危机处理、目标对齐", "模块六练习 · G7"),
        ("G8_课后作业_真实问题挑战.md", "G8", "课后作业——真实问题挑战", "将AI改造管理动作应用于真实工作场景的90天行动计划", "课后作业 · G8"),
        ("G9_讲师配套答案与评分标准.md", "G9", "讲师配套答案与评分标准", "为G1-G8所有练习提供参考答案、评分标准与讲师点评要点", "讲师配套答案 · G9"),
    ]

    for filename, badge, title, subtitle, footer in files:
        source_path = os.path.join(source_dir, filename)
        output_path = os.path.join(output_dir, filename.replace('.md', '.html'))

        print(f"Processing {filename}...")

        with open(source_path, 'r', encoding='utf-8') as f:
            md_content = f.read()

        html_content = md_to_html(md_content, badge, title, subtitle, footer)

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html_content)

        print(f"  -> Created {filename.replace('.md', '.html')}")

        # Also copy MD to output
        md_output = os.path.join(output_dir, filename)
        with open(source_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        with open(md_output, 'w', encoding='utf-8') as f:
            f.write(md_content)
        print(f"  -> Copied {filename}")

    print("\nAll files generated successfully!")


if __name__ == "__main__":
    main()