// slide-61.js - Content: 斯密思想的当代启示（一）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 61,
  title: '斯密思想的当代启示（一）'
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
  slide.addText("斯密思想的当代启示（一）", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 34, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle
  slide.addText("市场与道德的关系", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Main insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.35, w: 9, h: 1.2,
    fill: { color: theme.secondary }
  });

  slide.addText("核心洞见", {
    x: 0.7, y: 1.45, w: 8.6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText("市场不是孤立的，需要道德框架支撑。斯密：自利需要在正义的制度下运行。纯粹市场原教旨主义违背斯密原意。", {
    x: 0.7, y: 1.8, w: 8.6, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Four insight cards
  const cardW = 4.35;
  const cardH = 1.4;
  const gap = 0.3;

  // Card 1
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 0.06, h: cardH,
    fill: { color: theme.primary }
  });

  slide.addText("市场需要道德基础", {
    x: 0.7, y: 2.85, w: cardW - 0.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("市场运行在道德规范和正义制度的框架内，离开这些条件，市场将走向失序", {
    x: 0.7, y: 3.2, w: cardW - 0.3, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 2
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + gap, y: 2.75, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + gap, y: 2.75, w: 0.06, h: cardH,
    fill: { color: theme.accent }
  });

  slide.addText("自利需要正义约束", {
    x: 0.7 + cardW + gap, y: 2.85, w: cardW - 0.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("斯密承认自利驱动，但强调这种自利必须在正义规则允许的范围内运行", {
    x: 0.7 + cardW + gap, y: 3.2, w: cardW - 0.3, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 3
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75 + cardH + 0.2, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75 + cardH + 0.2, w: 0.06, h: cardH,
    fill: { color: theme.light }
  });

  slide.addText("反对市场原教旨主义", {
    x: 0.7, y: 2.85 + cardH + 0.2, w: cardW - 0.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("当代启示：纯粹市场原教旨主义违背斯密原意，是对斯密的误读和简化", {
    x: 0.7, y: 3.2 + cardH + 0.2, w: cardW - 0.3, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 4
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + gap, y: 2.75 + cardH + 0.2, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + gap, y: 2.75 + cardH + 0.2, w: 0.06, h: cardH,
    fill: { color: theme.secondary }
  });

  slide.addText("企业社会责任", {
    x: 0.7 + cardW + gap, y: 2.85 + cardH + 0.2, w: cardW - 0.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("企业社会责任：回到斯密，而非背离斯密。企业的道德基础不可忽视", {
    x: 0.7 + cardW + gap, y: 3.2 + cardH + 0.2, w: cardW - 0.3, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("61", {
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
  pres.writeFile({ fileName: "slide-61-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
