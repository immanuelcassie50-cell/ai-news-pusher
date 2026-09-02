// slide-23.js - 差异化满足概念
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 23,
  title: '什么是差异化满足？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("什么是差异化满足？", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Core concept box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 1.2,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 2 },
    rectRadius: 0.1
  });

  slide.addText("不追求"一样的对待"，而是"适合的满足"", {
    x: 0.8, y: 1.3, w: 8.4, h: 1.2,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Key points
  const points = [
    "基于每个孩子独特的需求",
    "让孩子感受到"我被看见""
  ];

  const startY = 2.8;
  const itemHeight = 0.9;

  points.forEach((point, idx) => {
    const y = startY + idx * itemHeight;

    // Bullet circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y + 0.2, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });

    // Content text
    slide.addText(point, {
      x: 1.35, y: y, w: 8, h: 0.7,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Visual contrast diagram
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 4.0, w: 3, h: 1.2,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("平均分配", {
    x: 1.5, y: 4.0, w: 3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("一样但不满足", {
    x: 1.5, y: 4.5, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Arrow
  slide.addText("→", {
    x: 4.5, y: 4.0, w: 1, h: 1.2,
    fontSize: 36, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 4.0, w: 3, h: 1.2,
    fill: { color: theme.primary, transparency: 85 }
  });
  slide.addText("差异满足", {
    x: 5.5, y: 4.0, w: 3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("适合且被看见", {
    x: 5.5, y: 4.5, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-23-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
