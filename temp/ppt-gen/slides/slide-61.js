// slide-61.js - Part 7 Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 61,
  title: '第七部分：综合演练与行动计划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("07", {
    x: 0.6, y: 1.5, w: 2, h: 1.2,
    fontSize: 80, fontFace: "Arial",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("综合演练与行动计划", {
    x: 0.6, y: 2.7, w: 8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("将所学知识应用于真实变革场景", {
    x: 0.6, y: 3.5, w: 6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.2, w: 3, h: 0.02,
    fill: { color: theme.accent }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-61-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
