// slide-14.js - 模块一要点回顾（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 14,
  title: '模块一要点回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('模块一要点回顾', {
    x: 0.5,
    y: 0.35,
    w: 9,
    h: 0.65,
    fontSize: 32,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 英文副标题 ==========
  slide.addText('MODULE 1 KEY TAKEAWAYS', {
    x: 0.5,
    y: 0.92,
    w: 9,
    h: 0.3,
    fontSize: 11,
    fontFace: 'Arial',
    color: theme.secondary,
    align: 'left',
    valign: 'middle',
    charSpacing: 3
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.28,
    w: 1.0,
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== 三个模块卡片布局 ==========
  const cardStartY = 1.55;
  const cardWidth = 2.9;
  const cardHeight = 2.4;
  const cardGap = 0.15;
  const startX = 0.5;

  // ---------- 模块1: 薪酬决策链演变 ----------
  // 卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: startX,
    y: cardStartY,
    w: cardWidth,
    h: cardHeight,
    fill: { color: theme.light, transparency: 70 },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  // 顶部数字标记
  slide.addShape(pres.ShapeType.roundRect, {
    x: startX + 0.15,
    y: cardStartY + 0.15,
    w: 0.4,
    h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 },
    rectRadius: 0.08
  });

  slide.addText('1', {
    x: startX + 0.15,
    y: cardStartY + 0.15,
    w: 0.4,
    h: 0.4,
    fontSize: 18,
    fontFace: 'Arial',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 模块1标题
  slide.addText('薪酬决策链演变', {
    x: startX + 0.65,
    y: cardStartY + 0.18,
    w: cardWidth - 0.8,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 模块1内容
  slide.addText([
    { text: '从"人决定钱"', options: { breakLine: true } },
    { text: '到"人机共决"', options: { bold: true, color: theme.accent, breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: 'AI参与薪酬决策四个层级', options: { breakLine: true } },
    { text: 'L1 人工主导', options: { breakLine: true } },
    { text: 'L2 AI辅助建议', options: { breakLine: true } },
    { text: 'L3 AI生成+人工审批', options: { breakLine: true } },
    { text: 'L4 AI主导+人工执行', options: {} }
  ], {
    x: startX + 0.2,
    y: cardStartY + 0.65,
    w: cardWidth - 0.35,
    h: 1.65,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'top',
    lineSpaceMult: 1.3
  });

  // ---------- 模块2: 员工担忧四个类型 ----------
  const card2X = startX + cardWidth + cardGap;

  // 卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: card2X,
    y: cardStartY,
    w: cardWidth,
    h: cardHeight,
    fill: { color: theme.light, transparency: 70 },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  // 顶部数字标记
  slide.addShape(pres.ShapeType.roundRect, {
    x: card2X + 0.15,
    y: cardStartY + 0.15,
    w: 0.4,
    h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 },
    rectRadius: 0.08
  });

  slide.addText('2', {
    x: card2X + 0.15,
    y: cardStartY + 0.15,
    w: 0.4,
    h: 0.4,
    fontSize: 18,
    fontFace: 'Arial',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 模块2标题
  slide.addText('员工担忧四个类型', {
    x: card2X + 0.65,
    y: cardStartY + 0.18,
    w: cardWidth - 0.8,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 模块2内容
  slide.addText([
    { text: '算法黑箱 / 尊严担忧', options: { breakLine: true } },
    { text: '公平担忧 / 无能为力担忧', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '深层原因：', options: { bold: true, breakLine: true } },
    { text: '算法厌恶', options: { breakLine: true } },
    { text: '+ 缺乏申辩通道', options: {} }
  ], {
    x: card2X + 0.2,
    y: cardStartY + 0.65,
    w: cardWidth - 0.35,
    h: 1.65,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'top',
    lineSpaceMult: 1.3
  });

  // ---------- 模块3: 管理者三重角色冲突 ----------
  const card3X = card2X + cardWidth + cardGap;

  // 卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: card3X,
    y: cardStartY,
    w: cardWidth,
    h: cardHeight,
    fill: { color: theme.light, transparency: 70 },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  // 顶部数字标记
  slide.addShape(pres.ShapeType.roundRect, {
    x: card3X + 0.15,
    y: cardStartY + 0.15,
    w: 0.4,
    h: 0.4,
    fill: { color: theme.secondary },
    line: { color: theme.secondary, width: 0 },
    rectRadius: 0.08
  });

  slide.addText('3', {
    x: card3X + 0.15,
    y: cardStartY + 0.15,
    w: 0.4,
    h: 0.4,
    fontSize: 18,
    fontFace: 'Arial',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 模块3标题
  slide.addText('管理者三重角色冲突', {
    x: card3X + 0.65,
    y: cardStartY + 0.18,
    w: cardWidth - 0.8,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 模块3内容
  slide.addText([
    { text: '效率执行者', options: { bold: true, breakLine: true } },
    { text: 'vs 信任守门人', options: { breakLine: true } },
    { text: 'vs 为结果负责', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '三个常踩的坑', options: { breakLine: true } },
    { text: '四项新基本功', options: {} }
  ], {
    x: card3X + 0.2,
    y: cardStartY + 0.65,
    w: cardWidth - 0.35,
    h: 1.65,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'top',
    lineSpaceMult: 1.3
  });

  // ========== 核心认知区域 ==========
  const insightY = 4.15;

  // 背景卡片
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: insightY,
    w: 9,
    h: 1.1,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1.5 },
    rectRadius: 0.1
  });

  // 左侧强调条
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: insightY,
    w: 0.12,
    h: 1.1,
    fill: { color: theme.accent }
  });

  // 核心认知标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: insightY + 0.12,
    w: 1.1,
    h: 0.32,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 },
    rectRadius: 0.06
  });

  slide.addText('核心认知', {
    x: 0.8,
    y: insightY + 0.12,
    w: 1.1,
    h: 0.32,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 第一条核心认知
  slide.addText('"AI进入薪酬决策，让这件事从\'人工解释人工决策\'变成了\'人工解释AI决策\'"', {
    x: 2.05,
    y: insightY + 0.1,
    w: 7.3,
    h: 0.4,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 第二条核心认知
  slide.addText('"管理者不能只做效率执行者，还要做信任守门人"', {
    x: 2.05,
    y: insightY + 0.55,
    w: 7.3,
    h: 0.4,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 底部装饰点 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.68,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.86,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.light }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
