// compile.js — 英为®课程 PPT · 完整 ~120 张
const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '英为® 创新思维与实用工具';
pres.author = '竞越 · 创新学院';

// === 主题色 ===
const TH = {
  primary:   '1A1A1A',  secondary: '6B6358',  accent:    'D4361F',
  light:     'F2C75C',  bg:        'F5F1E8',  sage:      '5C8068',
  pink:      'FBE9E3',  white:     'FFFFFF',  light2:    'EBE4D2',
};
const CN = 'Microsoft YaHei';
const EN = 'Arial';

// === 通用页码徽章 ===
function badge(s, n) {
  s.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: TH.accent }
  });
  s.addText(String(n).padStart(2, '0'), {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: EN, color: TH.white, bold: true,
    align: 'center', valign: 'middle'
  });
}

// === 通用页脚 ===
function foot(s, left, right) {
  s.addShape(pres.shapes.LINE, {
    x: 0.4, y: 5.15, w: 8.6, h: 0,
    line: { color: TH.secondary, width: 0.5 }
  });
  s.addText(left, {
    x: 0.4, y: 5.2, w: 5, h: 0.3,
    fontSize: 9, fontFace: CN, color: TH.secondary, italic: true
  });
  s.addText(right, {
    x: 5.4, y: 5.2, w: 3.5, h: 0.3,
    fontSize: 9, fontFace: EN, color: TH.secondary, italic: true,
    align: 'right'
  });
}

// =================================================================
// Part 1: 封面 / 一句话 / 为什么 / 你将带走 / 6 项能力 / 感·构·验 / 问·解·造 / Day 1&2 / 议程
// =================================================================
function slide01() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.5, fill: { color: TH.primary } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.125, w: 10, h: 0.5, fill: { color: TH.primary } });
  s.addText('YINGWEI®', { x: 0.5, y: 0.1, w: 9, h: 0.3, fontSize: 10, fontFace: EN, color: TH.light, charSpacing: 6 });
  s.addText('INNOVATION  ACADEMY', { x: 0.5, y: 5.27, w: 9, h: 0.3, fontSize: 8, fontFace: EN, color: TH.light, charSpacing: 8 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.5, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('英为®', { x: 0.5, y: 1.7, w: 9, h: 1.5, fontSize: 120, fontFace: CN, color: TH.primary, bold: true });
  s.addText('创新思维与实用工具', { x: 0.5, y: 3.1, w: 9, h: 0.7, fontSize: 32, fontFace: CN, color: TH.primary, bold: true });
  s.addText('INNOVATION  THINKING  &  PRACTICAL  TOOLS', { x: 0.5, y: 3.8, w: 9, h: 0.4, fontSize: 14, fontFace: EN, color: TH.secondary, charSpacing: 4 });
  s.addShape(pres.shapes.LINE, { x: 0.5, y: 4.3, w: 1.5, h: 0, line: { color: TH.accent, width: 1 } });
  s.addText('AI 时代 · 为创新者而设的 6 项能力 · 2 天 12 小时', { x: 0.5, y: 4.4, w: 9, h: 0.4, fontSize: 14, fontFace: CN, color: TH.accent, italic: true });
}

function slide02() {
  const s = pres.addSlide();
  s.background = { color: TH.primary };
  s.addText('一句话', { x: 0.5, y: 0.5, w: 9, h: 0.4, fontSize: 12, fontFace: CN, color: TH.light, charSpacing: 8 });
  s.addShape(pres.shapes.LINE, { x: 0.5, y: 1.0, w: 1, h: 0, line: { color: TH.accent, width: 2 } });
  s.addText('这个时代的创新者', { x: 0.5, y: 1.7, w: 9, h: 0.8, fontSize: 40, fontFace: CN, color: TH.white, bold: true });
  s.addText('不是更聪明的人', { x: 0.5, y: 2.5, w: 9, h: 0.8, fontSize: 40, fontFace: CN, color: TH.white, bold: true });
  s.addText('是更会提问 · 更会判断 · 更会做轻量实验的人', { x: 0.5, y: 3.4, w: 9, h: 0.8, fontSize: 28, fontFace: CN, color: TH.accent, bold: true, italic: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.4, fill: { color: TH.accent } });
  s.addText('英为® = 把 AI 时代的创新方法 · 装进你的工作里', { x: 0.5, y: 4.5, w: 9, h: 0.4, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
}

function slide03() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addText('为什么是现在', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 32, fontFace: CN, color: TH.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('3 个不容忽视的变化', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 14, fontFace: CN, color: TH.secondary, italic: true });
  const chs = [
    ['1', '能力 vs 工作', 'AI 接管了执行层工作 / 留给人 = 提问 + 判断 + 实验'],
    ['2', '速度 vs 验证', 'AI 把方案从 3 周压到 3 小时 / 但真问题没变：可观察的实验结果'],
    ['3', '知识 vs 训练', 'AI 时代不差知识 / 差的是把方法变成节拍 = 持续轻量训练'],
  ];
  chs.forEach((c, i) => {
    const y = 1.7 + i * 1.1;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 1, h: 1, fill: { color: TH.accent } });
    s.addText(c[0], { x: 0.5, y, w: 1, h: 1, fontSize: 36, fontFace: EN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText(c[1], { x: 1.7, y: y + 0.1, w: 7.5, h: 0.4, fontSize: 16, fontFace: CN, color: TH.primary, bold: true });
    s.addText(c[2], { x: 1.7, y: y + 0.5, w: 7.5, h: 0.4, fontSize: 11, fontFace: CN, color: TH.secondary });
  });
  s.addText('📌 时代的 3 大变化 = 我们要补的 3 大能力', { x: 0.5, y: 4.95, w: 9, h: 0.2, fontSize: 10, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
  foot(s, 'AI 时代的 3 大变化', '03 / ~120'); badge(s, 3);
}

function slide04() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addText('你将带走什么', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 32, fontFace: CN, color: TH.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('3 套 · 24 张工具 · 6 项能力', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 14, fontFace: CN, color: TH.secondary, italic: true });
  const ts = [
    ['感 · 构 · 验', 'SENSE · BUILD · VALIDATE', '看清 / 想到 / 验证', '创新循环图', TH.accent],
    ['问 · 解 · 造', 'INQUIRE · DECODE · CREATE', '提问 / 拆解 / 生成', '工具地图', TH.sage],
    ['6 项能力', '6 INNOVATION CAPABILITIES', '人机协同的方法', '能力雷达', TH.primary],
  ];
  ts.forEach((t, i) => {
    const x = 0.5 + i * 3.05;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.9, h: 3, fill: { color: TH.white }, line: { color: t[4], width: 2 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.9, h: 0.6, fill: { color: t[4] } });
    s.addText(t[0], { x, y: 1.7, w: 2.9, h: 0.6, fontSize: 22, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText(t[1], { x, y: 2.5, w: 2.9, h: 0.3, fontSize: 9, fontFace: EN, color: t[4], charSpacing: 4, align: 'center' });
    s.addText(t[2], { x: x + 0.2, y: 3.0, w: 2.5, h: 0.6, fontSize: 12, fontFace: CN, color: TH.primary, align: 'center' });
    s.addText(t[3], { x: x + 0.2, y: 4.0, w: 2.5, h: 0.5, fontSize: 11, fontFace: CN, color: t[4], align: 'center', italic: true });
  });
  s.addText('📌 3 张图 + 24 张工具 + 6 项能力 = 完整可带走的创新体系', { x: 0.5, y: 4.85, w: 9, h: 0.2, fontSize: 10, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
  foot(s, '你将带走什么', '04 / ~120'); badge(s, 4);
}

function slide05() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addText('6 项创新者能力', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 30, fontFace: CN, color: TH.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('深度感知 / 问题聚焦 / 方向判断 / 快速验证 / 人机协同 / 叙事影响', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.secondary, italic: true });
  const cs = [
    ['深度感知', 'SENSE', '看见 AI 看不见的', TH.accent],
    ['问题聚焦', 'FOCUS', '挖到 L4/L5 真问题', TH.accent],
    ['方向判断', 'JUDGE', '战略对齐 + 价值密度', TH.sage],
    ['快速验证', 'VALIDATE', '最小代价实验', TH.sage],
    ['人机协同', 'CO-CREATE', 'AI 提议 + 人判断', TH.primary],
    ['叙事影响', 'NARRATE', '3 分钟讲完决策', TH.primary],
  ];
  cs.forEach((c, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + col * 3.05, y: 1.7 + row * 1.55, w: 2.9, h: 1.45, fill: { color: TH.white }, line: { color: c[3], width: 1.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + col * 3.05, y: 1.7 + row * 1.55, w: 2.9, h: 0.5, fill: { color: c[3] } });
    s.addText(c[0], { x: 0.5 + col * 3.05, y: 1.7 + row * 1.55, w: 2.9, h: 0.5, fontSize: 16, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText(c[1], { x: 0.5 + col * 3.05, y: 2.2 + row * 1.55, w: 2.9, h: 0.3, fontSize: 9, fontFace: EN, color: c[3], charSpacing: 4, align: 'center' });
    s.addText(c[2], { x: 0.5 + col * 3.05, y: 2.55 + row * 1.55, w: 2.9, h: 0.5, fontSize: 12, fontFace: CN, color: TH.primary, align: 'center', italic: true });
  });
  s.addText('📌 这 6 项能力 = 课程地图 · 每 90 分钟深度练习 1 项', { x: 0.5, y: 4.85, w: 9, h: 0.2, fontSize: 10, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
  foot(s, '6 项能力 · AI 时代补什么', '05 / ~120'); badge(s, 5);
}

function slide06() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addText('感 · 构 · 验 创新循环', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 30, fontFace: CN, color: TH.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('SENSE · BUILD · VALIDATE · 3 阶段循环', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 14, fontFace: CN, color: TH.secondary, italic: true });
  const cs = [
    ['感', 'SENSE', '看清 · 挖到真问题', TH.accent, 1.2],
    ['构', 'BUILD', '想方向 · 锁 HMW', TH.sage, 2.4],
    ['验', 'VALIDATE', '做小实验 · 看结果', TH.primary, 1.2],
  ];
  cs.forEach((c, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 9, h: 0.9, fill: { color: c[3] } });
    s.addText(c[0] + ' · ' + c[1], { x: 0.5, y: 1.7, w: 9, h: 0.9, fontSize: 36, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText(c[2], { x: 0.5, y: 2.65, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: c[3], bold: true, align: 'center' });
  });
  s.addShape(pres.shapes.LINE, { x: 1, y: 3.2, w: 8, h: 0, line: { color: TH.accent, width: 2 } });
  s.addText('← 回到 "感" · 真问题没看清 = 一切都白搭', { x: 0.5, y: 3.3, w: 9, h: 0.3, fontSize: 12, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
  s.addText('模块 1 破局', { x: 0.5, y: 3.8, w: 2.9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.secondary, align: 'center' });
  s.addText('模块 2-4 感上下 / 构上下', { x: 3.55, y: 3.8, w: 2.9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.secondary, align: 'center' });
  s.addText('模块 5 验', { x: 6.6, y: 3.8, w: 2.9, h: 0.3, fontSize: 11, fontFace: CN, color: TH.secondary, align: 'center' });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 9, h: 0.5, fill: { color: TH.pink } });
  s.addText('📌 创新不是线性 = 看到一半发现走偏了 · 立即回到 "感"', { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
  foot(s, '创新循环 · 感·构·验', '06 / ~120'); badge(s, 6);
}

function slide07() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addText('问 · 解 · 造 工具地图', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 30, fontFace: CN, color: TH.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('INQUIRE · DECODE · CREATE · 24 张工具', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 14, fontFace: CN, color: TH.secondary, italic: true });
  const ts = [
    ['问', 'INQUIRE', 'T01-T08 · 看清场景', TH.accent],
    ['解', 'DECODE', 'T09-T14 · 锁定问题', TH.sage],
    ['造', 'CREATE', 'T15-T24 · 生成 + 验证', TH.primary],
  ];
  ts.forEach((t, i) => {
    const x = 0.5 + i * 3.05;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.9, h: 3, fill: { color: TH.white }, line: { color: t[3], width: 2 } });
    s.addShape(pres.shapes.OVAL, { x: x + 0.9, y: 2.0, w: 1.1, h: 1.1, fill: { color: t[3] } });
    s.addText(t[0], { x: x + 0.9, y: 2.0, w: 1.1, h: 1.1, fontSize: 48, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText(t[1], { x, y: 3.3, w: 2.9, h: 0.3, fontSize: 11, fontFace: EN, color: t[3], charSpacing: 6, align: 'center', bold: true });
    s.addText(t[2], { x, y: 3.7, w: 2.9, h: 0.3, fontSize: 13, fontFace: CN, color: TH.primary, align: 'center' });
    s.addShape(pres.shapes.LINE, { x: x + 0.5, y: 4.2, w: 1.9, h: 0, line: { color: t[3], width: 1.5 } });
  });
  s.addText('📌 24 张工具 = 24 个具体动作 · 不是 24 个 PPT 概念', { x: 0.5, y: 4.85, w: 9, h: 0.2, fontSize: 10, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
  foot(s, '工具地图 · 问·解·造', '07 / ~120'); badge(s, 7);
}

function slide08() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addText('Day 1 / Day 2 · 议程', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 30, fontFace: CN, color: TH.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('2 天 12 小时 · 6 模块 90 分钟循环', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 14, fontFace: CN, color: TH.secondary, italic: true });
  // Day 1
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 3, fill: { color: TH.white }, line: { color: TH.accent, width: 2 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 4.4, h: 0.5, fill: { color: TH.accent } });
  s.addText('DAY 1 · 看清真问题', { x: 0.5, y: 1.7, w: 4.4, h: 0.5, fontSize: 16, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
  s.addText('360 分钟', { x: 0.5, y: 2.3, w: 4.4, h: 0.3, fontSize: 11, fontFace: EN, color: TH.accent, align: 'center' });
  const d1 = [
    '破局 · 60 min',
    '感上 · 真实观察 · 90 min',
    '午餐 · 60 min',
    '感上续 · 情境访谈 · 90 min',
    '感下 · 5 WHY · 60 min',
  ];
  d1.forEach((d, i) => s.addText(d, { x: 0.7, y: 2.7 + i * 0.35, w: 4, h: 0.3, fontSize: 12, fontFace: CN, color: TH.primary }));
  // Day 2
  s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 3, fill: { color: TH.white }, line: { color: TH.sage, width: 2 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.7, w: 4.4, h: 0.5, fill: { color: TH.sage } });
  s.addText('DAY 2 · 锁定 + 验证', { x: 5.1, y: 1.7, w: 4.4, h: 0.5, fontSize: 16, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
  s.addText('390 分钟', { x: 5.1, y: 2.3, w: 4.4, h: 0.3, fontSize: 11, fontFace: EN, color: TH.sage, align: 'center' });
  const d2 = [
    '感下续 · 视角阶梯 · 30 min',
    '构上 · HMW + 发散 · 90 min',
    '午餐 · 60 min',
    '构下·验 · MVP 实验 · 90 min',
    '整合 · 30/60/90 承诺 · 60 min',
    '回顾 · 60 min',
  ];
  d2.forEach((d, i) => s.addText(d, { x: 5.3, y: 2.7 + i * 0.32, w: 4, h: 0.3, fontSize: 11, fontFace: CN, color: TH.primary }));
  s.addText('📌 2 天 12 小时 · 5 个完整 90 分钟循环', { x: 0.5, y: 4.85, w: 9, h: 0.2, fontSize: 10, fontFace: CN, color: TH.accent, italic: true, align: 'center' });
  foot(s, 'Day 1 / Day 2', '08 / ~120'); badge(s, 8);
}

function slide09() {
  const s = pres.addSlide();
  s.background = { color: TH.bg };
  s.addText('今天 6 小时议程', { x: 0.5, y: 0.4, w: 9, h: 0.5, fontSize: 30, fontFace: CN, color: TH.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.95, w: 0.4, h: 0.1, fill: { color: TH.accent } });
  s.addText('如你是只来 1 天 · 这 6 小时顺序是设计好的', { x: 0.5, y: 1.2, w: 9, h: 0.3, fontSize: 14, fontFace: CN, color: TH.secondary, italic: true });
  const as = [
    ['破局', '1h', '看清 + 立场', 'M0 → M1'],
    ['感上', '2h', '观察 + 访谈', 'M2 看见 · M3 听清'],
    ['感下', '2h', '聚焦 + 判断', 'M4 5 WHY · M5 视角'],
    ['构上', '2h', 'HMW + 方向', 'M6 HMW · M7 矩阵'],
    ['构下·验', '1h', 'MVP 实验', 'M8 假销售 · M9 实验'],
  ];
  as.forEach((a, i) => {
    const x = 0.5 + i * 1.85;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 1.7, h: 2.5, fill: { color: TH.white }, line: { color: TH.accent, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 1.7, h: 0.5, fill: { color: TH.accent } });
    s.addText(a[0], { x, y: 1.7, w: 1.7, h: 0.5, fontSize: 14, fontFace: CN, color: TH.white, bold: true, align: 'center', valign: 'middle' });
    s.addText(a[1], { x, y: 2.3, w: 1.7, h: 0.4, fontSize: 18, fontFace: EN, color: TH.accent, bold: true, align: 'center' });
    s.addText(a[2], { x, y: 2.7, w: 1.7, h: 0.6, fontSize: 10, fontFace: CN, color: TH.primary, align: 'center' });
    s.addText(a[3], { x, y: 3.3, w: 1.7, h: 0.4, fontSize: 9, fontFace: EN, color: TH.secondary, align: 'center' });
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.4, fill: { color: TH.pink } });
  s.addText('📌 不要跳序 · 感没做完就做构 = 在错的问题上投入时间', { x: 0.5, y: 4.4, w: 9, h: 0.4, fontSize: 12, fontFace: CN, color: TH.accent, bold: true, align: 'center', valign: 'middle' });
  foot(s, '6 大模块 · 完整闭环', '09 / ~120'); badge(s, 9);
}

// =================================================================
// Part 2: 模块 1 破局 + 模块 2 感上
// =================================================================
const part2 = require('./part2.js');
const part3 = require('./part3.js');

const all = [
  slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09,
  ...part2.makeSliders(pres),
  ...part3.makeSlidersP3(pres),
];

console.log('Compiling ' + all.length + ' slides...');
all.forEach((fn, i) => {
  try {
    fn();
  } catch (e) {
    console.error('Slide ' + (i + 1) + ' failed: ' + e.message);
  }
});

const out = 'D:/2026年课程/竞越/英为®：创新思维与实用工具/完整课程包/05_授课PPT/英为®_授课PPT.pptx';
pres.writeFile({ fileName: out }).then(() => {
  console.log('Wrote ' + out);
}).catch(e => console.error('Write failed: ' + e.message));

module.exports = { all, pres, TH, CN, EN };
