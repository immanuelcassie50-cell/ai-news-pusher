// slide-27.js - Content: 关于"不确定"的处理
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 27,
  title: "关于'不确定'的处理"
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
  slide.addText("关于'不确定'的处理", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Main callout box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.8,
    fill: { color: theme.secondary, transparency: 10 },
    rectRadius: 0.12
  });

  // Quote marks
  slide.addText('"', {
    x: 0.7, y: 1.0, w: 0.6, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Main message
  slide.addText("打一个问号标注，不要删掉，进入第四部分的交叉验证时，带着这个问题和有经验的同事确认。不要在不确定的时候自己拍板。", {
    x: 1.0, y: 1.5, w: 8, h: 2.0,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  // Emphasis box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 3.5, y: 4.1, w: 3, h: 0.8,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText("不要自己拍板", {
    x: 3.5, y: 4.1, w: 3, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("27", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };