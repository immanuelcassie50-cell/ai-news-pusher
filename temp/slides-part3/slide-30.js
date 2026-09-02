// slide-30.js - Content: SOP质量判断 · 场景判断
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 30,
  title: "SOP质量判断 · 场景判断"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("SOP质量判断 · 场景判断", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Scenario description
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.9,
    fill: { color: theme.light },
    rectRadius: 0.08
  });
  slide.addText("场景：高净值客户来电，情绪不稳定，顾问接到电话后的第一步处理", {
    x: 0.7, y: 1.0, w: 8.6, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle"
  });

  // Two comparison cards
  // Card A - Wrong
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.1, w: 4.4, h: 2.6,
    fill: { color: theme.light },
    rectRadius: 0.1
  });

  slide.addText("写法A", {
    x: 0.7, y: 2.2, w: 1.2, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("第一步：接电话。", {
    x: 0.7, y: 2.7, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle"
  });

  slide.addText("注意态度要热情，要表现出关心客户...", {
    x: 0.7, y: 3.2, w: 4, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "left", valign: "top"
  });

  // X mark
  slide.addShape(pres.shapes.OVAL, {
    x: 4.0, y: 2.2, w: 0.5, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("X", {
    x: 4.0, y: 2.2, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Card B - Correct
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.4, h: 2.6,
    fill: { color: theme.secondary, transparency: 10 },
    rectRadius: 0.1
  });

  slide.addText("写法B", {
    x: 5.3, y: 2.2, w: 1.2, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("第一步：接住客户情绪。", {
    x: 5.3, y: 2.7, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("做法：接通后说出主动关注客户账户的一句话...", {
    x: 5.3, y: 3.2, w: 4, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "top"
  });

  // Check mark
  slide.addShape(pres.shapes.OVAL, {
    x: 8.6, y: 2.2, w: 0.5, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("OK", {
    x: 8.6, y: 2.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Footer difficulty
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.85, w: 2.4, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });
  slide.addText("第一级难度 · 8分钟", {
    x: 0.5, y: 4.85, w: 2.4, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("30", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };