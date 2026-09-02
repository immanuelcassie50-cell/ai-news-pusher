// slide-67.js - Content: 思想史坐标系：横向与纵向
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 67,
  title: '思想史坐标系：横向与纵向'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("思想史坐标系：横向与纵向", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 34, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Visual coordinate system - centered
  const centerX = 5;
  const centerY = 2.8;
  const axisLenX = 3.5;
  const axisLenY = 2;

  // Y-axis (vertical)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: centerX - 0.02, y: centerY - axisLenY, w: 0.04, h: axisLenY * 2,
    fill: { color: theme.secondary }
  });

  // X-axis (horizontal)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: centerX - axisLenX, y: centerY - 0.02, w: axisLenX * 2, h: 0.04,
    fill: { color: theme.secondary }
  });

  // Axis labels
  slide.addText("纵向：时间演进", {
    x: centerX + 0.15, y: centerY - 0.2, w: 1.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText("横向：思想竞争", {
    x: centerX - 0.8, y: centerY + 0.15, w: 1.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Sample nodes
  // Node 1 - Smith at origin
  slide.addShape(pres.shapes.OVAL, {
    x: centerX - 3.2, y: centerY - 1.7, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("斯密", {
    x: centerX - 3.4, y: centerY - 2.0, w: 0.7, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  // Node 2 - Ricardo
  slide.addShape(pres.shapes.OVAL, {
    x: centerX - 2.5, y: centerY - 1.3, w: 0.3, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("李嘉图", {
    x: centerX - 2.7, y: centerY - 1.55, w: 0.7, h: 0.25,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center"
  });

  // Node 3 - Keynes (later period)
  slide.addShape(pres.shapes.OVAL, {
    x: centerX - 0.8, y: centerY - 0.5, w: 0.3, h: 0.3,
    fill: { color: theme.light }
  });
  slide.addText("凯恩斯", {
    x: centerX - 1.0, y: centerY - 0.25, w: 0.7, h: 0.25,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center"
  });

  // Node 4 - Austrian school
  slide.addShape(pres.shapes.OVAL, {
    x: centerX + 1.5, y: centerY - 0.8, w: 0.3, h: 0.3,
    fill: { color: theme.secondary }
  });
  slide.addText("奥地利", {
    x: centerX + 1.3, y: centerY - 1.05, w: 0.7, h: 0.25,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // Node 5 - Marx (same era as Ricardo, different position)
  slide.addShape(pres.shapes.OVAL, {
    x: centerX - 2.8, y: centerY + 0.5, w: 0.3, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("马克思", {
    x: centerX - 3.0, y: centerY + 0.8, w: 0.7, h: 0.25,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center"
  });

  // Right side - Explanation cards
  const cardX = 6.5;
  const cardW = 3.0;

  // Card 1 - Horizontal axis
  slide.addShape(pres.shapes.RECTANGLE, {
    x: cardX, y: 1.2, w: cardW, h: 1.35,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: cardX, y: 1.2, w: 0.06, h: 1.35,
    fill: { color: theme.secondary }
  });

  slide.addText("横向坐标", {
    x: cardX + 0.15, y: 1.3, w: cardW - 0.2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("同一时期不同思想的竞争", {
    x: cardX + 0.15, y: 1.6, w: cardW - 0.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  slide.addText("例：斯密 vs 重商主义\n凯恩斯 vs 奥地利学派", {
    x: cardX + 0.15, y: 1.9, w: cardW - 0.2, h: 0.55,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 2 - Vertical axis
  slide.addShape(pres.shapes.RECTANGLE, {
    x: cardX, y: 2.7, w: cardW, h: 1.35,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: cardX, y: 2.7, w: 0.06, h: 1.35,
    fill: { color: theme.primary }
  });

  slide.addText("纵向坐标", {
    x: cardX + 0.15, y: 2.8, w: cardW - 0.2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("思想的历史演进脉络", {
    x: cardX + 0.15, y: 3.1, w: cardW - 0.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  slide.addText("例：斯密 → 李嘉图 → 穆勒\n→ 马歇尔 → 新古典综合", {
    x: cardX + 0.15, y: 3.4, w: cardW - 0.2, h: 0.55,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 5.7, h: 0.95,
    fill: { color: theme.primary }
  });

  slide.addText("坐标系的价值", {
    x: 0.7, y: 4.3, w: 5.3, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("定位 · 理解 · 批判", {
    x: 0.7, y: 4.6, w: 5.3, h: 0.45,
    fontSize: 18, fontFace: "Georgia",
    color: theme.bg
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("67", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-67-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
