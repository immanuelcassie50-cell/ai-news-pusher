const fs = require('fs');
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>成果demo素材包 | RPD-07 业主信任与老龄化接受度</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
  <style>
    :root { --primary: #2D2D2D; --secondary: #5A5A5A; --accent: #C41E3A; --light: #E8364F; --bg: #FAFAFA; --card: #FFFFFF; --border: #E5E5E5; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Sans SC', sans-serif; background: var(--bg); color: var(--primary); line-height: 1.8; font-size: 15px; }
    .header { background: linear-gradient(135deg, var(--primary) 0%, #1a1a1a 100%); color: white; padding: 50px 40px; }
    .header h1 { font-family: 'Noto Serif SC', serif; font-size: 36px; font-weight: 700; margin-bottom: 12px; }
    .header p { font-size: 18px; opacity: 0.9; }
    .container { max-width: 1200px; margin: 0 auto; padding: 40px; }
    .section { margin-bottom: 50px; }
    .section-title { font-family: 'Noto Serif SC', serif; font-size: 24px; font-weight: 600; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid var(--accent); display: flex; align-items: center; gap: 12px; }
    .section-title::before { content: ''; width: 6px; height: 28px; background: var(--accent); border-radius: 3px; }
    .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
    .scene-card { background: var(--card); border-radius: 16px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid var(--accent); }
    .scene-card.type-b { border-top-color: #0EA5E9; }
    .scene-card.type-c { border-top-color: #10B981; }
    .scene-card.type-d { border-top-color: #F59E0B; }
    .scene-label { display: inline-block; background: var(--accent); color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500; margin-bottom: 12px; }
    .scene-card.type-b .scene-label { background: #0EA5E9; }
    .scene-card.type-c .scene-label { background: #10B981; }
    .scene-card.type-d .scene-label { background: #F59E0B; }
    .scene-title { font-family: 'Noto Serif SC', serif; font-size: 18px; font-weight: 600; margin-bottom: 12px; }
    .scene-desc { background: #f8f8f8; padding: 16px; border-radius: 10px; margin-bottom: 16px; font-size: 14px; }
    .scene-persona { display: flex; gap: 12px; align-items: center; margin-bottom: 12px; }
    .persona-avatar { width: 48px; height: 48px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px; }
    .persona-info { flex: 1; }
    .persona-name { font-weight: 600; }
    .persona-desc { font-size: 13px; color: var(--secondary); }
    .script-box { background: #FFF7ED; border-radius: 10px; padding: 16px; margin-top: 12px; }
    .script-title { font-weight: 600; color: var(--accent); margin-bottom: 8px; font-size: 13px; }
    .script-content { font-size: 14px; color: var(--secondary); font-style: italic; }
    .print-section { background: var(--card); border-radius: 16px; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-bottom: 24px; }
    .print-title { font-family: 'Noto Serif SC', serif; font-size: 20px; font-weight: 600; margin-bottom: 20px; }
    .checklist { list-style: none; }
    .checklist li { padding: 14px 0; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; gap: 12px; }
    .checklist li:last-child { border-bottom: none; }
    .check-box { width: 22px; height: 22px; border: 2px solid var(--border); border-radius: 4px; flex-shrink: 0; margin-top: 2px; }
    .check-label { font-weight: 500; }
    .check-desc { font-size: 13px; color: var(--secondary); margin-top: 4px; }
    .template-table { width: 100%; border-collapse: collapse; }
    .template-table th, .template-table td { border: 1px solid var(--border); padding: 14px 16px; text-align: left; }
    .template-table th { background: var(--primary); color: white; font-weight: 500; }
    .template-table tr:nth-child(even) { background: #f8f8f8; }
    .template-input { background: transparent; border: none; width: 100%; font-family: inherit; font-size: inherit; outline: none; }
    .print-hint { text-align: center; padding: 20px; color: var(--secondary); font-size: 13px; }
    @media print {
      body { font-size: 12px; }
      .header { padding: 30px; }
      .scene-card, .print-section { box-shadow: none; border: 1px solid #ddd; page-break-inside: avoid; }
      .no-print { display: none; }
      .print-only { display: block; }
    }
    .footer { text-align: center; padding: 40px; color: var(--secondary); font-size: 13px; border-top: 1px solid var(--border); margin-top: 40px; }
    .demo-note { background: linear-gradient(135deg, rgba(196,30,58,0.08) 0%, rgba(196,30,58,0.03) 100%); border-left: 4px solid var(--accent); padding: 20px 24px; border-radius: 0 12px 12px 0; margin-bottom: 30px; }
    .demo-note-title { font-weight: 600; color: var(--accent); margin-bottom: 8px; }
    .badge-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
    .badge { display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 500; }
    .badge-red { background: #FEE2E2; color: #991B1B; }
    .badge-blue { background: #DBEAFE; color: #1E40AF; }
    .badge-green { background: #D1FAE5; color: #065F46; }
    .badge-yellow { background: #FEF3C7; color: #92400E; }
  </style>
</head>
<body>

<header class="header">
  <h1>成果demo素材包</h1>
  <p>RPD-07 业主信任与老龄化接受度 · 课堂练习素材</p>
</header>

<div class="container">

  <div class="demo-note">
    <div class="demo-note-title">使用说明</div>
    <p>本素材包包含课程所需的所有练习材料，可直接打印使用。建议单面打印，裁剪后发放给学员。</p>
  </div>

  <section class="section">
    <h2 class="section-title">场景演练卡片（角色扮演用）</h2>
    <div class="badge-row">
      <span class="badge badge-red">场景一</span>
      <span class="badge badge-blue">场景二</span>
      <span class="badge badge-green">场景三</span>
      <span class="badge badge-yellow">场景四</span>
    </div>
    <div class="card-grid">

      <div class="scene-card">
        <span class="scene-label">场景一</span>
        <h3 class="scene-title">业主拒绝人脸识别门禁</h3>
        <div class="scene-persona">
          <div class="persona-avatar">王</div>
          <div class="persona-info">
            <div class="persona-name">王阿姨</div>
            <div class="persona-desc">68岁，住在小区3年，用惯了门禁卡</div>
          </div>
        </div>
        <div class="scene-desc">
          <strong>情境设定：</strong>物业要求开通人脸识别门禁，王阿姨担心信息安全，不想开通。
        </div>
        <div class="script-box">
          <div class="script-title">学员参考话术</div>
          <div class="script-content">"王阿姨，我理解您的顾虑。换我我也会有担心的——用了这么多年的门禁卡，说不让用就不让用了，心里不踏实是正常的..."</div>
        </div>
      </div>

      <div class="scene-card type-b">
        <span class="scene-label">场景二</span>
        <h3 class="scene-title">业主担心信息泄露</h3>
        <div class="scene-persona">
          <div class="persona-avatar" style="background:#0EA5E9">张</div>
          <div class="persona-info">
            <div class="persona-name">张大爷</div>
            <div class="persona-desc">72岁，看到过新闻里数据泄露的报道</div>
          </div>
        </div>
        <div class="scene-desc">
          <strong>情境设定：</strong>物业引入了AI系统，张大爷担心自己的人脸数据和个人信息会被泄露或滥用。
        </div>
        <div class="script-box">
          <div class="script-title">学员参考话术</div>
          <div class="script-content">"您的信息存在我们的服务器上，就像您家的保险柜，钥匙只有物业有。国家有数据保护法规，我们也要合规经营..."</div>
        </div>
      </div>

      <div class="scene-card type-c">
        <span class="scene-label">场景三</span>
        <h3 class="scene-title">业主不会用智能设备</h3>
        <div class="scene-persona">
          <div class="persona-avatar" style="background:#10B981">李</div>
          <div class="persona-info">
            <div class="persona-name">李阿姨</div>
            <div class="persona-desc">65岁，用老人机，不会用智能手机</div>
          </div>
        </div>
        <div class="scene-desc">
          <strong>情境设定：</strong>物业上线了App服务，李阿姨的女儿帮她注册了账号，但她完全不会用。
        </div>
        <div class="script-box">
          <div class="script-title">学员参考话术</div>
          <div class="script-content">"没关系，您可以随时来物业前台，我们有专人教您，一次不会教两次，两次不会教三次..."</div>
        </div>
      </div>

      <div class="scene-card type-d">
        <span class="scene-label">场景四</span>
        <h3 class="scene-title">业主质疑物业动机</h3>
        <div class="scene-persona">
          <div class="persona-avatar" style="background:#F59E0B">赵</div>
          <div class="persona-info">
            <div class="persona-name">赵先生</div>
            <div class="persona-desc">55岁，业委会成员，关注物业成本</div>
          </div>
        </div>
        <div class="scene-desc">
          <strong>情境设定：</strong>赵先生认为物业引入AI是为了"省人省钱"，找到物业质问服务会不会降级。
        </div>
        <div class="script-box">
          <div class="script-title">学员参考话术</div>
          <div class="script-content">"您的顾虑我理解。说实话，AI客服上线后，我们客服的人均接听量反而降了——因为AI处理了重复问题，人工能腾出手来做更复杂的事情..."</div>
        </div>
      </div>

    </div>
  </section>

  <section class="section">
    <h2 class="section-title">信任建立检查表（可打印）</h2>
    <div class="print-section">
      <div class="print-title">信任建立五维度检查表</div>
      <p style="margin-bottom: 20px; color: var(--secondary); font-size: 14px;">请逐项检查您的项目是否做到，并在"状态"栏打勾。</p>
      <ul class="checklist">
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">能力信任：有AI准确率/效果数据</div>
            <div class="check-desc">如：AI客服问题解决率95%、响应时间<30秒等</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">能力信任：有人工兜底机制</div>
            <div class="check-desc">如：按"0"转人工、复杂问题转专员</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">关系信任：主动告知"AI是来提升服务"</div>
            <div class="check-desc">避免业主误以为物业要"机器换人"</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">关系信任：有服务不降级承诺</div>
            <div class="check-desc">明确告知哪些服务会变得更好</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">信息信任：有数据安全承诺书/公告</div>
            <div class="check-desc">主动告知数据如何存储、谁有权访问</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">信息信任：有合规资质展示</div>
            <div class="check-desc">如：等保认证、数据安全承诺书</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">控制信任：明确告知"可以选不用"</div>
            <div class="check-desc">在所有AI相关通知中明确说明</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">控制信任：传统服务通道畅通</div>
            <div class="check-desc">门禁卡、电话、前台等传统方式正常可用</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">尊严信任：有一对一教学安排</div>
            <div class="check-desc">定期上门教用、设专人接待</div>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div>
            <div class="check-label">尊严信任：定期主动关怀老人</div>
            <div class="check-desc">不只是有事才联系，主动问需求</div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">服务阶梯设计模板（可打印）</h2>
    <div class="print-section">
      <div class="print-title">为自己的项目设计服务阶梯</div>
      <table class="template-table">
        <thead>
          <tr>
            <th style="width: 18%">服务层级</th>
            <th style="width: 22%">服务形式</th>
            <th style="width: 18%">适用人群</th>
            <th style="width: 12%">占比（估）</th>
            <th>我的项目如何落地</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>第1层：自助服务</strong></td>
            <td>App/小程序/自助终端</td>
            <td>年轻业主、数字原住民</td>
            <td>约30%</td>
            <td><input type="text" class="template-input" placeholder="填写你的项目做法"></td>
          </tr>
          <tr>
            <td><strong>第2层：辅助服务</strong></td>
            <td>AI客服 + 人工兜底</td>
            <td>中年业主、数字移民</td>
            <td>约35%</td>
            <td><input type="text" class="template-input" placeholder="填写你的项目做法"></td>
          </tr>
          <tr>
            <td><strong>第3层：人工服务</strong></td>
            <td>电话/前台/上门</td>
            <td>老年业主、数字难民</td>
            <td>约25%</td>
            <td><input type="text" class="template-input" placeholder="填写你的项目做法"></td>
          </tr>
          <tr>
            <td><strong>第4层：专属服务</strong></td>
            <td>VIP管家/定期上门</td>
            <td>特殊需求业主</td>
            <td>约10%</td>
            <td><input type="text" class="template-input" placeholder="填写你的项目做法"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">标准话术卡（可打印裁剪）</h2>
    <div class="print-section">
      <div class="print-title">四大经典质疑回应卡</div>
      <div class="card-grid" style="margin-top: 20px;">
        <div class="scene-card">
          <span class="scene-label">质疑1</span>
          <h3 class="scene-title">"机器哪有真人靠谱？"</h3>
          <div class="script-box" style="background:#FEF2F2; border-left-color:#991B1B;">
            <div class="script-title" style="color:#991B1B;">推荐回应</div>
            <div class="script-content">"您说得对，再好的机器也有处理不了的时候。所以我们设计的是'AI先接，AI处理不了的秒转人工'——您按一下'0'就行，保证有人接。"</div>
          </div>
          <div style="margin-top:12px; font-size:13px; color:var(--secondary);">
            <strong>逻辑：</strong>先承认局限 → 再给兜底方案
          </div>
        </div>
        <div class="scene-card type-b">
          <span class="scene-label">质疑2</span>
          <h3 class="scene-title">"我的信息会不会被泄露？"</h3>
          <div class="script-box" style="background:#F0F9FF; border-left-color:#1E40AF;">
            <div class="script-title" style="color:#1E40AF;">推荐回应</div>
            <div class="script-content">"您的信息存在我们的服务器上，就像您家的保险柜，钥匙只有物业有。国家有数据保护法规，泄露了我们要担法律责任的。"</div>
          </div>
          <div style="margin-top:12px; font-size:13px; color:var(--secondary);">
            <strong>逻辑：</strong>类比具象化 → 搬出法律合规
          </div>
        </div>
        <div class="scene-card type-c">
          <span class="scene-label">质疑3</span>
          <h3 class="scene-title">"我不会用怎么办？"</h3>
          <div class="script-box" style="background:#ECFDF5; border-left-color:#065F46;">
            <div class="script-title" style="color:#065F46;">推荐回应</div>
            <div class="script-content">"没关系，您可以随时来物业前台，我们有专人教您，一次不会教两次，两次不会教三次。传统方式一直保留，您怎么方便怎么来。"</div>
          </div>
          <div style="margin-top:12px; font-size:13px; color:var(--secondary);">
            <strong>逻辑：</strong>消除考核感 → 承诺兜底服务
          </div>
        </div>
        <div class="scene-card type-d">
          <span class="scene-label">质疑4</span>
          <h3 class="scene-title">"物业是不是想用AI省钱？"</h3>
          <div class="script-box" style="background:#FFFBEB; border-left-color:#92400E;">
            <div class="script-title" style="color:#92400E;">推荐回应</div>
            <div class="script-content">"您的顾虑我理解。AI处理重复问题后，人工能腾出手做更复杂的事情。对您来说，服务更快了，不是更差了。"</div>
          </div>
          <div style="margin-top:12px; font-size:13px; color:var(--secondary);">
            <strong>逻辑：</strong>不否认 → 把物业利益绑定业主利益
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">个人行动计划表（可打印）</h2>
    <div class="print-section">
      <div class="print-title">回去之后我要做的事</div>
      <table class="template-table">
        <thead>
          <tr>
            <th style="width: 15%">时间节点</th>
            <th style="width: 35%">具体行动</th>
            <th style="width: 25%">预计困难</th>
            <th style="width: 25%">应对方案</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>第一周</strong></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
          </tr>
          <tr>
            <td><strong>第二周</strong></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
          </tr>
          <tr>
            <td><strong>第一个月</strong></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
          </tr>
          <tr>
            <td><strong>第三个月</strong></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
            <td><input type="text" class="template-input" placeholder=""></td>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 20px; padding: 16px; background: #f8f8f8; border-radius: 10px;">
        <div style="font-weight: 600; margin-bottom: 8px;">我的项目名称：</div>
        <input type="text" class="template-input" style="border-bottom: 1px solid var(--border); padding: 8px 0;" placeholder="填写项目名称">
      </div>
    </div>
  </section>

  <p class="print-hint">提示：以上材料均可直接打印使用。建议使用A4纸单面打印，场景卡片裁剪后发放。</p>

</div>

<footer class="footer">
  <p>RPD-07 业主信任与老龄化接受度——AI落地绕不开的人情关</p>
  <p>成果demo素材包 · 欢迎分享使用</p>
</footer>

</body>
</html>`;
fs.writeFileSync('D:/Downloads/xinjian/RPD-07_成果demo素材包.html', html);
console.log('Done');