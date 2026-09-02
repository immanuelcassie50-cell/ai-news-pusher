// slide-102.js - Chapter 15 Section Divider: 新手到专家
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "section-divider",
  index: 102,
  title: "第十五章 新手到专家"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.primary };

  // Decorative circle (top right)
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: -1.5, w: 4, h: 4,
    fill: { color: t.accent, transparency: 60 }
  });

  // Decorative circle (bottom left)
  slide.addShape(pres.shapes.OVAL, {
    x: -1, y: 4, w: 3, h: 3,
    fill: { color: t.secondary, transparency: 70 }
  });

  // Chapter number badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 1.8, h: 0.5,
    fill: { color: t.accent },
    rectRadius: 0.1
  });
  slide.addText("第十五章", {
    x: 0.5, y: 1.2, w: 1.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Main title
  slide.addText("新手到专家", {
    x: 0.5, y: 2.0, w: 9, h: 1.2,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("那道坎，十年都没跨过去", {
    x: 0.5, y: 3.3, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: t.light
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 3, h: 0.06,
    fill: { color: t.accent }
  });

  // Page number badge (bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("102", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-102-preview.pptx" })
    .then(() => console.log("Created slide-102-preview.pptx"));
}
