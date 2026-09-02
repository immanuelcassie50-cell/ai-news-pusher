#!/usr/bin/env python3
"""
Convert course markdown files to styled HTML with red-gray-white theme
"""

import os
import markdown
from pathlib import Path

# Color scheme
RED = "#C41E3A"
RED_LIGHT = "#FAF0F1"
RED_GHOST = "rgba(196, 30, 58, 0.06)"
INK = "#1A1A1A"
GRAY_70 = "#4A4A4A"
GRAY_50 = "#7A7678"
GRAY_30 = "#B8B4B5"
GRAY_10 = "#EAE6E4"
WARM = "#F6F3EF"
SURFACE = "#FFFFFF"
DARK = "#1C1A1B"
DARKER = "#141213"

# Base CSS - as a regular string, not format string
CSS = f"""
:root {{
  --red: {RED};
  --red-hi: #D4122B;
  --red-wash: {RED_LIGHT};
  --red-ghost: {RED_GHOST};
  --ink: {INK};
  --gray-70: {GRAY_70};
  --gray-50: {GRAY_50};
  --gray-30: {GRAY_30};
  --gray-10: {GRAY_10};
  --warm: {WARM};
  --surface: {SURFACE};
  --dark: {DARK};
  --darker: {DARKER};
  --font-serif: 'Didot', 'Bodoni MT', 'Bodoni 72', 'Times New Roman', Georgia, serif;
  --font-body: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, sans-serif;
  --ease: cubic-bezier(.4,0,.2,1);
}}

*, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
html {{ scroll-behavior: smooth; font-size: 16px; }}

body {{
  background: var(--surface);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}}

.container {{ max-width: 1100px; margin: 0 auto; padding: 0 48px; }}
.eyebrow {{
  font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase;
  font-weight: 700; color: var(--red); display: flex; align-items: center; gap: 10px;
}}
.eyebrow::before {{
  content: ''; display: block; width: 24px; height: 1.5px; background: var(--red);
}}
.serif {{ font-family: var(--font-serif); }}

.hero {{
  background: var(--surface);
  padding: 0;
  position: relative;
  border-bottom: 1px solid var(--gray-10);
}}

.hero-stripe {{
  position: absolute; top: 0; left: 0;
  width: 5px; height: 100%; background: var(--red);
}}

.hero-inner {{
  padding: 64px 48px 72px;
  max-width: 1100px; margin: 0 auto;
}}

.hero-top {{
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 56px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--gray-10);
}}

.brand-badge {{
  display: flex; align-items: center; gap: 0;
}}
.brand-rect {{
  background: var(--red); color: #fff;
  font-size: 13px; font-weight: 700; letter-spacing: .06em;
  padding: 7px 16px; line-height: 1;
}}
.brand-en {{
  font-size: 10px; letter-spacing: .12em; color: var(--gray-50);
  text-transform: uppercase; padding-left: 14px;
  border-left: 1px solid var(--gray-10); margin-left: 14px;
  line-height: 1.5;
}}

.hero-tag {{
  font-size: 11px; color: var(--gray-50); letter-spacing: .08em;
  border: 1px solid var(--gray-10); padding: 6px 14px; border-radius: 2px;
}}

.hero-body {{
  display: grid; grid-template-columns: 1fr auto; gap: 64px; align-items: end;
}}

.hero-eyebrow {{ margin-bottom: 20px; }}

.hero-h1 {{
  font-family: var(--font-serif);
  font-size: 44px; font-weight: 400; line-height: 1.25;
  color: var(--ink); margin-bottom: 18px; letter-spacing: -.01em;
}}
.hero-h1 em {{ font-style: normal; color: var(--red); }}

.hero-lead {{
  font-size: 15px; color: var(--gray-50); max-width: 520px; line-height: 1.85;
}}

.hero-metrics {{
  display: flex; flex-direction: column; gap: 0;
  align-self: stretch; justify-content: flex-end;
  border-left: 1px solid var(--gray-10); padding-left: 48px;
}}
.metric {{
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-10);
  text-align: right;
}}
.metric:last-child {{ border-bottom: none; }}
.metric-val {{
  font-family: var(--font-serif);
  font-size: 52px; font-weight: 400; color: var(--red);
  line-height: 1; display: block; letter-spacing: -.02em;
}}
.metric-lbl {{
  font-size: 11px; color: var(--gray-50); letter-spacing: .06em; margin-top: 4px; display: block;
}}

.content-section {{
  padding: 88px 0;
  background: var(--surface);
}}

.markdown-content h1 {{
  font-family: var(--font-serif);
  font-size: 36px; font-weight: 400;
  color: var(--ink); margin: 32px 0 24px;
  border-bottom: 2px solid var(--red);
  padding-bottom: 16px;
}}

.markdown-content h2 {{
  font-family: var(--font-serif);
  font-size: 26px; font-weight: 400;
  color: var(--ink); margin: 40px 0 20px;
  border-left: 4px solid var(--red);
  padding-left: 16px;
}}

.markdown-content h3 {{
  font-size: 18px; font-weight: 700;
  color: var(--ink); margin: 32px 0 16px;
}}

.markdown-content h4 {{
  font-size: 15px; font-weight: 700;
  color: var(--gray-70); margin: 24px 0 12px;
}}

.markdown-content p {{
  margin: 16px 0;
  color: var(--gray-70);
}}

.markdown-content ul, .markdown-content ol {{
  margin: 16px 0;
  padding-left: 28px;
  color: var(--gray-70);
}}

.markdown-content li {{
  margin: 8px 0;
}}

.markdown-content table {{
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 14px;
}}

.markdown-content th, .markdown-content td {{
  padding: 12px 16px;
  text-align: left;
  border: 1px solid var(--gray-10);
}}

.markdown-content th {{
  background: var(--gray-10);
  font-weight: 700;
  color: var(--ink);
}}

.markdown-content tr:nth-child(even) {{
  background: var(--warm);
}}

.markdown-content blockquote {{
  border-left: 4px solid var(--red);
  padding: 16px 24px;
  margin: 24px 0;
  background: var(--red-wash);
  color: var(--gray-70);
}}

.markdown-content pre {{
  background: var(--gray-10);
  border-radius: 4px;
  padding: 16px 20px;
  margin: 24px 0;
  overflow-x: auto;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
}}

.markdown-content code {{
  background: var(--gray-10);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 13px;
  font-family: 'Consolas', 'Monaco', monospace;
}}

.markdown-content pre code {{
  padding: 0;
  background: none;
}}

.markdown-content hr {{
  border: none;
  border-top: 1px solid var(--gray-10);
  margin: 40px 0;
}}

.markdown-content strong {{
  font-weight: 700;
  color: var(--ink);
}}

.foot {{
  background: var(--darker); padding: 56px 0;
}}
.foot-inner {{
  display: flex; justify-content: space-between; align-items: center;
}}
.foot-left {{ display: flex; align-items: center; gap: 20px; }}
.foot-mark {{
  background: var(--red); color: #fff;
  font-size: 13px; font-weight: 700; letter-spacing: .06em;
  padding: 8px 18px; border-radius: 2px;
}}
.foot-title {{ font-size: 14px; font-weight: 700; color: rgba(255,255,255,.85); margin-bottom: 3px; }}
.foot-sub {{ font-size: 12px; color: rgba(255,255,255,.35); letter-spacing: .04em; }}
.foot-note {{
  text-align: right; font-size: 11.5px; color: rgba(255,255,255,.28); line-height: 1.8;
}}

@media print {{
  @page {{
    size: A4;
    margin: 2cm;
  }}
  body {{
    font-size: 11pt;
    line-height: 1.6;
    color: #000;
    background: #fff;
  }}
  .hero, .content-section, .foot {{
    page-break-inside: avoid;
  }}
  .hero {{
    border: none;
  }}
  .hero-stripe {{
    display: none;
  }}
  .container {{
    max-width: 100%;
    padding: 0;
  }}
}}

@media (max-width: 860px) {{
  .container, .hero-inner {{ padding-left: 24px; padding-right: 24px; }}
  .hero-body {{ grid-template-columns: 1fr; }}
  .hero-metrics {{ flex-direction: row; border-left: none; padding-left: 0; border-top: 1px solid var(--gray-10); padding-top: 32px; margin-top: 32px; }}
  .metric {{ padding: 0 24px 0 0; border-bottom: none; text-align: left; }}
  .foot-inner {{ flex-direction: column; gap: 28px; align-items: flex-start; }}
  .foot-note {{ text-align: left; }}
}}
"""


def create_html_template(title, content, course_name="情绪信号与冲突预警", subtitle="AI监测沟通数据之后人该怎么介入"):
    """Create a complete HTML document with styled content"""
    return f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} · {course_name}</title>
<style>
{CSS}
</style>
</head>
<body>

<!-- Hero -->
<header class="hero">
  <div class="hero-stripe"></div>
  <div class="hero-inner">
    <div class="hero-top">
      <div class="brand-badge">
        <div class="brand-rect">HR课程</div>
        <div class="brand-en">HR COURSE<br>MATERIALS</div>
      </div>
      <div class="hero-tag">{subtitle}</div>
    </div>
    <div class="hero-body">
      <div>
        <p class="eyebrow hero-eyebrow">课程模块</p>
        <h1 class="hero-h1 serif">
          {title}
        </h1>
        <p class="hero-lead">{subtitle}</p>
      </div>
      <div class="hero-metrics">
        <div class="metric">
          <span class="metric-val serif">1</span>
          <span class="metric-lbl">天课程</span>
        </div>
        <div class="metric">
          <span class="metric-val serif">7</span>
          <span class="metric-lbl">个模块</span>
        </div>
        <div class="metric">
          <span class="metric-val serif">HTML</span>
          <span class="metric-lbl">可视化</span>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- Content -->
<main class="content-section">
  <div class="container">
    <div class="markdown-content">
      {content}
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="foot">
  <div class="container">
    <div class="foot-inner">
      <div class="foot-left">
        <div class="foot-mark">HR</div>
        <div class="foot-info">
          <p class="foot-title">{course_name}</p>
          <p class="foot-sub">{subtitle}</p>
        </div>
      </div>
      <div class="foot-note">
        <p>本材料为课程配套教材</p>
        <p>版权所有 · 仅供内部使用</p>
      </div>
    </div>
  </div>
</footer>

</body>
</html>'''


def convert_markdown_to_html(md_content):
    """Convert markdown to HTML with extensions"""
    html = markdown.markdown(
        md_content,
        extensions=[
            'tables',
            'fenced_code',
            'codehilite',
            'nl2br',
            'sane_lists'
        ],
        output_format='html'
    )
    return html


def process_files():
    """Process all markdown files"""
    base_path = Path(r"D:\新课开发\HR\员工关系\4.情绪信号与冲突预警-AI监测沟通数据之后人该怎么介入\教学文档")
    output_path = Path(r"D:\新课开发\HR\员工关系\4.情绪信号与冲突预警-AI监测沟通数据之后人该怎么介入\HTML可视化")

    # File mapping: (input_filename, output_filename, title)
    files = [
        ("00-课程总览与学习路径.md", "课程总览.html", "课程总览与学习路径"),
        ("01-模块一_认知重建.md", "模块一_认知重建.html", "模块一：认知重建"),
        ("02-模块二_信号解读.md", "模块二_信号解读.html", "模块二：信号解读"),
        ("03-模块三_介入时机决策.md", "模块三_介入时机决策.html", "模块三：介入时机决策"),
        ("04-模块四_介入方式设计.md", "模块四_介入方式设计.html", "模块四：介入方式设计"),
        ("05-模块五_谈话实战.md", "模块五_谈话实战.html", "模块五：谈话实战"),
        ("06-模块六_跟进与闭环.md", "模块六_跟进与闭环.html", "模块六：跟进与闭环"),
        ("07-模块七_法律与伦理边界.md", "模块七_法律与伦理边界.html", "模块七：法律与伦理边界"),
        ("08-收尾_整合应用.md", "收尾_整合应用.html", "收尾：整合应用"),
    ]

    for input_file, output_file, title in files:
        input_path = base_path / input_file
        output_path_file = output_path / output_file

        if input_path.exists():
            with open(input_path, 'r', encoding='utf-8') as f:
                md_content = f.read()

            html_content = convert_markdown_to_html(md_content)
            full_html = create_html_template(title, html_content)

            with open(output_path_file, 'w', encoding='utf-8') as f:
                f.write(full_html)

            print(f"Created: {output_path_file}")
        else:
            print(f"File not found: {input_path}")


if __name__ == "__main__":
    process_files()
    print("Conversion complete!")
