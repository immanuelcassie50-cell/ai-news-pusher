const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Section header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: theme.primary }
  });

  // Section number
  slide.addText("模块五", {
    x: 0.5, y: 0.3, w: 2, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Main title
  slide.addText("互动与讨论", {
    x: 0.5, y: 1.6, w: 9, h: 1.2,
    fontSize: 54, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("Discussion & Exercises", {
    x: 0.5, y: 2.8, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Georgia",
    color: theme.secondary, italic: true
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.6, w: 3, h: 0.05,
    fill: { color: theme.accent }
  });

  // Content preview
  const topics = [
    "四大讨论问题：斯密的误读、市场边界、自发秩序、信息时代",
    "五大练习：流派匹配、判断对错、谱系图绘制、案例分析、概念解释",
    "课程全景回顾与延伸学习路径"
  ];
  topics.forEach((topic, i) => {
    slide.addText("▸ " + topic, {
      x: 0.5, y: 4.0 + i * 0.45, w: 9, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("71", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
