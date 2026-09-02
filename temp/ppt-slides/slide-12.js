// slide-12.js - 老手易忽视点提问（上）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '围绕老手易忽视点的提问'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("围绕老手易忽视点的提问", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Question 1 section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 9, h: 1.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 0.08, h: 1.6,
    fill: { color: theme.primary }
  });
  slide.addText("问题 1", {
    x: 0.8, y: 1.5, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("你现在处理这个场景，大概分哪几步？", {
    x: 0.8, y: 1.9, w: 8.5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("目的：先让对方说步骤", {
    x: 0.8, y: 2.45, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Question 2 section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 9, h: 1.9,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 0.08, h: 1.9,
    fill: { color: theme.primary }
  });
  slide.addText("问题 2", {
    x: 0.8, y: 3.3, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("在你刚才说的这几步里，哪一步你是有意识在做的，哪一步你有点下意识就做了？", {
    x: 0.8, y: 3.7, w: 8.5, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("目的：区分意识层次", {
    x: 0.8, y: 4.35, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("12", {
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
  pres.writeFile({ fileName: "slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };