// slide-30.js - Section Divider: 第四章 产业判断
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 30,
  title: '第四章 产业判断'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent block - tall vertical bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.4, w: 0.12, h: 4.8,
    fill: { color: theme.accent },
    rectRadius: 0.06
  });

  // Chapter number - large accent color
  slide.addText("第四章", {
    x: 0.7, y: 1.2, w: 4, h: 1.0,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle", margin: 0
  });

  // Main title - bold and prominent
  slide.addText("产业判断", {
    x: 0.7, y: 2.3, w: 8, h: 1.0,
    fontSize: 52, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    valign: "middle", margin: 0
  });

  // Subtitle
  slide.addText("判断五年后这行还在不在", {
    x: 0.7, y: 3.4, w: 8, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.light,
    valign: "middle", margin: 0
  });

  // Decorative line under subtitle
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.1, w: 3.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("30", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-30-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
