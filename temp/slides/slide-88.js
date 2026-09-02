// slide-88.js - Case: The College Student
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 88,
  title: '案例：大二男生的话'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Light gray background
  slide.background = { color: theme.bg };

  // Title with accent
  slide.addText("案例：大二男生的话", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Story card background
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 3.6,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Story content - paragraph 1
  slide.addText("学生大二了，通过之前服务过的家长找到我，不是来填志愿的，是来聊天的。", {
    x: 0.8, y: 1.5, w: 8.4, h: 0.6,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Story content - paragraph 2
  slide.addText("他现在读的专业，其实是当年我给他和他父母一起讨论出来的方案。", {
    x: 0.8, y: 2.1, w: 8.4, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Story content - paragraph 3
  slide.addText("读得还不错，成绩也可以。", {
    x: 0.8, y: 2.55, w: 8.4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Key quote - highlighted
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.0, w: 8.4, h: 0.9,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });

  slide.addText("“我一直觉得，这个专业是你们几个大人商量出来给我的，不是我自己选的”", {
    x: 1.0, y: 3.1, w: 8.0, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle",
    italic: true
  });

  // Closing statement
  slide.addText("这句话让我很长时间没缓过来。", {
    x: 0.8, y: 4.1, w: 8.4, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "top",
    italic: true
  });

  // Page number badge - circle style, bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("88", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-88-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
