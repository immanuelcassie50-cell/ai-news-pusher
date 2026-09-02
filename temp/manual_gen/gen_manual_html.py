# -*- coding: utf-8 -*-
"""
生成学员手册 HTML 可视化版
长滚动单页 + 现代杂志风格
"""
import os
import re

OUT_HTML = r'D:\2026年课程\竞越\打造组织创新力：营造创新土壤\完整课程包\04_学员手册\学员手册_HTML可视化版.html'
os.makedirs(os.path.dirname(OUT_HTML), exist_ok=True)

# 读取 3 个 md 源文件
SRC_1 = r'D:\2026年课程\竞越\打造组织创新力：营造创新土壤\完整课程包\04_学员手册\学员手册_第1-10页.md'
SRC_2 = r'D:\2026年课程\竞越\打造组织创新力：营造创新土壤\完整课程包\04_学员手册\学员手册_第11-26页.md'
SRC_3 = r'D:\2026年课程\竞越\打造组织创新力：营造创新土壤\完整课程包\04_学员手册\学员手册_第27-32页.md'

with open(SRC_1, 'r', encoding='utf-8') as f:
    md1 = f.read()
with open(SRC_2, 'r', encoding='utf-8') as f:
    md2 = f.read()
with open(SRC_3, 'r', encoding='utf-8') as f:
    md3 = f.read()


def md_to_html(md_text):
    """简易 Markdown → HTML 转换（够用即可）"""
    lines = md_text.split('\n')
    out = []
    in_table = False
    in_list = False
    in_callout = False
    table_rows = []

    def close_table():
        nonlocal in_table, table_rows
        if in_table and table_rows:
            out.append('<table class="data-table">')
            if table_rows:
                # 表头
                out.append('<thead><tr>')
                for cell in table_rows[0]:
                    out.append(f'<th>{cell.strip()}</th>')
                out.append('</tr></thead>')
                # 表体
                if len(table_rows) > 1:
                    out.append('<tbody>')
                    for row in table_rows[1:]:
                        out.append('<tr>')
                        for cell in row:
                            out.append(f'<td>{cell.strip()}</td>')
                        out.append('</tr>')
                    out.append('</tbody>')
            out.append('</table>')
            table_rows = []
        in_table = False

    def close_list():
        nonlocal in_list
        if in_list:
            out.append('</ul>')
            in_list = False

    def close_callout():
        nonlocal in_callout
        if in_callout:
            out.append('</div>')
            in_callout = False

    for line in lines:
        s = line.rstrip()

        # 空行
        if not s.strip():
            close_table()
            close_list()
            close_callout()
            out.append('')
            continue

        # 引用块
        if s.strip().startswith('> '):
            close_table()
            close_list()
            content = s.strip()[2:].strip()
            if not in_callout:
                out.append('<div class="callout">')
                in_callout = True
            out.append(f'<p>{content}</p>')
            continue
        else:
            close_callout()

        # 标题
        if s.startswith('# '):
            close_table()
            close_list()
            title = s[2:].strip()
            out.append(f'<h1>{title}</h1>')
            continue
        if s.startswith('## '):
            close_table()
            close_list()
            title = s[3:].strip()
            out.append(f'<h2>{title}</h2>')
            continue
        if s.startswith('### '):
            close_table()
            close_list()
            title = s[4:].strip()
            out.append(f'<h3>{title}</h3>')
            continue

        # 表格行
        if '|' in s and s.strip().startswith('|'):
            cells = [c for c in s.split('|')[1:-1]]
            # 跳过分隔行
            if all(re.match(r'^[-:]+$', c.strip()) for c in cells):
                continue
            if not in_table:
                in_table = True
                table_rows = []
            table_rows.append(cells)
            continue
        else:
            close_table()

        # 列表
        if s.lstrip().startswith('- '):
            close_table()
            if not in_list:
                out.append('<ul>')
                in_list = True
            content = s.lstrip()[2:].strip()
            out.append(f'<li>{content}</li>')
            continue
        elif s.lstrip().startswith(('1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')) and '.' in s[:4]:
            close_table()
            if not in_list:
                out.append('<ol>')
                in_list = True
            content = s.lstrip()
            # 移除编号
            content = re.sub(r'^\d+\.\s*', '', content)
            out.append(f'<li>{content}</li>')
            continue
        else:
            close_list()

        # 普通段落
        if s.startswith('   ') or s.startswith('  '):
            # 缩进段落
            out.append(f'<p class="indent">{s.strip()}</p>')
        else:
            # 加粗转换
            s2 = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
            # 斜体
            s2 = re.sub(r'\*(.+?)\*', r'<em>\1</em>', s2)
            # emoji 处理
            out.append(f'<p>{s2}</p>')

    close_table()
    close_list()
    close_callout()

    return '\n'.join(out)


html_1 = md_to_html(md1)
html_2 = md_to_html(md2)
html_3 = md_to_html(md3)


HTML = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>打造组织创新力：营造创新土壤 · 学员手册</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
<style>
:root {{
    --color-deep-blue: #1A2E4C;
    --color-vermilion: #C8442A;
    --color-paper: #F5F0E6;
    --color-ochre: #B8893A;
    --color-text: #2A2A2A;
    --color-text-soft: #555555;
    --color-line: #D5CFC0;
    --color-line-soft: #E8E2D5;
    --color-card-bg: #FBF7EE;
    --color-good: #2E7D32;
    --color-warn: #B8893A;
    --color-bad: #C8442A;
}}

* {{ box-sizing: border-box; margin: 0; padding: 0; }}

html {{ scroll-behavior: smooth; }}

body {{
    font-family: 'Noto Serif SC', '思源宋体', 'Source Han Serif SC', serif;
    background: var(--color-paper);
    color: var(--color-text);
    line-height: 1.7;
    font-size: 16px;
}}

/* 顶部封面 */
.cover {{
    min-height: 100vh;
    background: linear-gradient(135deg, #1A2E4C 0%, #2A4270 60%, #C8442A 130%);
    color: #FBF7EE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px 24px;
    position: relative;
    overflow: hidden;
}}

.cover::before {{
    content: '';
    position: absolute;
    top: 8%;
    right: 8%;
    width: 320px;
    height: 320px;
    border: 1px solid rgba(251, 247, 238, 0.2);
    border-radius: 50%;
    animation: rotate 60s linear infinite;
}}

.cover::after {{
    content: '';
    position: absolute;
    bottom: 12%;
    left: 8%;
    width: 220px;
    height: 220px;
    border: 1px solid rgba(251, 247, 238, 0.15);
    border-radius: 50%;
    animation: rotate 40s linear infinite reverse;
}}

@keyframes rotate {{
    from {{ transform: rotate(0); }}
    to {{ transform: rotate(360deg); }}
}}

.cover-tag {{
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 14px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: var(--color-ochre);
    margin-bottom: 32px;
    z-index: 2;
    font-weight: 500;
}}

.cover h1 {{
    font-size: 88px;
    font-weight: 900;
    letter-spacing: 8px;
    margin-bottom: 16px;
    z-index: 2;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}}

.cover h2 {{
    font-size: 56px;
    font-weight: 700;
    color: var(--color-vermilion);
    margin-bottom: 32px;
    z-index: 2;
}}

.cover-subtitle {{
    font-size: 22px;
    font-weight: 400;
    color: rgba(251, 247, 238, 0.9);
    margin-bottom: 80px;
    z-index: 2;
    font-style: italic;
}}

.cover-meta {{
    z-index: 2;
    display: flex;
    gap: 64px;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
}}

.cover-meta-item {{
    text-align: center;
}}

.cover-meta-item .label {{
    color: var(--color-ochre);
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 8px;
}}

.cover-meta-item .value {{
    font-size: 18px;
    font-weight: 700;
    color: #FBF7EE;
}}

.cover-scroll {{
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(251, 247, 238, 0.5);
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 12px;
    letter-spacing: 4px;
    animation: bounce 2s infinite;
    z-index: 2;
}}

@keyframes bounce {{
    0%, 100% {{ transform: translate(-50%, 0); }}
    50% {{ transform: translate(-50%, 8px); }}
}}

/* 主体容器 */
main {{
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 32px 80px;
}}

/* 章节区块 */
section {{
    margin: 80px 0;
    padding: 56px 64px;
    background: var(--color-card-bg);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    border-left: 6px solid var(--color-deep-blue);
    position: relative;
}}

section:nth-child(odd) {{
    border-left-color: var(--color-vermilion);
}}

section::before {{
    content: attr(data-page);
    position: absolute;
    top: -16px;
    left: 32px;
    background: var(--color-deep-blue);
    color: #FBF7EE;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 4px;
    padding: 6px 18px;
    border-radius: 2px;
}}

section h1 {{
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 36px;
    color: var(--color-deep-blue);
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--color-line);
    font-weight: 700;
}}

section h2 {{
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 24px;
    color: var(--color-vermilion);
    margin: 32px 0 16px;
    font-weight: 700;
}}

section h3 {{
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 18px;
    color: var(--color-deep-blue);
    margin: 24px 0 12px;
    font-weight: 700;
    padding-left: 14px;
    border-left: 3px solid var(--color-ochre);
}}

section p {{
    margin: 12px 0;
    color: var(--color-text);
}}

section p.indent {{
    padding-left: 28px;
    color: var(--color-text-soft);
    font-size: 15px;
}}

section ul, section ol {{
    padding-left: 28px;
    margin: 12px 0;
}}

section li {{
    margin: 8px 0;
    color: var(--color-text);
}}

/* 引用块（侧边色条）*/
.callout {{
    background: rgba(184, 137, 58, 0.08);
    border-left: 4px solid var(--color-ochre);
    padding: 20px 28px;
    margin: 24px 0;
    border-radius: 0 4px 4px 0;
}}

.callout p {{
    margin: 0;
    color: var(--color-text-soft);
    font-style: italic;
}}

.callout p + p {{
    margin-top: 8px;
}}

/* 表格 */
.data-table {{
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 14px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}}

.data-table th {{
    background: var(--color-deep-blue);
    color: #FBF7EE;
    padding: 12px 16px;
    text-align: left;
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
}}

.data-table td {{
    padding: 12px 16px;
    border-bottom: 1px solid var(--color-line-soft);
}}

.data-table tr:nth-child(even) td {{
    background: rgba(245, 240, 230, 0.4);
}}

.data-table tr:hover td {{
    background: rgba(184, 137, 58, 0.06);
}}

/* 强强调 */
strong {{
    color: var(--color-vermilion);
    font-weight: 700;
}}

em {{
    color: var(--color-ochre);
    font-style: italic;
}}

/* 总结区 */
.summary {{
    background: linear-gradient(135deg, var(--color-deep-blue) 0%, #2A4270 100%);
    color: #FBF7EE;
    padding: 64px;
    border-radius: 4px;
    margin: 80px 0;
    text-align: center;
}}

.summary h2 {{
    color: var(--color-ochre);
    font-size: 28px;
    margin-bottom: 24px;
    border: none;
}}

.summary p {{
    color: #FBF7EE;
    font-size: 20px;
    line-height: 1.8;
    font-style: italic;
}}

.summary .key {{
    color: var(--color-vermilion);
    font-weight: 700;
}}

/* 页面分隔的章节编号 */
.page-num {{
    display: inline-block;
    background: var(--color-ochre);
    color: white;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 2px;
    margin-bottom: 16px;
    letter-spacing: 3px;
}}

/* 页脚 */
footer {{
    background: var(--color-deep-blue);
    color: rgba(251, 247, 238, 0.7);
    padding: 40px 32px;
    text-align: center;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
}}

footer .footer-line {{
    margin: 8px 0;
}}

footer .footer-title {{
    color: var(--color-ochre);
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
}}

/* 打印优化 */
@media print {{
    body {{
        background: white;
        font-size: 11pt;
    }}
    .cover {{
        page-break-after: always;
    }}
    section {{
        page-break-inside: avoid;
        page-break-after: always;
        border-radius: 0;
        box-shadow: none;
        border-left: 3px solid var(--color-deep-blue);
    }}
    .summary {{
        page-break-inside: avoid;
    }}
    .callout {{
        page-break-inside: avoid;
    }}
    .data-table {{
        page-break-inside: avoid;
    }}
    footer {{
        page-break-before: always;
    }}
}}

/* 响应式 */
@media (max-width: 768px) {{
    .cover h1 {{ font-size: 56px; letter-spacing: 4px; }}
    .cover h2 {{ font-size: 36px; }}
    .cover-subtitle {{ font-size: 16px; }}
    .cover-meta {{ flex-direction: column; gap: 16px; }}
    main {{ padding: 0 16px 40px; }}
    section {{ padding: 32px 20px; margin: 40px 0; }}
    section h1 {{ font-size: 24px; }}
    section h2 {{ font-size: 18px; }}
}}
</style>
</head>
<body>

<!-- ============ 封面 ============ -->
<div class="cover">
    <div class="cover-tag">STUDENT HANDBOOK · v1.0</div>
    <h1>打造组织创新力</h1>
    <h2>营造创新土壤</h2>
    <div class="cover-subtitle">—— 拉开组织创新的序章 ——</div>
    <div class="cover-meta">
        <div class="cover-meta-item">
            <div class="label">DURATION</div>
            <div class="value">380 分钟</div>
        </div>
        <div class="cover-meta-item">
            <div class="label">INSTRUCTOR</div>
            <div class="value">罗宏伟 · 竞越</div>
        </div>
        <div class="cover-meta-item">
            <div class="label">EDITION</div>
            <div class="value">v1.0 · 2026</div>
        </div>
    </div>
    <div class="cover-scroll">↓ 滚 动 翻 阅</div>
</div>

<!-- ============ 主体内容 ============ -->
<main>

<!-- === 第 1-10 页 === -->
<section data-page="第 1 - 10 页 · 开场 + 模块一 + 模块二">
{html_1}
</section>

<!-- === 第 11-26 页 === -->
<section data-page="第 11 - 26 页 · 模块三 + 模块四">
{html_2}
</section>

<!-- === 第 27-32 页 === -->
<section data-page="第 27 - 32 页 · 模块五 + 收尾">
{html_3}
</section>

<!-- === 总结金句 === -->
<div class="summary">
    <h2>📖 学员手册 · 一句话总结</h2>
    <p>
        "答案不在<span class="key">员工不努力</span>，<br>
        而在<span class="key">领导者</span>把自己当成了<span class="key">"种子"</span>。<br><br>
        把自己变成<span class="key">"土壤"</span>——<br>
        提供<span class="key">心理安全</span>、<span class="key">响应机制</span>、<span class="key">容错文化</span>，<br>
        员工自然会生长出<span class="key">创新</span>。"
    </p>
</div>

</main>

<footer>
    <div class="footer-title">打造组织创新力 · 营造创新土壤</div>
    <div class="footer-line">学员手册 HTML 可视化版 · v1.0</div>
    <div class="footer-line">主讲 罗宏伟 · 竞越 · 2026</div>
    <div class="footer-line" style="margin-top: 16px; font-size: 11px; color: rgba(251, 247, 238, 0.4);">
        完整课程包路径：完整课程包/04_学员手册/
    </div>
</footer>

</body>
</html>
'''

with open(OUT_HTML, 'w', encoding='utf-8') as f:
    f.write(HTML)

print(f'OK: {OUT_HTML}')
print(f'Size: {os.path.getsize(OUT_HTML)} bytes')
