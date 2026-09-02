// slide-59.js - Content: 斯密论政府功能
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 59,
  title: '斯密论政府功能'
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
  slide.addText("斯密论政府功能", {
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

  // Main content area - Three functions in cards
  const cardWidth = 2.9;
  const cardHeight = 2.2;
  const cardY = 1.25;
  const cardGap = 0.2;

  // Card 1 - 国防
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardWidth, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("国防", {
    x: 0.5, y: cardY, w: cardWidth, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("保护社会免受外敌入侵，是政府最基本职能", {
    x: 0.65, y: cardY + 0.65, w: cardWidth - 0.3, h: 1.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 2 - 司法
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardWidth + cardGap, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardWidth + cardGap, y: cardY, w: cardWidth, h: 0.5,
    fill: { color: theme.secondary }
  });

  slide.addText("司法", {
    x: 0.5 + cardWidth + cardGap, y: cardY, w: cardWidth, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("维护正义，保护公民权利，裁决纠纷", {
    x: 0.65 + cardWidth + cardGap, y: cardY + 0.65, w: cardWidth - 0.3, h: 1.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 3 - 公共工程
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (cardWidth + cardGap), y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (cardWidth + cardGap), y: cardY, w: cardWidth, h: 0.5,
    fill: { color: theme.light }
  });

  slide.addText("公共工程", {
    x: 0.5 + 2 * (cardWidth + cardGap), y: cardY, w: cardWidth, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("道路、桥梁、运河等基础设施及公共机构", {
    x: 0.65 + 2 * (cardWidth + cardGap), y: cardY + 0.65, w: cardWidth - 0.3, h: 1.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Bottom insight section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.65, w: 9, h: 1.55,
    fill: { color: theme.secondary },
    transparency: 5
  });

  slide.addText('斯密的"守夜人"政府', {
    x: 0.7, y: 3.75, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: '政府是"守夜人"，而非经济发展的主导者', options: { bullet: true, breakLine: true } },
    { text: "强调有限政府的必要性：不做过多干预", options: { bullet: true, breakLine: true } },
    { text: "教育、医疗等社会服务：政府承担一定责任", options: { bullet: true } }
  ], {
    x: 0.7, y: 4.15, w: 8.6, h: 1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    paraSpaceAfter: 4
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("59", {
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
  pres.writeFile({ fileName: "slide-59-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
