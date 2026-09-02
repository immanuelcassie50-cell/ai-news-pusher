// slide-15.js - Core Concept
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 15,
  title: '核心观点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("核心观点", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Main quote box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 9, h: 2.8,
    fill: { color: theme.primary, transparency: 95 },
    line: { color: theme.primary, width: 3 },
    rectRadius: 0.12
  });

  // Quote mark
  slide.addText('"', {
    x: 0.7, y: 1.3, w: 1, h: 1,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent,
    valign: "top"
  });

  // Main quote text
  slide.addText("先算分数的人，算的是能去哪；先算人的人，算的是该去哪——这两件事从结果上可能重合，但顺序反过来，答案会完全不一样。", {
    x: 1.0, y: 1.8, w: 8, h: 2.0,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Bottom emphasis box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.5, y: 4.5, w: 5, h: 0.7,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.08
  });
  slide.addText("顺序决定结果", {
    x: 2.5, y: 4.5, w: 5, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("15", {
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
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-15-preview.pptx" })
    .then(() => console.log("Preview saved: slide-15-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
