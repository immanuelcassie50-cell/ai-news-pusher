// slide-46.js - 模块四封面 (Section Divider)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 46,
  title: '冲突转化四步法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("04", {
    x: 0.6, y: 1.5, w: 2, h: 1.2,
    fontSize: 80, fontFace: "Arial",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("冲突转化四步法", {
    x: 0.6, y: 2.7, w: 8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("从对抗到合作", {
    x: 0.6, y: 3.5, w: 6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.2, w: 3, h: 0.02,
    fill: { color: theme.accent }
  });

  // Right decorative block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 1.5, w: 2.2, h: 3.0,
    fill: { color: theme.primary }
  });

  slide.addText("STEA", {
    x: 7.5, y: 2.5, w: 2.2, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("冲突\n转化", {
    x: 7.5, y: 3.1, w: 2.2, h: 1.0,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-46-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
