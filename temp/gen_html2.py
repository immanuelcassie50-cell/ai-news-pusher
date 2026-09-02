# -*- coding: utf-8 -*-
"""
10分钟逐字稿模板.html
"""
import re
from pathlib import Path

PRIMARY = "#1F3A5F"
ACCENT = "#C8102E"
SECONDARY = "#2E5C8A"
BG = "#F5F7FA"
INK = "#1A1A1A"
INK_SOFT = "#555"
LINE = "#D6DEE8"
SCENE_BG = "#FFFEF5"

md_path = Path(r'D:\2026年课程\顺造科技\AI\评审\02-学员指南\10分钟逐字稿模板.md')
html_path = Path(r'D:\2026年课程\顺造科技\AI\评审\02-学员指南\10分钟逐字稿模板.html')

md = md_path.read_text(encoding='utf-8')

def text_to_html(t):
    t = t.strip()
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    return t

def render_table(tbl_lines):
    """渲染markdown表格为HTML表格"""
    if len(tbl_lines) < 2:
        return ''
    rows = []
    for line in tbl_lines:
        cells = [c.strip() for c in line.strip('|').split('|')]
        rows.append(cells)
    # 第二行是分隔
    headers = rows[0]
    body_rows = rows[2:]

    html = '<table style="width:100%;border-collapse:collapse;font-size:13px;margin:12px 0;background:#fff;border:1px solid ' + LINE + ';">'
    html += '<tr style="background:' + PRIMARY + ';">'
    for h in headers:
        html += f'<th style="padding:8px 12px;color:#fff;font-weight:700;font-size:12px;text-align:left;">{text_to_html(h)}</th>'
    html += '</tr>'
    for i, row in enumerate(body_rows):
        bg = '#FAFBFC' if i % 2 == 0 else '#fff'
        html += f'<tr style="background:{bg};">'
        for c in row:
            html += f'<td style="padding:8px 12px;border-top:1px solid {LINE};color:{INK};">{text_to_html(c)}</td>'
        html += '</tr>'
    html += '</table>'
    return html

def render_scene(scene_num, scene_title, scene_dept, block_lines):
    """渲染一个场景块"""
    # 解析block_lines
    # 顺序：学员基本信息表 / 路演逐字稿 / 一页纸框架
    # 跳过开头的"### 学员基本信息"
    # 找"| 字段 |"开头
    html = ''

    html += f'<div class="scene" id="scene-{scene_num}">'
    html += '<div class="scene-header">'
    html += f'<div><span class="scene-num">场景 {scene_num}</span><h2>{scene_title}</h2><div class="scene-sub">{scene_dept}</div></div>'
    html += '</div>'

    # 解析信息表
    in_info = False
    info_rows = []
    in_script = False
    script_blocks = []
    current_script = None
    in_cheat = False
    cheat_lines = []

    j = 0
    while j < len(block_lines):
        line = block_lines[j]

        # 信息表
        if line.startswith('### 学员基本信息') or '学员基本信息' in line:
            j += 1
            # 跳过"学员基本信息"
            while j < len(block_lines) and not block_lines[j].startswith('|'):
                j += 1
            # 收集表格
            tbl = []
            while j < len(block_lines) and block_lines[j].startswith('|'):
                tbl.append(block_lines[j])
                j += 1
            if tbl:
                info_rows = tbl
            continue

        # 一页纸框架（备份提示卡）
        if '一页纸框架' in line and '备份提示卡' in line:
            in_script = False
            in_cheat = True
            cheat_lines = []
            j += 1
            # 累积```代码块
            if j < len(block_lines) and block_lines[j].strip().startswith('```'):
                j += 1
            while j < len(block_lines) and not block_lines[j].strip().startswith('```'):
                cheat_lines.append(block_lines[j])
                j += 1
            if j < len(block_lines):
                j += 1  # skip ```
            continue

        # 应急版检查
        if line.startswith('## 应急版') or '应急版检查' in line:
            in_cheat = False
            j += 1
            continue

        # 演练检查清单
        if line.startswith('## 演练') or '演练检查清单' in line:
            in_cheat = False
            j += 1
            # 收集清单
            in_checklist = True
            while j < len(block_lines) and not block_lines[j].startswith('## '):
                j += 1
            continue

        # 脚本段
        if line.startswith('**【'):
            # 解析 【时间 - 持续 · 标签 · PPT页】
            m = re.match(r'\*\*【(.+?)·(.+?)·(.+?)·(.+?)】\*\*', line)
            if m:
                time_range = m.group(1).strip()
                step_label = m.group(2).strip()
                action = m.group(3).strip()
                ppt = m.group(4).strip()
                # 推算step class
                if '痛' in step_label:
                    step_class = 'step-pain'
                    step_color_name = '痛'
                elif '做' in step_label:
                    step_class = 'step-do'
                    step_color_name = '做'
                elif '效' in step_label:
                    step_class = 'step-xiao'
                    step_color_name = '效'
                elif '求' in step_label:
                    step_class = 'step-qiu'
                    step_color_name = '求'
                elif '收尾' in step_label:
                    step_class = 'step-end'
                    step_color_name = '收尾'
                elif '开场' in step_label:
                    step_class = 'step-pain'
                    step_color_name = '开场'
                else:
                    step_class = 'step-do'
                    step_color_name = step_label
                # 收集这个脚本块的内容（>开头的行）
                content_lines = []
                # 跳过当前```标记
                k = j + 1
                if k < len(block_lines) and block_lines[k].strip() == '>':
                    k += 1
                while k < len(block_lines):
                    nl = block_lines[k]
                    if nl.startswith('**【'):
                        break
                    if nl.strip() == '':
                        k += 1
                        continue
                    if nl.startswith('### '):
                        break
                    # 收集 > 引导的段落
                    if nl.startswith('>'):
                        content_lines.append(nl[1:].lstrip())
                    else:
                        content_lines.append(nl)
                    k += 1
                content = '<br>'.join(content_lines)
                script_blocks.append({
                    'time': time_range,
                    'step_class': step_class,
                    'step_color_name': step_color_name,
                    'action': action,
                    'ppt': ppt,
                    'content': content
                })
                j = k
                continue

        j += 1

    # 输出信息表
    if info_rows:
        html += '<table class="info-table">'
        # 跳过表头分隔行
        for i_row, row in enumerate(info_rows):
            if i_row == 1:  # 分隔行
                continue
            cells = [c.strip() for c in row.strip('|').split('|')]
            html += '<tr>'
            for ci, c in enumerate(cells):
                if i_row == 0:
                    html += f'<th>{text_to_html(c)}</th>'
                else:
                    html += f'<td>{text_to_html(c)}</td>'
            html += '</tr>'
        html += '</table>'

    # 输出脚本段
    for sb in script_blocks:
        html += f'<div class="script-block {sb["step_class"]}">'
        html += '<div class="script-meta">'
        html += f'<div class="time-stamp">{sb["time"]}</div>'
        html += f'<div class="step-label">{sb["step_color_name"]}</div>'
        html += f'<div class="ppt-tag">📄 {sb["ppt"]}</div>'
        html += '</div>'
        html += f'<div class="script-content">{sb["content"]}</div>'
        html += '</div>'

    # 输出cheat sheet
    if cheat_lines:
        html += '<div class="cheat-sheet">'
        html += '<div class="cheat-sheet-title">一页纸框架（备份提示卡）</div>'
        html += '<div class="cheat-grid">'
        for cl in cheat_lines:
            cl = cl.strip()
            if not cl:
                continue
            if cl.startswith('【'):
                # 段落标题
                html += f'<div class="k" style="grid-column: 1 / -1; background:' + PRIMARY + '; color:#fff;">{text_to_html(cl)}</div>'
            elif cl.startswith('】'):
                continue
            else:
                # 普通行
                m = re.match(r'【(.+?)】(.+)', cl)
                if m:
                    html += f'<div class="k">【{text_to_html(m.group(1))}】</div><div class="v">{text_to_html(m.group(2))}</div>'
                else:
                    html += f'<div class="v" style="grid-column: 2;">{text_to_html(cl)}</div>'
        html += '</div></div>'

    html += '</div>'  # /scene
    return html

# 主流程
lines = md.split('\n')
i = 0
out_parts = []

hero_done = False
appendix_started = False

while i < len(lines):
    line = lines[i]

    if line.startswith('# '):
        if not hero_done:
            out_parts.append('<div class="hero">')
            out_parts.append(f'<h1>{line[2:].strip()}</h1>')
            hero_done = True
        i += 1
        continue
    if line.startswith('## '):
        if not hero_done:
            out_parts.append(f'<div class="sub">{line[3:].strip()}</div>')
            i += 1
            continue
        if '附录' in line:
            appendix_started = True
            i += 1
            continue
        out_parts.append(f'<h2 style="color:{PRIMARY};font-size:18px;margin:24px 0 12px;padding-left:12px;border-left:4px solid {ACCENT};">{line[3:].strip()}</h2>')
        i += 1
        continue
    if line.startswith('### '):
        out_parts.append(f'<h3 style="color:{SECONDARY};font-size:14px;font-weight:700;margin:14px 0 8px;text-transform:uppercase;letter-spacing:1px;">{line[4:].strip()}</h3>')
        i += 1
        continue
    if line.startswith('>'):
        out_parts.append(f'<blockquote style="border-left:3px solid {ACCENT};background:#FFFEF5;padding:8px 12px;margin:8px 0;color:{INK};">{text_to_html(line[1:])}</blockquote>')
        i += 1
        continue

    # 模板示例
    if line.startswith('## 模板示例'):
        m = re.match(r'## 模板示例 (\d+)：(.+?)\s*[—\-]\s*(.+)', line)
        if m:
            scene_num = m.group(1)
            scene_title = m.group(2).strip()
            scene_dept = m.group(3).strip()
            # 找下一个
            j = i + 1
            block_lines = []
            while j < len(lines):
                if lines[j].startswith('## 模板示例') or lines[j].startswith('## 附录'):
                    break
                block_lines.append(lines[j])
                j += 1
            html_block = render_scene(scene_num, scene_title, scene_dept, block_lines)
            out_parts.append(html_block)
            i = j
            continue

    if appendix_started:
        if line.startswith('## 附录'):
            out_parts.append(f'<h2 style="color:{PRIMARY};font-size:20px;margin:32px 0 16px;padding-left:12px;border-left:4px solid {ACCENT};">{line[3:].strip()}</h2>')
            i += 1
            continue
        if line.startswith('|'):
            tbl_lines = []
            while i < len(lines) and lines[i].startswith('|'):
                tbl_lines.append(lines[i])
                i += 1
            out_parts.append(render_table(tbl_lines))
            continue
        if line.startswith('- '):
            out_parts.append(f'<div style="padding:2px 0 2px 16px;position:relative;"><span style="position:absolute;left:4px;color:{ACCENT};">•</span>{text_to_html(line[2:])}</div>')
            i += 1
            continue
        if line.strip() == '':
            out_parts.append('<div style="height:6px"></div>')
            i += 1
            continue
        out_parts.append(f'<p style="margin:6px 0;color:{INK};">{text_to_html(line)}</p>')
        i += 1
        continue

    if line.startswith('- '):
        out_parts.append(f'<div style="padding:2px 0 2px 16px;position:relative;"><span style="position:absolute;left:4px;color:{ACCENT};">•</span>{text_to_html(line[2:])}</div>')
        i += 1
        continue

    if line.strip() == '':
        out_parts.append('<div style="height:6px"></div>')
        i += 1
        continue

    out_parts.append(f'<p style="margin:6px 0;color:{INK};">{text_to_html(line)}</p>')
    i += 1

# 包裹HTML
topbar = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>10分钟逐字稿模板 - 顺造科技AI项目成果评审</title>
<style>
@page { size: A4 portrait; margin: 1.5cm; }
@media print {
  body { background: #fff !important; }
  .scene { break-inside: avoid; page-break-inside: avoid; }
  .topbar { position: static; box-shadow: none; }
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Source Han Sans CN", sans-serif;
  font-size: 13.5px;
  line-height: 1.7;
  color: ''' + INK + ''';
  background: ''' + BG + ''';
  -webkit-font-smoothing: antialiased;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: ''' + PRIMARY + ''';
  color: #fff;
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(31, 58, 95, 0.15);
  font-size: 13px;
}
.topbar .brand { display: flex; align-items: center; gap: 16px; }
.topbar .brand-mark {
  background: #fff;
  color: ''' + PRIMARY + ''';
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
}
.topbar .brand-title { font-weight: 600; font-size: 15px; letter-spacing: 0.5px; }
.topbar .brand-sub { font-size: 12px; opacity: 0.8; margin-top: 1px; }
.topbar .meta { display: flex; gap: 20px; font-size: 12px; opacity: 0.9; }
.topbar .meta span { border-left: 1px solid rgba(255,255,255,0.3); padding-left: 14px; }
.topbar .meta span:first-child { border-left: none; padding-left: 0; }

.wrap { max-width: 1180px; margin: 0 auto; padding: 24px 32px 80px; }

.hero {
  background: linear-gradient(135deg, #fff 0%, #f9fbfd 100%);
  border: 1px solid ''' + LINE + ''';
  border-left: 4px solid ''' + PRIMARY + ''';
  padding: 24px 28px;
  margin-bottom: 24px;
  border-radius: 0 4px 4px 0;
}
.hero h1 { font-size: 26px; color: ''' + PRIMARY + '''; font-weight: 800; letter-spacing: 0.5px; margin-bottom: 4px; }
.hero .sub { color: ''' + ACCENT + '''; font-size: 14px; font-weight: 600; margin-bottom: 12px; }
.hero .desc { color: ''' + INK_SOFT + '''; font-size: 13px; line-height: 1.7; }

.scene {
  background: #fff;
  border: 1px solid ''' + LINE + ''';
  border-radius: 4px;
  margin-bottom: 32px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(31, 58, 95, 0.04);
}
.scene-header {
  background: ''' + PRIMARY + ''';
  color: #fff;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.scene-header .scene-num {
  background: rgba(255,255,255,0.15);
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 2px;
  margin-right: 12px;
}
.scene-header h2 { font-size: 18px; font-weight: 700; display: inline; }
.scene-header .scene-sub { font-size: 13px; opacity: 0.9; margin-top: 4px; }

.info-table { width: calc(100% - 48px); border-collapse: collapse; margin: 16px 24px 20px; font-size: 12.5px; }
.info-table th, .info-table td { padding: 6px 10px; border: 1px solid ''' + LINE + '''; text-align: left; }
.info-table th { background: #EEF1F5; color: ''' + PRIMARY + '''; font-weight: 600; width: 22%; }

.script-block {
  border-top: 1px solid ''' + LINE + ''';
  padding: 16px 24px;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 20px;
  align-items: start;
}
.script-block.step-pain { border-left: 3px solid #C8102E; }
.script-block.step-do   { border-left: 3px solid #2E5C8A; }
.script-block.step-xiao { border-left: 3px solid #00733B; }
.script-block.step-qiu  { border-left: 3px solid #B8860B; }
.script-block.step-end  { border-left: 3px solid #555; }

.script-meta { display: flex; flex-direction: column; gap: 6px; }
.time-stamp {
  background: ''' + PRIMARY + ''';
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  font-family: "SF Mono", "Consolas", "Menlo", monospace;
  border-radius: 2px;
  text-align: center;
  letter-spacing: 0.5px;
}
.step-label {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 2px;
  text-align: center;
  letter-spacing: 1px;
}
.step-pain .step-label { background: #C8102E; color: #fff; }
.step-do .step-label   { background: #2E5C8A; color: #fff; }
.step-xiao .step-label { background: #00733B; color: #fff; }
.step-qiu .step-label  { background: #B8860B; color: #fff; }
.step-end .step-label  { background: #555; color: #fff; }

.ppt-tag {
  background: ''' + ACCENT + ''';
  color: #fff;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 2px;
  text-align: center;
}

.script-content {
  font-size: 14px;
  line-height: 1.85;
  color: ''' + INK + ''';
  background: ''' + SCENE_BG + ''';
  padding: 12px 16px;
  border-radius: 2px;
  border: 1px solid #E8E4D0;
}
.script-content p { margin: 6px 0; }
.script-content p:first-child { margin-top: 0; }
.script-content p:last-child { margin-bottom: 0; }

.cheat-sheet {
  background: #FAFBFC;
  border-top: 1px solid ''' + LINE + ''';
  padding: 16px 24px;
}
.cheat-sheet-title {
  font-size: 12px;
  font-weight: 700;
  color: ''' + PRIMARY + ''';
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}
.cheat-grid {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 6px 12px;
  font-size: 12.5px;
  font-family: "SF Mono", "Consolas", "Menlo", monospace;
}
.cheat-grid .k { background: #EEF1F5; color: ''' + PRIMARY + '''; padding: 3px 8px; border-radius: 2px; font-weight: 600; }
.cheat-grid .v { color: ''' + INK + '''; padding: 3px 0; }

.footer {
  margin-top: 48px;
  padding: 24px 32px;
  text-align: center;
  color: ''' + INK_SOFT + ''';
  font-size: 12px;
  border-top: 1px solid ''' + LINE + ''';
}
.footer .accent { color: ''' + ACCENT + '''; font-weight: 600; }

@media (max-width: 768px) {
  .script-block { grid-template-columns: 1fr; }
  .info-table { margin: 12px; width: calc(100% - 24px); }
  .topbar { flex-direction: column; align-items: flex-start; gap: 8px; }
  .topbar .meta { display: none; }
}
</style>
</head>
<body>
<div class="topbar">
  <div class="brand">
    <div class="brand-mark">S</div>
    <div>
      <div class="brand-title">顺造科技 · AI项目成果评审</div>
      <div class="brand-sub">学员路演基础指南包</div>
    </div>
  </div>
  <div class="meta">
    <span>10分钟逐字稿模板</span>
    <span>5个完整场景</span>
    <span>2026.06</span>
  </div>
</div>
<div class="wrap">
'''

bottom = '''
</div>
<div class="footer">
  <div><span class="accent">顺造科技 · AI项目成果评审</span> · 学员路演基础指南包</div>
  <div style="margin-top:4px;">文件2 / 4：10分钟逐字稿模板（5个场景） · 2026.06</div>
</div>
</body>
</html>
'''

full_html = topbar + '\n'.join(out_parts) + bottom
html_path.write_text(full_html, encoding='utf-8')
print(f'OK: {html_path}')
print(f'Size: {len(full_html)} bytes')
