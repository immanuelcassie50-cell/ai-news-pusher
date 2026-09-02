// slide-56.js - 第五模块分隔页：综合应用
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 56,
  title: '综合应用'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative geometric shapes
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }
  });

  // Accent diagonal stripe
  slide.addShape("rect", {
    x: -1, y: 3.5, w: 12, h: 0.15,
    fill: { color: theme.accent },
    rotate: -5
  });

  // Large module number
  slide.addText("05", {
    x: 0.5, y: 0.8, w: 3, h: 1.5,
    fontSize: 72, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Module label
  slide.addText("MODULE 5", {
    x: 0.5, y: 2.2, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.light, bold: false,
    align: "left", valign: "middle",
    charSpacing: 4
  });

  // Main title
  slide.addText("综合应用", {
    x: 0.5, y: 2.8, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("地缘政治范式的现实分析与未来展望", {
    x: 0.5, y: 3.8, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.0, w: 0.5, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("56", {
    x: 9.3, y: 5.0, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Decorative circles
  slide.addShape("ellipse", {
    x: 7.5, y: 0.5, w: 2, h: 2,
    fill: { color: theme.secondary, transparency: 80 }
  });
  slide.addShape("ellipse", {
    x: 8.2, y: 1.2, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 70 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-56-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
