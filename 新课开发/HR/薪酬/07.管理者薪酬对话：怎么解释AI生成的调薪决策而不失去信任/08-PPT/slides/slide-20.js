/**
 * Slide 20: 为什么两者都重要
 * Content Page - Explaining why both AI data track and human judgment track are important
 */

const slideConfig = {
  type: 'content',
  index: 20,
  title: '为什么两者都重要'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.055,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("为什么两者都重要", {
    x: 0.5,
    y: 0.2,
    w: 9,
    h: 0.5,
    fontSize: 26,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true
  });

  // Title underline accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 0.72,
    w: 1.8,
    h: 0.025,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("AI数据轨 + 人工判断轨 = 公正且有温度的调薪决策", {
    x: 0.5,
    y: 0.8,
    w: 9,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // === LEFT CARD: AI DATA TRACK ===
  const cardY = 1.3;
  const cardH = 2.0;
  const leftX = 0.5;
  const cardW = 4.3;

  // AI track card background
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: cardY,
    w: cardW,
    h: cardH,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: 'outer', blur: 5, offset: 2, angle: 45, color: '000000', transparency: 88 }
  });

  // AI track header bar
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: cardY,
    w: cardW,
    h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addShape(pres.ShapeType.rect, {
    x: leftX,
    y: cardY + 0.25,
    w: cardW,
    h: 0.2,
    fill: { color: theme.accent }
  });

  // AI track icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: leftX + 0.15,
    y: cardY + 0.1,
    w: 0.28,
    h: 0.28,
    fill: { color: "FFFFFF", transparency: 25 }
  });
  slide.addText("AI", {
    x: leftX + 0.15,
    y: cardY + 0.1,
    w: 0.28,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: "FFFFFF",
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // AI track title
  slide.addText("AI数据轨", {
    x: leftX + 0.5,
    y: cardY + 0.1,
    w: 3.5,
    h: 0.3,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: "FFFFFF",
    bold: true
  });

  // AI track content
  slide.addText([
    { text: "客观性", options: { bold: true, color: theme.accent } },
    { text: "\n基于市场数据，避免主观偏差", options: { color: theme.secondary } },
    { text: "\n\n", options: {} },
    { text: "一致性", options: { bold: true, color: theme.accent } },
    { text: "\n同一标准衡量所有员工", options: { color: theme.secondary } },
    { text: "\n\n", options: {} },
    { text: "透明度", options: { bold: true, color: theme.accent } },
    { text: "\n可追溯的数据来源和计算逻辑", options: { color: theme.secondary } }
  ], {
    x: leftX + 0.25,
    y: cardY + 0.55,
    w: cardW - 0.5,
    h: 1.35,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    valign: 'top'
  });

  // === RIGHT CARD: HUMAN JUDGMENT TRACK ===
  const rightX = 5.2;

  // Human track card background
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightX,
    y: cardY,
    w: cardW,
    h: cardH,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: 'outer', blur: 5, offset: 2, angle: 45, color: '000000', transparency: 88 }
  });

  // Human track header bar
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightX,
    y: cardY,
    w: cardW,
    h: 0.45,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addShape(pres.ShapeType.rect, {
    x: rightX,
    y: cardY + 0.25,
    w: cardW,
    h: 0.2,
    fill: { color: theme.primary }
  });

  // Human track icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: rightX + 0.15,
    y: cardY + 0.1,
    w: 0.28,
    h: 0.28,
    fill: { color: "FFFFFF", transparency: 25 }
  });
  slide.addText("人", {
    x: rightX + 0.15,
    y: cardY + 0.1,
    w: 0.28,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: "FFFFFF",
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Human track title
  slide.addText("人工判断轨", {
    x: rightX + 0.5,
    y: cardY + 0.1,
    w: 3.5,
    h: 0.3,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: "FFFFFF",
    bold: true
  });

  // Human track content
  slide.addText([
    { text: "人性化", options: { bold: true, color: theme.primary } },
    { text: "\n考虑员工个人贡献和特殊情况", options: { color: theme.secondary } },
    { text: "\n\n", options: {} },
    { text: "灵活性", options: { bold: true, color: theme.primary } },
    { text: "\n在规则框架内保留调整空间", options: { color: theme.secondary } },
    { text: "\n\n", options: {} },
    { text: "责任感", options: { bold: true, color: theme.primary } },
    { text: "\n管理者为决策结果负责", options: { color: theme.secondary } }
  ], {
    x: rightX + 0.25,
    y: cardY + 0.55,
    w: cardW - 0.5,
    h: 1.35,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    valign: 'top'
  });

  // === CENTER CONNECTOR ===
  slide.addText("+", {
    x: 4.65,
    y: cardY + 0.7,
    w: 0.7,
    h: 0.5,
    fontSize: 28,
    fontFace: 'Microsoft YaHei',
    color: theme.light,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // === BOTTOM CONCLUSION CARD ===
  const concY = 3.5;

  // Conclusion card background
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: concY,
    w: 9,
    h: 1.3,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.1,
    line: { color: theme.light, width: 1 }
  });

  // Conclusion icon
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.7,
    y: concY + 0.45,
    w: 0.4,
    h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("!", {
    x: 0.7,
    y: concY + 0.45,
    w: 0.4,
    h: 0.4,
    fontSize: 18,
    fontFace: 'Microsoft YaHei',
    color: "FFFFFF",
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // Conclusion title
  slide.addText("为什么两者缺一不可？", {
    x: 1.25,
    y: concY + 0.15,
    w: 4,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true
  });

  // Conclusion content
  slide.addText("只有AI数据轨：冷冰冰的数字，员工觉得被当作数据而非人。\n只有人工判断轨：缺乏依据的判断，员工质疑公平性。\n两者结合：数据支撑说服力，人性赋予温度。", {
    x: 1.25,
    y: concY + 0.5,
    w: 7.8,
    h: 0.75,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    valign: 'top'
  });

  // === BOTTOM QUOTE ===
  slide.addText("“信任不是靠完美答案建立的，而是靠真诚的解释。”", {
    x: 0.5,
    y: 4.95,
    w: 9,
    h: 0.35,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    italic: true,
    align: 'center'
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 5.35,
    w: 10,
    h: 0.05,
    fill: { color: theme.light, transparency: 60 }
  });

  // Corner accent decorations
  slide.addShape(pres.ShapeType.rect, {
    x: 9.2,
    y: 5.05,
    w: 0.6,
    h: 0.04,
    fill: { color: theme.accent, transparency: 50 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 9.5,
    y: 4.85,
    w: 0.35,
    h: 0.04,
    fill: { color: theme.primary, transparency: 60 }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig,
  theme
};
