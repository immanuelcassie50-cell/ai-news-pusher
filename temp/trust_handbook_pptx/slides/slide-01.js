// slide-01.js - Cover Page
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '商业讲师信任护城河'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Top decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.8, w: 3, h: 0.03,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("商业讲师信任护城河", {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left"
  });

  // Subtitle
  slide.addText("学员手册", {
    x: 0.5, y: 2.4, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left"
  });

  // Decorative line under subtitle
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.3, w: 5, h: 0.03,
    fill: { color: theme.accent }
  });

  // Info section
  slide.addText("学员姓名：_______________________", {
    x: 0.5, y: 3.8, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("课程日期：_______________________", {
    x: 0.5, y: 4.25, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("联系方式：_______________________", {
    x: 5, y: 3.8, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("所属公司：_______________________", {
    x: 5, y: 4.25, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Footer
  slide.addText("本手册属于私人文件，未经许可不得翻印", {
    x: 0.5, y: 5.0, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addText("版权声明：本课程版权归罗宏伟所有，翻版必究", {
    x: 6.5, y: 5.0, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "999999", align: "right"
  });

  // Right decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 1.5, w: 1.2, h: 3,
    fill: { color: theme.light, transparency: 50 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "424242",
    accent: "C62828",
    light: "FFCDD2",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
