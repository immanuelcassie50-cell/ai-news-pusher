// slide-10.js - Section Divider: Part 4
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'section',
  index: 10,
  title: '标准决策篇'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.accent };

  // Large number
  slide.addText("04", {
    x: 0.8, y: 1.5, w: 3, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    transparency: 20
  });

  // Section title
  slide.addText("标准决策篇", {
    x: 0.8, y: 2.2, w: 8, h: 1,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("判断标准 / 隐藏标准 / 价值观冲突", {
    x: 0.8, y: 3.3, w: 8, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", transparency: 20
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.8, y: 4.0, w: 2, h: 0.05,
    fill: { color: "FFFFFF" }
  });

  // Page number
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: "FFFFFF", transparency: 50 }
  });
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
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
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
