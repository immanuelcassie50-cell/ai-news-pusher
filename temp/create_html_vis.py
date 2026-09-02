import os

OUTPUT_DIR = "D:/新课开发/导师和带教/导师带教/新版/AI时代版/完整课程包/08_HTML可视化"
os.makedirs(OUTPUT_DIR, exist_ok=True)

PRIMARY = "#2b2d42"
SECONDARY = "#8d99ae"
ACCENT = "#ef233c"
LIGHT = "#edf2f4"
WHITE = "#ffffff"

def make_vis(content, title, wide=False):
    maxw = "1400px" if wide else "1100px"
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Playfair+Display:wght@600;700;900&display=swap" rel="stylesheet">
<style>
:root {{ --primary: {PRIMARY}; --secondary: {SECONDARY}; --accent: {ACCENT}; --light: {LIGHT}; --white: {WHITE}; }}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ font-family: 'Noto Sans SC', sans-serif; background: var(--light); color: var(--primary); padding: 24px; }}
.page {{ max-width: {maxw}; margin: 0 auto; background: var(--white); border-radius: 6px; box-shadow: 0 4px 20px rgba(43,45,66,0.1); padding: 36px 44px; page-break-after: always; }}
.header {{ display: flex; align-items: center; gap: 20px; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 3px solid var(--primary); }}
.badge {{ background: var(--primary); color: var(--white); font-size: 11px; font-weight: 700; padding: 5px 12px; border-radius: 2px; letter-spacing: 1px; }}
h1 {{ font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--primary); }}
.subtitle {{ font-size: 13px; color: var(--secondary); margin-top: 4px; }}
.cards {{ display: grid; gap: 18px; }}
.cards.cols-2 {{ grid-template-columns: 1fr 1fr; }}
.cards.cols-3 {{ grid-template-columns: repeat(3, 1fr); }}
.cards.cols-4 {{ grid-template-columns: repeat(4, 1fr); }}
.card {{ background: var(--light); border-radius: 6px; padding: 20px; }}
.card.accent-border {{ border-left: 5px solid var(--accent); }}
.card.primary-border {{ border-left: 5px solid var(--primary); }}
.card h3 {{ font-size: 15px; font-weight: 700; color: var(--primary); margin-bottom: 8px; }}
.card p {{ font-size: 12px; color: var(--secondary); line-height: 1.7; }}
.card .big-num {{ font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 900; color: var(--accent); line-height: 1; }}
.card .label {{ font-size: 12px; color: var(--secondary); margin-top: 4px; }}
.step-flow {{ display: flex; align-items: stretch; gap: 12px; }}
.step {{ flex: 1; background: var(--light); border-radius: 6px; padding: 18px 14px; text-align: center; position: relative; }}
.step::after {{ content: '→'; position: absolute; right: -14px; top: 50%; transform: translateY(-50%); font-size: 18px; color: var(--accent); font-weight: bold; }}
.step:last-child::after {{ display: none; }}
.step .num {{ width: 28px; height: 28px; background: var(--primary); color: var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; margin: 0 auto 10px; }}
.step .title {{ font-size: 13px; font-weight: 700; color: var(--primary); margin-bottom: 6px; }}
.step .desc {{ font-size: 11px; color: var(--secondary); line-height: 1.5; }}
.matrix-grid {{ display: grid; grid-template-columns: auto 1fr 1fr; grid-template-rows: auto 1fr 1fr; gap: 3px; font-size: 12px; text-align: center; }}
.m-header {{ background: var(--secondary); color: var(--white); padding: 10px; font-weight: 600; }}
.m-corner {{ background: var(--primary); }}
.m-row {{ background: var(--secondary); color: var(--white); padding: 10px; font-weight: 600; display: flex; align-items: center; justify-content: center; }}
.m-cell {{ background: var(--light); padding: 14px 10px; border-radius: 3px; }}
.m-cell.highlight {{ background: #fff5f5; border: 2px solid var(--accent); }}
.m-cell h4 {{ font-size: 12px; font-weight: 700; color: var(--primary); margin-bottom: 4px; }}
.m-cell p {{ font-size: 10px; color: var(--secondary); }}
.timeline {{ display: flex; gap: 0; }}
.timeline-item {{ flex: 1; padding: 16px; background: var(--light); border-radius: 6px; position: relative; }}
.timeline-item::before {{ content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; border-radius: 6px 6px 0 0; }}
.timeline-item.phase1::before {{ background: var(--primary); }}
.timeline-item.phase2::before {{ background: var(--secondary); }}
.timeline-item.phase3::before {{ background: var(--accent); }}
.timeline-item h4 {{ font-size: 12px; font-weight: 700; margin-bottom: 6px; }}
.timeline-item p {{ font-size: 11px; color: var(--secondary); line-height: 1.5; }}
.quote {{ background: linear-gradient(135deg, var(--primary) 0%, #3d4066 100%); color: var(--white); padding: 24px 28px; border-radius: 6px; margin: 20px 0; }}
.quote p {{ font-size: 14px; line-height: 1.8; font-style: italic; }}
.quote .source {{ font-size: 12px; margin-top: 10px; opacity: 0.7; font-style: normal; }}
.grid-2-cols {{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }}
.list-item {{ display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--light); }}
.list-item .num {{ width: 22px; height: 22px; background: var(--accent); color: var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; }}
.list-item .content h4 {{ font-size: 13px; font-weight: 600; margin-bottom: 3px; }}
.list-item .content p {{ font-size: 11px; color: var(--secondary); }}
.footer {{ margin-top: 28px; padding-top: 16px; border-top: 2px solid var(--light); display: flex; justify-content: space-between; font-size: 11px; color: var(--secondary); }}
.ai-card {{ background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 6px; padding: 16px; border: 1px solid #dee2e6; }}
.ai-card h4 {{ font-size: 13px; font-weight: 700; color: var(--primary); margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }}
.ai-card h4 .tag {{ background: var(--accent); color: white; font-size: 9px; padding: 2px 6px; border-radius: 2px; }}
.ai-card p {{ font-size: 11px; color: var(--secondary); line-height: 1.6; }}
.dim-card {{ background: var(--light); border-radius: 6px; padding: 16px; border-top: 4px solid var(--primary); }}
.dim-card h4 {{ font-size: 13px; font-weight: 700; margin-bottom: 6px; }}
.dim-card p {{ font-size: 11px; color: var(--secondary); margin-bottom: 8px; }}
.dim-card .example {{ font-size: 10px; background: var(--white); padding: 8px; border-radius: 3px; color: var(--primary); }}
@page {{ size: A4 landscape; margin: 15mm; }}
@media print {{ body {{ background: white; padding: 0; }} .page {{ box-shadow: none; }} }}
</style>
</head>
<body>
{content}
</body>
</html>"""

# ====== 概览图：AI辅助带教全景 ======
overview = """<div class="page">
  <div class="header">
    <span class="badge">全景图</span>
    <div>
      <h1>AI辅助带教全景</h1>
      <div class="subtitle">四个介入点 × 三个工具 × 全周期支撑</div>
    </div>
  </div>

  <div class="cards cols-4" style="margin-bottom:24px;">
    <div class="card accent-border">
      <h3>🤝 会谈前</h3>
      <p style="margin-bottom:10px;font-size:13px;font-weight:600;">千问Max</p>
      <p>输入上次谈话摘要，生成3-5个建议重点</p>
      <div style="margin-top:10px;font-size:11px;color:var(--accent);font-weight:600;">输出：会谈议程提示</div>
    </div>
    <div class="card accent-border">
      <h3>🎙️ 会谈中</h3>
      <p style="margin-bottom:10px;font-size:13px;font-weight:600;">GET笔记</p>
      <p>开启实时转写，导师专注谈话本身</p>
      <div style="margin-top:10px;font-size:11px;color:var(--accent);font-weight:600;">输出：完整文字记录</div>
    </div>
    <div class="card accent-border">
      <h3>📋 会谈后</h3>
      <p style="margin-bottom:10px;font-size:13px;font-weight:600;">千问Max</p>
      <p>输入转写文本，提炼进展和跟进点</p>
      <div style="margin-top:10px;font-size:11px;color:var(--accent);font-weight:600;">输出：摘要+建议</div>
    </div>
    <div class="card accent-border">
      <h3>📊 周期总结</h3>
      <p style="margin-bottom:10px;font-size:13px;font-weight:600;">千问Max + WOKBUDDY</p>
      <p>整合全周期数据，生成结构化报告</p>
      <div style="margin-top:10px;font-size:11px;color:var(--accent);font-weight:600;">输出：评估报告+经验条目</div>
    </div>
  </div>

  <div class="quote">
    <p>"AI不能替代的是导师和学徒之间真实的人际连接，这是带教中最核心的部分。AI能做的是：记录内容、分析模式、沉淀智慧。"</p>
  </div>

  <div class="grid-2-cols">
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;color:var(--primary);">AI能做的三件事</h3>
      <div class="list-item"><div class="num">1</div><div class="content"><h4>让内容可记录</h4><p>每一次谈话的内容可以被记录和分析</p></div></div>
      <div class="list-item"><div class="num">2</div><div class="content"><h4>让成长可追踪</h4><p>学徒的成长轨迹从"感觉"变成可追踪的数据</p></div></div>
      <div class="list-item"><div class="num">3</div><div class="content"><h4>让智慧可沉淀</h4><p>导师的带教智慧从私人关系变成组织资产</p></div></div>
    </div>
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;color:var(--primary);">AI不能替代的三件事</h3>
      <div class="list-item"><div class="num" style="background:var(--secondary);">✗</div><div class="content"><h4>建立真实关系</h4><p>人际连接和信任是带教的核心</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--secondary);">✗</div><div class="content"><h4>做出最终判断</h4><p>学徒是否真的进步了，终究要靠人的眼睛</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--secondary);">✗</div><div class="content"><h4>承担带教责任</h4><p>签出去的报告是你的判断背书，不是AI的</p></div></div>
    </div>
  </div>

  <div class="footer">
    <span>导师带教实战工作坊·AI时代版</span>
    <span>AI辅助带教全景</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/AI辅助带教全景.html", "w", encoding="utf-8") as f:
    f.write(make_vis(overview, "AI辅助带教全景", wide=True))

# ====== 四类带教对话 ======
four_types = """<div class="page">
  <div class="header">
    <span class="badge">核心框架</span>
    <div>
      <h1>四类带教对话</h1>
      <div class="subtitle">任务辅导 · 问题辅导 · 发展辅导 · 关系辅导</div>
    </div>
  </div>

  <div class="cards cols-2">
    <div class="card primary-border">
      <h3>📌 任务辅导</h3>
      <div style="font-size:11px;color:var(--accent);font-weight:700;margin-bottom:8px;">适用场景：布置任务、传授标准流程</div>
      <div class="step-flow" style="margin:12px 0;">
        <div class="step" style="padding:10px 8px;">
          <div class="num">1</div>
          <div class="title">确认理解</div>
          <div class="desc">先确认学徒对任务目标的理解是否准确</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">2</div>
          <div class="title">拆解步骤</div>
          <div class="desc">拆成可执行的小步骤，说明"为什么要这样做"</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">3</div>
          <div class="title">明确行动</div>
          <div class="desc">让学徒复述步骤，明确离开后要做什么</div>
        </div>
      </div>
      <p style="font-size:11px;color:var(--secondary);background:var(--white);padding:8px;border-radius:3px;">⚠️ 常见错误：说得太快、只给答案不引导、缺少确认环节</p>
    </div>

    <div class="card primary-border">
      <h3>❓ 问题辅导</h3>
      <div style="font-size:11px;color:var(--accent);font-weight:700;margin-bottom:8px;">适用场景：学徒遇到困惑、决策两难、反复踩坑</div>
      <div class="step-flow" style="margin:12px 0;">
        <div class="step" style="padding:10px 8px;">
          <div class="num">1</div>
          <div class="title">听出表面问题</div>
          <div class="desc">让学徒用自己的语言描述，不要打断</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">2</div>
          <div class="title">追问具体场景</div>
          <div class="desc">追问具体是哪一次、什么情况、对方说了什么</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">3</div>
          <div class="title">确认问题</div>
          <div class="desc">把困惑提炼成一个具体的、可以解决的问题</div>
        </div>
      </div>
      <p style="font-size:11px;color:var(--secondary);background:var(--white);padding:8px;border-radius:3px;">⚠️ 常见错误：急于给建议、直接否定学徒判断、跳过追问</p>
    </div>

    <div class="card accent-border">
      <h3>🚀 发展辅导</h3>
      <div style="font-size:11px;color:var(--accent);font-weight:700;margin-bottom:8px;">适用场景：职业规划、能力提升、晋升准备</div>
      <div class="step-flow" style="margin:12px 0;">
        <div class="step" style="padding:10px 8px;">
          <div class="num">1</div>
          <div class="title">愿景</div>
          <div class="desc">问"你想成为什么样的人"而非"你想做什么"</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">2</div>
          <div class="title">差距</div>
          <div class="desc">帮学徒客观评估现在的位置和目标的差距</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">3</div>
          <div class="title">阶段重点</div>
          <div class="desc">差距可能很多，帮确定阶段性重点</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">4</div>
          <div class="title">跟进节奏</div>
          <div class="desc">明确约定后续跟进的方式和时间节点</div>
        </div>
      </div>
      <p style="font-size:11px;color:var(--secondary);background:var(--white);padding:8px;border-radius:3px;">⚠️ 常见错误：问"你想做什么"而非"你想成为谁"、缺乏跟进</p>
    </div>

    <div class="card accent-border">
      <h3>💬 关系辅导</h3>
      <div style="font-size:11px;color:var(--accent);font-weight:700;margin-bottom:8px;">适用场景：学徒状态异常、情绪波动、团队人际问题</div>
      <div class="step-flow" style="margin:12px 0;">
        <div class="step" style="padding:10px 8px;">
          <div class="num">1</div>
          <div class="title">让学徒感到安全</div>
          <div class="desc">打消"我来找你是不是因为我做错了什么"的顾虑</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">2</div>
          <div class="title">回应情绪</div>
          <div class="desc">先接住情绪，不急着解决问题</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">3</div>
          <div class="title">确认但不解决</div>
          <div class="desc">让学徒知道被理解了，但这次不急着找答案</div>
        </div>
        <div class="step" style="padding:10px 8px;">
          <div class="num">4</div>
          <div class="title">约定后续</div>
          <div class="desc">让学徒知道这不是"聊完就结束了"</div>
        </div>
      </div>
      <p style="font-size:11px;color:var(--secondary);background:var(--white);padding:8px;border-radius:3px;">⚠️ 边界：不能替学徒做决定、不能过度卷入学徒个人问题</p>
    </div>
  </div>

  <div class="footer">
    <span>导师带教实战工作坊·AI时代版</span>
    <span>四类带教对话</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/四类带教对话.html", "w", encoding="utf-8") as f:
    f.write(make_vis(four_types, "四类带教对话", wide=True))

# ====== BEST+BIA反馈法 ======
feedback = """<div class="page">
  <div class="header">
    <span class="badge">反馈工具</span>
    <div>
      <h1>BEST反馈法 × BIA积极性反馈</h1>
      <div class="subtitle">结构化反馈的两套框架 — 改进用BEST，强化用BIA</div>
    </div>
  </div>

  <div class="grid-2-cols" style="margin-bottom:24px;">
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <span style="background:var(--accent);color:white;font-size:12px;font-weight:700;padding:4px 10px;border-radius:2px;">BEST — 改进反馈</span>
        <span style="font-size:12px;color:var(--secondary);">聚焦"哪里可以更好"</span>
      </div>
      <div class="cards cols-2" style="gap:10px;">
        <div class="card" style="text-align:center;padding:16px;">
          <div style="font-family:'Playfair Display';font-size:36px;font-weight:900;color:var(--accent);">B</div>
          <div style="font-size:13px;font-weight:700;margin:4px 0;">Behavior</div>
          <div style="font-size:11px;color:var(--secondary);">描述具体行为<br><strong style="color:var(--primary);">不是评价，是事实</strong></div>
        </div>
        <div class="card" style="text-align:center;padding:16px;">
          <div style="font-family:'Playfair Display';font-size:36px;font-weight:900;color:var(--accent);">E</div>
          <div style="font-size:13px;font-weight:700;margin:4px 0;">Effect</div>
          <div style="font-size:11px;color:var(--secondary);">说明行为影响<br><strong style="color:var(--primary);">对团队/他人的后果</strong></div>
        </div>
        <div class="card" style="text-align:center;padding:16px;">
          <div style="font-family:'Playfair Display';font-size:36px;font-weight:900;color:var(--accent);">S</div>
          <div style="font-size:13px;font-weight:700;margin:4px 0;">Suggestion</div>
          <div style="font-size:11px;color:var(--secondary);">改进方向<br><strong style="color:var(--primary);">不是笼统的"要努力"</strong></div>
        </div>
        <div class="card" style="text-align:center;padding:16px;">
          <div style="font-family:'Playfair Display';font-size:36px;font-weight:900;color:var(--accent);">T</div>
          <div style="font-size:13px;font-weight:700;margin:4px 0;">Next Step</div>
          <div style="font-size:11px;color:var(--secondary);">后续步骤<br><strong style="color:var(--primary);">明确时间节点</strong></div>
        </div>
      </div>
    </div>

    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <span style="background:var(--primary);color:white;font-size:12px;font-weight:700;padding:4px 10px;border-radius:2px;">BIA — 正向反馈</span>
        <span style="font-size:12px;color:var(--secondary);">聚焦"做对了什么"</span>
      </div>
      <div class="cards cols-3" style="gap:10px;">
        <div class="card" style="text-align:center;padding:18px 12px;">
          <div style="font-family:'Playfair Display';font-size:36px;font-weight:900;color:var(--primary);">B</div>
          <div style="font-size:13px;font-weight:700;margin:4px 0;">Behavior</div>
          <div style="font-size:11px;color:var(--secondary);">描述学徒做对了的具体行为</div>
        </div>
        <div class="card" style="text-align:center;padding:18px 12px;">
          <div style="font-family:'Playfair Display';font-size:36px;font-weight:900;color:var(--primary);">I</div>
          <div style="font-size:13px;font-weight:700;margin:4px 0;">Impact</div>
          <div style="font-size:11px;color:var(--secondary);">说明对团队/项目/他人的积极影响</div>
        </div>
        <div class="card" style="text-align:center;padding:18px 12px;">
          <div style="font-family:'Playfair Display';font-size:36px;font-weight:900;color:var(--primary);">A</div>
          <div style="font-size:13px;font-weight:700;margin:4px 0;">Appreciation</div>
          <div style="font-size:11px;color:var(--secondary);">真诚表达感谢<br><strong style="color:var(--primary);">避免公式化</strong></div>
        </div>
      </div>
    </div>
  </div>

  <div class="quote">
    <p>"反馈不是打分，是描述具体行为。好的反馈让学徒知道具体发生了什么，以及接下来可以怎么做。"</p>
  </div>

  <div class="grid-2-cols">
    <div>
      <h3 style="font-size:13px;font-weight:700;margin-bottom:10px;">糟糕反馈的常见问题</h3>
      <div class="list-item"><div class="num" style="background:var(--secondary);">!</div><div class="content"><h4>只有评价，没有行为描述</h4><p>"你报告写得不行"→ 具体是哪里不行？</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--secondary);">!</div><div class="content"><h4>模糊的方向</h4><p>"你要更积极主动"→ 什么是更积极？</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--secondary);">!</div><div class="content"><h4>对比伤害</h4><p>"你看看人家小陈"→ 破坏关系，没有建设性</p></div></div>
    </div>
    <div>
      <h3 style="font-size:13px;font-weight:700;margin-bottom:10px;">什么时候用哪个</h3>
      <div class="ai-card" style="margin-bottom:10px;">
        <h4><span class="tag">BEST</span> 用于改进意见</h4>
        <p>学徒的行为需要调整、某个具体方面可以做得更好、需要明确下一步行动</p>
      </div>
      <div class="ai-card">
        <h4><span class="tag" style="background:var(--primary);">BIA</span> 用于强化正向</h4>
        <p>学徒完成了重要里程碑、主动帮助了团队、提出了好的建议、克服了困难</p>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>导师带教实战工作坊·AI时代版</span>
    <span>BEST反馈法 × BIA积极性反馈</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/BEST_BIA反馈法.html", "w", encoding="utf-8") as f:
    f.write(make_vis(feedback, "BEST_BIA反馈法", wide=True))

# ====== 经验萃取四步法 ======
extraction = """<div class="page">
  <div class="header">
    <span class="badge">AI时代版特色</span>
    <div>
      <h1>经验萃取四步法</h1>
      <div class="subtitle">把导师的判断逻辑变成可传承的组织智慧</div>
    </div>
  </div>

  <div class="step-flow" style="margin-bottom:28px;">
    <div class="step">
      <div class="num">1</div>
      <div class="title">访谈式提取</div>
      <div class="desc">用录音记录"最有价值的判断时刻"<br><br><strong style="color:var(--accent);font-size:11px;">关键问题：</strong><br><span style="font-size:10px;color:var(--secondary);">"你最近一次觉得'这个学徒我带对了'是什么时候？当时你怎么判断的？"</span></div>
    </div>
    <div class="step">
      <div class="num">2</div>
      <div class="title">AI结构化整理</div>
      <div class="desc">转化为"情境+判断逻辑+操作建议+风险提示"<br><br><strong style="color:var(--accent);font-size:11px;">工具：</strong><br><span style="font-size:10px;color:var(--secondary);">WOKBUDDY 千问Max</span></div>
    </div>
    <div class="step">
      <div class="num">3</div>
      <div class="title">人工验证</div>
      <div class="desc">审阅确认准确性，补充只有自己知道的细节<br><br><strong style="color:var(--accent);font-size:11px;">关键问题：</strong><br><span style="font-size:10px;color:var(--secondary);">"AI整理的符合你的真实想法吗？缺了什么？"</span></div>
    </div>
    <div class="step">
      <div class="num">4</div>
      <div class="title">知识库入库</div>
      <div class="desc">整理为可检索文件<br><br><strong style="color:var(--accent);font-size:11px;">标准：</strong><br><span style="font-size:10px;color:var(--secondary);">情境具体+有判断路径+有边界</span></div>
    </div>
  </div>

  <div class="cards cols-2" style="margin-bottom:24px;">
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">经验条目的三个价值标准</h3>
      <div class="list-item"><div class="num">✓</div><div class="content"><h4>有具体情境</h4><p>描述具体到其他导师可以对号入座，能判断"这个经验什么时候用"</p></div></div>
      <div class="list-item"><div class="num">✓</div><div class="content"><h4>有判断路径</h4><p>有清晰的决策标准，能回答"我怎么知道什么时候用这条经验"</p></div></div>
      <div class="list-item"><div class="num">✓</div><div class="content"><h4>有边界</h4><p>明确这条经验在什么情况下不适用，不是"万能公式"</p></div></div>
    </div>
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">为什么这项工作重要</h3>
      <div class="quote" style="margin:0;">
        <p style="font-size:13px;">一位优秀导师积累了两年的带教经验——遇到这种类型的学徒该怎么应对、在哪个阶段说什么最有效——这些宝贵的判断逻辑，全部留在他自己的脑子里。导师换岗或离开，下一批新导师还是从零开始摸索。</p>
      </div>
    </div>
  </div>

  <div>
    <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">经验萃取vs工作流程</h3>
    <div class="grid-2-cols" style="gap:16px;">
      <div class="card" style="border-left:4px solid var(--secondary);">
        <h3 style="color:var(--secondary);">工作流程</h3>
        <p style="font-size:12px;">描述的是"做什么"，不是"怎么判断"；流程可以复制，判断逻辑无法照搬</p>
        <div style="margin-top:10px;font-size:11px;padding:8px;background:var(--white);border-radius:3px;color:var(--secondary);">例：新客户签约流程</div>
      </div>
      <div class="card" style="border-left:4px solid var(--accent);">
        <h3 style="color:var(--accent);">经验条目（判断逻辑）</h3>
        <p style="font-size:12px;">描述的是在什么情况下用什么方法判断；是隐性知识的显性化</p>
        <div style="margin-top:10px;font-size:11px;padding:8px;background:var(--white);border-radius:3px;color:var(--accent);">例："客户拖延付款超过两周且态度回避时，说明他对合作有疑虑，此时不应该再催款，而应该主动约见面谈真实想法"</div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>导师带教实战工作坊·AI时代版</span>
    <span>经验萃取四步法</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/经验萃取四步法.html", "w", encoding="utf-8") as f:
    f.write(make_vis(extraction, "经验萃取四步法", wide=True))

# ====== 学徒诊断：能力-意愿矩阵 ======
matrix_vis = """<div class="page">
  <div class="header">
    <span class="badge">学徒诊断</span>
    <div>
      <h1>能力-意愿矩阵</h1>
      <div class="subtitle">快速判断学徒状态，找到对应的带教策略</div>
    </div>
  </div>

  <div class="grid-2-cols" style="margin-bottom:24px;">
    <div>
      <div class="matrix-grid">
        <div class="m-corner"></div>
        <div class="m-header">低意愿</div>
        <div class="m-header">高意愿</div>
        <div class="m-row">高能力</div>
        <div class="m-cell">
          <h4>第一象限</h4>
          <p style="font-weight:700;color:var(--primary);margin-bottom:6px;">独立自主型</p>
          <p>有能力但不想动</p>
          <p style="margin-top:6px;font-size:10px;color:var(--accent);">策略：给空间，定目标，追结果</p>
        </div>
        <div class="m-cell highlight">
          <h4>第二象限</h4>
          <p style="font-weight:700;color:var(--accent);margin-bottom:6px;">进阶成长型</p>
          <p>有能力也有意愿</p>
          <p style="margin-top:6px;font-size:10px;color:var(--accent);">策略：授权发展，给挑战，盯成长</p>
        </div>
        <div class="m-row">低能力</div>
        <div class="m-cell">
          <h4>第三象限</h4>
          <p style="font-weight:700;color:var(--primary);margin-bottom:6px;">稳定成熟型</p>
          <p>没能力也没意愿</p>
          <p style="margin-top:6px;font-size:10px;color:var(--secondary);">策略：给任务，细跟进，先建立信心</p>
        </div>
        <div class="m-cell">
          <h4>第四象限</h4>
          <p style="font-weight:700;color:var(--primary);margin-bottom:6px;">需要指导型</p>
          <p>没能力但很想学</p>
          <p style="margin-top:6px;font-size:10px;color:var(--secondary);">策略：手把手带，多鼓励，及时反馈</p>
        </div>
      </div>
    </div>

    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">五种典型学徒画像</h3>
      <div class="list-item"><div class="num" style="background:var(--accent);">1</div><div class="content"><h4>勤奋但迷茫型</h4><p>缺乏框架，信息越多越混乱 → 给结构，给框架</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--accent);">2</div><div class="content"><h4>表面配合型</h4><p>点头但不做，等导师主动 → 推动行动，跟进结果</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--accent);">3</div><div class="content"><h4>快速跳跃型</h4><p>学得快但跳基础，容易后续卡点 → 补基础，不能只追进度</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--accent);">4</div><div class="content"><h4>沉默型</h4><p>不说问题，不代表没有问题 → 主动问，创造安全空间</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--accent);">5</div><div class="content"><h4>过度依赖型</h4><p>等导师给答案，不自己思考 → 引导思考，不是给答案</p></div></div>
    </div>
  </div>

  <div class="quote">
    <p>"矩阵是动态的，不是固定标签。一个学徒可能在不同发展阶段属于不同象限。画像帮助我们理解学徒，不是给学徒贴标签。"</p>
  </div>

  <div class="footer">
    <span>导师带教实战工作坊·AI时代版</span>
    <span>能力-意愿矩阵</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/能力意愿矩阵.html", "w", encoding="utf-8") as f:
    f.write(make_vis(matrix_vis, "能力-意愿矩阵", wide=True))

# ====== 三阶段带教路线图 ======
roadmap = """<div class="page">
  <div class="header">
    <span class="badge">路线图</span>
    <div>
      <h1>三阶段带教路线图</h1>
      <div class="subtitle">启动 → 辅导 → 总结，周期化带教有节奏</div>
    </div>
  </div>

  <div class="timeline" style="margin-bottom:28px;">
    <div class="timeline-item phase1" style="margin-right:12px;">
      <h4>🚦 启动阶段（前1/4）</h4>
      <div style="font-size:11px;font-weight:700;color:var(--primary);margin-bottom:8px;">建立信任 · 明确基线 · 对齐期望</div>
      <p><strong style="color:var(--primary);">核心目标：</strong>让学徒信任你，让双方对带教目标达成共识</p>
      <p style="margin-top:6px;"><strong style="color:var(--primary);">里程碑特征：</strong>可观察的行为，不是模糊的能力描述</p>
      <div style="margin-top:10px;padding:10px;background:var(--white);border-radius:4px;font-size:11px;">
        <strong>示例里程碑：</strong><br>
        · 学徒能准确复述本阶段的核心任务<br>
        · 学徒知道遇到问题应该找谁、怎么找<br>
        · 双方明确了月度沟通节奏
      </div>
    </div>
    <div class="timeline-item phase2" style="margin-right:12px;">
      <h4>⚙️ 辅导阶段（中间1/2）</h4>
      <div style="font-size:11px;font-weight:700;color:var(--secondary);margin-bottom:8px;">具体辅导 · 观察反馈 · 迭代调整</div>
      <p><strong style="color:var(--primary);">核心目标：</strong>在真实任务中提升学徒能力</p>
      <p style="margin-top:6px;"><strong style="color:var(--primary);">里程碑特征：</strong>能独立完成某类任务，不是"能力提升"这种空话</p>
      <div style="margin-top:10px;padding:10px;background:var(--white);border-radius:4px;font-size:11px;">
        <strong>示例里程碑：</strong><br>
        · 能独立负责一个中等规模客户的全流程<br>
        · 在月度评估中获得至少2项维度提升<br>
        · 能主动识别并提出改进建议
      </div>
    </div>
    <div class="timeline-item phase3">
      <h4>🎯 总结阶段（最后1/4）</h4>
      <div style="font-size:11px;font-weight:700;color:var(--accent);margin-bottom:8px;">固化成果 · 验证能力 · 明确下一步</div>
      <p><strong style="color:var(--primary);">核心目标：</strong>验证学徒已具备独立能力，明确后续发展路径</p>
      <p style="margin-top:6px;"><strong style="color:var(--primary);">里程碑特征：</strong>能承担更大责任，有明确的下一阶段目标</p>
      <div style="margin-top:10px;padding:10px;background:var(--white);border-radius:4px;font-size:11px;">
        <strong>示例里程碑：</strong><br>
        · 能独立带新人（完成角色转换）<br>
        · 获得晋升或承担更重要项目<br>
        · 制定了下一周期的自我发展计划
      </div>
    </div>
  </div>

  <div class="grid-2-cols">
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">里程碑设计检查清单</h3>
      <div class="list-item"><div class="num" style="background:var(--accent);">✓</div><div class="content"><h4>可观察</h4><p>不是"能力提升"，而是"能独立完成X"</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--accent);">✓</div><div class="content"><h4>可衡量</h4><p>有明确的完成标准或评判依据</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--accent);">✓</div><div class="content"><h4>有时限</h4><p>在某个阶段内可以验证</p></div></div>
      <div class="list-item"><div class="num" style="background:var(--accent);">✓</div><div class="content"><h4>有意义</h4><p>对学徒的发展和组织的业务都有价值</p></div></div>
    </div>
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">AI辅助时机标注</h3>
      <div class="ai-card" style="margin-bottom:8px;">
        <h4>启动阶段 <span class="tag">千问Max</span></h4>
        <p>生成学徒基线诊断摘要，辅助设定阶段目标</p>
      </div>
      <div class="ai-card" style="margin-bottom:8px;">
        <h4>辅导阶段 <span class="tag">GET笔记 + 千问Max</span></h4>
        <p>记录会谈，分析学徒进展模式，识别风险信号</p>
      </div>
      <div class="ai-card">
        <h4>总结阶段 <span class="tag">千问Max + WOKBUDDY</span></h4>
        <p>生成阶段评估报告，萃取关键经验条目</p>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>导师带教实战工作坊·AI时代版</span>
    <span>三阶段带教路线图</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/三阶段带教路线图.html", "w", encoding="utf-8") as f:
    f.write(make_vis(roadmap, "三阶段带教路线图", wide=True))

# ====== 五维度发展评估 ======
evaluation = """<div class="page">
  <div class="header">
    <span class="badge">评估框架</span>
    <div>
      <h1>五维度发展评估框架</h1>
      <div class="subtitle">评估不是打分，是描述具体行为</div>
    </div>
  </div>

  <div class="cards cols-5" style="margin-bottom:24px;">
    <div class="dim-card">
      <h4>1. 任务完成度</h4>
      <p>质量和效率如何？交付物是否达标？</p>
      <div class="example"><strong>观察点：</strong>返工率、时间管理、细节把控</div>
    </div>
    <div class="dim-card">
      <h4>2. 自主判断力</h4>
      <p>先自己想还是直接来问？能否独立做决策？</p>
      <div class="example"><strong>观察点：</strong>遇到问题的第一反应、决策前的思考</div>
    </div>
    <div class="dim-card">
      <h4>3. 学习敏捷度</h4>
      <p>上手新事物的速度？遇到新问题的应对方式？</p>
      <div class="example"><strong>观察点：</strong>上手新任务的时间、犯错后的改进速度</div>
    </div>
    <div class="dim-card">
      <h4>4. 协作主动性</h4>
      <p>只做份内事还是主动补位？团队贡献如何？</p>
      <div class="example"><strong>观察点：</strong>主动承担、帮助同事、跨团队协作</div>
    </div>
    <div class="dim-card" style="border-top-color:var(--accent);">
      <h4>5. 发展后劲</h4>
      <p>成长是否可持续？长期潜力如何？</p>
      <div class="example"><strong>观察点：</strong>学习曲线、自驱力、瓶颈突破</div>
    </div>
  </div>

  <div class="quote">
    <p>"评估不是打分，是描述具体行为。与其说'任务完成度有待提高'，不如说'上周的方案被客户打回两次，原因都是数据口径错误'。"</p>
  </div>

  <div class="grid-2-cols">
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">好的评估记录 vs 差的评估记录</h3>
      <div class="card" style="border-left:4px solid var(--accent);margin-bottom:10px;">
        <h3 style="color:var(--accent);font-size:12px;">✓ 好的评估</h3>
        <p style="font-size:12px;">"在协作主动性方面，小林上周主动承担了客户答谢会的统筹工作，协调了3个部门的时间，确保活动顺利完成。这个动作体现了主动补位的意识。"</p>
      </div>
      <div class="card" style="border-left:4px solid var(--secondary);">
        <h3 style="color:var(--secondary);font-size:12px;">✗ 差的评估</h3>
        <p style="font-size:12px;">"协作主动性一般，有时候比较被动，需要督促。"</p>
      </div>
    </div>
    <div>
      <h3 style="font-size:14px;font-weight:700;margin-bottom:12px;">AI辅助评估流程</h3>
      <div class="step-flow" style="gap:6px;">
        <div class="step" style="padding:10px 6px;">
          <div class="num">1</div>
          <div class="title" style="font-size:10px;">准备材料</div>
          <div class="desc" style="font-size:9px;">筛选代表性谈话记录，整理摘要</div>
        </div>
        <div class="step" style="padding:10px 6px;">
          <div class="num">2</div>
          <div class="title" style="font-size:10px;">AI生成</div>
          <div class="desc" style="font-size:9px;">千问Max生成五维度评估报告初稿</div>
        </div>
        <div class="step" style="padding:10px 6px;">
          <div class="num">3</div>
          <div class="title" style="font-size:10px;">人工审阅</div>
          <div class="desc" style="font-size:9px;">核实准确性，补充AI无法判断的内容</div>
        </div>
        <div class="step" style="padding:10px 6px;">
          <div class="num">4</div>
          <div class="title" style="font-size:10px;">签发报告</div>
          <div class="desc" style="font-size:9px;">你签出去的报告是你的判断背书</div>
        </div>
      </div>
      <div style="margin-top:12px;padding:10px;background:var(--light);border-radius:4px;font-size:11px;">
        <strong style="color:var(--primary);">底线：</strong>AI是辅助，不是替代。最终判断靠人，报告由你签发。
      </div>
    </div>
  </div>

  <div class="footer">
    <span>导师带教实战工作坊·AI时代版</span>
    <span>五维度发展评估框架</span>
  </div>
</div>"""

with open(f"{OUTPUT_DIR}/五维度发展评估.html", "w", encoding="utf-8") as f:
    f.write(make_vis(evaluation, "五维度发展评估", wide=True))

print(f"HTML visualizations created successfully!")
print(f"Output directory: {OUTPUT_DIR}")
for f in os.listdir(OUTPUT_DIR):
    print(f"  - {f}")