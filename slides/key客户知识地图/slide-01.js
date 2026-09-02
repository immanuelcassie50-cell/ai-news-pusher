// slide-01.js - Cover Page (封面)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '关键客户知识地图与知识传承'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Top decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 3.5, h: 0.03,
    fill: { color: theme.primary }
  });

  // Main title
  slide.addText("关键客户知识地图与知识传承", {
    x: 0.5, y: 2.0, w: 8.5, h: 1.0,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "top"
  });

  // Subtitle
  slide.addText("课程说明书", {
    x: 0.5, y: 3.1, w: 8.5, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top"
  });

  // Bottom decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 2.0, h: 0.03,
    fill: { color: theme.accent }
  });

  // Version and author info
  slide.addText([
    { text: "V1.0", options: { bold: true } },
    { text: "  |  ", options: { bold: false } },
    { text: "罗宏伟", options: { bold: false } }
  ], {
    x: 0.5, y: 4.7, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left", valign: "top"
  });

  // Right side decorative block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 0, w: 2.5, h: 5.625,
    fill: { color: theme.light, transparency: 60 }
  });

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: 8.2, y: 1.5, w: 1.2, h: 1.2,
    fill: { color: theme.primary, transparency: 20 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.6, y: 3.0, w: 0.8, h: 0.8,
    fill: { color: theme.accent, transparency: 30 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3A",
    secondary: "4A4E69",
    accent: "9A8C98",
    light: "E8E8E8",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
