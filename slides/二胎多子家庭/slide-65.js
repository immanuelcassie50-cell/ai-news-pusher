// slide-65.js - 茶歇页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'break',
  index: 65,
  title: '茶歇时间'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: -1, y: -1, w: 3, h: 3,
    fill: { color: theme.primary, transparency: 70 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8, y: 3.5, w: 3, h: 3,
    fill: { color: theme.accent, transparency: 70 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 7, y: -0.5, w: 1.5, h: 1.5,
    fill: { color: theme.light, transparency: 60 }
  });

  // Main content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 1.8, w: 5, h: 2.5,
    fill: { color: "FFFFFF", transparency: 10 }
  });

  // Title
  slide.addText("茶歇时间", {
    x: 0.5, y: 2.0, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("休息一下，10分钟后继续", {
    x: 0.5, y: 3.1, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 3.8, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Tip text
  slide.addText("站起来活动活动，补充水分", {
    x: 0.5, y: 4.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
