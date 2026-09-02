// slide-23.js - Core Concept: 核心观点
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 23,
  title: '核心观点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
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

  // Large quote card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 },
    rectRadius: 0.1
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 0.12, h: 2.8,
    fill: { color: theme.accent }
  });

  // Opening quote mark
  slide.addText("“", {
    x: 0.8, y: 1.3, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true,
    transparency: 30
  });

  // Quote text
  slide.addText("“这两年信息不是不够了，是太多了，多到大部分家长已经分不清哪条是真的对他们有用的。”", {
    x: 1.0, y: 2.0, w: 7.8, h: 1.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Closing quote mark
  slide.addText("”", {
    x: 8.4, y: 3.3, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true,
    transparency: 30
  });

  // Key insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.8,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1.5 },
    rectRadius: 0.08
  });
  slide.addText("稀缺的东西变了：从数据变成判断力", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("23", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-23-preview.pptx" })
    .then(() => console.log("Created: slide-23-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
