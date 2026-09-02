// slide-14.js - 致命点提问
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '围绕致命点的提问'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with warning icon area
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("围绕致命点的提问", {
    x: 0.7, y: 0.4, w: 8.6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // Question 1 - Alert style
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 0.1, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("1", {
    x: 0.75, y: 1.4, w: 0.35, h: 0.35,
    fontSize: 16, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("在这个场景里，有没有某些话或者某些动作，一旦出现，基本上就意味着这次服务很难挽回了？", {
    x: 1.15, y: 1.45, w: 8.1, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Question 2 - Alert style
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.55, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.55, w: 0.1, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 0.75, y: 2.65, w: 0.35, h: 0.35,
    fontSize: 16, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("从合规角度，在这个场景里有哪些绝对不能说的话、不能踩的线？", {
    x: 1.15, y: 2.7, w: 8.1, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Question 3 - Alert style
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 0.1, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("3", {
    x: 0.75, y: 3.9, w: 0.35, h: 0.35,
    fontSize: 16, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("什么时候你宁可不说，也不愿意冒险说错？", {
    x: 1.15, y: 3.95, w: 8.1, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Bottom accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.05, w: 9, h: 0.08,
    fill: { color: theme.accent }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("14", {
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
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };