// part2.js — 模块一 破局 · 模块二 感上 · 模块三 感下
const CN = 'Microsoft YaHei';
const EN = 'Arial';
const TH = {
  primary:   '1A1A1A',  secondary: '6B6358',  accent:    'D4361F',
  light:     'F2C75C',  bg:        'F5F1E8',  sage:      '5C8068',
  pink:      'FBE9E3',  white:     'FFFFFF',  light2:    'EBE4D2',
};

function badge(s, pres, n) {
  s.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: TH.accent } });
  s.addText(String(n).padStart(2, '0'), { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
}
function foot(s, pres, l, r) {
  s.addShape(pres.shapes.LINE, { x: 0.4, y: 5.15, w: 8.6, h: 0, line: { color: TH.secondary, width: 0.5 } });
  s.addText(l, { x: 0.4, y: 5.2, w: 5, h: 0.3, fontSize: 9, fontFace: CN, color: TH.secondary, italic: true });
  s.addText(r, { x: 5.4, y: 5.2, w: 3.5, h: 0.3, fontSize: 9, fontFace: EN, color: TH.secondary, italic: true, align: 'right' });
}

function makeSliders(pres) {
  // ============== 模块一 破局 ==============
  // 10. 模块分隔
  function m1_div() {
    const s = pres.addSlide();
    s.background = { color: TH.primary };
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: TH.primary } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.5, w: 10, h: 0.05, fill: { color: TH.accent } });
    s.addText('M0', { x: 0.5, y: 0.4, w: 2, h: 0.5, fontSize: 14, fontFace: EN, color: TH.light, bold: true, charSpacing: 6 });
    s.addText('破局', { x: 0.5, y: 1.4, w: 9, h: 1.4, fontSize: 110, fontFace: CN, color: TH.white, bold: true });
    s.addText('BREAKTHROUGH', { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 16, fontFace: EN, color: TH.accent, charSpacing: 8 });
    s.addText('重建对创新的认知', { x: 0.5, y: 3.5, w: 9, h: 0.4, fontSize: 18, fontFace: CN, color: TH.light });
    s.addText('90 分钟  ·  4 个核心动作', { x: 0.5, y: 4.0, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.white, italic: true });
  }

  // 11. 旧的 3 个误区
  function m1_01() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('旧的 3 个误区', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('关于创新，大多数人信的 3 件事 — 都是错的', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 13, fontFace: CN, color: TH.secondary, italic: true });
    const items = [
      ['误区 1', '创新是天才的事', '错误。', '创新是普通人能练的方法。', TH.accent],
      ['误区 2', '想清楚再做', '错误。', '边做边想才是真实节奏。', TH.accent],
      ['误区 3', '先调研再下手', '错误。', 'AI 时代，速度 = 决策质量。', TH.accent],
    ];
    items.forEach((it, i) => {
      const y = 1.7 + i * 1.1;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1, fill: { color: TH.white }, line: { color: it[4], width: 1 } });
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 1.2, h: 1, fill: { color: it[4] } });
      s.addText(it[0], { x: 0.5, y, w: 1.2, h: 1, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(it[1], { x: 1.9, y: y + 0.1, w: 2.5, h: 0.8, fontSize: 16, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(it[2], { x: 4.5, y: y + 0.1, w: 0.8, h: 0.8, fontSize: 14, fontFace: CN, color: it[4], bold: true, valign: 'middle' });
      s.addText(it[3], { x: 5.3, y: y + 0.1, w: 4, h: 0.8, fontSize: 14, fontFace: CN, color: TH.primary, valign: 'middle' });
    });
    foot(s, pres, '破局先破认知', '11 / ~120'); badge(s, pres, 11);
  }

  // 12. 创新是啥
  function m1_02() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('创新是啥', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('不是发明，是', { x: 0.5, y: 1.4, w: 9, h: 0.5, fontSize: 18, fontFace: CN, color: TH.primary });
    s.addText('看见 + 决策 + 验证 的 3 步方法。', { x: 0.5, y: 1.9, w: 9, h: 0.6, fontSize: 26, fontFace: CN, color: TH.accent, bold: true });
    s.addShape(pres.shapes.LINE, { x: 0.5, y: 2.7, w: 1.5, h: 0, line: { color: TH.accent, width: 2 } });
    s.addText('看见：进入真实现场，挖出真问题', { x: 0.5, y: 2.95, w: 9, h: 0.4, fontSize: 14, fontFace: CN, color: TH.primary });
    s.addText('决策：选对方向，不选最完美的方向', { x: 0.5, y: 3.4, w: 9, h: 0.4, fontSize: 14, fontFace: CN, color: TH.primary });
    s.addText('验证：用最小代价，3 天内拿到真信号', { x: 0.5, y: 3.85, w: 9, h: 0.4, fontSize: 14, fontFace: CN, color: TH.primary });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.5, fill: { color: TH.pink } });
    s.addText('不靠天赋 · 靠方法 · 靠节拍', { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 16, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '重新定义创新', '12 / ~120'); badge(s, pres, 12);
  }

  // 13. 创新 6 项能力
  function m1_03() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('6 项能力 — 可训练的具体能力', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('看清自己能力的边界 = 知道在哪发力', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const caps = [
      ['01', '深度感知', '看见 AI 漏掉的真实信号'],
      ['02', '问题聚焦', '从现象挖到 L4/L5 真问题'],
      ['03', '方向判断', '多个方案中选对方向'],
      ['04', '快速验证', '最小代价验证关键假设'],
      ['05', '人机协同', '设计 AI 与人的分工'],
      ['06', '叙事影响', '用故事说服决策者'],
    ];
    caps.forEach((c, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + col * 3.05, y: 1.7 + row * 1.6, w: 2.9, h: 1.4, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
      s.addText(c[0], { x: 0.6 + col * 3.05, y: 1.85 + row * 1.6, w: 1, h: 0.5, fontSize: 30, fontFace: EN, color: TH.accent, bold: true });
      s.addText(c[1], { x: 1.5 + col * 3.05, y: 1.9 + row * 1.6, w: 1.8, h: 0.4, fontSize: 15, fontFace: CN, color: TH.primary, bold: true });
      s.addText(c[2], { x: 0.6 + col * 3.05, y: 2.5 + row * 1.6, w: 2.7, h: 0.55, fontSize: 10, fontFace: CN, color: TH.secondary });
    });
    foot(s, pres, '把"创新能力"拆成 6 个可训练的具体能力', '13 / ~120'); badge(s, pres, 13);
  }

  // 14. 出发点自评
  function m1_04() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T02 · 出发点自评', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('5 级 · 1-2 分钟 · 课后 30 天再做一次', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 2.5, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    ['深度感知', '问题聚焦', '方向判断', '快速验证', '人机协同', '叙事影响'].forEach((c, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      s.addText(c, { x: 0.6 + col * 3.05, y: 1.8 + row * 0.4, w: 2, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary, bold: true });
      [1, 2, 3, 4, 5].forEach(n => {
        s.addShape(pres.shapes.OVAL, { x: 2.4 + col * 3.05 + n * 0.4, y: 1.85 + row * 0.4, w: 0.3, h: 0.3, fill: { color: TH.light2 }, line: { color: TH.primary, width: 0.5 } });
        s.addText(String(n), { x: 2.4 + col * 3.05 + n * 0.4, y: 1.85 + row * 0.4, w: 0.3, h: 0.3, fontSize: 10, fontFace: EN, color: TH.primary, bold: true, align: 'center', valign: 'middle' });
      });
    });
    s.addText('我最强的 1 个维度：____________   ·   最想突破的 1 个：____________', { x: 0.6, y: 3.5, w: 8.8, h: 0.4, fontSize: 13, fontFace: CN, color: TH.accent, bold: true });
    s.addText('📌 把课程资源重点投到 1 个想突破的维度上', { x: 0.5, y: 4.3, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true });
    foot(s, pres, '看清楚起点 · 才看得到变化', '14 / ~120'); badge(s, pres, 14);
  }

  // 15. 破局复盘
  function m1_05() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('破局模块 · 复盘', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('3 个带走 · 1 个练习', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const items = [
      ['带走 1', '创新 = 看见 + 决策 + 验证', '不是天赋是方法'],
      ['带走 2', '6 项能力可训练', '看清自己能力边界'],
      ['带走 3', 'AI 时代速度 ≠ 决策质量', '反而更要看清问题'],
    ];
    items.forEach((it, i) => {
      const y = 1.7 + i * 0.9;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 5, h: 0.8, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
      s.addText(it[0], { x: 0.6, y, w: 0.9, h: 0.8, fontSize: 14, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
      s.addText(it[1], { x: 1.6, y, w: 3.8, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(it[2], { x: 1.6, y: y + 0.4, w: 3.8, h: 0.4, fontSize: 10, fontFace: CN, color: TH.secondary, italic: true, valign: 'middle' });
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.8, y: 1.7, w: 3.7, h: 2.5, fill: { color: TH.pink } });
    s.addText('练习', { x: 5.9, y: 1.8, w: 3.5, h: 0.4, fontSize: 18, fontFace: CN, color: TH.accent, bold: true });
    s.addText('写下你最想解决的一个创新任务 — 用 1 句话、不超过 30 字、动词开头。', { x: 5.9, y: 2.3, w: 3.5, h: 0.8, fontSize: 11, fontFace: CN, color: TH.primary });
    s.addShape(pres.shapes.LINE, { x: 5.9, y: 3.1, w: 3.5, h: 0, line: { color: TH.secondary, width: 0.5, dashType: 'dash' } });
    s.addText('我想要 ____________________', { x: 5.9, y: 3.25, w: 3.5, h: 0.4, fontSize: 11, fontFace: CN, color: TH.accent, italic: true });
    s.addText('为了 ____________________', { x: 5.9, y: 3.6, w: 3.5, h: 0.4, fontSize: 11, fontFace: CN, color: TH.accent, italic: true });
    s.addText('📌 用 T01 场景卡填写完整版', { x: 5.9, y: 4.0, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true, bold: true });
    foot(s, pres, '破局 · 看清创新', '15 / ~120'); badge(s, pres, 15);
  }

  // ============== 模块二 感上 ==============
  // 16. 模块分隔
  function m2_div() {
    const s = pres.addSlide();
    s.background = { color: TH.sage };
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: TH.sage } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.5, w: 10, h: 0.05, fill: { color: TH.light } });
    s.addText('M1', { x: 0.5, y: 0.4, w: 2, h: 0.5, fontSize: 14, fontFace: EN, color: TH.light, bold: true, charSpacing: 6 });
    s.addText('感上', { x: 0.5, y: 1.4, w: 9, h: 1.4, fontSize: 110, fontFace: CN, color: TH.white, bold: true });
    s.addText('SENSE · UP', { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 16, fontFace: EN, color: TH.light, charSpacing: 8 });
    s.addText('进入真实现场', { x: 0.5, y: 3.5, w: 9, h: 0.4, fontSize: 18, fontFace: CN, color: TH.light });
    s.addText('90 分钟  ·  看见 AI 漏掉的真实信号', { x: 0.5, y: 4.0, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.white, italic: true });
  }

  // 17. 感上：开篇案例
  function m2_01() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('主任医师的 3 秒钟停顿', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('AI 报告里看不到的 1 个信号', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 13, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 2.8, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    s.addText('调研团队请主任医师介绍手术流程。', { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('AI 报告里：流程顺畅、效率高、患者满意度 95%。', { x: 0.7, y: 2.25, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.accent, italic: true });
    s.addText('访谈中，医师在讲到与家属沟通环节时，停顿 3 秒，眼睛看向窗外。', { x: 0.7, y: 2.7, w: 8.6, h: 0.6, fontSize: 14, fontFace: CN, color: TH.primary, bold: true });
    s.addText('追问：那一刻在想什么？', { x: 0.7, y: 3.4, w: 8.6, h: 0.4, fontSize: 14, fontFace: CN, color: TH.accent, italic: true });
    s.addText('答：那一刻在想要不要说更多。但怕吓到家属。', { x: 0.7, y: 3.85, w: 8.6, h: 0.5, fontSize: 14, fontFace: CN, color: TH.primary });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.65, w: 9, h: 0.5, fill: { color: TH.pink } });
    s.addText('📌 AI 报告里有满意度数据 · 停顿的瞬间是 AI 永远学不会的', { x: 0.5, y: 4.65, w: 9, h: 0.5, fontSize: 13, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '感上 · 看见 AI 漏掉的', '17 / ~120'); badge(s, pres, 17);
  }

  // 18. AI 报告 vs 真实观察
  function m2_02() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('AI 报告 vs 真实观察', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('同一场景 · 两种来源 · 哪种更真？', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    // 2 列
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 3, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 0.5, fill: { color: TH.primary } });
    s.addText('AI 报告', { x: 0.5, y: 1.7, w: 4.4, h: 0.5, fontSize: 16, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText('· 用户画像：35-45 岁，品质追求者\n· 满意度：95%\n· 痛点：操作繁琐\n· 期望：更智能的推荐', { x: 0.7, y: 2.3, w: 4, h: 2.3, fontSize: 12, fontFace: CN, color: TH.primary, paraSpaceAfter: 6 });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 3, fill: { color: TH.white }, line: { color: TH.accent, width: 2 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 0.5, fill: { color: TH.accent } });
    s.addText('真实观察', { x: 5.1, y: 1.7, w: 4.4, h: 0.5, fontSize: 16, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText('· 张姐每周三午休时打开手机，浏览 5 分钟就退出\n· 在对比 3 个产品后没买\n· 停顿的地方：价格、产品评论\n· 真实原因：怕选错被同事说', { x: 5.3, y: 2.3, w: 4, h: 2.3, fontSize: 12, fontFace: CN, color: TH.primary, paraSpaceAfter: 6 });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.3, fill: { color: TH.pink } });
    s.addText('AI 报告里有画像 · 真实观察里才有人', { x: 0.5, y: 4.85, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '感上 · 对比工具', '18 / ~120'); badge(s, pres, 18);
  }

  // 19. AI 时代版利益相关方
  function m2_03() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('AI 时代版利益相关方', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('AI 不是工具 · 是参与者', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const groups = [
      ['直接用户', '谁在用？'],
      ['间接用户', '谁受影响？'],
      ['AI 系统', '它参与什么决策？'],
      ['被替代角色', '谁被 AI 替代了？'],
      ['监管 / 行业', '谁有权叫停？'],
    ];
    groups.forEach((g, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + col * 3.05, y: 1.7 + row * 1.5, w: 2.9, h: 1.3, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
      s.addText(g[0], { x: 0.5 + col * 3.05, y: 1.8 + row * 1.5, w: 2.9, h: 0.4, fontSize: 16, fontFace: CN, color: TH.accent, bold: true, align: 'center' });
      s.addText(g[1], { x: 0.5 + col * 3.05, y: 2.25 + row * 1.5, w: 2.9, h: 0.6, fontSize: 11, fontFace: CN, color: TH.primary, align: 'center' });
    });
    s.addText('📌 5 类都填不出来 = 你没看清这个场景的全貌', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '感上 · 看全场景', '19 / ~120'); badge(s, pres, 19);
  }

  // 20. 情境访谈 5 原则
  function m2_04() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('情境访谈 5 原则', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('Contextual Interview · 30 分钟 · 1 个目标', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ps = [
      ['1', '行为 > 态度', '您怎么看 → 您怎么做'],
      ['2', '具体 > 一般', '您一般 → 您上一次'],
      ['3', '过去 > 假设', '如果您 → 您当时'],
      ['4', '细节 > 总结', '整体感觉 → 那一步'],
      ['5', '展示 > 解释', '您为什么 → 您怎么'],
    ];
    ps.forEach((p, i) => {
      const y = 1.7 + i * 0.6;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.5, fill: { color: TH.white }, line: { color: TH.primary, width: 0.5 } });
      s.addShape(pres.shapes.OVAL, { x: 0.7, y: y + 0.1, w: 0.3, h: 0.3, fill: { color: TH.accent } });
      s.addText(p[0], { x: 0.7, y: y + 0.1, w: 0.3, h: 0.3, fontSize: 12, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(p[1], { x: 1.2, y, w: 3, h: 0.5, fontSize: 14, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(p[2], { x: 4.5, y, w: 4.8, h: 0.5, fontSize: 12, fontFace: CN, color: TH.accent, valign: 'middle' });
    });
    foot(s, pres, '感上 · 访谈框架', '20 / ~120'); badge(s, pres, 20);
  }

  // 21. 5 原则例句
  function m2_05() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('5 原则 · 例句对照', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('错误问法 vs 正确问法 — 一眼看出区别', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 0.4, fill: { color: TH.primary } });
    s.addText('❌ 错误问法', { x: 0.5, y: 1.7, w: 4.4, h: 0.4, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 0.4, fill: { color: TH.accent } });
    s.addText('✓ 正确问法', { x: 5.1, y: 1.7, w: 4.4, h: 0.4, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    const ex = [
      ['您怎么看健康饮食？', '您上一次怎么吃的早餐？'],
      ['您一般会怎么选？', '您上周买饮料时怎么选的？'],
      ['如果您有空会健身吗？', '您最近一次去健身房是什么时候？'],
      ['您对产品整体感觉？', '您在哪一步停下来想了一下？'],
      ['您为什么选我们？', '您当时怎么知道我们的？'],
    ];
    ex.forEach((e, i) => {
      const y = 2.2 + i * 0.55;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.4, h: 0.45, fill: { color: TH.white }, line: { color: TH.secondary, width: 0.5 } });
      s.addText(e[0], { x: 0.7, y, w: 4, h: 0.45, fontSize: 11, fontFace: CN, color: TH.secondary, italic: true, valign: 'middle' });
      s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y, w: 4.4, h: 0.45, fill: { color: TH.pink }, line: { color: TH.accent, width: 0.5 } });
      s.addText(e[1], { x: 5.3, y, w: 4, h: 0.45, fontSize: 11, fontFace: CN, color: TH.accent, bold: true, valign: 'middle' });
    });
    foot(s, pres, '感上 · 例句工具', '21 / ~120'); badge(s, pres, 21);
  }

  // 22. AI 协同分工契约
  function m2_06() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('AI 协同分工契约', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('团队共识 · 写下来 · 不让 AI 抢活', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 3, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 0.5, fill: { color: TH.accent } });
    s.addText('AI 帮做（广度）', { x: 0.5, y: 1.7, w: 4.4, h: 0.5, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText('· 资料汇总 / 文献整理\n· 已有访谈结构化\n· 行业基准对比\n· 多语言翻译\n· 便利贴初步归类\n· 报告初稿\n· 批量生成 HMW 候选', { x: 0.7, y: 2.3, w: 4, h: 2.3, fontSize: 12, fontFace: CN, color: TH.primary, paraSpaceAfter: 4 });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 3, fill: { color: TH.white }, line: { color: TH.sage, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 0.5, fill: { color: TH.sage } });
    s.addText('人必须做（深度）', { x: 5.1, y: 1.7, w: 4.4, h: 0.5, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText('· 现场观察\n· 访谈中的临场追问\n· 情绪 / 肢体语言解读\n· 隐性需求识别\n· 便利贴归类的意义赋予\n· 报告中的关键判断\n· 对 AI 假设的反驳', { x: 5.3, y: 2.3, w: 4, h: 2.3, fontSize: 12, fontFace: CN, color: TH.primary, paraSpaceAfter: 4 });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.3, fill: { color: TH.pink } });
    s.addText('📌 没签名的契约 = 没用 · 3 个月内必须重签', { x: 0.5, y: 4.85, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '感上 · 团队契约', '22 / ~120'); badge(s, pres, 22);
  }

  // 23. 情境感知计划
  function m2_07() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T07 · 情境感知计划单', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('今天要看 AI 漏掉的什么', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 0.4, fill: { color: TH.primary } });
    s.addText('观察周期', { x: 0.7, y: 1.7, w: 2, h: 0.4, fontSize: 12, fontFace: CN, color: TH.white, bold: true, valign: 'middle' });
    s.addText('开始：____________   ·   结束：____________', { x: 2.7, y: 1.7, w: 6.8, h: 0.4, fontSize: 11, fontFace: CN, color: TH.white, valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.2, w: 9, h: 0.4, fill: { color: TH.primary } });
    s.addText('观察场景', { x: 0.7, y: 2.2, w: 2, h: 0.4, fontSize: 12, fontFace: CN, color: TH.white, bold: true, valign: 'middle' });
    s.addText('场景：____________   ·   时机：____________   ·   时长：____________', { x: 2.7, y: 2.2, w: 6.8, h: 0.4, fontSize: 11, fontFace: CN, color: TH.white, valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.7, w: 9, h: 0.4, fill: { color: TH.accent } });
    s.addText('观察目标（最多 3 个）', { x: 0.5, y: 2.7, w: 9, h: 0.4, fontSize: 12, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    [1, 2, 3].forEach(n => {
      const y = 3.2 + n * 0.5;
      s.addText(`目标 ${n}：`, { x: 0.5, y, w: 1, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, valign: 'middle' });
      s.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: y + 0.05, w: 8, h: 0.3, fill: { color: TH.white }, line: { color: TH.secondary, width: 0.5 } });
    });
    s.addText('📌 写完后立即问：这些信号中，AI 报告里漏掉了几个？', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '感上 · 计划工具', '23 / ~120'); badge(s, pres, 23);
  }

  // 24. 洞见改造练习
  function m2_08() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T08 · 洞见陈述句改造', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('从形容词句到行为句', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 0.4, fill: { color: TH.primary } });
    s.addText('原始陈述（形容词）', { x: 0.5, y: 1.7, w: 4.4, h: 0.4, fontSize: 13, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 0.4, fill: { color: TH.accent } });
    s.addText('改造后（行为）', { x: 5.1, y: 1.7, w: 4.4, h: 0.4, fontSize: 13, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    const ex = [
      ['用户很焦虑', '张姐在对比 3 个产品后没买，原因是怕选错被同事说'],
      ['流程繁琐', '护士在交接班时平均多走 3 趟，平均 1 次 4 分钟'],
      ['用户喜欢简单', '王哥下载后只用了 1 个功能，从没打开其他'],
    ];
    ex.forEach((e, i) => {
      const y = 2.2 + i * 0.85;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.4, h: 0.75, fill: { color: TH.white }, line: { color: TH.secondary, width: 0.5 } });
      s.addText(e[0], { x: 0.7, y, w: 4, h: 0.75, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true, valign: 'middle' });
      s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y, w: 4.4, h: 0.75, fill: { color: TH.pink }, line: { color: TH.accent, width: 0.5 } });
      s.addText(e[1], { x: 5.3, y, w: 4, h: 0.75, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, valign: 'middle' });
    });
    s.addText('📌 改造后要有：动词 + 对象 + 具体人 + 可观察行为', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '感上 · 改造练习', '24 / ~120'); badge(s, pres, 24);
  }

  // 25. 感上复盘
  function m2_09() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('感上模块 · 复盘', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('3 个带走 · 1 个练习', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const items = [
      ['带走 1', 'AI 漏掉的比它告诉你的多', '停顿 · 情绪 · 行为细节'],
      ['带走 2', '5 原则做不到位 = 无效访谈', '写不出具体信号 = 没做'],
      ['带走 3', '人机协同要写契约', '不签名 = 没用'],
    ];
    items.forEach((it, i) => {
      const y = 1.7 + i * 0.9;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 5, h: 0.8, fill: { color: TH.white }, line: { color: TH.sage, width: 1 } });
      s.addText(it[0], { x: 0.6, y, w: 0.9, h: 0.8, fontSize: 14, fontFace: CN, color: TH.sage, bold: true, align: 'center', valign: 'middle' });
      s.addText(it[1], { x: 1.6, y, w: 3.8, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(it[2], { x: 1.6, y: y + 0.4, w: 3.8, h: 0.4, fontSize: 10, fontFace: CN, color: TH.secondary, italic: true, valign: 'middle' });
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.8, y: 1.7, w: 3.7, h: 2.5, fill: { color: TH.pink } });
    s.addText('练习', { x: 5.9, y: 1.8, w: 3.5, h: 0.4, fontSize: 18, fontFace: CN, color: TH.accent, bold: true });
    s.addText('用 T05 访谈 1 位用户，30 分钟内找出 3 个 AI 漏掉的信号。', { x: 5.9, y: 2.3, w: 3.5, h: 0.8, fontSize: 11, fontFace: CN, color: TH.primary });
    s.addText('1. ____________________', { x: 5.9, y: 3.2, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('2. ____________________', { x: 5.9, y: 3.5, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('3. ____________________', { x: 5.9, y: 3.8, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    foot(s, pres, '感上 · 看见真实现场', '25 / ~120'); badge(s, pres, 25);
  }

  return [m1_div, m1_01, m1_02, m1_03, m1_04, m1_05, m2_div, m2_01, m2_02, m2_03, m2_04, m2_05, m2_06, m2_07, m2_08, m2_09];
}

module.exports = { makeSliders };
