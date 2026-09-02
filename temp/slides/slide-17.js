// slide-17.js - Availability Bias
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 17,
  title: '可得性偏差'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("可得性偏差", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Concept explanation box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 1.0, w: 9.2, h: 0.8,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });
  slide.addText("人在判断时，优先使用最容易获取、最摆在眼前的信息", {
    x: 0.6, y: 1.0, w: 8.8, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Two comparison boxes
  // Left box - Easy info (分数)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.3, h: 2.4,
    fill: { color: theme.accent, transparency: 92 },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });
  slide.addText("容易获取的信息", {
    x: 0.5, y: 2.1, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });
  slide.addText("分数", {
    x: 0.5, y: 2.6, w: 4.3, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });
  slide.addText([
    { text: "清晰", options: { breakLine: true } },
    { text: "可比", options: { breakLine: true } },
    { text: "不需要花时间理解", options: {} }
  ], {
    x: 0.7, y: 3.3, w: 3.9, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // Right box - Important info (人)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 2.0, w: 4.3, h: 2.4,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 2 },
    rectRadius: 0.1
  });
  slide.addText("重要的信息", {
    x: 5.2, y: 2.1, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });
  slide.addText("人是谁", {
    x: 5.2, y: 2.6, w: 4.3, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });
  slide.addText([
    { text: "模糊", options: { breakLine: true } },
    { text: "需要花时间聊", options: { breakLine: true } },
    { text: "聊出来还未必有用", options: {} }
  ], {
    x: 5.4, y: 3.3, w: 3.9, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // Arrow between boxes
  slide.addText("VS", {
    x: 4.5, y: 2.9, w: 1, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: theme.light, bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 4.6, w: 7, h: 0.6,
    fill: { color: theme.light, transparency: 70 },
    rectRadius: 0.08
  });
  slide.addText("结果：最先处理最不需要处理的部分", {
    x: 1.5, y: 4.6, w: 7, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("17", {
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
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-17-preview.pptx" })
    .then(() => console.log("Preview saved: slide-17-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
