import os

OUTPUT_DIR = "D:/新课开发/导师和带教/导师带教/新版/AI时代版/完整课程包/06_全流程工具表单/HTML版"
os.makedirs(OUTPUT_DIR, exist_ok=True)

PRIMARY = "#2b2d42"
SECONDARY = "#8d99ae"
ACCENT = "#ef233c"
LIGHT = "#edf2f4"
WHITE = "#ffffff"

def make_page(content, title):
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
<style>
:root {{
  --primary: {PRIMARY};
  --secondary: {SECONDARY};
  --accent: {ACCENT};
  --light: {LIGHT};
  --white: {WHITE};
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{
  font-family: 'Noto Sans SC', sans-serif;
  background: var(--light);
  color: var(--primary);
  min-height: 100vh;
  padding: 20px;
}}
.page {{
  max-width: 1200px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(43,45,66,0.08);
  padding: 32px 40px;
  page-break-after: always;
}}
.header {{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--primary);
  padding-bottom: 16px;
  margin-bottom: 28px;
}}
.header-left {{ display: flex; align-items: center; gap: 16px; }}
.badge {{
  background: var(--primary);
  color: var(--white);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 2px;
  letter-spacing: 1px;
}}
h1 {{
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.5px;
}}
.header-right {{
  font-size: 12px;
  color: var(--secondary);
  text-align: right;
}}
.section {{
  margin-bottom: 24px;
}}
.section-title {{
  font-size: 13px;
  font-weight: 700;
  color: var(--white);
  background: var(--primary);
  padding: 8px 14px;
  border-radius: 2px;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
}}
.section-title.accent {{
  background: var(--accent);
}}
.grid-2 {{ display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }}
.grid-3 {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }}
.grid-4 {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }}
.grid-5 {{ display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }}
.field {{
  background: var(--light);
  border-radius: 3px;
  padding: 10px 12px;
}}
.field label {{
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: var(--secondary);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}}
.field .value {{
  font-size: 13px;
  color: var(--primary);
  min-height: 20px;
  border-bottom: 1px solid var(--secondary);
  padding-bottom: 2px;
}}
.matrix {{
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  gap: 2px;
  font-size: 12px;
  text-align: center;
}}
.matrix-corner {{ background: var(--primary); color: var(--white); padding: 8px; }}
.matrix-header {{
  background: var(--secondary);
  color: var(--white);
  padding: 8px 4px;
  font-weight: 500;
}}
.matrix-row-header {{
  background: var(--secondary);
  color: var(--white);
  padding: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}}
.matrix-cell {{
  background: var(--light);
  padding: 12px 8px;
  border-radius: 2px;
}}
.matrix-cell.highlight {{ background: #fff0f0; border: 2px solid var(--accent); }}
.bia-steps {{ display: flex; gap: 16px; }}
.bia-step {{
  flex: 1;
  background: var(--light);
  border-radius: 4px;
  padding: 16px;
  text-align: center;
  border-top: 4px solid var(--accent);
}}
.bia-step .letter {{
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}}
.bia-step .word {{
  font-size: 13px;
  font-weight: 700;
  color: var(--primary);
  margin: 6px 0;
}}
.bia-step .meaning {{
  font-size: 11px;
  color: var(--secondary);
}}
.checklist {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}}
.check-item {{
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: var(--light);
  padding: 10px 12px;
  border-radius: 3px;
  font-size: 12px;
}}
.check-item input[type="checkbox"] {{
  width: 14px;
  height: 14px;
  accent-color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}}
.workflow-row {{
  display: grid;
  grid-template-columns: 120px 100px 1fr 100px 100px;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--light);
}}
.workflow-row.header-row {{
  font-weight: 700;
  font-size: 11px;
  color: var(--white);
  background: var(--secondary);
  padding: 8px 10px;
  border-radius: 2px;
}}
.phase-tag {{
  display: inline-block;
  background: var(--primary);
  color: var(--white);
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 2px;
  font-weight: 500;
}}
.textarea-field {{
  background: var(--light);
  border-radius: 3px;
  padding: 12px;
  margin-bottom: 12px;
}}
.textarea-field label {{
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: var(--secondary);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}}
.textarea-field .content {{
  min-height: 60px;
  border-bottom: 1px solid var(--secondary);
}}
.dimension {{
  background: var(--light);
  border-radius: 4px;
  padding: 14px;
  border-left: 4px solid var(--primary);
}}
.dimension h4 {{
  font-size: 13px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 4px;
}}
.dimension p {{
  font-size: 11px;
  color: var(--secondary);
  line-height: 1.5;
}}
.dimension-eval {{
  margin-top: 8px;
  font-size: 11px;
  color: var(--primary);
}}
.exp-section {{
  background: var(--light);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 14px;
}}
.exp-section h4 {{
  font-size: 12px;
  font-weight: 700;
  color: var(--white);
  background: var(--accent);
  padding: 6px 10px;
  border-radius: 2px;
  margin-bottom: 10px;
}}
.exp-section p {{
  font-size: 10px;
  color: var(--secondary);
  font-style: italic;
  margin-bottom: 8px;
}}
.exp-section .content {{
  min-height: 50px;
  border-bottom: 1px solid var(--secondary);
}}
.footer {{
  margin-top: 24px;
  padding-top: 16px;
  border-top: 2px solid var(--primary);
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--secondary);
}}
.qc-row {{
  display: grid;
  grid-template-columns: 140px 1fr 60px 60px 1fr;
  gap: 8px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--light);
  font-size: 12px;
}}
.qc-header {{
  font-weight: 700;
  font-size: 11px;
  color: var(--white);
  background: var(--secondary);
  padding: 8px;
  border-radius: 2px;
}}
.signature {{
  display: flex;
  gap: 40px;
  margin-top: 20px;
}}
.sign-item {{
  font-size: 12px;
  color: var(--secondary);
}}
.sign-item span {{
  display: inline-block;
  border-bottom: 1px solid var(--primary);
  min-width: 120px;
  margin-left: 8px;
}}
@page {{
  size: A4 landscape;
  margin: 15mm;
}}
@media print {{
  body {{ background: white; padding: 0; }}
  .page {{ box-shadow: none; padding: 20px 24px; }}
}}
</style>
</head>
<body>
{content}
</body>
</html>"""

# FA01 - 学徒基线诊断卡
fa01 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA01</span>
      <h1>学徒基线诊断卡</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      记录日期：__________
    </div>
  </div>

  <div class="grid-3" style="margin-bottom:20px;">
    <div class="field">
      <label>学徒姓名</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>入职时间</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>岗位</label>
      <div class="value"></div>
    </div>
  </div>

  <div class="grid-2" style="margin-bottom:20px;">
    <div>
      <div class="section-title">能力-意愿矩阵定位</div>
      <div class="matrix">
        <div class="matrix-corner"></div>
        <div class="matrix-header">低意愿</div>
        <div class="matrix-header">高意愿</div>
        <div class="matrix-row-header">高能力</div>
        <div class="matrix-cell">第一象限<br><strong>独立自主型</strong></div>
        <div class="matrix-cell highlight">第二象限<br><strong>进阶成长型</strong></div>
        <div class="matrix-row-header">低能力</div>
        <div class="matrix-cell">第三象限<br><strong>稳定成熟型</strong></div>
        <div class="matrix-cell">第四象限<br><strong>需要指导型</strong></div>
      </div>
    </div>
    <div>
      <div class="section-title">学徒画像识别</div>
      <div style="font-size:12px;line-height:1.8;color:var(--primary);">
        <div>□ <strong>勤奋但迷茫型</strong> — 缺乏框架，信息越多越混乱</div>
        <div>□ <strong>表面配合型</strong> — 点头但不做，等导师主动</div>
        <div>□ <strong>快速跳跃型</strong> — 学得快但跳基础，容易后续卡点</div>
        <div>□ <strong>沉默型</strong> — 不说问题，不代表没有问题</div>
        <div>□ <strong>过度依赖型</strong> — 等导师给答案，不自己思考</div>
      </div>
    </div>
  </div>

  <div class="section-title">初始能力评估</div>
  <div class="grid-5" style="margin-bottom:16px;">
    <div class="field">
      <label>专业技能</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>行业经验</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>沟通表达</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>自主判断</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>学习敏捷度</label>
      <div class="value"></div>
    </div>
  </div>

  <div class="section-title">关键观察与风险识别</div>
  <div class="textarea-field">
    <label>优势信号</label>
    <div class="content"></div>
  </div>
  <div class="textarea-field">
    <label>风险信号</label>
    <div class="content"></div>
  </div>
  <div class="textarea-field">
    <label>AI辅助诊断备注</label>
    <div class="content"></div>
  </div>

  <div class="footer">
    <span>导师签名：__________</span>
    <span>学徒签名：__________</span>
    <span>双方确认日期：__________</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA01_学徒基线诊断卡.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa01, "FA01 学徒基线诊断卡"))

# FA02 - 三阶段带教路线图
fa02 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA02</span>
      <h1>三阶段带教路线图</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      学徒姓名：__________
    </div>
  </div>

  <div class="phase-tag" style="margin-bottom:16px;">启动阶段（前1/4周期）— 建立信任、明确基线、对齐期望</div>
  <div class="grid-2" style="margin-bottom:20px;">
    <div class="field">
      <label>时间范围</label>
      <div class="value">第____月至第____月</div>
    </div>
    <div class="field">
      <label>核心目标</label>
      <div class="value"></div>
    </div>
  </div>
  <div class="textarea-field" style="margin-bottom:8px;">
    <label>里程碑（可观察行为）</label>
    <div class="content" style="min-height:48px;"></div>
  </div>
  <div class="textarea-field" style="margin-bottom:8px;">
    <label>关键动作</label>
    <div class="content" style="min-height:48px;"></div>
  </div>
  <div class="textarea-field">
    <label>AI辅助时机</label>
    <div class="content"></div>
  </div>

  <div class="phase-tag" style="margin-bottom:16px;background:var(--secondary);">辅导阶段（中间1/2周期）— 具体辅导、观察反馈、迭代调整</div>
  <div class="grid-2" style="margin-bottom:20px;">
    <div class="field">
      <label>时间范围</label>
      <div class="value">第____月至第____月</div>
    </div>
    <div class="field">
      <label>核心目标</label>
      <div class="value"></div>
    </div>
  </div>
  <div class="textarea-field" style="margin-bottom:8px;">
    <label>里程碑（可观察行为）</label>
    <div class="content" style="min-height:48px;"></div>
  </div>
  <div class="textarea-field" style="margin-bottom:8px;">
    <label>关键动作</label>
    <div class="content" style="min-height:48px;"></div>
  </div>
  <div class="textarea-field">
    <label>AI辅助时机</label>
    <div class="content"></div>
  </div>

  <div class="phase-tag" style="margin-bottom:16px;background:var(--accent);">总结阶段（最后1/4周期）— 固化成果、验证能力、明确下一步</div>
  <div class="grid-2" style="margin-bottom:20px;">
    <div class="field">
      <label>时间范围</label>
      <div class="value">第____月至第____月</div>
    </div>
    <div class="field">
      <label>核心目标</label>
      <div class="value"></div>
    </div>
  </div>
  <div class="textarea-field" style="margin-bottom:8px;">
    <label>里程碑（可观察行为）</label>
    <div class="content" style="min-height:48px;"></div>
  </div>
  <div class="textarea-field" style="margin-bottom:8px;">
    <label>关键动作</label>
    <div class="content" style="min-height:48px;"></div>
  </div>
  <div class="textarea-field">
    <label>AI辅助时机</label>
    <div class="content"></div>
  </div>

  <div class="footer">
    <span>导师签名：__________</span>
    <span>学徒签名：__________</span>
    <span>路线图制定日期：__________</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA02_三阶段带教路线图.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa02, "FA02 三阶段带教路线图"))

# FA03 - BEST反馈工作表
fa03 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA03</span>
      <h1>BEST反馈工作表</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      日期：__________ 学徒：__________
    </div>
  </div>

  <div class="bia-steps" style="margin-bottom:24px;">
    <div class="bia-step">
      <div class="letter">B</div>
      <div class="word">Behavior</div>
      <div class="meaning">描述具体行为</div>
    </div>
    <div class="bia-step">
      <div class="letter">E</div>
      <div class="word">Effect</div>
      <div class="meaning">说明行为影响</div>
    </div>
    <div class="bia-step">
      <div class="letter">S</div>
      <div class="word">Suggestion</div>
      <div class="meaning">给出改进方向</div>
    </div>
    <div class="bia-step">
      <div class="letter">T</div>
      <div class="word">Next Step</div>
      <div class="meaning">明确后续步骤</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">B — 描述具体行为</div>
    <div class="textarea-field">
      <label>描述学徒做出的具体行为（不是评价，是事实）</label>
      <div class="content" style="min-height:70px;"></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">E — 说明行为影响</div>
    <div class="textarea-field">
      <label>这个行为对团队/项目/他人产生了什么影响</label>
      <div class="content" style="min-height:70px;"></div>
    </div>
  </div>

  <div class="grid-2">
    <div class="section">
      <div class="section-title accent">S — 改进方向</div>
      <div class="textarea-field">
        <label>具体的改进建议（不是笼统的"要努力"）</label>
        <div class="content" style="min-height:80px;"></div>
      </div>
    </div>
    <div class="section">
      <div class="section-title accent">T — 后续步骤</div>
      <div class="textarea-field">
        <label>明确的后续行动和时间节点</label>
        <div class="content" style="min-height:80px;"></div>
      </div>
    </div>
  </div>

  <div class="section-title" style="margin-top:20px;">反馈记录与跟进</div>
  <div class="grid-3">
    <div class="field">
      <label>反馈日期</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>学徒确认</label>
      <div class="value">□ 是  □ 否</div>
    </div>
    <div class="field">
      <label>跟进日期</label>
      <div class="value"></div>
    </div>
  </div>
  <div class="textarea-field" style="margin-top:12px;">
    <label>跟进情况备注</label>
    <div class="content"></div>
  </div>

  <div class="footer">
    <span>导师签名：__________</span>
    <span>学徒签名：__________</span>
    <span></span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA03_BEST反馈工作表.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa03, "FA03 BEST反馈工作表"))

# FA04 - BIA积极性反馈工作表
fa04 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA04</span>
      <h1>BIA积极性反馈工作表</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      日期：__________ 学徒：__________
    </div>
  </div>

  <div class="bia-steps" style="margin-bottom:24px;">
    <div class="bia-step">
      <div class="letter">B</div>
      <div class="word">Behavior</div>
      <div class="meaning">描述具体行为</div>
    </div>
    <div class="bia-step">
      <div class="letter">I</div>
      <div class="word">Impact</div>
      <div class="meaning">说明行为影响</div>
    </div>
    <div class="bia-step">
      <div class="letter">A</div>
      <div class="word">Appreciation</div>
      <div class="meaning">真诚表达感谢</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">B — 描述学徒做对了什么</div>
    <div class="textarea-field">
      <label>描述学徒做出的具体正向行为（不是泛泛的"你做得不错"）</label>
      <div class="content" style="min-height:80px;"></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">I — 说明这个行为的影响</div>
    <div class="textarea-field">
      <label>这个行为对团队/项目/他人产生了什么积极影响</label>
      <div class="content" style="min-height:80px;"></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title accent">A — 真诚表达感谢</div>
    <div class="textarea-field">
      <label>用真诚的语言表达感谢（避免公式化）</label>
      <div class="content" style="min-height:80px;"></div>
    </div>
  </div>

  <div class="section-title" style="margin-top:20px;">使用场景判断</div>
  <div class="checklist" style="margin-bottom:20px;">
    <div class="check-item"><input type="checkbox"> <span>学徒完成了一个重要里程碑</span></div>
    <div class="check-item"><input type="checkbox"> <span>学徒主动帮助了团队成员</span></div>
    <div class="check-item"><input type="checkbox"> <span>学徒提出了好的改进建议</span></div>
    <div class="check-item"><input type="checkbox"> <span>学徒克服困难完成了任务</span></div>
    <div class="check-item"><input type="checkbox"> <span>日常工作中的亮点行为</span></div>
    <div class="check-item"><input type="checkbox"> <span>其他：________________</span></div>
  </div>

  <div class="footer">
    <span>导师签名：__________</span>
    <span>学徒签名：__________</span>
    <span></span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA04_BIA积极性反馈工作表.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa04, "FA04 BIA积极性反馈工作表"))

# FA05 - 五维度发展评估表
fa05 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA05</span>
      <h1>五维度发展评估表</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      评估周期：__________ 学徒：__________
    </div>
  </div>

  <div class="section-title">评估维度（每项附具体行为描述）</div>
  <div class="grid-2" style="gap:16px;margin-bottom:16px;">
    <div class="dimension">
      <h4>1. 任务完成度</h4>
      <p>质量和效率如何？交付物是否达标？</p>
      <div class="dimension-eval">具体行为：_____________________</div>
    </div>
    <div class="dimension">
      <h4>2. 自主判断力</h4>
      <p>先自己想还是直接来问？能否独立做决策？</p>
      <div class="dimension-eval">具体行为：_____________________</div>
    </div>
    <div class="dimension">
      <h4>3. 学习敏捷度</h4>
      <p>上手新事物的速度？遇到新问题的应对方式？</p>
      <div class="dimension-eval">具体行为：_____________________</div>
    </div>
    <div class="dimension">
      <h4>4. 协作主动性</h4>
      <p>只做份内事还是主动补位？团队贡献如何？</p>
      <div class="dimension-eval">具体行为：_____________________</div>
    </div>
    <div class="dimension" style="grid-column:1/-1;border-left-color:var(--accent);">
      <h4>5. 发展后劲</h4>
      <p>成长是否可持续？长期潜力如何？有哪些迹象表明持续进步的能力？</p>
      <div class="dimension-eval">具体行为：_____________________</div>
    </div>
  </div>

  <div class="section-title">综合评估</div>
  <div class="grid-3" style="margin-bottom:16px;">
    <div class="field">
      <label>整体表现</label>
      <div class="value">□ 超出预期  □ 符合预期  □ 待改进</div>
    </div>
    <div class="field">
      <label>下阶段重点</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>评估日期</label>
      <div class="value"></div>
    </div>
  </div>
  <div class="textarea-field">
    <label>AI辅助评估备注（如有）</label>
    <div class="content"></div>
  </div>

  <div class="footer">
    <span>导师签名：__________</span>
    <span>学徒签名：__________</span>
    <span></span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA05_五维度发展评估表.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa05, "FA05 五维度发展评估表"))

# FA06 - AI工作流设定卡
fa06 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA06</span>
      <h1>AI工作流设定卡</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      导师姓名：__________
    </div>
  </div>

  <div class="section-title">四个介入点的AI工具设定</div>
  <div style="margin-bottom:16px;">
    <div class="workflow-row header-row">
      <div>介入时机</div>
      <div>使用工具</div>
      <div>具体操作</div>
      <div>输出形式</div>
      <div>我的安排</div>
    </div>
    <div class="workflow-row">
      <div><span class="phase-tag">会谈前</span></div>
      <div>千问Max</div>
      <div>输入上次谈话摘要，生成建议重点</div>
      <div>3-5个要点提示</div>
      <div></div>
    </div>
    <div class="workflow-row">
      <div><span class="phase-tag">会谈中</span></div>
      <div>GET笔记</div>
      <div>开启实时转写</div>
      <div>完整文字记录</div>
      <div></div>
    </div>
    <div class="workflow-row">
      <div><span class="phase-tag">会谈后</span></div>
      <div>千问Max</div>
      <div>输入转写文本，提炼进展和跟进点</div>
      <div>摘要+建议</div>
      <div></div>
    </div>
    <div class="workflow-row">
      <div><span class="phase-tag" style="background:var(--accent);">周期总结</span></div>
      <div>千问Max+WOKBUDDY</div>
      <div>整合全周期数据，生成评估报告</div>
      <div>结构化报告</div>
      <div></div>
    </div>
  </div>

  <div class="grid-2">
    <div class="section">
      <div class="section-title">AI工具使用习惯</div>
      <div class="textarea-field">
        <label>我计划这样安排AI辅助时间</label>
        <div class="content" style="min-height:80px;"></div>
      </div>
    </div>
    <div class="section">
      <div class="section-title accent">AI介入边界</div>
      <div class="textarea-field">
        <label>我认为哪些场景AI不能介入</label>
        <div class="content" style="min-height:80px;"></div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>设定日期：__________</span>
    <span>下次复盘日期：__________</span>
    <span></span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA06_AI工作流设定卡.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa06, "FA06 AI工作流设定卡"))

# FA07 - 会谈准备单
fa07 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA07</span>
      <h1>会谈准备单</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      日期：__________ 学徒：__________
    </div>
  </div>

  <div class="grid-3" style="margin-bottom:20px;">
    <div class="field">
      <label>谈话时长</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>谈话形式</label>
      <div class="value">□ 线上  □ 线下</div>
    </div>
    <div class="field">
      <label>录音</label>
      <div class="value">□ 是  □ 否</div>
    </div>
  </div>

  <div class="section-title">会谈前准备（AI辅助）</div>
  <div class="textarea-field">
    <label>AI生成的上次谈话摘要</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>本次核心议题（1-2个）</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>建议追问方向</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>正向反馈机会（如有）</label>
    <div class="content" style="min-height:56px;"></div>
  </div>

  <div class="section-title accent">导师个人准备笔记</div>
  <div class="textarea-field">
    <label>我想特别关注什么</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>我需要调整的状态</label>
    <div class="content" style="min-height:56px;"></div>
  </div>

  <div class="footer">
    <span></span>
    <span>准备完成时间：__________</span>
    <span></span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA07_会谈准备单.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa07, "FA07 会谈准备单"))

# FA08 - 会谈记录提炼表
fa08 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA08</span>
      <h1>会谈记录提炼表</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      日期：__________ 学徒：__________
    </div>
  </div>

  <div class="grid-3" style="margin-bottom:20px;">
    <div class="field">
      <label>谈话时长</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>录音转写</label>
      <div class="value">□ 已完成  □ 未录音</div>
    </div>
    <div class="field">
      <label>提炼日期</label>
      <div class="value"></div>
    </div>
  </div>

  <div class="section-title">AI分析结果（需人工核实）</div>
  <div class="textarea-field">
    <label>本次核心议题</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>学徒主要进展</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>潜在风险信号</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>需要跟进的事项</label>
    <div class="content" style="min-height:56px;"></div>
  </div>

  <div class="section-title">导师核实与补充</div>
  <div class="textarea-field">
    <label>AI分析是否准确？需要怎么调整？</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>补充AI没有捕捉到的细节</label>
    <div class="content" style="min-height:56px;"></div>
  </div>
  <div class="textarea-field">
    <label>下次会谈重点</label>
    <div class="content" style="min-height:56px;"></div>
  </div>

  <div class="footer">
    <span>提炼人：__________</span>
    <span>核实人：__________</span>
    <span></span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA08_会谈记录提炼表.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa08, "FA08 会谈记录提炼表"))

# FA09 - 经验萃取工作表
fa09 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA09</span>
      <h1>经验萃取工作表</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      条目编号：__________
    </div>
  </div>

  <div class="grid-3" style="margin-bottom:20px;">
    <div class="field">
      <label>经验条目名称</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>来源导师</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>适用岗位</label>
      <div class="value"></div>
    </div>
  </div>

  <div class="exp-section">
    <h4>情境描述</h4>
    <p>什么情况下这个经验有价值？描述具体到其他导师可以对号入座</p>
    <div class="content"></div>
  </div>

  <div class="exp-section">
    <h4>判断逻辑</h4>
    <p>核心判断标准是什么？有什么步骤或判断树？</p>
    <div class="content"></div>
  </div>

  <div class="exp-section">
    <h4>操作建议</h4>
    <p>遇到这种情况，导师具体可以怎么做？给出1-4个步骤</p>
    <div class="content"></div>
  </div>

  <div class="exp-section">
    <h4>风险提示</h4>
    <p>这条经验在什么情况下不适用？列出2-3种情况</p>
    <div class="content"></div>
  </div>

  <div class="grid-3" style="margin-top:16px;">
    <div class="field">
      <label>原始描述日期</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>审阅确认日期</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>验证状态</label>
      <div class="value">□ 已验证  □ 待验证</div>
    </div>
  </div>

  <div class="footer">
    <span>萃取人：__________</span>
    <span>审阅人：__________</span>
    <span>入库日期：__________</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA09_经验萃取工作表.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa09, "FA09 经验萃取工作表"))

# FA10 - 经验条目质检清单
fa10 = """<div class="page">
  <div class="header">
    <div class="header-left">
      <span class="badge">FA10</span>
      <h1>经验条目质检清单</h1>
    </div>
    <div class="header-right">
      导师带教实战工作坊·AI时代版<br>
      被检条目：__________
    </div>
  </div>

  <div class="qc-header" style="display:grid;grid-template-columns:140px 1fr 60px 60px 1fr;gap:8px;">
    <div>检查项</div>
    <div>标准</div>
    <div>通过</div>
    <div>需修改</div>
    <div>备注</div>
  </div>

  <div class="qc-row">
    <div><strong>情境具体性</strong></div>
    <div style="font-size:11px;color:var(--secondary);">描述具体到其他导师可以对号入座，不是泛泛的"因人而异"</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div></div>
  </div>
  <div class="qc-row">
    <div><strong>判断逻辑完整性</strong></div>
    <div style="font-size:11px;color:var(--secondary);">有清晰的判断标准，能回答"我怎么知道什么时候用这条经验"</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div></div>
  </div>
  <div class="qc-row">
    <div><strong>操作建议可执行性</strong></div>
    <div style="font-size:11px;color:var(--secondary);">拿到就能做，不是"要灵活判断"</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div></div>
  </div>
  <div class="qc-row">
    <div><strong>风险边界标注</strong></div>
    <div style="font-size:11px;color:var(--secondary);">有明确的不适用情况，不是"这条经验万能"</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div></div>
  </div>
  <div class="qc-row">
    <div><strong>来源标注</strong></div>
    <div style="font-size:11px;color:var(--secondary);">标注了来源导师和适用场景/岗位</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div></div>
  </div>
  <div class="qc-row">
    <div><strong>无个人特例</strong></div>
    <div style="font-size:11px;color:var(--secondary);">没有把只在特定条件下有效的判断当成普遍规律</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div style="text-align:center;font-size:16px;">□</div>
    <div></div>
  </div>

  <div class="section-title" style="margin-top:20px;">综合评价</div>
  <div class="textarea-field">
    <label>同行反馈意见</label>
    <div class="content" style="min-height:60px;"></div>
  </div>
  <div class="textarea-field">
    <label>最终结论</label>
    <div class="content" style="min-height:60px;"></div>
  </div>

  <div class="signature">
    <div class="sign-item">质检人：<span></span></div>
    <div class="sign-item">日期：<span></span></div>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA10_经验条目质检清单.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa10, "FA10 经验条目质检清单"))

# FA11 - 工具包封面+行动计划
fa11 = """<div class="page">
  <div class="header" style="border-bottom:4px solid var(--accent);">
    <div class="header-left">
      <span class="badge" style="background:var(--accent);font-size:13px;padding:6px 14px;">工具包</span>
      <h1 style="font-size:32px;">个人带教工具包</h1>
    </div>
    <div class="header-right" style="font-size:14px;">
      导师带教实战工作坊·AI时代版
    </div>
  </div>

  <div class="grid-3" style="margin:24px 0;">
    <div class="field">
      <label>导师姓名</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>所属部门</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>学徒姓名</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>工具包完成日期</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>适用带教周期</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>版本</label>
      <div class="value">v1.0</div>
    </div>
  </div>

  <div class="section-title">工具包内容清单</div>
  <div class="checklist" style="margin-bottom:24px;">
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA01 学徒基线诊断卡</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA02 三阶段带教路线图</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA03 BEST反馈工作表</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA04 BIA积极性反馈工作表</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA05 五维度发展评估表</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA06 AI工作流设定卡</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA07 会谈准备单</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA08 会谈记录提炼表</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA09 经验萃取工作表</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA10 经验条目质检清单</span></div>
    <div class="check-item" style="font-size:13px;"><input type="checkbox" checked> <span>FA11 工具包封面+行动计划</span></div>
  </div>

  <div class="section-title accent">个人行动计划（3项承诺）</div>
  <div style="margin-bottom:20px;">
    <div class="field" style="margin-bottom:10px;">
      <label>承诺1</label>
      <div class="value"></div>
    </div>
    <div class="field" style="margin-bottom:10px;">
      <label>承诺2</label>
      <div class="value"></div>
    </div>
    <div class="field">
      <label>承诺3</label>
      <div class="value"></div>
    </div>
  </div>

  <div class="signature">
    <div class="sign-item">导师签名：<span></span></div>
    <div class="sign-item">日期：<span></span></div>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/FA11_工具包封面行动计划.html", "w", encoding="utf-8") as f:
    f.write(make_page(fa11, "FA11 工具包封面+行动计划"))

print("All 11 HTML forms created successfully!")
print(f"Output directory: {OUTPUT_DIR}")