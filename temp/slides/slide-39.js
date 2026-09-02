// slide-39.js - 第五章 核心观点
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 39,
  title: '核心观点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("核心观点", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("金句", {
    x: 0.5, y: 1.0, w: 1.2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Big quote card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 },
    rectRadius: 0.12
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 0.12, h: 2.4,
    fill: { color: theme.accent }
  });

  // Quote mark
  slide.addText("“", {
    x: 0.8, y: 1.7, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent,
    valign: "top"
  });

  // Quote text
  slide.addText("大多数人是从'我现在能报什么'往前想，真正管用的是从'十年后我想过什么样的日子'往回算——这两个方向算出来的答案，经常是反的。", {
    x: 1.0, y: 2.2, w: 8.0, h: 1.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Highlight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("方向错了，答案再漂亮也没用", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style - bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("39", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-39-preview.pptx" })
    .then(() => console.log("Preview saved: slide-39-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
