// slide-96.js - 公民投票与民族自决
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("公民投票与民族自决", {
    x: 0.5, y: 0.2, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Two column layout
  // Left column - Referendum mechanics
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  // Left header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.1, w: 4.4, h: 0.55,
    fill: { color: theme.primary }
  });

  slide.addText("公民投票机制", {
    x: 0.6, y: 1.15, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Left content
  const leftItems = [
    { label: "投票资 格", content: "符合法定年龄的公民" },
    { label: "投票方式", content: "秘密投票、直接表达" },
    { label: "通过门槛", content: "简单多数/绝对多数" },
    { label: "法律效力", content: "约束力取决于国内法" },
    { label: "国际承认", content: "影响他国态度与外交" }
  ];

  leftItems.forEach((item, i) => {
    slide.addText(item.label, {
      x: 0.6, y: 1.8 + i * 0.6, w: 1.4, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(item.content, {
      x: 2.0, y: 1.8 + i * 0.6, w: 2.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Left bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.7, w: 4.0, h: 0.45,
    fill: { color: theme.secondary, transparency: 80 }
  });
  slide.addText("程序合法 ≠ 国际合法", {
    x: 0.7, y: 4.78, w: 3.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Right column - Self-determination
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  // Right header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.1, w: 4.4, h: 0.55,
    fill: { color: theme.accent }
  });

  slide.addText("民族自决权利", {
    x: 5.4, y: 1.15, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Right content
  const rightItems = [
    { label: "法理依据", content: "联合国宪章、国际公约" },
    { label: "适用范围", content: "殖民地/托管领土" },
    { label: "内部自决", content: "高度自治、文化权利" },
    { label: "外部自决", content: "独立建国、分离" },
    { label: "争议焦点", content: "单方公投合法性" }
  ];

  rightItems.forEach((item, i) => {
    slide.addText(item.label, {
      x: 5.4, y: 1.8 + i * 0.6, w: 1.4, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.content, {
      x: 6.8, y: 1.8 + i * 0.6, w: 2.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Right bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.4, y: 4.7, w: 4.0, h: 0.45,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addText("外部自决通常需母国同意", {
    x: 5.5, y: 4.78, w: 3.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Divider with VS
  slide.addShape(pres.shapes.OVAL, {
    x: 4.65, y: 2.8, w: 0.7, h: 0.7,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText("VS", {
    x: 4.65, y: 2.85, w: 0.7, h: 0.6,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("96", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "c9ada7",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: './slide-96-preview.pptx' });
}

module.exports = { createSlide };
