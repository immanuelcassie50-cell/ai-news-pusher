// slide-95.js - 和平变更原则
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
  slide.addText("和平变更原则", {
    x: 0.5, y: 0.2, w: 6, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Latin term
  slide.addText("Uti Possidetis Juris", {
    x: 6.5, y: 0.25, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.light, italic: true, margin: 0
  });

  // Main definition box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.1,
    fill: { color: theme.accent, transparency: 90 },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("法律原则：领土变更应通过和平、法律程序实现，而非武力", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText(""你应保留你所拥有的" —— 殖民结束后，原有行政边界转化为国际边界", {
    x: 0.7, y: 1.65, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Two column layout for key points
  // Left column - Core principles
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.4, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.4, w: 0.1, h: 2.5,
    fill: { color: theme.primary }
  });

  slide.addText("核心要素", {
    x: 0.8, y: 2.55, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const leftItems = [
    "行政边界 → 国际边界",
    "防止武力争夺",
    "保障既有权利",
    "维护地区稳定"
  ];

  leftItems.forEach((item, i) => {
    slide.addText("• " + item, {
      x: 0.9, y: 3.0 + i * 0.45, w: 3.6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Right column - Application examples
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.4, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.4, w: 0.1, h: 2.5,
    fill: { color: theme.accent }
  });

  slide.addText("实践案例", {
    x: 5.5, y: 2.55, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const rightItems = [
    "拉丁美洲独立 (1810-1825)",
    "非洲去殖民化 (1960s)",
    "苏联解体后边界",
    "南苏丹独立 (2011)"
  ];

  rightItems.forEach((item, i) => {
    slide.addText("• " + item, {
      x: 5.6, y: 3.0 + i * 0.45, w: 3.6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.05, w: 9, h: 0.4,
    fill: { color: theme.secondary, transparency: 80 }
  });

  slide.addText("局限性：该原则在宗教、民族边界与行政边界不一致时可能引发争议", {
    x: 0.6, y: 5.1, w: 8.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("95", {
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
  pres.writeFile({ fileName: './slide-95-preview.pptx' });
}

module.exports = { createSlide };
