// slide-34.js - 茶歇页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'break',
  index: 34,
  title: '茶歇时间'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Center content
  slide.addText("茶歇时间", {
    x: 0.5, y: 2.0, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("休息一下，10分钟后继续", {
    x: 0.5, y: 3.0, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Decorative elements
  slide.addShape(pres.shapes.OVAL, {
    x: 1.5, y: 1.0, w: 1.5, h: 1.5,
    fill: { color: theme.primary, transparency: 90 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 7.0, y: 3.5, w: 2.0, h: 2.0,
    fill: { color: theme.accent, transparency: 85 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 8.0, y: 1.2, w: 1.0, h: 1.0,
    fill: { color: theme.light, transparency: 70 }
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.0, w: 10, h: 0.625,
    fill: { color: theme.secondary }
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
  pres.writeFile({ fileName: "slide-34-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
