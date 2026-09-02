// slide-08.js - Section Divider: Part 3
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'section',
  index: 8,
  title: '归因分析篇'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  // Large number
  slide.addText("03", {
    x: 0.8, y: 1.5, w: 3, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    transparency: 20
  });

  // Section title
  slide.addText("归因分析篇", {
    x: 0.8, y: 2.2, w: 8, h: 1,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("因果归因 / 竞争性假说 / 调研方案", {
    x: 0.8, y: 3.3, w: 8, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, transparency: 20
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.0, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("8", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
