// slide-62.js - Content: 斯密思想的当代启示（二）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 62,
  title: '斯密思想的当代启示（二）'
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
  slide.addText("斯密思想的当代启示（二）", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 34, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle
  slide.addText("公平与效率的平衡", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Left column - content cards
  const leftCardX = 0.5;
  const cardW = 4.35;

  // Card 1 - 市场失灵预见
  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftCardX, y: 1.35, w: cardW, h: 1.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftCardX, y: 1.35, w: cardW, h: 0.4,
    fill: { color: theme.secondary }
  });

  slide.addText("市场失灵的预见", {
    x: leftCardX + 0.15, y: 1.35, w: cardW - 0.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  slide.addText("斯密预见了市场失灵与政府干预的必要性", {
    x: leftCardX + 0.15, y: 1.8, w: cardW - 0.3, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 2 - 收入分配
  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftCardX, y: 2.75, w: cardW, h: 1.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftCardX, y: 2.75, w: cardW, h: 0.4,
    fill: { color: theme.primary }
  });

  slide.addText("收入分配观点", {
    x: leftCardX + 0.15, y: 2.75, w: cardW - 0.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  slide.addText("斯密不反对政府对收入分配进行适当调节", {
    x: leftCardX + 0.15, y: 3.2, w: cardW - 0.3, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 3 - 垄断与竞争
  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftCardX, y: 4.15, w: cardW, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: leftCardX, y: 4.15, w: cardW, h: 0.4,
    fill: { color: theme.light }
  });

  slide.addText("垄断与竞争问题", {
    x: leftCardX + 0.15, y: 4.15, w: cardW - 0.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  slide.addText("市场权力问题：斯密早有论述", {
    x: leftCardX + 0.15, y: 4.6, w: cardW - 0.3, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right column - key insight box
  const rightX = 5.15;
  const rightW = 4.35;

  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX, y: 1.35, w: rightW, h: 3.9,
    fill: { color: theme.secondary }
  });

  slide.addText("福利国家思想", {
    x: rightX + 0.2, y: 1.5, w: rightW - 0.4, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX + 0.2, y: 2.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  slide.addText("斯密是福利国家思想的鼻祖，不是它的敌人", {
    x: rightX + 0.2, y: 2.2, w: rightW - 0.4, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.bg
  });

  slide.addText([
    { text: "政府有责任提供基本社会保障", options: { bullet: true, breakLine: true } },
    { text: "教育是每个人都应获得的基本权利", options: { bullet: true, breakLine: true } },
    { text: "公共卫生与基础设施是国家责任", options: { bullet: true, breakLine: true } },
    { text: "累进税制在道德上具有正当性", options: { bullet: true } }
  ], {
    x: rightX + 0.2, y: 2.95, w: rightW - 0.4, h: 2.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    paraSpaceAfter: 8
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("62", {
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
  pres.writeFile({ fileName: "slide-62-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
