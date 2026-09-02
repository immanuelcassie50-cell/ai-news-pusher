// slide-57.js - Section Divider: Chapter 8
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'section-divider', index: 57, title: '第八章 志愿表的真正意义' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.accent }
  });

  // Decorative horizontal line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 2.4, w: 2.2, h: 0.03,
    fill: { color: theme.light }
  });

  // Chapter label
  slide.addText("第八章", {
    x: 0.7, y: 1.75, w: 2.5, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Main title
  slide.addText("志愿表的真正意义", {
    x: 0.7, y: 2.55, w: 8, h: 0.9,
    fontSize: 42, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("第一次为自己做主", {
    x: 0.7, y: 3.5, w: 5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.bg
  });

  // Decorative circles (top right)
  slide.addShape(pres.shapes.OVAL, {
    x: 8.0, y: 0.6, w: 1.3, h: 1.3,
    fill: { color: theme.accent, transparency: 35 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.7, y: 1.7, w: 0.7, h: 0.7,
    fill: { color: theme.secondary, transparency: 45 }
  });

  // Bottom decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.8, w: 3, h: 0.04,
    fill: { color: theme.light, transparency: 50 }
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.accent }
  });
  slide.addText("57", {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-57-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
