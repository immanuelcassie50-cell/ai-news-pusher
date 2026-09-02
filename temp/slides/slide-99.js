// slide-99.js - Real Division (Comparison Slide)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 99,
  title: '真正的分化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("真正的分化", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Two comparison cards
  // Card 1 - Left (Replaced)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.3, w: 4.2, h: 2.9,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Card 1 header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 4.2, h: 0.55,
    fill: { color: theme.light }
  });

  slide.addText("被替代的", {
    x: 0.5, y: 1.3, w: 4.2, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Card 1 content
  slide.addText([
    { text: "只会算冲稳保、不做前面判断题", options: { bullet: true, breakLine: true } },
    { text: "工作内容跟AI工具重合度最高", options: { bullet: true, breakLine: true } },
    { text: "可被标准化的流程", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.0, w: 3.8, h: 2.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "top",
    paraSpaceAfter: 10
  });

  // Card 2 - Right (Thriving)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 1.3, w: 4.2, h: 2.9,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Card 2 header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.3, w: 4.2, h: 0.55,
    fill: { color: theme.accent }
  });

  slide.addText("活得更好的", {
    x: 5.3, y: 1.3, w: 4.2, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Card 2 content
  slide.addText([
    { text: "信息过滤能力", options: { bullet: true, breakLine: true } },
    { text: "产业判断力", options: { bullet: true, breakLine: true } },
    { text: "倒推规划能力", options: { bullet: true, breakLine: true } },
    { text: "门槛被抬高", options: { bullet: true } }
  ], {
    x: 5.5, y: 2.0, w: 3.8, h: 2.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "top",
    paraSpaceAfter: 10
  });

  // VS divider in center
  slide.addShape(pres.shapes.OVAL, {
    x: 4.5, y: 2.4, w: 0.8, h: 0.8,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 2 }
  });
  slide.addText("VS", {
    x: 4.5, y: 2.4, w: 0.8, h: 0.8,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 10 },
    rectRadius: 0.08
  });
  slide.addText("核心分化：是否投入了只有人才能做的判断力", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("99", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
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
  pres.writeFile({ fileName: "slide-99-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
