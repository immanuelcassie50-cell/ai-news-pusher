#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate HTML from Markdown for AI协同研发学员手册
Improved version with better parsing
"""

import re

def escape_html(text):
    """Escape HTML special characters"""
    return (text
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')
        .replace("'", '&#39;'))

def get_html_header():
    """Return HTML header with styles"""
    return '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI协同研发：工程师在AI辅助设计时代的能力重塑 - 学员手册</title>
    <style>
        :root {
            --bg-primary: #fafafa;
            --bg-secondary: #ffffff;
            --bg-accent: #f5f5f5;
            --title-color: #1a1a1a;
            --subtitle-color: #4a4a4a;
            --accent: #c41e3a;
            --accent-light: rgba(196, 30, 58, 0.08);
            --decorative: #e8e8e8;
            --text-primary: #2d2d2d;
            --text-secondary: #5a5a5a;
            --text-muted: #888888;
            --border-color: #d4d4d4;
            --shadow: rgba(0, 0, 0, 0.06);
            --font-family: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: var(--font-family);
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.8;
            font-size: 14px;
        }

        .container { max-width: 900px; margin: 0 auto; padding: 40px 24px; }

        .cover {
            text-align: center;
            padding: 80px 40px;
            background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
            border-bottom: 3px solid var(--accent);
            margin-bottom: 60px;
            position: relative;
        }

        .cover::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 4px;
            background: var(--accent);
        }

        .cover-badge {
            display: inline-block;
            background: var(--accent);
            color: white;
            padding: 6px 20px;
            font-size: 12px;
            letter-spacing: 2px;
            margin-bottom: 30px;
        }

        .cover h1 {
            font-size: 32px;
            color: var(--title-color);
            font-weight: 700;
            margin-bottom: 16px;
            line-height: 1.4;
        }

        .cover h2 {
            font-size: 18px;
            color: var(--subtitle-color);
            font-weight: 400;
            margin-bottom: 40px;
        }

        .cover-meta {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            max-width: 500px;
            margin: 0 auto;
            text-align: left;
            font-size: 13px;
            color: var(--text-secondary);
        }

        .cover-meta-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .cover-meta-label {
            font-weight: 600;
            color: var(--text-primary);
            white-space: nowrap;
        }

        .cover-quote {
            margin-top: 40px;
            padding: 24px 32px;
            background: var(--accent-light);
            border-left: 4px solid var(--accent);
            font-style: italic;
            color: var(--subtitle-color);
        }

        .section {
            background: var(--bg-secondary);
            border-radius: 4px;
            padding: 40px;
            margin-bottom: 32px;
            box-shadow: 0 1px 3px var(--shadow);
        }

        .section-intro { background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-accent) 100%); }

        h1 { font-size: 26px; color: var(--title-color); margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid var(--decorative); }
        h2 { font-size: 20px; color: var(--title-color); margin: 32px 0 20px; padding-bottom: 8px; border-bottom: 1px solid var(--decorative); }
        h3 { font-size: 16px; color: var(--subtitle-color); margin: 24px 0 12px; font-weight: 600; }
        h4 { font-size: 14px; color: var(--accent); margin: 20px 0 10px; font-weight: 600; }

        .chapter { margin-bottom: 48px; }

        .chapter-header {
            text-align: center;
            padding: 40px;
            background: var(--bg-secondary);
            border-radius: 4px;
            margin-bottom: 32px;
            position: relative;
            overflow: hidden;
        }

        .chapter-header::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--accent), #8b1538);
        }

        .chapter-label { font-size: 12px; color: var(--accent); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px; }
        .chapter-title { font-size: 24px; color: var(--title-color); margin-bottom: 8px; }
        .chapter-subtitle { font-size: 14px; color: var(--text-muted); }

        .layer-header {
            text-align: center;
            padding: 60px 40px;
            background: var(--bg-secondary);
            border-radius: 4px;
            margin: 40px 0;
            position: relative;
        }

        .layer-header::before, .layer-header::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 2px;
            background: var(--accent);
        }

        .layer-header::before { top: 20px; }
        .layer-header::after { bottom: 20px; }

        .layer-title { font-size: 22px; color: var(--title-color); margin-bottom: 16px; }
        .layer-quote { font-style: italic; color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.8; }

        blockquote {
            margin: 24px 0;
            padding: 20px 24px;
            background: var(--accent-light);
            border-left: 4px solid var(--accent);
            color: var(--subtitle-color);
            border-radius: 0 4px 4px 0;
        }

        blockquote p { margin: 0; }
        blockquote.tip { background: rgba(76, 175, 80, 0.08); border-left-color: #4CAF50; }
        blockquote.warning { background: rgba(255, 152, 0, 0.08); border-left-color: #FF9800; }

        table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
        th { background: var(--bg-accent); padding: 12px 16px; text-align: left; font-weight: 600; color: var(--subtitle-color); border-bottom: 2px solid var(--border-color); }
        td { padding: 12px 16px; border-bottom: 1px solid var(--decorative); vertical-align: top; }
        tr:hover { background: var(--bg-accent); }
        td:first-child { font-weight: 500; }

        .form-box {
            background: var(--bg-accent);
            border: 1px solid var(--decorative);
            border-radius: 4px;
            padding: 24px;
            margin: 24px 0;
        }

        .form-title {
            font-size: 15px;
            font-weight: 600;
            color: var(--accent);
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .form-title::before {
            content: '';
            width: 4px;
            height: 18px;
            background: var(--accent);
            border-radius: 2px;
        }

        .form-instructions {
            background: var(--bg-secondary);
            padding: 16px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 13px;
            line-height: 1.6;
        }

        .form-instructions p { margin: 8px 0; }
        .form-instructions strong { color: var(--accent); }

        .exercise {
            background: var(--bg-secondary);
            border: 1px solid var(--decorative);
            border-radius: 4px;
            padding: 24px;
            margin: 24px 0;
        }

        .exercise-title { font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 16px; }

        .exercise-box {
            background: var(--bg-accent);
            border: 1px dashed var(--border-color);
            border-radius: 4px;
            padding: 16px;
            margin: 12px 0;
            min-height: 80px;
        }

        .knowledge-framework {
            background: var(--bg-accent);
            border-radius: 4px;
            padding: 24px;
            margin: 24px 0;
            font-family: "Consolas", "Monaco", monospace;
            font-size: 12px;
            line-height: 1.6;
            overflow-x: auto;
            white-space: pre;
        }

        .commitment {
            background: linear-gradient(135deg, var(--accent-light) 0%, var(--bg-secondary) 100%);
            border: 2px solid var(--accent);
            border-radius: 4px;
            padding: 24px;
            margin: 24px 0;
        }

        .commitment-title { font-weight: 600; color: var(--accent); margin-bottom: 12px; }
        .commitment-lines { font-family: "Consolas", "Monaco", monospace; font-size: 12px; line-height: 2; }

        .course-map { background: var(--bg-accent); border-radius: 4px; padding: 24px; margin: 24px 0; overflow-x: auto; }
        .course-map pre { font-family: "Consolas", "Monaco", monospace; font-size: 11px; line-height: 1.4; margin: 0; }

        ul, ol { margin: 16px 0; padding-left: 24px; }
        li { margin: 8px 0; }
        p { margin: 16px 0; }

        .key-point { display: flex; align-items: flex-start; gap: 12px; margin: 16px 0; padding: 16px; background: var(--bg-secondary); border-radius: 4px; }
        .key-point-icon { width: 24px; height: 24px; background: var(--accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; }
        .key-point-content { flex: 1; }
        .key-point-title { font-weight: 600; color: var(--title-color); margin-bottom: 4px; }

        @media print {
            @page { size: A4; margin: 20mm 15mm; }
            body { font-size: 12px; background: white; }
            .container { max-width: 100%; padding: 0; }
            .section { box-shadow: none; border: 1px solid #ddd; page-break-inside: avoid; }
            .chapter { page-break-before: always; }
            .chapter:first-of-type { page-break-before: avoid; }
            .cover { page-break-after: always; margin-bottom: 40px; }
            h1, h2, h3, h4 { page-break-after: avoid; }
            table { page-break-inside: avoid; }
            .exercise, .form-box, .knowledge-framework, .commitment { page-break-inside: avoid; }
            .no-print { display: none !important; }
        }

        .page-break-before { page-break-before: always; }
        .page-break-after { page-break-after: always; }

        .appendix { background: var(--bg-secondary); border-top: 3px solid var(--accent); padding-top: 32px; margin-top: 48px; }
        .appendix h1 { text-align: center; font-size: 22px; }

        .copyright { text-align: center; padding: 40px; color: var(--text-muted); font-size: 12px; border-top: 1px solid var(--decorative); margin-top: 48px; }

        .principle { background: var(--bg-secondary); border-left: 4px solid var(--accent); padding: 16px 20px; margin: 16px 0; border-radius: 0 4px 4px 0; }
        .principle-title { font-weight: 600; color: var(--accent); margin-bottom: 8px; }

        .matrix-container { background: var(--bg-accent); padding: 24px; border-radius: 4px; margin: 24px 0; text-align: center; }
        .matrix-container pre { font-family: "Consolas", "Monaco", monospace; font-size: 11px; line-height: 1.3; display: inline-block; text-align: left; }

        .target-list { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
        .target-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: var(--bg-secondary); border-radius: 4px; }
        .target-number { width: 28px; height: 28px; background: var(--accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0; }

        strong { color: var(--title-color); }
        .accent-text { color: var(--accent); }

        .nav-box { background: var(--bg-accent); border-radius: 4px; padding: 16px 20px; margin: 20px 0; display: flex; align-items: center; gap: 12px; }
        .nav-box-icon { font-size: 20px; }
        .nav-box-title { font-weight: 600; color: var(--subtitle-color); font-size: 13px; }

        .closing { text-align: center; padding: 60px 40px; background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%); }
        .closing-quote { font-size: 16px; color: var(--subtitle-color); font-style: italic; max-width: 600px; margin: 0 auto 32px; line-height: 1.8; }

        .fill-line { display: inline-block; min-width: 200px; border-bottom: 1px solid var(--text-muted); margin: 0 8px; }
        .inline-fill { display: inline-block; min-width: 80px; border-bottom: 1px solid var(--text-muted); }
    </style>
</head>
<body>
    <div class="container">
'''

def get_html_footer():
    """Return HTML footer"""
    return '''
    </div>
</body>
</html>
'''

def process_inline(text):
    """Process inline markdown elements"""
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    return text

def parse_table_lines(table_lines):
    """Parse markdown table lines into HTML"""
    html_parts = []
    header_parsed = False

    for tl in table_lines:
        cells = [c.strip() for c in tl.split('|')[1:-1]]

        # Skip separator rows (|---|---|)
        if all(c in ['---', ':', '', '|'] for c in cells):
            continue

        # Also skip rows that are all dashes or contain only ---
        if not any(c for c in cells if c and c != '---' and c != ':'):
            continue

        if not header_parsed:
            html_parts.append('<thead><tr>')
            for c in cells:
                if c and c != '---' and c != ':':
                    html_parts.append(f'<th>{c}</th>')
            html_parts.append('</tr></thead><tbody>')
            header_parsed = True
        else:
            html_parts.append('<tr>')
            for c in cells:
                html_parts.append(f'<td>{c}</td>')
            html_parts.append('</tr>')

    html_parts.append('</tbody>')
    return ''.join(html_parts)

def md_to_html(md_content):
    """Main conversion function"""
    html_header = get_html_header()
    html_footer = get_html_footer()

    lines = md_content.split('\n')
    result = []
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            i += 1
            continue

        # Main title
        if stripped.startswith('# AI协同研发'):
            result.append('<div class="cover">')
            result.append('    <div class="cover-badge">学员手册</div>')
            result.append('    <h1>AI协同研发：工程师在AI辅助设计时代的能力重塑</h1>')
            result.append('    <h2>学员手册</h2>')
            i += 1
            continue

        # Meta info lines
        if '**学员姓名：**' in stripped or '**所在团队：**' in stripped or '**课程日期：**' in stripped or '**课程讲师：**' in stripped:
            if '<div class="cover-meta">' not in result[-1] if result else True:
                result.append('<div class="cover-meta">')

            if '：**' in stripped:
                parts = stripped.split('　　')
                for p in parts:
                    if '：**' in p:
                        k = p.split('：**')[0].replace('**', '')
                        result.append(f'    <div class="cover-meta-item"><span class="cover-meta-label">{k}：</span><span class="fill-line"></span></div>')
            i += 1
            if '课程讲师' in stripped:
                result.append('</div>')
            continue

        # Cover quote
        if stripped.startswith('> *') and stripped.endswith('*'):
            quote = stripped[3:-1]
            result.append(f'<div class="cover-quote"><p>{quote}</p></div>')
            result.append('</div>')
            result.append('<div class="section section-intro">')
            i += 1
            continue

        # Section headers
        if stripped.startswith('## 如何使用这本手册'):
            result.append('<h2>如何使用这本手册</h2>')
            i += 1
            continue

        if stripped.startswith('## 引言'):
            result.append('</div>')
            result.append('<h2>引言：在我们开始之前</h2>')
            i += 1
            continue

        if stripped.startswith('## 第一层：私人胜利'):
            result.append('</div>')
            result.append('<div class="layer-header page-break-before">')
            result.append('    <div class="layer-title">第一层：私人胜利</div>')
            result.append('    <div class="layer-quote">"改变外部世界之前，先改变内部世界。"<br><br>在你跟 AI 说第一行 Prompt 之前，你对自己的回答决定了协作的质量上限。习惯 1-3，是建立内在清晰的过程。</div>')
            result.append('</div>')
            i += 1
            continue

        if stripped.startswith('## 第二层：公共胜利'):
            result.append('<div class="layer-header page-break-before">')
            result.append('    <div class="layer-title">第二层：公共胜利</div>')
            result.append('    <div class="layer-quote">"内在的清晰是起点。真正的价值，在你和 AI 协作的每一次具体动作里产生。"<br><br>知道了"我是谁、我要什么、我的价值在哪里"——现在，让我们学会怎么高质量地把这些转化为真实的产出。习惯 4-6，是协作技术的三层进阶。</div>')
            result.append('</div>')
            i += 1
            continue

        if stripped.startswith('## 第三层：系统胜利'):
            result.append('<div class="layer-header page-break-before">')
            result.append('    <div class="layer-title">第三层：系统胜利</div>')
            result.append('    <div class="layer-quote">"前六个习惯，决定每次协作的质量。第七、第八个习惯，决定这些质量能不能积累成团队的系统优势。"</div>')
            result.append('</div>')
            i += 1
            continue

        if stripped.startswith('## 课程收尾'):
            result.append('<div class="section page-break-before">')
            result.append('<h2>课程收尾：我的 AI 协同研发系统</h2>')
            i += 1
            continue

        if stripped.startswith('## 附录一') or stripped.startswith('## 附录二'):
            result.append('</div>' if result and '</div>' not in result[-1] else '')
            result.append('<div class="appendix">')
            result.append(f'<h1>{stripped.replace("## ", "")}</h1>')
            i += 1
            continue

        # Chapter headers - more flexible regex
        chapter_match = re.match(r'## 第(.+?)章　习惯 (.+?)：(.+)', stripped)
        if chapter_match:
            ch_num = chapter_match.group(1)
            hab_num = chapter_match.group(2)
            hab_name = chapter_match.group(3)
            result.append('<div class="chapter-header page-break-before">')
            result.append(f'    <div class="chapter-label">第{ch_num}章</div>')
            result.append(f'    <div class="chapter-title">习惯 {hab_num}：{hab_name}</div>')
            i += 1
            # Check for subtitle
            if i < len(lines):
                next_line = lines[i].strip()
                if next_line and not next_line.startswith('#') and not next_line.startswith('###') and not next_line.startswith('>') and not next_line.startswith('*'):
                    result.append(f'    <div class="chapter-subtitle">{next_line}</div>')
                    i += 1
            result.append('</div>')
            continue

        # Section dividers
        if stripped.startswith('### ') and any(kw in stripped for kw in ['本章学习目标', '内容导航', '本章练习', '本章知识框架']):
            title = stripped.replace('### ', '').strip()
            result.append(f'<h3>{title}</h3>')
            i += 1
            continue

        # Knowledge points
        if stripped.startswith('### 知识点'):
            title = stripped.replace('### ', '').strip()
            result.append(f'<h4>{title}</h4>')
            i += 1
            continue

        # Sub-knowledge points
        if stripped.startswith('**') and '：**' in stripped:
            title = process_inline(stripped)
            result.append(f'<p><strong>{title[3:-3]}</strong></p>')
            i += 1
            continue

        # Blockquotes
        if stripped.startswith('> '):
            content = process_inline(stripped[2:])
            result.append(f'<blockquote><p>{content}</p></blockquote>')
            i += 1
            continue

        # Course map
        if '╔' in stripped and '║' in stripped:
            map_lines = []
            while i < len(lines) and '║' in lines[i]:
                map_lines.append(lines[i])
                i += 1
            result.append('<div class="course-map"><pre>' + '\n'.join(map_lines) + '</pre></div>')
            continue

        # Tables
        if stripped.startswith('|'):
            table_lines = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                table_lines.append(lines[i].strip())
                i += 1
            result.append('<table>')
            result.append(parse_table_lines(table_lines))
            result.append('</table>')
            continue

        # Forms
        if '【表单' in stripped and '】' in stripped:
            form_title = stripped.replace('### ', '').strip()
            result.append('<div class="form-box">')
            result.append(f'<div class="form-title">{form_title}</div>')
            i += 1

            # Collect form instructions
            instr_lines = []
            while i < len(lines):
                l = lines[i].strip()
                if l.startswith('> **填写说明：**') or l.startswith('> - **') or l.startswith('> **目的**：') or l.startswith('> **要求**：') or l.startswith('> **时间**：') or l.startswith('> **提示**：'):
                    # Clean the instruction line
                    l = l.replace('> ', '').replace('**填写说明：**', '<strong>填写说明：</strong>').replace('**目的**：', '<strong>目的：</strong>').replace('**要求**：', '<strong>要求：</strong>').replace('**时间**：', '<strong>时间：</strong>').replace('**提示**：', '<strong>提示：</strong>')
                    l = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', l)
                    instr_lines.append(f'<p>{l}</p>')
                    i += 1
                elif l.startswith('> - '):
                    l = l.replace('> ', '').replace('- ', '')
                    instr_lines.append(f'<p>{l}</p>')
                    i += 1
                elif l == '>' or l == '':
                    i += 1
                    break
                else:
                    break

            if instr_lines:
                result.append(f'<div class="form-instructions">{"".join(instr_lines)}</div>')
            continue

        # Exercise sections
        if stripped.startswith('**练习') and '（' in stripped:
            exercise_name = stripped.replace('**', '').strip()
            result.append('<div class="exercise">')
            result.append(f'<div class="exercise-title">{exercise_name}</div>')
            i += 1
            continue

        # Knowledge framework (starts with ``` and contains ├──)
        if stripped.startswith('```') or (i < len(lines) and '习惯' in lines[i] and ('├──' in lines[i] or '└──' in lines[i])):
            if i < len(lines) and ('习惯' in lines[i] and ('├──' in lines[i] or '└──' in lines[i] or '│' in lines[i])):
                framework_lines = []
                while i < len(lines) and not lines[i].strip().startswith('```'):
                    framework_lines.append(lines[i])
                    i += 1
                i += 1  # closing ```
                result.append('<div class="knowledge-framework">' + '\n'.join(framework_lines) + '</div>')
                continue

        # Commitment blocks
        if '从今天起，我承诺' in stripped:
            commitment_lines = []
            while i < len(lines):
                l = lines[i].strip()
                if l.startswith('```') or l.startswith('##') or l.startswith('# 附录'):
                    break
                if l:
                    commitment_lines.append(l)
                i += 1
            result.append('<div class="commitment">')
            result.append('<div class="commitment-title">本章行为承诺：</div>')
            result.append('<div class="commitment-lines">' + '<br>'.join(commitment_lines) + '</div>')
            result.append('</div>')
            continue

        # Exercise boxes (``` ... ```)
        if stripped.startswith('```'):
            box_lines = []
            i += 1
            while i < len(lines) and not lines[i].strip().startswith('```'):
                box_lines.append(lines[i])
                i += 1
            box_content = '<br>'.join(box_lines)
            result.append(f'<div class="exercise-box">{box_content}</div>')
            i += 1
            continue

        # Closing section
        if '致出发的你' in stripped:
            result.append('<div class="closing">')
            result.append(f'<h2>{stripped.replace("# ", "")}</h2>')
            i += 1
            continue

        # Copyright
        if '版权所有' in stripped:
            result.append('</div>' if result and '<div class="closing">' in result[-1] else '')
            result.append(f'<div class="copyright">{stripped}</div>')
            i += 1
            continue

        # Regular paragraphs
        if stripped:
            processed = process_inline(stripped)
            result.append(f'<p>{processed}</p>')

        i += 1

    return html_header + '\n'.join(result) + html_footer

def main():
    input_file = 'D:/新课开发/专精特新/07AI研发效能提升工程师能力重塑/学员手册/学员手册_AI协同研发.md'
    output_file = 'D:/新课开发/专精特新/07AI研发效能提升工程师能力重塑/学员手册/学员手册_AI协同研发.html'

    with open(input_file, 'r', encoding='utf-8') as f:
        md_content = f.read()

    html_content = md_to_html(md_content)

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_content)

    print(f"HTML file created: {output_file}")
    print(f"File size: {len(html_content)} bytes")

if __name__ == '__main__':
    main()
