// slide-05.js - Content Page: 《国富论》与《道德情操论》对比
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '《国富论》与《道德情操论》对比'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page title
  slide.addText("《国富论》与《道德情操论》对比", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("The Wealth of Nations vs. The Theory of Moral Sentiments", {
    x: 0.5, y: 0.95, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Georgia",
    color: theme.light, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Two book comparison - side by side cards
  const cardY = 1.5;
  const cardW = 4.3;
  const cardH = 3.5;

  // Left card - 国富论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 3, angle: 135, color: "000000", opacity: 0.12 }
  });

  // Left card accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardW, h: 0.12,
    fill: { color: theme.primary }
  });

  // Book icon placeholder (rectangle as book shape)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: cardY + 0.4, w: 0.8, h: 1.0,
    fill: { color: theme.primary }
  });

  slide.addText("国富论", {
    x: 1.8, y: cardY + 0.5, w: 2.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("1776年出版", {
    x: 1.8, y: cardY + 0.95, w: 2.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Left card content
  const leftContent = [
    { text: "核心主题", options: { bold: true, breakLine: true } },
    { text: "财富的性质与原因", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "核心概念", options: { bold: true, breakLine: true } },
    { text: "· 分工与专业化", options: { breakLine: true } },
    { text: "· 看不见的手", options: { breakLine: true } },
    { text: "· 自由市场", options: { breakLine: true } },
    { text: "· 资本积累", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "核心问题", options: { bold: true, breakLine: true } },
    { text: "如何致富？国家如何富强？", options: {} }
  ];

  slide.addText(leftContent, {
    x: 0.8, y: cardY + 1.5, w: 3.8, h: 1.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Right card - 道德情操论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 3, angle: 135, color: "000000", opacity: 0.12 }
  });

  // Right card accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: cardY, w: cardW, h: 0.12,
    fill: { color: theme.accent }
  });

  // Book icon
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: cardY + 0.4, w: 0.8, h: 1.0,
    fill: { color: theme.accent }
  });

  slide.addText("道德情操论", {
    x: 6.5, y: cardY + 0.5, w: 2.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("1759年出版", {
    x: 6.5, y: cardY + 0.95, w: 2.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Right card content
  const rightContent = [
    { text: "核心主题", options: { bold: true, breakLine: true } },
    { text: "道德行为的根源", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "核心概念", options: { bold: true, breakLine: true } },
    { text: "· 同理心", options: { breakLine: true } },
    { text: "· 公正的旁观者", options: { breakLine: true } },
    { text: "· 美德与自控", options: { breakLine: true } },
    { text: "· 正义与仁慈", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "核心问题", options: { bold: true, breakLine: true } },
    { text: "道德从何而来？何为正义？", options: {} }
  ];

  slide.addText(rightContent, {
    x: 5.5, y: cardY + 1.5, w: 3.8, h: 1.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Bottom connection note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 5.15, w: 5, h: 0.35,
    fill: { color: theme.secondary, transparency: 90 }
  });

  slide.addText("两本书共同构成斯密思想体系：市场智慧 + 道德哲学", {
    x: 2.5, y: 5.15, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
