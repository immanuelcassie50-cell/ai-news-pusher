// slide-69.js - Joint Ventures (合资与利益绑定)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 69,
  title: '合资与利益绑定'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("合资与利益绑定", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main concept
  slide.addText("\"把对手变成自己人\"", {
    x: 0.5, y: 1.15, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Two circles diagram
  // Left circle: Party A investment
  slide.addShape(pres.shapes.OVAL, {
    x: 1.5, y: 2.0, w: 2.5, h: 2.5,
    fill: { color: theme.primary, transparency: 20 },
    line: { color: theme.primary, width: 2 }
  });
  slide.addText("甲方投入", {
    x: 1.5, y: 2.7, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("资金、资源\n专业能力", {
    x: 1.5, y: 3.15, w: 2.5, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Right circle: Party B investment
  slide.addShape(pres.shapes.OVAL, {
    x: 6.0, y: 2.0, w: 2.5, h: 2.5,
    fill: { color: theme.primary, transparency: 20 },
    line: { color: theme.primary, width: 2 }
  });
  slide.addText("乙方投入", {
    x: 6.0, y: 2.7, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("资金、资源\n专业能力", {
    x: 6.0, y: 3.15, w: 2.5, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Center: Joint entity
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 2.5, w: 2.4, h: 1.5,
    fill: { color: theme.accent }
  });
  slide.addText("合资实体", {
    x: 3.8, y: 2.7, w: 2.4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("共同所有\n利益共享", {
    x: 3.8, y: 3.2, w: 2.4, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Connecting lines
  slide.addShape(pres.shapes.LINE, {
    x: 4.0, y: 3.25, w: -0.7, h: 0,
    line: { color: theme.primary, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 6.0, y: 3.25, w: 0.7, h: 0,
    line: { color: theme.primary, width: 2 }
  });

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1 }
  });
  slide.addText("人质机制：背叛意味着失去自己在合资中的投资", {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("69", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-69-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
