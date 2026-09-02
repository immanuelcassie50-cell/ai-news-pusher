// slide-31.js - 互动练习2
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 31,
  title: '练习：匹配发展需求'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("互动练习", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Exercise title
  slide.addText("练习：匹配发展需求", {
    x: 0.5, y: 1.2, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Scenario box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 9, h: 1.1,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1 },
    rectRadius: 0.1
  });

  slide.addText("场景设定", {
    x: 0.7, y: 2.05, w: 1.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("你家有两个孩子：5岁的姐姐和10岁的哥哥", {
    x: 0.7, y: 2.4, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Task description
  slide.addText("任务：为每个孩子设计专属时间", {
    x: 0.5, y: 3.3, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Two columns for children
  // 5-year-old girl
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.95, w: 4.25, h: 1.35,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.95, w: 4.25, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("5岁姐姐", {
    x: 0.5, y: 3.95, w: 4.25, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("发展需求：自主性发展", {
    x: 0.7, y: 4.5, w: 3.85, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // 10-year-old boy
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 3.95, w: 4.25, h: 1.35,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 3.95, w: 4.25, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("10岁哥哥", {
    x: 5.25, y: 3.95, w: 4.25, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("发展需求：勤奋感培养", {
    x: 5.45, y: 4.5, w: 3.85, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
