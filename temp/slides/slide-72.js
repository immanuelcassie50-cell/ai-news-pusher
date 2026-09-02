// slide-72.js - Fact vs Value Disagreement
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 72, title: '分辨事实分歧与价值分歧' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("分辨事实分歧与价值分歧", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 2.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Two column layout
  const colWidth = 4.3;
  const col1X = 0.5;
  const col2X = 5.2;
  const cardY = 1.15;
  const cardHeight = 3.4;

  // Left column - 事实分歧
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: col1X, y: cardY, w: colWidth, h: cardHeight,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Left column header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col1X, y: cardY, w: colWidth, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("事实分歧", {
    x: col1X, y: cardY, w: colWidth, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Left column content
  slide.addText("特点", {
    x: col1X + 0.2, y: cardY + 0.75, w: colWidth - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("摆事实就能解决", {
    x: col1X + 0.2, y: cardY + 1.05, w: colWidth - 0.4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("例子", {
    x: col1X + 0.2, y: cardY + 1.5, w: colWidth - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("家长以为某专业不好就业，但实际招聘行情还不错", {
    x: col1X + 0.2, y: cardY + 1.8, w: colWidth - 0.4, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Checkmark icon
  slide.addShape(pres.shapes.OVAL, {
    x: col1X + 1.5, y: cardY + 2.65, w: 1.3, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("可解决", {
    x: col1X + 1.5, y: cardY + 2.65, w: 1.3, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Right column - 价值分歧
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: col2X, y: cardY, w: colWidth, h: cardHeight,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Right column header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: col2X, y: cardY, w: colWidth, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("价值分歧", {
    x: col2X, y: cardY, w: colWidth, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Right column content
  slide.addText("特点", {
    x: col2X + 0.2, y: cardY + 0.75, w: colWidth - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("两者没有对错，只是排序不同", {
    x: col2X + 0.2, y: cardY + 1.05, w: colWidth - 0.4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("例子", {
    x: col2X + 0.2, y: cardY + 1.5, w: colWidth - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("家长看重稳定，孩子看重热爱", {
    x: col2X + 0.2, y: cardY + 1.8, w: colWidth - 0.4, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Warning icon
  slide.addShape(pres.shapes.OVAL, {
    x: col2X + 1.5, y: cardY + 2.65, w: 1.3, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("无对错", {
    x: col2X + 1.5, y: cardY + 2.65, w: 1.3, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Key insight at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.75, w: 9, h: 0.7,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText("关键：分不清这两类分歧，容易在该讲事实时陷入价值观辩论", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("72", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-72-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
