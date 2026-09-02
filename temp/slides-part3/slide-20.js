// slide-20.js - Content: 提示词模板 · 经验素材
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 20,
  title: "提示词模板 · 经验素材"
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
  slide.addText("提示词模板 · 经验素材", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Main message
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.0,
    fill: { color: theme.secondary, transparency: 10 },
    rectRadius: 0.08
  });

  slide.addText("把你访谈文字里，话术表达类和判断逻辑类的关键素材粘贴在这里", {
    x: 0.7, y: 1.0, w: 8.6, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  // Placeholder area
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.2, w: 9, h: 2.8,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  // Document icon
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 2.6, w: 1, h: 1.2,
    fill: { color: theme.accent }
  });
  slide.addText("T", {
    x: 4.5, y: 2.6, w: 1, h: 1.2,
    fontSize: 36, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Placeholder text
  slide.addText("[粘贴访谈关键素材]", {
    x: 0.7, y: 4.0, w: 8.6, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("20", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };