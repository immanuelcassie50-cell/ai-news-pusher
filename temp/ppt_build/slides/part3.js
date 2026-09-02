// part3.js — 模块三 感下 · 模块四 构上 · 模块五 构下·验 · 模块六 整合 · 收尾
const CN = 'Microsoft YaHei';
const EN = 'Arial';
const TH = {
  primary: '1A1A1A', secondary: '6B6358', accent: 'D4361F',
  light: 'F2C75C', bg: 'F5F1E8', sage: '5C8068',
  pink: 'FBE9E3', white: 'FFFFFF', light2: 'EBE4D2',
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
function div(s, pres, no, name, en, sub, color) {
  s.background = { color };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.5, w: 10, h: 0.05, fill: { color: TH.light } });
  s.addText(no, { x: 0.5, y: 0.4, w: 2, h: 0.5, fontSize: 14, fontFace: EN, color: TH.light, bold: true, charSpacing: 6 });
  s.addText(name, { x: 0.5, y: 1.4, w: 9, h: 1.4, fontSize: 110, fontFace: CN, color: TH.white, bold: true });
  s.addText(en, { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 16, fontFace: EN, color: TH.light, charSpacing: 8 });
  s.addText(sub, { x: 0.5, y: 3.5, w: 9, h: 0.4, fontSize: 18, fontFace: CN, color: TH.light });
  s.addText('90 分钟  ·  ' + sub, { x: 0.5, y: 4.0, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.white, italic: true });
}

function makeSlidersP3(pres) {
  // ============== 模块三 感下 ==============
  function m3_div() {
    const s = pres.addSlide();
    div(s, pres, 'M2', '感下', 'SENSE · DOWN', '让真问题浮出水面', TH.sage);
  }

  // 27. 完美无瑕的需求文档
  function m3_01() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('完美无瑕的需求文档', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('一个看起来很专业 · 实际是灾难的案例', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 13, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 3, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    s.addText('某 SaaS 团队 6 个月调研，输出 80 页需求文档。', { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('特点：', { x: 0.7, y: 2.25, w: 1, h: 0.3, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('· 8 类用户画像、5 段旅程、47 个需求点、12 个关键指标', { x: 1.7, y: 2.25, w: 7.6, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('但没人能用 1 句话回答：', { x: 0.7, y: 2.65, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.accent, bold: true });
    s.addText('"我们到底要为谁 · 解决哪个 L4/L5 问题 · 什么算成功？"', { x: 0.7, y: 3.05, w: 8.6, h: 0.4, fontSize: 14, fontFace: CN, color: TH.primary, italic: true });
    s.addShape(pres.shapes.LINE, { x: 0.7, y: 3.5, w: 8.6, h: 0, line: { color: TH.secondary, width: 0.5, dashType: 'dash' } });
    s.addText('项目 6 个月没产出任何功能。团队最后承认：', { x: 0.7, y: 3.6, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('"我们不知道真问题是什么。"', { x: 0.7, y: 4.0, w: 8.6, h: 0.4, fontSize: 16, fontFace: CN, color: TH.accent, bold: true, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.3, fill: { color: TH.pink } });
    s.addText('📌 文档完美 ≠ 问题清楚 · 缺的是 L4/L5 的问题聚焦', { x: 0.5, y: 4.85, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '感下 · 看清问题层级', '27 / ~120'); badge(s, pres, 27);
  }

  // 28. 需求层次金字塔
  function m3_02() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('需求层次金字塔', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('L1 表面 → L5 根因 · 越深越值得做', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const layers = [
      ['L5', '根因', '为什么这件事对人重要', '3 个月', TH.accent],
      ['L4', '动机', '用户追求什么心理价值', '2 周', TH.accent],
      ['L3', '行为', '用户实际怎么做的', '3 天', TH.sage],
      ['L2', '障碍', '阻碍用户的具体卡点', '1 天', TH.sage],
      ['L1', '表面', '用户嘴上说的诉求', '5 分钟', TH.secondary],
    ];
    layers.forEach((l, i) => {
      const w = 1 + i * 1.2, x = 0.5 + (9 - w) / 2;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7 + i * 0.6, w, h: 0.5, fill: { color: l[4] === TH.secondary ? TH.bg : l[4] } });
      s.addText(`${l[0]} · ${l[1]}`, { x, y: 1.7 + i * 0.6, w, h: 0.5, fontSize: 12, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(l[2], { x, y: 1.7 + i * 0.6, w, h: 0.5, fontSize: 10, fontFace: CN, color: TH.white, align: 'center', valign: 'middle' });
    });
    s.addText('⏱ 时间 5 分钟 → 3 个月 · 越深越值得做', { x: 0.5, y: 4.85, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center' });
    foot(s, pres, '感下 · 需求层次', '28 / ~120'); badge(s, pres, 28);
  }

  // 29. 5 WHY 工具
  function m3_03() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T03 · 5 WHY 工具', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('5 个 Why 追问到第 3 层就有真问题 · 第 5 层有根因', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ws = [
      ['Why 1', '为什么这个功能没人用？', '用户没找到入口'],
      ['Why 2', '为什么没找到？', '入口在第 3 级菜单'],
      ['Why 3', '为什么放那么深？', '怕破坏首页简洁'],
      ['Why 4', '为什么怕破坏？', '首页是 GMV 主战场'],
      ['Why 5', '为什么这个功能也重要？', '是复购主要入口'],
    ];
    ws.forEach((w, i) => {
      const y = 1.7 + i * 0.55;
      s.addShape(pres.shapes.OVAL, { x: 0.7, y: y + 0.05, w: 0.7, h: 0.4, fill: { color: TH.accent } });
      s.addText(w[0], { x: 0.7, y: y + 0.05, w: 0.7, h: 0.4, fontSize: 11, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(w[1], { x: 1.6, y, w: 3.5, h: 0.5, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(w[2], { x: 5.2, y, w: 4.3, h: 0.5, fontSize: 12, fontFace: CN, color: TH.accent, valign: 'middle' });
    });
    s.addText('📌 中途跑题就标记 ⭐  ·  第 3 层起开始有真信号', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '感下 · 5 WHY 工具', '29 / ~120'); badge(s, pres, 29);
  }

  // 30. AI 时代三大问题陷阱
  function m3_04() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('AI 时代 3 大问题陷阱', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('用 AI 越深越容易掉进去 · 每次用 AI 后必检', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ps = [
      ['幻觉洞察', '看完 AI 报告觉得恍然大悟，但说不出哪个证据支持', '自检：我能指出 3 个具体观察吗？'],
      ['问题替换', '用户说我想要 X，做了 Y，但 Y 是行业标配', '自检：我问过用户为什么吗？'],
      ['速度加速', 'AI 把 3 周压到 3 天，没增加 1 天真实验证', '自检：我有未验证假设在驱动快跑吗？'],
    ];
    ps.forEach((p, i) => {
      const y = 1.7 + i * 1.05;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.95, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.15, h: 0.95, fill: { color: TH.accent } });
      s.addText(`陷阱 ${i + 1}`, { x: 0.8, y, w: 1.5, h: 0.4, fontSize: 10, fontFace: CN, color: TH.accent, bold: true });
      s.addText(p[0], { x: 2.3, y, w: 2, h: 0.4, fontSize: 18, fontFace: CN, color: TH.primary, bold: true });
      s.addText(p[1], { x: 0.8, y: y + 0.4, w: 5.5, h: 0.55, fontSize: 11, fontFace: CN, color: TH.primary });
      s.addShape(pres.shapes.RECTANGLE, { x: 6.5, y: y + 0.1, w: 2.8, h: 0.75, fill: { color: TH.pink } });
      s.addText(p[2], { x: 6.6, y: y + 0.1, w: 2.7, h: 0.75, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, valign: 'middle' });
    });
    foot(s, pres, '感下 · 3 大陷阱', '30 / ~120'); badge(s, pres, 30);
  }

  // 31. 真问题诊断卡
  function m3_05() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T03 · 真问题诊断卡', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('6 问诊断 · ≥ 4 个答不出 = 任务没准备好', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const qs = [
      ['1', '我解决的是用户原话里的问题吗？', '不是翻译后的问题'],
      ['2', '触发这个问题的关键时刻是？', '具体到 24 小时 / 7 天'],
      ['3', '不解决，用户现在用什么凑合？', '凑合方案 = 真问题镜子'],
      ['4', '我能用 1 个动作测 1 个假设吗？', '不是大方案 · 是单变量实验'],
      ['5', '5 个 Why 追问完，最深的 Why 是？', '中途跑题标记 ⭐'],
      ['6', '真受益人是 1 个具体人吗？', '不是用户群 · 是具体人'],
    ];
    qs.forEach((q, i) => {
      const y = 1.7 + i * 0.5;
      s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.05, w: 0.4, h: 0.4, fill: { color: TH.accent } });
      s.addText(q[0], { x: 0.6, y: y + 0.05, w: 0.4, h: 0.4, fontSize: 14, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(q[1], { x: 1.2, y, w: 5, h: 0.5, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(q[2], { x: 6.3, y, w: 3.2, h: 0.5, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, valign: 'middle' });
    });
    s.addText('📌 6 问中 ≥ 4 个答不出 = 这个任务还没准备好启动', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '感下 · 诊断工具', '31 / ~120'); badge(s, pres, 31);
  }

  // 32. 信号归集
  function m3_06() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T09 · 信号归集 5 步', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('AI 做初分 · 人做意义赋予', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const steps = [
      ['收集', '拍成照片'],
      ['AI 粗分', '按主题做第一层'],
      ['人复核', '每张便利贴过一遍'],
      ['人归并', '5-8 个簇'],
      ['人命名', '可传播的名字'],
    ];
    steps.forEach((st, i) => {
      const x = 0.5 + i * 1.85;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 1.7, h: 2.2, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
      s.addText(String(i + 1), { x, y: 2.0, w: 1.7, h: 0.5, fontSize: 28, fontFace: EN, color: TH.accent, bold: true, align: 'center' });
      s.addText(st[0], { x, y: 2.55, w: 1.7, h: 0.4, fontSize: 14, fontFace: CN, color: TH.primary, bold: true, align: 'center' });
      s.addText(st[1], { x: x + 0.1, y: 3.0, w: 1.5, h: 0.9, fontSize: 10, fontFace: CN, color: TH.secondary, align: 'center' });
    });
    s.addText('📌 命名时停下来 30 秒 · 名字好坏 = 团队能不能用同一个词', { x: 0.5, y: 4.4, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '感下 · 归集流程', '32 / ~120'); badge(s, pres, 32);
  }

  // 33. 视角阶梯
  function m3_07() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T13 · 视角阶梯', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('5 个视角看同一个问题 · 跨视角冲突 = 真正需要决策', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const vs = ['用户', '设计者', '工程师', '运营', 'CEO'];
    vs.forEach((v, i) => {
      const x = 0.5 + i * 1.85;
      const colors = [TH.accent, TH.sage, TH.primary, TH.light, TH.pink];
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 1.7, h: 1, fill: { color: colors[i] }, line: { color: TH.primary, width: 0.5 } });
      s.addText(v + '视角', { x, y: 1.9, w: 1.7, h: 1, fontSize: 16, fontFace: CN, color: i === 2 ? TH.white : TH.primary, bold: true, align: 'center', valign: 'middle' });
      s.addText('我看到：' + ['用户痛', '系统观', '可行度', '可运营', '战略位'][i], { x, y: 3.0, w: 1.7, h: 0.4, fontSize: 10, fontFace: CN, color: TH.secondary, align: 'center' });
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.6, w: 9, h: 1.2, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addText('最大公约数', { x: 0.7, y: 3.7, w: 2, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('5 个视角都同意的 1 件事：____________', { x: 2.8, y: 3.7, w: 6.5, h: 0.4, fontSize: 11, fontFace: CN, color: TH.primary });
    s.addText('最大冲突', { x: 0.7, y: 4.2, w: 2, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('5 个视角冲突最厉害的 1 件事：____________', { x: 2.8, y: 4.2, w: 6.5, h: 0.4, fontSize: 11, fontFace: CN, color: TH.primary });
    foot(s, pres, '感下 · 多视角工具', '33 / ~120'); badge(s, pres, 33);
  }

  // 34. 优先判断矩阵
  function m3_08() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T10 · 优先判断矩阵', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('4 维度 · 不只是价值 × 成本', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 0.4, fill: { color: TH.primary } });
    ['候选方向', '用户价值', '战略对齐', '可行可达', '学习价值', '总分'].forEach((h, i) => {
      const ws = i === 0 ? 2.5 : 1.3;
      s.addText(h, { x: 0.5 + (i === 0 ? 0 : 2.5 + (i - 1) * 1.3), y: 1.7, w: ws, h: 0.4, fontSize: 11, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    });
    for (let i = 1; i <= 6; i++) {
      const y = 2.1 + (i - 1) * 0.4;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 2.5, h: 0.4, fill: { color: TH.bg } });
      s.addText(`方向 ${i}`, { x: 0.5, y, w: 2.5, h: 0.4, fontSize: 11, fontFace: CN, color: TH.primary, valign: 'middle', align: 'center' });
      for (let j = 0; j < 5; j++) {
        s.addShape(pres.shapes.RECTANGLE, { x: 3 + j * 1.3, y, w: 1.3, h: 0.4, fill: { color: TH.white }, line: { color: TH.secondary, width: 0.3 } });
      }
    }
    s.addText('📌 总分 ≥ 16 立即展开 · 12-15 一周内再评估 · < 12 进不做什么清单', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '感下 · 决策工具', '34 / ~120'); badge(s, pres, 34);
  }

  // 35. 感下复盘
  function m3_09() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('感下模块 · 复盘', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('3 个带走 · 1 个练习', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const items = [
      ['带走 1', 'L4/L5 是真问题', 'L1/L2 容易做但不值得做'],
      ['带走 2', 'AI 三大陷阱必检', '幻觉洞察 · 问题替换 · 速度加速'],
      ['带走 3', '决策不止看价值', '4 维度 + 学习价值'],
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
    s.addText('用 T03 真问题诊断卡，对你的场景做 6 问诊断。', { x: 5.9, y: 2.3, w: 3.5, h: 0.8, fontSize: 11, fontFace: CN, color: TH.primary });
    s.addText('1. 答得出的：____________', { x: 5.9, y: 3.2, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('2. 答不出的：____________', { x: 5.9, y: 3.5, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('3. 下一步：____________', { x: 5.9, y: 3.8, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    foot(s, pres, '感下 · 挖到真问题', '35 / ~120'); badge(s, pres, 35);
  }

  // ============== 模块四 构上 ==============
  function m4_div() {
    const s = pres.addSlide();
    div(s, pres, 'M3', '构上', 'BUILD · UP', '把洞察变成方向', TH.sage);
  }

  // 37. 103 个点子
  function m4_01() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('103 个点子的悲剧', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('数量 ≠ 质量 · 关键问题不解决 = 一切白搭', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 13, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 2.5, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    s.addText('某团队对 1 个真问题头脑风暴 3 小时，产出 103 个点子。', { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('CEO：太棒了！我们要选 1 个。', { x: 0.7, y: 2.25, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('3 个月后 103 个点子全部进入备选库，没 1 个上线。', { x: 0.7, y: 2.65, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.accent, bold: true });
    s.addText('反思：', { x: 0.7, y: 3.1, w: 8.6, h: 0.4, fontSize: 14, fontFace: CN, color: TH.accent, bold: true });
    s.addText('· 没说清 HMW 公式 · 没定选择标准 · 没说不做什么', { x: 1.2, y: 3.1, w: 7.8, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('结果：方向越多 = 越不知道做什么 = 行动瘫痪', { x: 0.7, y: 3.55, w: 8.6, h: 0.5, fontSize: 14, fontFace: CN, color: TH.accent, bold: true, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.5, fill: { color: TH.pink } });
    s.addText('📌 没有 HMW 的发散 = 漫无目的的创意喷泉', { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 13, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '构上 · 锁定方向', '37 / ~120'); badge(s, pres, 37);
  }

  // 38. HMW 公式
  function m4_02() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T14 · HMW 公式', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('把洞察变成可探索的问题', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 0.9, fill: { color: TH.primary } });
    s.addText('我们如何能 + 动词 + 对象，让 具体的人 在 具体的场景 中实现 关键价值？', { x: 0.5, y: 1.7, w: 9, h: 0.9, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText('5 个 HMW 候选示例（健康场景）', { x: 0.5, y: 2.75, w: 9, h: 0.3, fontSize: 13, fontFace: CN, color: TH.accent, bold: true });
    const hws = [
      '我们如何能 简化 健康饮食 决策，让 35 岁职场妈妈 在 通勤路上 实现 不再内疚？',
      '我们如何能 推迟 健康决策 时刻，让 独居青年 在 周末采购时 实现 不焦虑？',
      '我们如何能 消除 健身 入门门槛，让 500 米内的居民 在 下班后 实现 自然开始？',
      '我们如何能 延后 健康 承诺，让 犹豫的 5 分钟用户 在 进店瞬间 实现 不被打扰？',
      '我们如何能 重塑 健康 反馈，让 不喜欢被监督的会员 在 运动后 实现 不被打扰的成就感？',
    ];
    hws.forEach((h, i) => {
      const y = 3.1 + i * 0.36;
      s.addText(`HMW ${i + 1}`, { x: 0.5, y, w: 0.8, h: 0.3, fontSize: 10, fontFace: EN, color: TH.accent, bold: true });
      s.addText(h, { x: 1.3, y, w: 8, h: 0.3, fontSize: 9, fontFace: CN, color: TH.primary });
    });
    s.addText('📌 至少 3 个完全符合 3 项自检：动词 / 具体人 / 可观察价值', { x: 0.5, y: 4.95, w: 9, h: 0.2, fontSize: 9, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构上 · HMW 公式', '38 / ~120'); badge(s, pres, 38);
  }

  // 39. 4 类创意激发
  function m4_03() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('4 类创意激发', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('SCAMPER + 极端 + 跨界 + 逆向 · 12 个发散点', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ms = [
      ['SCAMPER', '替代 / 组合 / 调整 / 修改\n改用 / 消除 / 重排'],
      ['极端用户', '为 0 经验用户设计\n为 100 经验用户设计'],
      ['跨界类比', '其他行业的方法\n可以借什么？'],
      ['逆向思维', '如果故意做坏呢？\n什么必须避免？'],
    ];
    ms.forEach((m, i) => {
      const x = 0.5 + i * 2.3;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.2, h: 2.8, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.2, h: 0.5, fill: { color: TH.accent } });
      s.addText(m[0], { x, y: 1.7, w: 2.2, h: 0.5, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(m[1], { x: x + 0.1, y: 2.4, w: 2, h: 2, fontSize: 11, fontFace: CN, color: TH.primary, align: 'center', valign: 'top' });
    });
    s.addText('📌 12 个发散点中，最让你惊讶的 3 个 = 真正创新点', { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构上 · 创意激发', '39 / ~120'); badge(s, pres, 39);
  }

  // 40. 三维矩阵
  function m4_04() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T17 · 三维判断矩阵', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('价值 × 可达 × 学习 · 选对方向', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const qs = [
      ['Q1 战略区', '高价值 · 低可达', '路线图 · 本季度不动手', TH.pink, TH.accent],
      ['Q2 黄金区', '高价值 · 高可达', '立即展开 3 个方向', TH.light, TH.accent],
      ['Q3 验证区', '低价值 · 高可达', '轻量原型测试 · 1 周内决定', TH.white, TH.sage],
      ['Q4 放弃区', '低价值 · 低可达', '果断放弃 · 进不做清单', TH.light2, TH.secondary],
    ];
    qs.forEach((q, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + col * 4.55, y: 1.7 + row * 1.4, w: 4.4, h: 1.3, fill: { color: q[3] }, line: { color: q[4], width: 1.5 } });
      s.addText(q[0], { x: 0.5 + col * 4.55, y: 1.8 + row * 1.4, w: 4.4, h: 0.4, fontSize: 16, fontFace: CN, color: q[4], bold: true, align: 'center' });
      s.addText(q[1], { x: 0.5 + col * 4.55, y: 2.2 + row * 1.4, w: 4.4, h: 0.3, fontSize: 11, fontFace: CN, color: TH.primary, align: 'center' });
      s.addText(q[2], { x: 0.5 + col * 4.55, y: 2.5 + row * 1.4, w: 4.4, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, align: 'center' });
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.4, fill: { color: TH.pink } });
    s.addText('📌 把不做什么也写下来 — 写下来比做出来更难', { x: 0.5, y: 4.5, w: 9, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '构上 · 决策矩阵', '40 / ~120'); badge(s, pres, 40);
  }

  // 41. 叙事原型
  function m4_05() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T18 · 叙事原型 5 段', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('用故事说服 · 比 PPT 强 10 倍', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ns = [
      ['1. 旧世界', '用户在用什么凑合？', '让听众说"我认识这样的人"'],
      ['2. 转折', '凑合在什么关键时刻失效？', '具体到一天 24 小时'],
      ['3. 洞见', '我们看见了什么 AI 漏掉的？', '反常识的发现'],
      ['4. 新可能', '我们能做什么？', '具体可观察的变化'],
      ['5. 邀请', '听众下一步能做什么？', '1 个具体动作'],
    ];
    ns.forEach((n, i) => {
      const y = 1.7 + i * 0.6;
      const colors = [TH.secondary, TH.sage, TH.accent, TH.sage, TH.accent];
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 1.2, h: 0.55, fill: { color: colors[i] } });
      s.addText(n[0], { x: 0.5, y, w: 1.2, h: 0.55, fontSize: 11, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(n[1], { x: 1.9, y, w: 4, h: 0.55, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(n[2], { x: 6, y, w: 3.5, h: 0.55, fontSize: 11, fontFace: CN, color: TH.secondary, italic: true, valign: 'middle' });
    });
    s.addText('📌 故事 5 段 = 3 分钟以内能讲完 = 决策者愿意听', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构上 · 叙事原型', '41 / ~120'); badge(s, pres, 41);
  }

  // 42. 人机共创
  function m4_06() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T16 · 人机共创记录', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('AI 提议 + 人判断 · 留痕', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 0.4, fill: { color: TH.primary } });
    ['轮次', 'AI 提议', '人判断 / 追问', '采纳？'].forEach((h, i) => {
      const ws = [0.8, 3.5, 3.5, 1.2];
      const xs = [0.5, 1.3, 4.8, 8.3];
      s.addText(h, { x: xs[i], y: 1.7, w: ws[i], h: 0.4, fontSize: 11, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    });
    for (let i = 1; i <= 8; i++) {
      const y = 2.1 + (i - 1) * 0.3;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.8, h: 0.3, fill: { color: TH.bg } });
      s.addText(String(i), { x: 0.5, y, w: 0.8, h: 0.3, fontSize: 10, fontFace: EN, color: TH.primary, align: 'center', valign: 'middle' });
      for (let j = 0; j < 3; j++) {
        const ws = [3.5, 3.5, 1.2];
        const xs = [1.3, 4.8, 8.3];
        s.addShape(pres.shapes.RECTANGLE, { x: xs[j], y, w: ws[j], h: 0.3, fill: { color: TH.white }, line: { color: TH.secondary, width: 0.3 } });
      }
    }
    s.addText('📌 AI ≥ 10 提议 · 人采纳 ≤ 3 · 至少 1 次明确反驳 AI', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构上 · 人机共创', '42 / ~120'); badge(s, pres, 42);
  }

  // 43. 构上复盘
  function m4_07() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('构上模块 · 复盘', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('3 个带走 · 1 个练习', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const items = [
      ['带走 1', 'HMW 是必备的', '没有 HMW = 漫无目的'],
      ['带走 2', '三维矩阵看选区', '黄金区做 · 放弃区不写'],
      ['带走 3', '故事比 PPT 强 10 倍', '5 段 = 3 分钟讲完'],
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
    s.addText('用 T14 HMW 定义 5 个候选，再用 T17 三维矩阵看象限。', { x: 5.9, y: 2.3, w: 3.5, h: 0.8, fontSize: 11, fontFace: CN, color: TH.primary });
    s.addText('黄金区：____________', { x: 5.9, y: 3.2, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('放弃区：____________', { x: 5.9, y: 3.5, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('不做什么：____________', { x: 5.9, y: 3.8, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    foot(s, pres, '构上 · 锁定方向', '43 / ~120'); badge(s, pres, 43);
  }

  // ============== 模块五 构下·验 ==============
  function m5_div() {
    const s = pres.addSlide();
    div(s, pres, 'M4', '构下·验', 'BUILD · DOWN · VALIDATE', '用最小代价验证', TH.primary);
  }

  // 45. MVP 不是产品是实验
  function m5_01() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('MVP 不是产品，是实验', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('Minimum Viable Experiment · 用最低保真度学最多东西', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 1.2, fill: { color: TH.pink } });
    s.addText('大多数团队的错误：把 MVP 理解成"小一号的产品"。', { x: 0.7, y: 1.85, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary, bold: true });
    s.addText('正确理解：MVP 是 最小可行实验，目的是 验证一个假设，不是上线一个功能。', { x: 0.7, y: 2.3, w: 8.6, h: 0.5, fontSize: 13, fontFace: CN, color: TH.accent, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.1, w: 9, h: 1.5, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addText('反模式：', { x: 0.7, y: 3.2, w: 2, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('直接做 L4 demo 因为"产品经理想看完整的"。', { x: 2.7, y: 3.2, w: 6.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('真相：', { x: 0.7, y: 3.7, w: 2, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('产品经理想看的不是产品完整，是 假设验证完整。', { x: 2.7, y: 3.7, w: 6.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('代价：', { x: 0.7, y: 4.2, w: 2, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('90% 时间浪费在错的方向上', { x: 2.7, y: 4.2, w: 6.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, bold: true });
    s.addText('📌 永远从最低保真度开始 · 学到了再加保真度', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构下·验 · MVP 理念', '45 / ~120'); badge(s, pres, 45);
  }

  // 46. 原型光谱 5 级
  function m5_02() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('原型保真度 5 级', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('从 L1 一句剧本 → L5 灰度上线', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ls = [
      ['L1', '一句剧本', '假装销售', '0', '用户反应'],
      ['L2', '纸面原型', '一张草图', '1h', '行为路径'],
      ['L3', '角色扮演', '真实服务', '1d', '真实体验'],
      ['L4', '单功能 demo', '可点击', '1-2w', '真实可用'],
      ['L5', '灰度上线', '10 个真实用户', '1m', '真实数据'],
    ];
    ls.forEach((l, i) => {
      const x = 0.5 + i * 1.85;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 1.7, h: 2.8, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 1.7, h: 0.4, fill: { color: TH.accent } });
      s.addText(l[0], { x, y: 1.7, w: 1.7, h: 0.4, fontSize: 14, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(l[1], { x, y: 2.2, w: 1.7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary, bold: true, align: 'center' });
      s.addText(l[2], { x, y: 2.6, w: 1.7, h: 0.4, fontSize: 11, fontFace: CN, color: TH.accent, align: 'center' });
      s.addText('成本', { x, y: 3.1, w: 1.7, h: 0.3, fontSize: 9, fontFace: CN, color: TH.secondary, align: 'center' });
      s.addText(l[3], { x, y: 3.4, w: 1.7, h: 0.3, fontSize: 14, fontFace: EN, color: TH.primary, bold: true, align: 'center' });
      s.addText('学到', { x, y: 3.8, w: 1.7, h: 0.3, fontSize: 9, fontFace: CN, color: TH.secondary, align: 'center' });
      s.addText(l[4], { x, y: 4.1, w: 1.7, h: 0.4, fontSize: 10, fontFace: CN, color: TH.primary, align: 'center' });
    });
    s.addText('📌 永远从 L1 开始 · 学到了再加保真度', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构下·验 · 原型光谱', '46 / ~120'); badge(s, pres, 46);
  }

  // 47. 假装销售 4 问
  function m5_03() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T19 · 假装销售 4 问', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('动手前先假装做一次', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const qs = [
      ['1', '对方的第一反应', '我看到 / 我想到 / 我担心'],
      ['2', '追问后真实诉求', '你为什么？原来需要……'],
      ['3', '对方没说但我们观察到的', '语气 / 停顿 / 眼神'],
      ['4', '我会调整的方向', '改什么 / 加什么 / 删什么'],
    ];
    qs.forEach((q, i) => {
      const y = 1.7 + i * 0.7;
      s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.05, w: 0.5, h: 0.5, fill: { color: TH.accent } });
      s.addText(q[0], { x: 0.6, y: y + 0.05, w: 0.5, h: 0.5, fontSize: 16, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(q[1], { x: 1.3, y, w: 3, h: 0.6, fontSize: 14, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addShape(pres.shapes.RECTANGLE, { x: 4.5, y: y + 0.1, w: 5, h: 0.45, fill: { color: TH.white }, line: { color: TH.secondary, width: 0.3 } });
      s.addText(q[2], { x: 4.6, y: y + 0.1, w: 4.8, h: 0.45, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, valign: 'middle' });
    });
    s.addText('📌 5 场对话中至少 3 场调整方向 = 假装有效', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构下·验 · 假装销售', '47 / ~120'); badge(s, pres, 47);
  }

  // 48. 实验设计 5 要素
  function m5_04() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('实验设计 5 要素', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('一个实验 = 一个假设 + 一个动作 + 一个可观察指标', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const es = [
      ['假设', '我假设 ___ 会 ___ 因为 ___', '可证伪 · 不能是我觉得'],
      ['对象', '5-10 个具体人', '不是用户群 · 是 1 个具体画像'],
      ['动作', '1 个最小动作', '不是大方案 · 是单变量'],
      ['指标', '1 个可观察行为', '不是感受 · 是看得见的动作'],
      ['时间', '1-2 周内完成', '不是季度 · 是周'],
    ];
    es.forEach((e, i) => {
      const y = 1.7 + i * 0.6;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 1.5, h: 0.5, fill: { color: TH.accent } });
      s.addText(e[0], { x: 0.5, y, w: 1.5, h: 0.5, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(e[1], { x: 2.2, y, w: 4, h: 0.5, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(e[2], { x: 6.3, y, w: 3.2, h: 0.5, fontSize: 10, fontFace: CN, color: TH.accent, italic: true, valign: 'middle' });
    });
    s.addText('📌 没有 1 个可观察指标的实验 = 自我安慰', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构下·验 · 实验设计', '48 / ~120'); badge(s, pres, 48);
  }

  // 49. 决策三选项
  function m5_05() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('决策三选项', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('继续 / 调整 / 放弃 · 没有 4 选项', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ds = [
      ['继续', '验证有效 · 继续往这个方向走', '加投资源 · 3 个月规划', TH.sage],
      ['调整', '部分有效 · 调整假设或对象', '改 1 个变量 · 重做一次', TH.accent],
      ['放弃', '验证无效 · 果断放弃', '写进不做清单 · 不再讨论', TH.primary],
    ];
    ds.forEach((d, i) => {
      const x = 0.5 + i * 3.05;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.9, h: 2.8, fill: { color: TH.white }, line: { color: d[3], width: 2 } });
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.9, h: 0.6, fill: { color: d[3] } });
      s.addText(d[0], { x, y: 1.7, w: 2.9, h: 0.6, fontSize: 24, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(d[1], { x: x + 0.1, y: 2.5, w: 2.7, h: 0.6, fontSize: 12, fontFace: CN, color: TH.primary, align: 'center' });
      s.addText(d[2], { x: x + 0.1, y: 3.2, w: 2.7, h: 0.6, fontSize: 11, fontFace: CN, color: d[3], align: 'center', italic: true });
    });
    s.addText('📌 没有 4 选 4 · 也没有"再观察一下" · 3 选 1 选到底', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构下·验 · 决策框架', '49 / ~120'); badge(s, pres, 49);
  }

  // 50. 关键纪律
  function m5_06() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('关键纪律：没有"再做一次"', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('在 3 个选项中选 1 个 · 不选"再做一次"', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 2.5, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    s.addText('原因 1', { x: 0.7, y: 1.85, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('"再做一次" = 决策瘫痪 · 是延迟选择的体面说法', { x: 2.2, y: 1.85, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('原因 2', { x: 0.7, y: 2.4, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('如果数据不够 → 调整 1 个变量重做 · 不是"再做一次"', { x: 2.2, y: 2.4, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('原因 3', { x: 0.7, y: 2.95, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('如果方向错 → 果断放弃 · 写进不做什么清单', { x: 2.2, y: 2.95, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('原因 4', { x: 0.7, y: 3.5, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('如果有效 → 加大投入 · 不在低水平验证上反复', { x: 2.2, y: 3.5, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.5, fill: { color: TH.pink } });
    s.addText('📌 "再做一次" = 失败文化的开端', { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 14, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '构下·验 · 关键纪律', '50 / ~120'); badge(s, pres, 50);
  }

  // 51. 任务旅程
  function m5_07() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T21 · 任务旅程 7 步', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('用户的一天 24 小时 · 不只是产品界面', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const ss = ['触发', '准备', '行动', '中断', '验证', '完成', '后续'];
    ss.forEach((st, i) => {
      const x = 0.5 + i * 1.3;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 1.2, h: 0.5, fill: { color: TH.accent } });
      s.addText(String(i + 1), { x, y: 1.9, w: 1.2, h: 0.5, fontSize: 12, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
      s.addText(st, { x, y: 2.4, w: 1.2, h: 0.3, fontSize: 11, fontFace: CN, color: TH.primary, bold: true, align: 'center' });
      if (i < 6) {
        s.addText('→', { x: 1.7 + i * 1.3, y: 1.95, w: 0.1, h: 0.4, fontSize: 16, fontFace: EN, color: TH.secondary, align: 'center', valign: 'middle' });
      }
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.0, w: 9, h: 1.5, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addText('旅程中最容易流失 1 步是：____________', { x: 0.7, y: 3.2, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.accent, bold: true });
    s.addText('为什么是这一步：____________', { x: 0.7, y: 3.7, w: 8.6, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('📌 旅程 = 用户的完整一天 · 不只是产品界面', { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构下·验 · 任务旅程', '51 / ~120'); badge(s, pres, 51);
  }

  // 52. 反馈摘要
  function m5_08() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T20 · 反馈摘要 4 栏', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('把对话变成可决策的 4 栏', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 0.4, fill: { color: TH.primary } });
    ['原话', '含义解读', '我们做什么', '不做 / 调整'].forEach((h, i) => {
      s.addText(h, { x: 0.5 + i * 2.25, y: 1.7, w: 2.25, h: 0.4, fontSize: 12, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    });
    for (let i = 1; i <= 8; i++) {
      const y = 2.1 + (i - 1) * 0.3;
      for (let j = 0; j < 4; j++) {
        s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + j * 2.25, y, w: 2.25, h: 0.3, fill: { color: TH.white }, line: { color: TH.secondary, width: 0.3 } });
      }
    }
    s.addText('📌 不做/调整栏至少 3 条 · 反馈的价值在调整', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '构下·验 · 反馈摘要', '52 / ~120'); badge(s, pres, 52);
  }

  // 53. 构下·验复盘
  function m5_09() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('构下·验模块 · 复盘', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('3 个带走 · 1 个练习', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const items = [
      ['带走 1', 'MVP 是实验不是产品', '永远从 L1 开始'],
      ['带走 2', '5 要素设计实验', '1 假设 1 动作 1 指标'],
      ['带走 3', '继续/调整/放弃', '没有"再做一次"'],
    ];
    items.forEach((it, i) => {
      const y = 1.7 + i * 0.9;
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 5, h: 0.8, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
      s.addText(it[0], { x: 0.6, y, w: 0.9, h: 0.8, fontSize: 14, fontFace: CN, color: TH.primary, bold: true, align: 'center', valign: 'middle' });
      s.addText(it[1], { x: 1.6, y, w: 3.8, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
      s.addText(it[2], { x: 1.6, y: y + 0.4, w: 3.8, h: 0.4, fontSize: 10, fontFace: CN, color: TH.secondary, italic: true, valign: 'middle' });
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.8, y: 1.7, w: 3.7, h: 2.5, fill: { color: TH.pink } });
    s.addText('练习', { x: 5.9, y: 1.8, w: 3.5, h: 0.4, fontSize: 18, fontFace: CN, color: TH.accent, bold: true });
    s.addText('用 T19 假装销售 5 个人，再用 T20 反馈摘要 4 栏。', { x: 5.9, y: 2.3, w: 3.5, h: 0.8, fontSize: 11, fontFace: CN, color: TH.primary });
    s.addText('假设：____________', { x: 5.9, y: 3.2, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('调整：____________', { x: 5.9, y: 3.5, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    s.addText('放弃：____________', { x: 5.9, y: 3.8, w: 3.5, h: 0.3, fontSize: 10, fontFace: CN, color: TH.accent, italic: true });
    foot(s, pres, '构下·验 · 用最小代价', '53 / ~120'); badge(s, pres, 53);
  }

  // ============== 模块六 整合 ==============
  function m6_div() {
    const s = pres.addSlide();
    div(s, pres, 'M5', '整合', 'INTEGRATE', '让创新可被带走', TH.primary);
  }

  // 55. 课程满意度是危险指标
  function m6_01() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('课程满意度是最危险的评估指标', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 24, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('为什么满意度高 ≠ 行为变化', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 13, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 2.8, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    s.addText('满意度高的原因：', { x: 0.7, y: 1.85, w: 3, h: 0.4, fontSize: 13, fontFace: CN, color: TH.accent, bold: true });
    s.addText('· 老师讲得好  · 课堂氛围活跃  · 我有启发  · 同学们都很好', { x: 0.7, y: 2.25, w: 8.6, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('但这跟', { x: 0.7, y: 2.7, w: 1, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('"30 天后我有没有用"', { x: 1.5, y: 2.7, w: 4, h: 0.4, fontSize: 14, fontFace: CN, color: TH.accent, bold: true });
    s.addText('没任何关系。', { x: 5.5, y: 2.7, w: 4, h: 0.4, fontSize: 14, fontFace: CN, color: TH.primary });
    s.addText('真正要评估的：', { x: 0.7, y: 3.2, w: 3, h: 0.4, fontSize: 13, fontFace: CN, color: TH.accent, bold: true });
    s.addText('· 30 天后我做了 1 个小实验吗？', { x: 1, y: 3.6, w: 8, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 60 天后我形成自己的节拍了吗？', { x: 1, y: 4.0, w: 8, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 90 天后我看见行为 / 业务变化了吗？', { x: 1, y: 4.4, w: 8, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.65, w: 9, h: 0.3, fill: { color: TH.pink } });
    s.addText('📌 用可观察行为评估 · 不用满意度评估', { x: 0.5, y: 4.65, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
    foot(s, pres, '整合 · 真实评估', '55 / ~120'); badge(s, pres, 55);
  }

  // 56. 个人承诺卡
  function m6_02() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('T22 · 个人承诺卡', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('30/60/90 天 · 写下你愿意承担的事', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 0.45, fill: { color: TH.primary } });
    s.addText('我承诺', { x: 0.7, y: 1.7, w: 2, h: 0.45, fontSize: 12, fontFace: CN, color: TH.white, bold: true, valign: 'middle' });
    s.addText('____________________  ·  动作要小到不可能失败', { x: 2.7, y: 1.7, w: 6.8, h: 0.45, fontSize: 11, fontFace: CN, color: TH.white, valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.15, w: 9, h: 0.45, fill: { color: TH.accent } });
    s.addText('在 ___ 项目中', { x: 0.7, y: 2.15, w: 2, h: 0.45, fontSize: 12, fontFace: CN, color: TH.white, bold: true, valign: 'middle' });
    s.addText('____________________  ·  具体到场景', { x: 2.7, y: 2.15, w: 6.8, h: 0.45, fontSize: 11, fontFace: CN, color: TH.white, valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.6, w: 9, h: 0.45, fill: { color: TH.sage } });
    s.addText('30 天时间窗口', { x: 0.7, y: 2.6, w: 2, h: 0.45, fontSize: 12, fontFace: CN, color: TH.white, bold: true, valign: 'middle' });
    s.addText('____________________  ·  30 天决定做不做', { x: 2.7, y: 2.6, w: 6.8, h: 0.45, fontSize: 11, fontFace: CN, color: TH.white, valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.05, w: 9, h: 0.45, fill: { color: TH.light2 } });
    s.addText('用 ___ 指标检验', { x: 0.7, y: 3.05, w: 2, h: 0.45, fontSize: 12, fontFace: CN, color: TH.primary, bold: true, valign: 'middle' });
    s.addText('____________________  ·  指标要可观察', { x: 2.7, y: 3.05, w: 6.8, h: 0.45, fontSize: 11, fontFace: CN, color: TH.primary, valign: 'middle' });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.7, w: 9, h: 1.2, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addText('签字', { x: 0.7, y: 3.8, w: 2, h: 0.4, fontSize: 14, fontFace: CN, color: TH.accent, bold: true });
    s.addText('姓名：____________', { x: 0.7, y: 4.25, w: 2.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('日期：____________', { x: 3.4, y: 4.25, w: 2.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('见证人：____________', { x: 6.1, y: 4.25, w: 3, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    foot(s, pres, '整合 · 承诺', '56 / ~120'); badge(s, pres, 56);
  }

  // 57-60: 30/60/90 节奏
  function m6_03() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('30 天 · 完成 1 次小实验', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('在 30 天内完成承诺卡上的 1 个小实验', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 3, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addText('任务', { x: 0.7, y: 1.85, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('完成承诺卡上的 1 个小实验', { x: 2.2, y: 1.85, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('自评', { x: 0.7, y: 2.3, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('用 T02 重新打分 6 维度', { x: 2.2, y: 2.3, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('提交', { x: 0.7, y: 2.75, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true });
    s.addText('30 天实验记录 1 份', { x: 2.2, y: 2.75, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('评估 3 问', { x: 0.7, y: 3.3, w: 2, h: 0.4, fontSize: 14, fontFace: CN, color: TH.accent, bold: true });
    s.addText('· 我能说出 1 个具体行为变化吗？', { x: 0.9, y: 3.7, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 这个变化能用 1 个数字描述吗？', { x: 0.9, y: 4.0, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 我有重新启动 1 个 HMW 吗？', { x: 0.9, y: 4.3, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('📌 数字 = 可信度 · 没有数字 = 感受', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '整合 · 30 天回看', '57 / ~120'); badge(s, pres, 57);
  }

  function m6_04() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('60 天 · 形成自己的节拍', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 28, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('选 1 个轻量应用坚持 · 团队每月 1 次 HMW 分享', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 3, fill: { color: TH.white }, line: { color: TH.sage, width: 1 } });
    s.addText('个人', { x: 0.7, y: 1.85, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.sage, bold: true });
    s.addText('选 1 个轻量应用坚持 30 天', { x: 2.2, y: 1.85, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('团队', { x: 0.7, y: 2.3, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.sage, bold: true });
    s.addText('每月 1 次 HMW 分享会', { x: 2.2, y: 2.3, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('管理者', { x: 0.7, y: 2.75, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.sage, bold: true });
    s.addText('1 对 1 辅导 1 次', { x: 2.2, y: 2.75, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('评估 2 问', { x: 0.7, y: 3.3, w: 2, h: 0.4, fontSize: 14, fontFace: CN, color: TH.sage, bold: true });
    s.addText('· 我有没有"不做什么"的勇气？', { x: 0.9, y: 3.7, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 团队有没有人开始用我的方法？', { x: 0.9, y: 4.0, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 教别人 = 真掌握', { x: 0.9, y: 4.3, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary, italic: true });
    s.addText('📌 节拍 = 每周 1 次观察 · 每月 1 次 HMW · 每季 1 次实验', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '整合 · 60 天回看', '58 / ~120'); badge(s, pres, 58);
  }

  function m6_05() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('90 天 · 看见行为 / 业务变化', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('用具体数据（不是感受）衡量 · 团队 / 上级 1 次汇报', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 3, fill: { color: TH.white }, line: { color: TH.primary, width: 1 } });
    s.addText('任务', { x: 0.7, y: 1.85, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, bold: true });
    s.addText('用 T24 完整旅程记录回看', { x: 2.2, y: 1.85, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('评估', { x: 0.7, y: 2.3, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, bold: true });
    s.addText('用具体数据（不是感受）', { x: 2.2, y: 2.3, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('呈现', { x: 0.7, y: 2.75, w: 1.5, h: 0.4, fontSize: 12, fontFace: CN, color: TH.primary, bold: true });
    s.addText('团队 / 上级 1 次汇报', { x: 2.2, y: 2.75, w: 7, h: 0.4, fontSize: 13, fontFace: CN, color: TH.primary });
    s.addText('看见 vs 没看见', { x: 0.7, y: 3.3, w: 3, h: 0.4, fontSize: 14, fontFace: CN, color: TH.accent, bold: true });
    s.addText('· 我能说出 1 个具体行为变化吗？', { x: 0.9, y: 3.7, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 这个变化能用 1 个数字描述吗？', { x: 0.9, y: 4.0, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('· 团队有没有人开始用我的方法？', { x: 0.9, y: 4.3, w: 8.4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary });
    s.addText('📌 3 个时间窗口都"没有" = 回去看 T22 是不是写得太模糊', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '整合 · 90 天回看', '59 / ~120'); badge(s, pres, 59);
  }

  // 60-65: 工具卡合集回顾
  function tools_overview() {
    const s = pres.addSlide();
    s.background = { color: TH.bg };
    s.addText('24 张工具表单 · 工具地图', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 26, fontFace: CN, color: TH.primary, bold: true });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
    s.addText('M2 → M3 → M4 → M5 → M6 全程', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.secondary, italic: true });
    const tools = [
      ['T01', '场景卡', TH.accent],
      ['T02', '出发点自评', TH.accent],
      ['T03', '初始诊断单', TH.accent],
      ['T04', 'AI 时代图谱', TH.sage],
      ['T05', '情境访谈', TH.sage],
      ['T06', 'AI 分工契约', TH.sage],
      ['T07', '感知计划', TH.sage],
      ['T08', '洞见改造', TH.sage],
      ['T09', '信号归集', TH.primary],
      ['T10', '优先矩阵', TH.primary],
      ['T11', 'AI 偏差自检', TH.primary],
      ['T12', '洞见提炼', TH.primary],
    ];
    tools.forEach((t, i) => {
      const col = i % 4, row = Math.floor(i / 4);
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + col * 2.3, y: 1.7 + row * 1, w: 2.2, h: 0.9, fill: { color: TH.white }, line: { color: t[2], width: 1 } });
      s.addText(t[0], { x: 0.5 + col * 2.3, y: 1.75 + row * 1, w: 2.2, h: 0.35, fontSize: 14, fontFace: EN, color: t[2], bold: true, align: 'center' });
      s.addText(t[1], { x: 0.5 + col * 2.3, y: 2.1 + row * 1, w: 2.2, h: 0.4, fontSize: 11, fontFace: CN, color: TH.primary, align: 'center' });
    });
    const tools2 = [
      ['T13', '视角阶梯', TH.primary],
      ['T14', 'HMW 定义', TH.primary],
      ['T15', '发散矩阵', TH.primary],
      ['T16', '人机共创', TH.primary],
      ['T17', '三维矩阵', TH.primary],
      ['T18', '叙事原型', TH.primary],
      ['T19', '验证对话', TH.accent],
      ['T20', '反馈摘要', TH.accent],
      ['T21', '任务旅程', TH.accent],
      ['T22', '承诺卡', TH.sage],
      ['T23', '日常轻量', TH.sage],
      ['T24', '完整旅程', TH.sage],
    ];
    tools2.forEach((t, i) => {
      const col = i % 4, row = Math.floor(i / 4);
      s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + col * 2.3, y: 3.85 + row * 0.5, w: 2.2, h: 0.45, fill: { color: TH.bg }, line: { color: t[2], width: 0.5 } });
      s.addText(t[0] + ' · ' + t[1], { x: 0.5 + col * 2.3, y: 3.85 + row * 0.5, w: 2.2, h: 0.45, fontSize: 10, fontFace: CN, color: t[2], bold: true, align: 'center', valign: 'middle' });
    });
    s.addText('📌 24 张按模块顺序使用 · 配合教学文档走完一个完整创新循环', { x: 0.5, y: 4.95, w: 9, h: 0.2, fontSize: 9, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
    foot(s, pres, '整合 · 工具全图', '60 / ~120'); badge(s, pres, 60);
  }

  // 61. 致谢 / 结语
  function closing() {
    const s = pres.addSlide();
    s.background = { color: TH.primary };
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: TH.primary } });
    s.addText('YINGWEI®', { x: 0.5, y: 0.4, w: 9, h: 0.4, fontSize: 12, fontFace: EN, color: TH.light, charSpacing: 6 });
    s.addShape(pres.shapes.LINE, { x: 0.5, y: 1.0, w: 1.5, h: 0, line: { color: TH.accent, width: 2 } });
    s.addText('创新不是天赋', { x: 0.5, y: 1.5, w: 9, h: 0.8, fontSize: 48, fontFace: CN, color: TH.white, bold: true });
    s.addText('是方法 · 是节拍 · 是 30 天的坚持', { x: 0.5, y: 2.4, w: 9, h: 0.6, fontSize: 26, fontFace: CN, color: TH.light });
    s.addShape(pres.shapes.LINE, { x: 0.5, y: 3.2, w: 1.5, h: 0, line: { color: TH.accent, width: 2 } });
    s.addText('把今天的方法带到明天的工作里。', { x: 0.5, y: 3.4, w: 9, h: 0.5, fontSize: 20, fontFace: CN, color: TH.white });
    s.addText('把方法变成习惯。', { x: 0.5, y: 3.9, w: 9, h: 0.5, fontSize: 20, fontFace: CN, color: TH.white });
    s.addText('把习惯变成能力。', { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 20, fontFace: CN, color: TH.accent, bold: true });
    s.addText('© 2026 竞越 · 创新学院', { x: 0.5, y: 5.2, w: 9, h: 0.3, fontSize: 10, fontFace: CN, color: TH.light, italic: true });
  }

  return [
    m3_div, m3_01, m3_02, m3_03, m3_04, m3_05, m3_06, m3_07, m3_08, m3_09,
    m4_div, m4_01, m4_02, m4_03, m4_04, m4_05, m4_06, m4_07,
    m5_div, m5_01, m5_02, m5_03, m5_04, m5_05, m5_06, m5_07, m5_08, m5_09,
    m6_div, m6_01, m6_02, m6_03, m6_04, m6_05, tools_overview, closing
  ];
}

module.exports = { makeSlidersP3 };
