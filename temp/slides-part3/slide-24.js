// slide-24.js - Content: 变体与雷区
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 24,
  title: "变体与雷区"
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
  slide.addText("变体与雷区", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Left section - 客户典型反应与应对
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.4, h: 4.0,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText("客户典型反应与应对", {
    x: 0.7, y: 1.1, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Arrow diagram
  slide.addText("客户说/做", {
    x: 0.7, y: 1.7, w: 1.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("->", {
    x: 1.9, y: 1.7, w: 0.5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("应对思路", {
    x: 2.4, y: 1.7, w: 1.0, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("->", {
    x: 3.4, y: 1.7, w: 0.5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("具体话术", {
    x: 3.9, y: 1.7, w: 1.0, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Placeholder content
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.3, w: 4, h: 2.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.05
  });
  slide.addText('[示例：客户表示不满]\n-> [先认可情绪，再解释]\n-> "我理解您的感受..."', {
    x: 0.9, y: 2.5, w: 3.6, h: 2.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "left", valign: "top"
  });

  // Right section - 绝对雷区
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 1.0, w: 4.4, h: 4.0,
    fill: { color: theme.secondary, transparency: 10 },
    rectRadius: 0.08
  });

  slide.addText("绝对雷区", {
    x: 5.3, y: 1.1, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Warning format
  slide.addText("不能说", {
    x: 5.3, y: 1.7, w: 0.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("->", {
    x: 6.1, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("原因", {
    x: 6.5, y: 1.7, w: 0.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("->", {
    x: 7.3, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("替代说法", {
    x: 7.7, y: 1.7, w: 1.0, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Placeholder content
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 2.3, w: 4, h: 2.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.05
  });
  slide.addText('[示例：不能说"稳赚"]\n-> [违规承诺]\n-> "过往业绩不代表未来"', {
    x: 5.5, y: 2.5, w: 3.6, h: 2.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "left", valign: "top"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("24", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };