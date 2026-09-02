// slide-150.js - Closing: Thank You
const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "感谢学习",
  type: "closing",
  courseNumber: 19,
  category: "亲密关系"
};

function createSlide(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: "B81025" };

  // Large decorative circle (top right)
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 6.5, y: -2, w: 5, h: 5,
    fill: { color: "D4122B", transparency: 50 }
  });

  // Small decorative circle (bottom left)
  slide.addShape(pptx.ShapeType.ellipse, {
    x: -1.5, y: 4, w: 3, h: 3,
    fill: { color: "4A4748", transparency: 60 }
  });

  // Thank you text
  slide.addText("感谢学习", {
    x: 0.5, y: 1.8, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // Course name
  slide.addText("依恋类型：认清你在关系中的行为模式", {
    x: 0.5, y: 3.0, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "C9ADA7", align: "center"
  });

  // Divider
  slide.addShape(pptx.ShapeType.rect, {
    x: 4, y: 3.7, w: 2, h: 0.04,
    fill: { color: "C9ADA7" }
  });

  // Tagline
  slide.addText("认识自己，理解他人，改善关系", {
    x: 0.5, y: 4.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });

  // Course number badge
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 4.4, y: 4.7, w: 0.6, h: 0.6,
    fill: { color: "FFFFFF", transparency: 20 }
  });

  slide.addText("19", {
    x: 4.4, y: 4.75, w: 0.6, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
