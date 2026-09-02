/**
 * Slide 04 - 为什么日常心理保养重要
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("为什么日常心理保养重要", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText('心理健康的"预防医学"思维', {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Main content area - two cards
  const cardY = 1.6;
  const cardH = 3.4;

  // Card 1 - Left
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: cardY, w: 4.3, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 8, offset: 2, angle: 45, opacity: 0.1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: cardY, w: 4.3, h: 0.08,
    fill: { color: theme.primary }
  });

  // Card 1 Icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.8, y: cardY + 0.4, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 0.8, y: cardY + 0.4, w: 0.6, h: 0.6,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  slide.addText("压力积累效应", {
    x: 1.6, y: cardY + 0.45, w: 3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText([
    { text: "日常生活中的压力源不断累积", options: { breakLine: true } },
    { text: "负面情绪如果得不到及时疏导", options: { breakLine: true } },
    { text: "会逐渐侵蚀心理健康防线", options: { breakLine: true } },
    { text: "最终导致严重的心理问题" }
  ], {
    x: 0.8, y: cardY + 1.2, w: 3.8, h: 2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.5
  });

  // Card 2 - Right
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: cardY, w: 4.3, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 8, offset: 2, angle: 45, opacity: 0.1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: cardY, w: 4.3, h: 0.08,
    fill: { color: theme.accent }
  });

  // Card 2 Icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: 5.5, y: cardY + 0.4, w: 0.6, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 5.5, y: cardY + 0.4, w: 0.6, h: 0.6,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  slide.addText("心理资源耗竭", {
    x: 6.3, y: cardY + 0.45, w: 3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText([
    { text: "心理承受能力不是无限的", options: { breakLine: true } },
    { text: "持续消耗而不补充恢复", options: { breakLine: true } },
    { text: "会导致情绪调节能力下降", options: { breakLine: true } },
    { text: '日常保养就是"储能"过程' }
  ], {
    x: 5.5, y: cardY + 1.2, w: 3.8, h: 2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.5
  });

  // Bottom key message
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fill: { color: theme.primary, transparency: 10 }
  });
  slide.addText("核心观点：日常心理保养是预防心理问题，而非治疗心理疾病", {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", bold: false
  });

  // Page number
  slide.addText("04", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 1",
  title: "为什么日常心理保养重要",
  pageNumber: 4
};

module.exports = { createSlide, slideConfig };
