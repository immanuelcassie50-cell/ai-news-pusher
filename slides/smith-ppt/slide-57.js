// slide-57.js - Content: 重新理解斯密
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 57,
  title: '重新理解斯密'
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
  slide.addText("重新理解斯密", {
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

  // Left column - main insight card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 4.3, h: 3.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left card accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 0.08, h: 3.6,
    fill: { color: theme.primary }
  });

  slide.addText("核心观点", {
    x: 0.75, y: 1.45, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText('斯密被简化为"自由市场之父"，但其思想远比这复杂', {
    x: 0.75, y: 1.85, w: 3.8, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText([
    { text: "《国富论》与《道德情感论》共同构成完整的人性理论", options: { bullet: true, breakLine: true } },
    { text: "斯密并非无限制市场经济的支持者", options: { bullet: true, breakLine: true } },
    { text: "理解斯密需要回到他所在的时代与问题意识", options: { bullet: true } }
  ], {
    x: 0.75, y: 2.7, w: 3.8, h: 2,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    paraSpaceAfter: 8
  });

  // Right column - key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.3, w: 4.4, h: 1.5,
    fill: { color: theme.secondary }
  });

  slide.addText("为什么需要重新理解？", {
    x: 5.3, y: 1.45, w: 4, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });

  slide.addText("现代解读往往将斯密简化为市场原教旨主义的代言人，这种误读既不符合斯密原意，也误导了当代政策讨论。", {
    x: 5.3, y: 1.85, w: 4, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Bottom right - two small cards
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.0, w: 2.1, h: 1.9,
    fill: { color: theme.light },
    transparency: 30
  });

  slide.addText("经济斯密", {
    x: 5.2, y: 3.15, w: 1.9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("看不见的手\n市场机制", {
    x: 5.2, y: 3.55, w: 1.9, h: 1.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.4, y: 3.0, w: 2.1, h: 1.9,
    fill: { color: theme.light },
    transparency: 30
  });

  slide.addText("道德斯密", {
    x: 7.5, y: 3.15, w: 1.9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("同情心\n正义感\n旁观者", {
    x: 7.5, y: 3.55, w: 1.9, h: 1.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("57", {
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
  pres.writeFile({ fileName: "slide-57-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
