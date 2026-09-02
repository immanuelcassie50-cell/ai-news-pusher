// slide-31.js - Content: 核心观点 (Quote style)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 31,
  title: '核心观点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("核心观点", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Quote card background - large centered card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 },
    rectRadius: 0.1
  });

  // Top decorative bar on quote card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 0.08,
    fill: { color: theme.accent }
  });

  // Left accent bar on quote card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.28, w: 0.1, h: 3.32,
    fill: { color: theme.accent }
  });

  // Opening quote mark - large decorative
  slide.addText("“", {
    x: 0.8, y: 1.5, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  // Main quote text - centered and large
  slide.addText("专业介绍讲的是这个专业现在是什么样，产业判断讲的是四年后这个孩子毕业时，这个行业会变成什么样——这中间隔着四年，很多行业四年就能变一次样。", {
    x: 1.0, y: 2.2, w: 7.8, h: 1.8,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle",
    lineSpacing: 36
  });

  // Closing quote mark - large decorative
  slide.addText("”", {
    x: 8.4, y: 3.6, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  // Bottom decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 4.3, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("31", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
