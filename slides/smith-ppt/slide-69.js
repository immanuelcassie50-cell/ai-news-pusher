// slide-69.js - Content: 阅读书单：深化学习
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 69,
  title: '阅读书单：深化学习'
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
  slide.addText("阅读书单：深化学习", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three columns
  const colW = 2.9;
  const colH = 3.85;
  const colY = 1.2;
  const colGap = 0.25;

  // Column 1 - 必读经典
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: colY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: colY, w: colW, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("必读经典", {
    x: 0.5, y: colY, w: colW, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Book 1
  slide.addText("《国富论》", {
    x: 0.65, y: colY + 0.65, w: colW - 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("亚当·斯密", {
    x: 0.65, y: colY + 0.95, w: colW - 0.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("经济学开山之作，理解市场机制的必读文本", {
    x: 0.65, y: colY + 1.2, w: colW - 0.3, h: 0.5,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.65, y: colY + 1.75, w: colW - 0.3, h: 0.02,
    fill: { color: theme.light }
  });

  // Book 2
  slide.addText("《道德情感论》", {
    x: 0.65, y: colY + 1.9, w: colW - 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("亚当·斯密", {
    x: 0.65, y: colY + 2.2, w: colW - 0.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("理解斯密完整人性观的另一把钥匙", {
    x: 0.65, y: colY + 2.45, w: colW - 0.3, h: 0.5,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.65, y: colY + 3.0, w: colW - 0.3, h: 0.02,
    fill: { color: theme.light }
  });

  // Book 3
  slide.addText("《通往奴役之路》", {
    x: 0.65, y: colY + 3.15, w: colW - 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("哈耶克", {
    x: 0.65, y: colY + 3.45, w: colW - 0.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Column 2 - 理解斯密
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + colW + colGap, y: colY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + colW + colGap, y: colY, w: colW, h: 0.5,
    fill: { color: theme.secondary }
  });

  slide.addText("理解斯密", {
    x: 0.5 + colW + colGap, y: colY, w: colW, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Book 4
  slide.addText("《亚当·斯密》", {
    x: 0.65 + colW + colGap, y: colY + 0.65, w: colW - 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("章海山", {
    x: 0.65 + colW + colGap, y: colY + 0.95, w: colW - 0.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("中国学者对斯密的系统性研究", {
    x: 0.65 + colW + colGap, y: colY + 1.2, w: colW - 0.3, h: 0.5,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.65 + colW + colGap, y: colY + 1.75, w: colW - 0.3, h: 0.02,
    fill: { color: theme.light }
  });

  // Book 5
  slide.addText("《斯密忏悔录》", {
    x: 0.65 + colW + colGap, y: colY + 1.9, w: colW - 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("罗伯特·路易斯·史蒂文森", {
    x: 0.65 + colW + colGap, y: colY + 2.2, w: colW - 0.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("文学大师笔下的斯密传记", {
    x: 0.65 + colW + colGap, y: colY + 2.45, w: colW - 0.3, h: 0.5,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Column 3 - 现代视角
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (colW + colGap), y: colY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (colW + colGap), y: colY, w: colW, h: 0.5,
    fill: { color: theme.accent }
  });

  slide.addText("现代视角", {
    x: 0.5 + 2 * (colW + colGap), y: colY, w: colW, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Book 6
  slide.addText("《 capitalism, socialism", {
    x: 0.65 + 2 * (colW + colGap), y: colY + 0.65, w: colW - 0.3, h: 0.3,
    fontSize: 11, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  slide.addText("and knowledge》", {
    x: 0.65 + 2 * (colW + colGap), y: colY + 0.9, w: colW - 0.3, h: 0.25,
    fontSize: 11, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  slide.addText("熊彼特", {
    x: 0.65 + 2 * (colW + colGap), y: colY + 1.2, w: colW - 0.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("从创新与知识角度理解经济发展", {
    x: 0.65 + 2 * (colW + colGap), y: colY + 1.45, w: colW - 0.3, h: 0.5,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.65 + 2 * (colW + colGap), y: colY + 2.0, w: colW - 0.3, h: 0.02,
    fill: { color: theme.light }
  });

  // Book 7
  slide.addText("《自由的伦理》", {
    x: 0.65 + 2 * (colW + colGap), y: colY + 2.15, w: colW - 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("罗斯巴德", {
    x: 0.65 + 2 * (colW + colGap), y: colY + 2.45, w: colW - 0.3, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("奥地利学派视角的自由市场伦理", {
    x: 0.65 + 2 * (colW + colGap), y: colY + 2.7, w: colW - 0.3, h: 0.5,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("69", {
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
  pres.writeFile({ fileName: "slide-69-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
