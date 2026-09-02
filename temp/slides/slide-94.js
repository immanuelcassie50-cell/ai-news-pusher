// slide-94.js - 衡量标准
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "content",
  index: 94,
  title: "衡量标准"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: t.primary }
  });
  slide.addText("衡量标准", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Main question card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.4,
    fill: { color: "FFFFFF" },
    line: { color: t.accent, width: 2 },
    rectRadius: 0.1
  });

  // Question label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 1.25, w: 1.2, h: 0.4,
    fill: { color: t.accent },
    rectRadius: 0.08
  });
  slide.addText("关键问题", {
    x: 0.7, y: 1.25, w: 1.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Main question text
  slide.addText("如果这个孩子五年后回头看这次选择", {
    x: 0.7, y: 1.8, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: t.secondary
  });

  slide.addText("会不会觉得这是一个基于他自己真实情况做出的", {
    x: 0.7, y: 2.3, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: t.secondary
  });

  slide.addText("经得起时间检验的判断？", {
    x: 0.7, y: 2.8, w: 8.5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: t.primary, bold: true
  });

  // Conclusion card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.7, w: 9, h: 1.0,
    fill: { color: t.primary },
    rectRadius: 0.1
  });
  slide.addText("如果这个标准能过：转介绍不转介绍，好评写不写，跟判断本身的质量没关系", {
    x: 0.7, y: 3.85, w: 8.5, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    valign: "middle"
  });

  // Page number badge - bottom left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("94", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  await pres.writeFile({ fileName: "D:/CC/temp/slides/slide-94-preview.pptx" });
  console.log("Created slide-94-preview.pptx");
}

main().catch(console.error);

module.exports = { createSlide, slideConfig };
