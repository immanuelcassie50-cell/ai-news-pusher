// slide-09.js - 为什么"AI调薪"特别容易引发不信任（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 9,
  title: '为什么"AI调薪"特别容易引发不信任'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('为什么"AI调薪"特别容易引发不信任', {
    x: 0.5,
    y: 0.35,
    w: 9,
    h: 0.6,
    fontSize: 28,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 行为经济学概念卡片 ==========
  const conceptY = 1.05;
  const conceptHeight = 0.95;

  // 概念卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: conceptY,
    w: 9,
    h: conceptHeight,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1.5 },
    rectRadius: 0.1
  });

  // 左侧强调条
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: conceptY,
    w: 0.12,
    h: conceptHeight,
    fill: { color: theme.primary }
  });

  // 概念标题
  slide.addText('行为经济学概念：算法厌恶（Algorithm Aversion）', {
    x: 0.8,
    y: conceptY + 0.1,
    w: 8.5,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 概念说明
  slide.addText([
    { text: '人们更愿意接受人工决策的错误，更难以接受算法决策的错误', options: { breakLine: true } },
    { text: '即使算法明显比人工更准确，这种倾向依然存在' }
  ], {
    x: 0.8,
    y: conceptY + 0.45,
    w: 8.5,
    h: 0.45,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'top'
  });

  // ========== 两个原因卡片布局 ==========
  const cardY = 2.15;
  const cardWidth = 4.35;
  const cardHeight = 2.5;
  const cardGap = 0.3;
  const leftCardX = 0.5;
  const rightCardX = leftCardX + cardWidth + cardGap;

  // ---------- 原因一卡片 ----------
  // 卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX,
    y: cardY,
    w: cardWidth,
    h: cardHeight,
    fill: { color: 'FFFFFF' },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  // 顶部色条
  slide.addShape(pres.ShapeType.rect, {
    x: leftCardX,
    y: cardY,
    w: cardWidth,
    h: 0.08,
    fill: { color: theme.accent }
  });

  // 原因一标题
  slide.addText('原因一：算法不透明让人感觉"无法申辩"', {
    x: leftCardX + 0.2,
    y: cardY + 0.2,
    w: cardWidth - 0.4,
    h: 0.4,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 人工决策对比
  slide.addText('人工决策', {
    x: leftCardX + 0.2,
    y: cardY + 0.65,
    w: 1.0,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX + 1.25,
    y: cardY + 0.65,
    w: 2.9,
    h: 0.28,
    fill: { color: theme.light, transparency: 60 },
    rectRadius: 0.05
  });

  slide.addText('觉得不公平，可以找老板吵一架，可以哭，可以闹，可以威胁要走。老板可能会心软，可能会改', {
    x: leftCardX + 1.3,
    y: cardY + 0.65,
    w: 2.8,
    h: 0.28,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // 算法决策对比
  slide.addText('算法决策', {
    x: leftCardX + 0.2,
    y: cardY + 1.0,
    w: 1.0,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX + 1.25,
    y: cardY + 1.0,
    w: 2.9,
    h: 0.28,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.05
  });

  slide.addText('跟谁吵？系统不会心软，不会解释，不会因为你威胁而改变', {
    x: leftCardX + 1.3,
    y: cardY + 1.0,
    w: 2.8,
    h: 0.28,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // 员工感受
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX + 0.2,
    y: cardY + 1.4,
    w: cardWidth - 0.4,
    h: 0.5,
    fill: { color: theme.accent, transparency: 88 },
    rectRadius: 0.06
  });

  slide.addText('员工感受', {
    x: leftCardX + 0.3,
    y: cardY + 1.45,
    w: 0.8,
    h: 0.18,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  slide.addText('被锁在一个封闭的系统里，没有入口，没有出口', {
    x: leftCardX + 0.3,
    y: cardY + 1.65,
    w: cardWidth - 0.5,
    h: 0.2,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // 底部装饰点
  slide.addShape(pres.ShapeType.ellipse, {
    x: leftCardX + 0.3,
    y: cardY + 2.15,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.accent }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: leftCardX + 0.45,
    y: cardY + 2.15,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: leftCardX + 0.6,
    y: cardY + 2.15,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });

  // ---------- 原因二卡片 ----------
  // 卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightCardX,
    y: cardY,
    w: cardWidth,
    h: cardHeight,
    fill: { color: 'FFFFFF' },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  // 顶部色条
  slide.addShape(pres.ShapeType.rect, {
    x: rightCardX,
    y: cardY,
    w: cardWidth,
    h: 0.08,
    fill: { color: theme.primary }
  });

  // 原因二标题
  slide.addText('原因二：算法不承认"例外情况"', {
    x: rightCardX + 0.2,
    y: cardY + 0.2,
    w: cardWidth - 0.4,
    h: 0.4,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 人的判断对比
  slide.addText('人的判断', {
    x: rightCardX + 0.2,
    y: cardY + 0.65,
    w: 1.0,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: rightCardX + 1.25,
    y: cardY + 0.65,
    w: 2.9,
    h: 0.28,
    fill: { color: theme.light, transparency: 60 },
    rectRadius: 0.05
  });

  slide.addText('老板可以说"你这个情况特殊，我特批了"', {
    x: rightCardX + 1.3,
    y: cardY + 0.65,
    w: 2.8,
    h: 0.28,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // 算法讲规则对比
  slide.addText('算法讲规则', {
    x: rightCardX + 0.2,
    y: cardY + 1.0,
    w: 1.0,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: rightCardX + 1.25,
    y: cardY + 1.0,
    w: 2.9,
    h: 0.28,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.05
  });

  slide.addText('例外申请要走另一个流程', {
    x: rightCardX + 1.3,
    y: cardY + 1.0,
    w: 2.8,
    h: 0.28,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // 员工担心
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightCardX + 0.2,
    y: cardY + 1.4,
    w: cardWidth - 0.4,
    h: 0.5,
    fill: { color: theme.primary, transparency: 88 },
    rectRadius: 0.06
  });

  slide.addText('员工担心', {
    x: rightCardX + 0.3,
    y: cardY + 1.45,
    w: 0.8,
    h: 0.18,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  slide.addText('如果我有特殊情况，系统能不能理解我', {
    x: rightCardX + 0.3,
    y: cardY + 1.65,
    w: cardWidth - 0.5,
    h: 0.2,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // 底部装饰点
  slide.addShape(pres.ShapeType.ellipse, {
    x: rightCardX + 0.3,
    y: cardY + 2.15,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.primary }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: rightCardX + 0.45,
    y: cardY + 2.15,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: rightCardX + 0.6,
    y: cardY + 2.15,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });

  // ========== 关键洞察底部 ==========
  const insightY = 4.8;

  // 背景条
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: insightY,
    w: 9,
    h: 0.55,
    fill: { color: theme.accent, transparency: 88 },
    line: { color: theme.accent, width: 1.5 },
    rectRadius: 0.08
  });

  // 左侧强调标记
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: insightY,
    w: 0.12,
    h: 0.55,
    fill: { color: theme.accent }
  });

  // 关键洞察文字
  slide.addText([
    { text: '核心洞察  ', options: { bold: true, color: theme.accent } },
    { text: '员工真正担心的不是"AI会不会算错"，而是"如果我有特殊情况，系统能不能理解我"', options: { bold: false, color: theme.secondary } }
  ], {
    x: 0.8,
    y: insightY,
    w: 8.5,
    h: 0.55,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    align: 'left',
    valign: 'middle'
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
