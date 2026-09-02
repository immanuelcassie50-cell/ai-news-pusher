#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""将 md 转成打印优化的 html（浅色背景 + 深色头部 + @media print）"""

import re
import sys
import os
import markdown

def md_to_html(md_path, html_path, header_text, accent_color="#1f3a5f"):
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    # 配置 markdown
    md = markdown.Markdown(
        extensions=['extra', 'tables', 'fenced_code', 'toc', 'sane_lists'],
        extension_configs={
            'toc': {'permalink': False, 'toc_depth': '1-3'}
        }
    )
    body_html = md.convert(md_content)
    toc_html = md.toc

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{header_text}</title>
<style>
* {{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}}

@page {{
  size: A4 portrait;
  margin: 18mm 16mm 18mm 16mm;
}}

body {{
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Source Han Sans CN", sans-serif;
  background: #f4f5f7;
  color: #1a1a1a;
  line-height: 1.75;
  font-size: 14px;
}}

/* 顶部条 */
.topbar {{
  background: {accent_color};
  color: #fff;
  padding: 18px 28px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}}
.topbar h1 {{
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
}}
.topbar .sub {{
  font-size: 12px;
  opacity: 0.85;
  margin-top: 4px;
}}

/* 主容器 */
.container {{
  max-width: 900px;
  margin: 24px auto;
  background: #fff;
  padding: 40px 56px 60px 56px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}}

/* 章节标题 */
h1 {{
  color: {accent_color};
  border-bottom: 3px solid {accent_color};
  padding-bottom: 8px;
  margin: 36px 0 18px 0;
  font-size: 24px;
  font-weight: 700;
}}
h2 {{
  color: {accent_color};
  border-left: 4px solid {accent_color};
  padding-left: 12px;
  margin: 28px 0 14px 0;
  font-size: 19px;
  font-weight: 600;
}}
h3 {{
  color: #2c3e50;
  margin: 20px 0 10px 0;
  font-size: 16px;
  font-weight: 600;
}}
h4 {{
  color: #444;
  margin: 16px 0 8px 0;
  font-size: 14px;
  font-weight: 600;
}}

/* 段落与列表 */
p {{
  margin: 8px 0 10px 0;
  text-align: justify;
}}
ul, ol {{
  margin: 8px 0 12px 24px;
}}
li {{
  margin: 4px 0;
}}

/* 引用块（讲师注解 / 金句） */
blockquote {{
  background: #f5f7fb;
  border-left: 4px solid {accent_color};
  padding: 12px 18px;
  margin: 14px 0;
  color: #2c3e50;
  font-style: normal;
  border-radius: 0 4px 4px 0;
}}
blockquote p {{
  margin: 4px 0;
}}

/* 表格 */
table {{
  border-collapse: collapse;
  width: 100%;
  margin: 14px 0;
  font-size: 13px;
}}
th, td {{
  border: 1px solid #d0d4dc;
  padding: 8px 12px;
  text-align: left;
  vertical-align: top;
}}
th {{
  background: {accent_color};
  color: #fff;
  font-weight: 600;
}}
tr:nth-child(even) td {{
  background: #f8f9fc;
}}

/* 填写区（下划线） */
input.fill, textarea.fill {{
  border: none;
  border-bottom: 1.5px solid #888;
  background: transparent;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  padding: 2px 0;
  outline: none;
}}
textarea.fill {{
  min-height: 60px;
  border: 1.5px solid #bbb;
  border-radius: 2px;
  padding: 6px 8px;
  background: #fafbfc;
}}

/* 留白填写方框（中文方框 □） */
.fillbox {{
  display: inline-block;
  min-width: 100px;
  border-bottom: 1.5px solid #555;
  margin: 0 2px;
  padding: 0 4px;
  min-height: 1.5em;
  background: #fafbfc;
}}

/* 工作表/练习区样式 */
.worksheet, .exercise {{
  background: #fcfcf5;
  border: 1px dashed #c4a700;
  border-radius: 4px;
  padding: 16px 20px;
  margin: 14px 0;
}}
.worksheet h3, .exercise h3 {{
  color: #8a6d00;
  margin-top: 0;
}}
.worksheet h3::before {{ content: "📋 "; }}
.exercise h3::before {{ content: "✏️ "; }}

/* 行为承诺 */
.commitment {{
  background: #f0f4fa;
  border: 2px solid {accent_color};
  border-radius: 4px;
  padding: 18px 24px;
  margin: 20px 0;
}}
.commitment h3 {{
  color: {accent_color};
  margin-top: 0;
}}
.commitment h3::before {{ content: "✍️  "; }}

/* 知识框架 */
.framework {{
  background: #f5f5fa;
  border: 1px solid #c0c8d8;
  border-radius: 4px;
  padding: 16px 20px;
  margin: 14px 0;
  font-family: "Cascadia Code", "Consolas", "Source Code Pro", monospace;
  font-size: 12.5px;
  white-space: pre;
  overflow-x: auto;
}}
.framework h3 {{
  color: {accent_color};
  font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  margin-top: 0;
}}

/* 知识框架代码区（ASCII 图） */
pre {{
  background: #f5f5fa;
  border: 1px solid #c0c8d8;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 12.5px;
  overflow-x: auto;
  white-space: pre;
  margin: 10px 0;
}}
code {{
  font-family: "Cascadia Code", "Consolas", monospace;
  background: #f0f0f5;
  padding: 1px 5px;
  border-radius: 2px;
  font-size: 12.5px;
}}
pre code {{
  background: transparent;
  padding: 0;
}}

/* 强调 */
strong {{
  color: {accent_color};
  font-weight: 600;
}}
em {{
  color: #555;
}}

/* 目录 */
#TOC {{
  background: #f5f7fb;
  border: 1px solid #d0d4dc;
  border-radius: 4px;
  padding: 16px 24px;
  margin: 18px 0 28px 0;
}}
#TOC ul {{
  list-style: none;
  margin: 6px 0 6px 18px;
}}
#TOC > ul {{
  margin-left: 0;
}}
#TOC li {{
  margin: 3px 0;
}}
#TOC a {{
  color: {accent_color};
  text-decoration: none;
}}
#TOC a:hover {{
  text-decoration: underline;
}}

/* 反思框 */
.reflection {{
  background: #fff7e6;
  border-left: 4px solid #d4a000;
  padding: 14px 18px;
  margin: 14px 0;
  border-radius: 0 4px 4px 0;
}}
.reflection h3 {{
  color: #8a6d00;
  margin-top: 0;
}}
.reflection h3::before {{ content: "💭 反思："; }}

/* 坏 vs 好 */
.bad-good {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 14px 0;
}}
.bad-good .bad {{
  background: #fff0f0;
  border-left: 3px solid #c0392b;
  padding: 10px 14px;
  border-radius: 0 4px 4px 0;
}}
.bad-good .good {{
  background: #f0faf0;
  border-left: 3px solid #27ae60;
  padding: 10px 14px;
  border-radius: 0 4px 4px 0;
}}

/* 响应式 */
@media (max-width: 720px) {{
  .container {{ padding: 24px 20px 40px 20px; }}
  .bad-good {{ grid-template-columns: 1fr; }}
}}

/* 打印样式 */
@media print {{
  body {{
    background: #fff;
    font-size: 11pt;
    line-height: 1.6;
  }}
  .topbar {{
    position: static;
    box-shadow: none;
    background: {accent_color};
    color: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  .container {{
    box-shadow: none;
    max-width: 100%;
    margin: 0;
    padding: 0 8px;
  }}
  h1 {{ page-break-before: always; }}
  h1:first-of-type {{ page-break-before: avoid; }}
  h2 {{ page-break-after: avoid; }}
  .worksheet, .exercise, .commitment, .framework {{
    page-break-inside: avoid;
  }}
  table {{ page-break-inside: avoid; }}
  blockquote {{ page-break-inside: avoid; }}
  #TOC {{ page-break-after: always; }}
  .fillbox, input.fill, textarea.fill {{
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
}}

/* 章节顶部印章 */
h1:first-of-type {{
  border-bottom: 3px double {accent_color};
}}
</style>
</head>
<body>

<div class="topbar">
  <h1>{header_text}</h1>
  <div class="sub">培训需求分析和课程设计 · 完整课程包</div>
</div>

<div class="container">
{body_html}
</div>

</body>
</html>
"""

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"OK: {html_path}")


if __name__ == "__main__":
    # 学员手册
    md_to_html(
        "D:/2026年课程/竞越/培训需求分析和课程设计/完整课程包/04-学员手册/学员手册_v1.0.md",
        "D:/2026年课程/竞越/培训需求分析和课程设计/完整课程包/04-学员手册/学员手册_v1.0.html",
        "学员手册 · 培训需求分析和课程设计"
    )
