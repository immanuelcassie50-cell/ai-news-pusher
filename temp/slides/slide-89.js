// slide-89.js - Structural Bias
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '结构性偏向'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Light gray background
  slide.background = { color: theme.bg };

  // Title
  slide.addText("结构性偏向", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Left column - Problem card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.25, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Left card header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.25, w: 4.3, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("问题根源", {
    x: 0.7, y: 1.3, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Left card content
  slide.addText([
    { text: "付钱的人和真正承担选择后果的人是分开的", options: { bullet: true, breakLine: true } },
    { text: "这种结构天然会让从业者更容易向付钱方（家长）倾斜", options: { bullet: true, breakLine: true } },
    { text: "把家长的满意度当成第一优先级", options: { bullet: true, breakLine: true } },
    { text: "孩子的真实意愿容易在这个结构里被稀释", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.85, w: 3.9, h: 1.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "top",
    paraSpaceAfter: 6
  });

  // Right column - Solution card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.25, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Right card header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.25, w: 4.3, h: 0.5,
    fill: { color: theme.accent }
  });

  slide.addText("认知调整", {
    x: 5.4, y: 1.3, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Right card content
  slide.addText("意识到这个结构性偏向后：", {
    x: 5.4, y: 1.85, w: 3.9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText("服务对象应该是那个要为这个选择过接下来四年甚至更久的人", {
    x: 5.4, y: 2.25, w: 3.9, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "top"
  });

  // Bottom insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 0.85,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });

  slide.addText("核心洞察：谁是真正的服务对象，决定了职业心态的根基", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge - circle style, bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("89", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-89-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
