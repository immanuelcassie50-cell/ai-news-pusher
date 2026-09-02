// slide-13.js - 老手易忽视点提问（下）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '感觉信号与成功直觉'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("感觉信号与成功直觉", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Question 3 section - Two column layout
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.35, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 0.08, h: 1.8,
    fill: { color: theme.accent }
  });
  slide.addText("问题 3", {
    x: 0.75, y: 1.5, w: 1.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("你有没有那种感觉——你知道现在该换方向了，或者知道这次谈话快到某个节点了，但说不太清楚是什么信号让你觉得该切换？", {
    x: 0.75, y: 1.85, w: 3.9, h: 1.2,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Question 4 section - Right column
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 1.4, w: 4.35, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 1.4, w: 0.08, h: 1.8,
    fill: { color: theme.accent }
  });
  slide.addText("问题 4", {
    x: 5.4, y: 1.5, w: 1.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("有没有某一次你的服务做得特别好，但你自己也不完全清楚为什么这次效果那么好？", {
    x: 5.4, y: 1.85, w: 3.9, h: 1.2,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Bottom note section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 9, h: 1.5,
    fill: { color: theme.light, transparency: 30 }
  });
  slide.addText("这两个问题旨在挖掘老手的隐性知识——他们知道但说不清、直觉强但逻辑弱的部分", {
    x: 0.8, y: 3.7, w: 8.4, h: 1.1,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("13", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };