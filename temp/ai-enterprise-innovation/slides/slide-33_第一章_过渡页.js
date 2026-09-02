// slide-33_第一章_过渡页 - 引导页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 33,
  title: '进入下一章'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // 装饰元素
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.3, h: 5.625,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 章节编号
  slide.addText("02", {
    x: 0.5, y: 1.5, w: 2, h: 1.5,
    fontSize: 80, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 下一章标题
  slide.addText("企业创新的六大挑战", {
    x: 0.5, y: 3.0, w: 8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("理解挑战，才能更好地应对挑战", {
    x: 0.5, y: 3.8, w: 6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 2, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 页码
  slide.addText("33", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-33-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
