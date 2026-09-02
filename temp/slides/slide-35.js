// slide-35.js - 行业核心壁垒判断
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 35,
  title: '行业核心壁垒判断'
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
  slide.addText("行业核心壁垒判断", {
    x: 0.4, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Core question box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.0, w: 9.2, h: 0.65,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("做得久、爬到中层以上的人，靠的主要是什么能力？", {
    x: 0.6, y: 1.0, w: 8.8, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Two comparison columns
  const colW = 4.35;
  const colH = 3.2;
  const startY = 1.85;
  const col1X = 0.4;
  const col2X = 5.25;

  // Left column - High Risk (容易被工具替代)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col1X, y: startY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  // Left column header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col1X, y: startY, w: colW, h: 0.55,
    fill: { color: theme.light },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col1X, y: startY + 0.35, w: colW, h: 0.2,
    fill: { color: theme.light }
  });
  slide.addText("容易被工具替代", {
    x: col1X, y: startY, w: colW, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left column icon area
  slide.addShape(pres.shapes.OVAL, {
    x: col1X + 1.7, y: startY + 0.75, w: 0.9, h: 0.9,
    fill: { color: theme.light, transparency: 70 }
  });
  slide.addText("X", {
    x: col1X + 1.7, y: startY + 0.75, w: 0.9, h: 0.9,
    fontSize: 32, fontFace: "Arial",
    color: theme.light, bold: true,
    align: "center", valign: "middle"
  });

  // Left column content
  slide.addText("执行速度和标准化操作熟练度", {
    x: col1X + 0.2, y: startY + 1.8, w: colW - 0.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Left column detail box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col1X + 0.2, y: startY + 2.35, w: colW - 0.4, h: 0.7,
    fill: { color: theme.bg },
    rectRadius: 0.08
  });
  slide.addText("纯技术能力", {
    x: col1X + 0.2, y: startY + 2.35, w: colW - 0.4, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Right column - Relatively Safe (相对更抗冲击)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col2X, y: startY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  // Right column header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col2X, y: startY, w: colW, h: 0.55,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col2X, y: startY + 0.35, w: colW, h: 0.2,
    fill: { color: theme.accent }
  });
  slide.addText("相对更抗冲击", {
    x: col2X, y: startY, w: colW, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Right column icon area
  slide.addShape(pres.shapes.OVAL, {
    x: col2X + 1.7, y: startY + 0.75, w: 0.9, h: 0.9,
    fill: { color: theme.accent, transparency: 70 }
  });
  slide.addText("\u2713", {
    x: col2X + 1.7, y: startY + 0.75, w: 0.9, h: 0.9,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Right column content
  slide.addText("复杂情境下的综合判断、跟人打交道的能力", {
    x: col2X + 0.2, y: startY + 1.8, w: colW - 0.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Right column detail box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col2X + 0.2, y: startY + 2.35, w: colW - 0.4, h: 0.7,
    fill: { color: theme.bg },
    rectRadius: 0.08
  });
  slide.addText("技术 + 综合判断力", {
    x: col2X + 0.2, y: startY + 2.35, w: colW - 0.4, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Page number badge (circle, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("35", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-35-preview.pptx" })
    .then(() => console.log("Created slide-35-preview.pptx"));
}

module.exports = { createSlide, slideConfig };
