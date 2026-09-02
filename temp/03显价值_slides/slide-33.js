// slide-33.js - Content: 接下来：找瓶颈
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 33,
  title: '接下来：找瓶颈'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("接下来：找瓶颈", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Next section info
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("第四部分（核心章）", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Main content
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 9, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("找瓶颈：用约束理论找到那个决定整体效率的关键节点", {
    x: 0.7, y: 2.15, w: 8.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("你将完成：部门瓶颈卡（正式版）", {
    x: 0.7, y: 2.65, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Key message
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.1, w: 8.5, h: 0.55,
    fill: { color: theme.accent }
  });

  slide.addText("找对了，20%的改善带来80%的提升；找错了，所有努力都是在优化错的地方。", {
    x: 0.9, y: 3.15, w: 8.1, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Note
  slide.addText("把这两张表放在一起保留——下一部分，你需要从浪费清单和价值损失描述里，筛选出真正的关键瓶颈，完成整个课程最核心的那张卡。", {
    x: 0.5, y: 4.0, w: 9, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };