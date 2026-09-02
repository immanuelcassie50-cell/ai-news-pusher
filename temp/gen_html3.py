# -*- coding: utf-8 -*-
"""
Q&A应答指南.html
卡片式布局：每类问题一张卡片
浅色背景 + 深色头部 + 模块网格 + 紧凑排版
A4可打印
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
CARD_BG = "#FFFFFF"

# 每类问题的颜色主题
THEMES = [
    {"color": "#C8102E", "bg": "#FEF5F6", "icon": "❶"},   # 红
    {"color": "#2E5C8A", "bg": "#F0F5FA", "icon": "❷"},   # 蓝
    {"color": "#00733B", "bg": "#F0F8F3", "icon": "❸"},   # 绿
    {"color": "#B8860B", "bg": "#FDF8EC", "icon": "❹"},   # 金
    {"color": "#7B3F99", "bg": "#F7F0FA", "icon": "❺"},   # 紫
    {"color": "#D2691E", "bg": "#FDF4EC", "icon": "❻"},   # 橙
    {"color": "#008B8B", "bg": "#EDFAFA", "icon": "❼"},   # 青
    {"color": "#555555", "bg": "#F0F0F0", "icon": "❽"},   # 灰
]

md_path = Path(r'D:\2026年课程\顺造科技\AI\评审\02-学员指南\Q&A应答指南.md')
html_path = Path(r'D:\2026年课程\顺造科技\AI\评审\02-学员指南\Q&A应答指南.html')

md = md_path.read_text(encoding='utf-8')

# 解析markdown
lines = md.split('\n')

cards = []  # 8张问题卡片
overview = []  # 总体原则
pre_check = []  # Q&A前准备
cheat = []  # 速查卡
ending = []  # 写在最后

state = 'init'
current_card = None
current_section = None

for i, line in enumerate(lines):
    if line.startswith('# '):
        continue
    if line.startswith('## 总体原则'):
        state = 'overview'
        continue
    if re.match(r'## 第\d+类', line):
        if current_card:
            cards.append(current_card)
        state = 'cards'
        m = re.match(r'## 第(\d+)类[：:](.+)', line)
        if m:
            current_card = {
                'num': int(m.group(1)),
                'title': m.group(2).strip(),
                'blocks': []  # list of {type, content}
            }
        continue
    if line.startswith('## Q&A前') or 'Q&A前的最后准备' in line:
        if current_card:
            cards.append(current_card)
            current_card = None
        state = 'pre_check'
        continue
    if '速查卡' in line:
        state = 'cheat'
        continue
    if '写在最后' in line:
        state = 'ending'
        continue
    if line.startswith('## '):
        state = 'other'
        continue

    if state == 'cards' and current_card is not None:
        # 收集卡片内容
        if line.startswith('### '):
            current_card['blocks'].append({'type': 'h3', 'content': line[4:].strip()})
        elif line.strip() == '':
            current_card['blocks'].append({'type': 'blank'})
        elif line.startswith('- '):
            current_card['blocks'].append({'type': 'li', 'content': line[2:]})
        elif line.startswith('|'):
            current_card['blocks'].append({'type': 'tbl', 'content': line})
        elif line.startswith('>'):
            current_card['blocks'].append({'type': 'q', 'content': line[1:].strip()})
        elif line.strip() == '```':
            current_card['blocks'].append({'type': 'code_break'})
        elif line.startswith('□'):
            current_card['blocks'].append({'type': 'check', 'content': line})
        else:
            # 普通段落，但需要累积多行
            # 简单处理：单行作为段落
            current_card['blocks'].append({'type': 'p', 'content': line})

if current_card:
    cards.append(current_card)

# 把连续p合并
def merge_blocks(blocks):
    """合并连续的p块"""
    out = []
    cur_p = None
    for b in blocks:
        if b['type'] == 'p':
            if cur_p is None:
                cur_p = []
            cur_p.append(b['content'])
        else:
            if cur_p:
                out.append({'type': 'p', 'content': ' '.join(cur_p)})
                cur_p = None
            out.append(b)
    if cur_p:
        out.append({'type': 'p', 'content': ' '.join(cur_p)})
    return out

for c in cards:
    c['blocks'] = merge_blocks(c['blocks'])

# HTML渲染函数
def text_to_html(t):
    t = t.strip()
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong style="color:' + PRIMARY + ';">\1</strong>', t)
    t = re.sub(r'`(.+?)`', r'<code style="background:#EEF1F5;padding:1px 4px;border-radius:2px;font-size:12px;">\1</code>', t)
    return t

def render_block(b, theme_color):
    bt = b['type']
    c = b.get('content', '')
    if bt == 'h3':
        return f'<h4 style="color:{PRIMARY};font-size:14px;font-weight:700;margin:14px 0 6px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid {LINE};padding-bottom:4px;">{text_to_html(c)}</h4>'
    if bt == 'p':
        # 检查是否是错误/正确示范标题
        if '错误示范' in c:
            return f'<div style="margin:6px 0;padding:8px 12px;background:#FEF5F6;border-left:3px solid {ACCENT};font-size:13px;"><strong style="color:{ACCENT};">错误示范：</strong></div>'
        if '正确示范' in c:
            return f'<div style="margin:6px 0;padding:8px 12px;background:#F0F8F3;border-left:3px solid #00733B;font-size:13px;"><strong style="color:#00733B;">正确示范：</strong></div>'
        return f'<p style="margin:6px 0;font-size:13px;line-height:1.7;color:{INK};">{text_to_html(c)}</p>'
    if bt == 'li':
        return f'<div style="padding:2px 0 2px 16px;position:relative;font-size:13px;line-height:1.6;"><span style="position:absolute;left:4px;color:{theme_color};font-weight:700;">•</span>{text_to_html(c)}</div>'
    if bt == 'q':
        return f'<div style="margin:6px 0;padding:10px 14px;background:#F0F5FA;border-left:3px solid {SECONDARY};font-size:13px;color:{INK};font-style:italic;">{text_to_html(c)}</div>'
    if bt == 'check':
        return f'<div style="padding:3px 0;font-size:13px;color:{INK};font-family:"SF Mono","Consolas",monospace;">{text_to_html(c)}</div>'
    if bt == 'blank':
        return '<div style="height:4px;"></div>'
    if bt == 'tbl':
        # 简单表格收集
        return None  # 复杂逻辑放在外层
    if bt == 'code_break':
        return None
    return ''

# 收集表格
def collect_tables(blocks):
    """收集连续的表格行"""
    out = []
    cur = []
    for b in blocks:
        if b['type'] == 'tbl':
            cur.append(b['content'])
        else:
            if cur:
                out.append(cur)
                cur = []
    if cur:
        out.append(cur)
    return out

# 主HTML
topbar = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Q&A应答指南 - 顺造科技AI项目成果评审</title>
<style>
@page { size: A4 portrait; margin: 1.5cm; }
@media print {
  body { background: #fff !important; }
  .card { break-inside: avoid; page-break-inside: avoid; box-shadow: none !important; }
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

/* 总体原则 - 模块网格 */
.principle-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.principle-card {
  background: #fff;
  border: 1px solid ''' + LINE + ''';
  border-radius: 4px;
  padding: 16px 20px;
}
.principle-card h3 {
  font-size: 14px;
  color: ''' + PRIMARY + ''';
  margin-bottom: 8px;
  font-weight: 700;
  border-bottom: 2px solid ''' + PRIMARY + ''';
  padding-bottom: 4px;
  display: inline-block;
}
.principle-card .item {
  font-size: 13px;
  line-height: 1.7;
  color: ''' + INK + ''';
  margin: 4px 0;
}

/* 8张问题卡片 */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.card {
  background: #fff;
  border: 1px solid ''' + LINE + ''';
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(31, 58, 95, 0.04);
}
.card-header {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
}
.card-icon {
  background: rgba(255,255,255,0.2);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}
.card-num {
  background: rgba(255,255,255,0.2);
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 2px;
  font-weight: 600;
  letter-spacing: 1px;
}
.card-body { padding: 14px 16px; }

/* 备用话术小表 */
.mini-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
  margin: 8px 0;
  background: #fff;
}
.mini-table th, .mini-table td {
  padding: 6px 10px;
  border: 1px solid ''' + LINE + ''';
  text-align: left;
  vertical-align: top;
}
.mini-table th { background: #EEF1F5; color: ''' + PRIMARY + '''; font-weight: 700; width: 35%; }

/* 准备清单 */
.checklist {
  background: #fff;
  border: 1px solid ''' + LINE + ''';
  border-radius: 4px;
  padding: 16px 20px;
  margin-top: 16px;
}
.checklist-title {
  font-size: 13px;
  color: ''' + PRIMARY + ''';
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}
.checklist-item {
  padding: 3px 0 3px 18px;
  position: relative;
  font-size: 13px;
  color: ''' + INK + ''';
  font-family: "SF Mono", "Consolas", "Menlo", monospace;
}
.checklist-item::before {
  content: "□";
  position: absolute;
  left: 4px;
  color: ''' + ACCENT + ''';
  font-weight: 700;
}

/* 速查卡 */
.cheat-card {
  background: ''' + PRIMARY + ''';
  color: #fff;
  border-radius: 4px;
  padding: 24px;
  margin: 24px 0;
}
.cheat-card h2 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 8px;
}
.cheat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
}
.cheat-item {
  background: rgba(255,255,255,0.08);
  padding: 10px 14px;
  border-radius: 2px;
  border-left: 3px solid ''' + ACCENT + ''';
}
.cheat-item .q-type {
  font-size: 12px;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  margin-bottom: 4px;
}
.cheat-item .a-script {
  font-size: 12.5px;
  line-height: 1.6;
  color: #fff;
}

/* 应急流程 */
.flow-card {
  background: #fff;
  border: 1px solid ''' + LINE + ''';
  border-radius: 4px;
  padding: 20px;
  margin: 16px 0;
}
.flow-card h3 {
  font-size: 14px;
  color: ''' + PRIMARY + ''';
  margin-bottom: 12px;
  font-weight: 700;
}
.flow-step {
  background: #F8FAFC;
  border-left: 3px solid ''' + SECONDARY + ''';
  padding: 8px 12px;
  margin: 6px 0;
  font-size: 13px;
  color: ''' + INK + ''';
}
.flow-step .label {
  color: ''' + ACCENT + ''';
  font-weight: 700;
  margin-right: 6px;
}

/* 写在最后 */
.ending {
  background: linear-gradient(135deg, #FFF8F0 0%, #FFFBF5 100%);
  border: 1px solid ''' + LINE + ''';
  border-left: 4px solid ''' + ACCENT + ''';
  padding: 20px 24px;
  margin: 24px 0;
  border-radius: 0 4px 4px 0;
}
.ending h2 {
  font-size: 18px;
  color: ''' + PRIMARY + ''';
  margin-bottom: 10px;
}
.ending p { font-size: 13px; line-height: 1.7; color: ''' + INK + '''; margin: 6px 0; }
.ending blockquote {
  margin-top: 12px;
  padding: 10px 14px;
  background: #fff;
  border-left: 3px solid ''' + ACCENT + ''';
  color: ''' + PRIMARY + ''';
  font-weight: 700;
  font-size: 14px;
}

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
  .principle-grid, .cards-grid, .cheat-grid { grid-template-columns: 1fr; }
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
    <span>Q&amp;A应答指南</span>
    <span>8类问题 + 速查卡</span>
    <span>2026.06</span>
  </div>
</div>
<div class="wrap">
'''

hero = '''
<div class="hero">
  <h1>Q&amp;A 应答指南</h1>
  <div class="sub">8类问题 · 错误示范 vs 正确示范 · 速查卡</div>
  <div class="desc">路演结束后3-5分钟Q&amp;A，是评审中最不可控也最有价值的环节。这份指南帮你提前准备6类问题+1类"完全没想到"的问题应对。</div>
</div>
'''

# 总体原则模块
principle_section = '''
<div class="principle-grid">
  <div class="principle-card">
    <h3>心态原则</h3>
    <div class="item"><strong style="color:''' + ACCENT + ''';">问题越多 = 领导越感兴趣 = 好事。</strong></div>
    <div class="item">• 不要慌，不要急着答</div>
    <div class="item">• 不要现编答案</div>
    <div class="item">• 不要道歉（"我没想到您会问这个"是大忌）</div>
  </div>
  <div class="principle-card">
    <h3>三种万能回应模式</h3>
    <div class="item"><strong>你知道</strong>：直接说 + 一句话证据</div>
    <div class="item"><strong>你知道但不完整</strong>：说明已掌握 + 承诺补充</div>
    <div class="item"><strong>你不知道</strong>：承认 + 承诺回复</div>
  </div>
  <div class="principle-card" style="grid-column: 1 / -1; background:#FEF5F6; border-left: 3px solid ''' + ACCENT + ''';">
    <h3 style="color:''' + ACCENT + ''';border-color:''' + ACCENT + ''';">千万别说的话</h3>
    <div class="item">❌ "这个问题其实不重要……"（在回避）</div>
    <div class="item">❌ "我们还没做这个……"（暴露准备不足）</div>
    <div class="item">❌ "我刚才讲过了您没听到吗？"（推卸责任）</div>
    <div class="item">❌ "理论上……应该……"（用不确定性暗示不可靠）</div>
  </div>
</div>
'''

# 渲染卡片
def render_card(card):
    num = card['num'] - 1
    theme = THEMES[num] if num < len(THEMES) else THEMES[-1]
    color = theme['color']
    icon = theme['icon']

    # 解析blocks中的表格和列表
    html_inner = ''
    blocks = card['blocks']
    j = 0
    while j < len(blocks):
        b = blocks[j]
        if b['type'] == 'tbl':
            # 收集连续表格
            tbl_lines = [b['content']]
            k = j + 1
            while k < len(blocks) and blocks[k]['type'] == 'tbl':
                tbl_lines.append(blocks[k]['content'])
                k += 1
            # 渲染
            rows = []
            for line in tbl_lines:
                cells = [c.strip() for c in line.strip('|').split('|')]
                rows.append(cells)
            if len(rows) >= 2:
                tbl_html = '<table class="mini-table">'
                # 第一行表头
                tbl_html += '<tr>'
                for c in rows[0]:
                    tbl_html += f'<th>{text_to_html(c)}</th>'
                tbl_html += '</tr>'
                # 数据行（跳过第二行分隔）
                for row in rows[2:]:
                    tbl_html += '<tr>'
                    for c in row:
                        tbl_html += f'<td>{text_to_html(c)}</td>'
                    tbl_html += '</tr>'
                tbl_html += '</table>'
                html_inner += tbl_html
            j = k
            continue
        else:
            result = render_block(b, color)
            if result:
                html_inner += result
            j += 1

    return f'''
<div class="card">
  <div class="card-header" style="background:{color};">
    <div class="card-icon">{icon}</div>
    <span>{text_to_html(card['title'])}</span>
    <span class="card-num" style="margin-left:auto;">第{card['num']}类</span>
  </div>
  <div class="card-body">{html_inner}</div>
</div>
'''

cards_html = '<div class="cards-grid">' + ''.join(render_card(c) for c in cards) + '</div>'

# 应急流程
flow_html = '''
<div class="flow-card">
  <h3>应急处理流程（完全没想到的问题）</h3>
  <div class="flow-step"><span class="label">第1步</span>领导问出未准备问题</div>
  <div class="flow-step"><span class="label">第2步</span>深呼吸1秒（不急）</div>
  <div class="flow-step"><span class="label">第3步</span>说"这是个好问题——"</div>
  <div class="flow-step"><span class="label">第4步</span>说"目前掌握的是……"（如果有任何相关信息）</div>
  <div class="flow-step"><span class="label">第5步</span>"更准确的数据我回去核实，[具体时间]给您书面回复。"</div>
  <div class="flow-step"><span class="label">第6步</span>微笑，等下一个问题</div>
</div>
'''

# 速查卡
cheat_html = '''
<div class="cheat-card">
  <h2>📋 Q&amp;A 速查卡（建议打印带进会议室）</h2>
  <div class="cheat-grid">
    <div class="cheat-item">
      <div class="q-type">❶ 追问数字来源</div>
      <div class="a-script">"这个数字我们这批次手工统计的，样本是12份，下个月做更系统统计。"</div>
    </div>
    <div class="cheat-item">
      <div class="q-type">❷ 问推广可行性</div>
      <div class="a-script">"适配一个新场景大概需要1-2周，主要是配置检查项。"</div>
    </div>
    <div class="cheat-item">
      <div class="q-type">❸ 问数据安全</div>
      <div class="a-script">"我们只输入文字内容，没涉及客户信息；工具是企业版，关闭了训练选项。"</div>
    </div>
    <div class="cheat-item">
      <div class="q-type">❹ 问"为什么以前没做"</div>
      <div class="a-script">"之前没这样便捷的工具，这次学习才有机会系统设计。"</div>
    </div>
    <div class="cheat-item">
      <div class="q-type">❺ 问"投入产出比"</div>
      <div class="a-script">"前期投入40小时，全年换回2000+小时，投入产出比1:50。"</div>
    </div>
    <div class="cheat-item">
      <div class="q-type">❻ 问"AI会不会取代你"</div>
      <div class="a-script">"AI替出来的是机械部分，我现在做的都是AI做不了的部分。"</div>
    </div>
    <div class="cheat-item">
      <div class="q-type">❼ 问"如何衡量长期效果"</div>
      <div class="a-script">"三个指标：处理时间/错误率/满意度，每月数据更新，3个月整体复盘。"</div>
    </div>
    <div class="cheat-item">
      <div class="q-type">❽ 完全没想到的问题</div>
      <div class="a-script">"这是个好问题，我目前掌握的是……更准确的核实后明天给您书面回复。"</div>
    </div>
  </div>
</div>
'''

# 写在最后
ending_html = '''
<div class="ending">
  <h2>写在最后</h2>
  <p>Q&amp;A不是考试。是<strong>领导在认真地和你讨论一件事</strong>。</p>
  <p>他每提一个问题，都是在帮你做得更好。哪怕他的问题听起来很尖锐，那也是因为他认为这件事值得花精力去问。</p>
  <p>带着这个心态去应对。</p>
  <p>你不会完美的。但你可以真诚、可以有条理、可以快速反应。</p>
  <p>这三点，比完美的答案，更让领导信任你。</p>
  <blockquote>领导记不住的，是你某道题答得多漂亮。领导记住的，是你"靠谱"这个整体印象。</blockquote>
</div>
'''

bottom = '''
</div>
<div class="footer">
  <div><span class="accent">顺造科技 · AI项目成果评审</span> · 学员路演基础指南包</div>
  <div style="margin-top:4px;">文件3 / 4：Q&amp;A应答指南（8类问题） · 2026.06</div>
</div>
</body>
</html>
'''

full_html = topbar + hero + principle_section + cards_html + flow_html + cheat_html + ending_html + bottom
html_path.write_text(full_html, encoding='utf-8')
print(f'OK: {html_path}')
print(f'Size: {len(full_html)} bytes')
print(f'Cards: {len(cards)}')
