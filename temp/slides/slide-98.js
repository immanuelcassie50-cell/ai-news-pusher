// slide-98.js - Profession Won't Disappear (Quote Slide)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 98,
  title: '职业不会消失'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("职业不会消失", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Quote background card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 9, h: 3.2,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
  });

  // Left accent on quote card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 0.1, h: 3.2,
    fill: { color: theme.accent }
  });

  // Opening quote mark
  slide.addText("“", {
    x: 0.8, y: 1.5, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true,
    margin: 0
  });

  // Main quote text
  slide.addText("这个问题问错了方向——不是这个职业还能不能干下去，是只会做AI也能做的那部分工作的人，还能不能干下去；这两个问题的答案，完全不一样。", {
    x: 1.0, y: 2.1, w: 7.8, h: 2.0,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top",
    lineSpaceMult: 1.5
  });

  // Closing quote mark
  slide.addText("”", {
    x: 8.5, y: 3.6, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true,
    margin: 0
  });

  // Bottom insight line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 3, h: 0.03,
    fill: { color: theme.light, transparency: 50 }
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("98", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-98-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
