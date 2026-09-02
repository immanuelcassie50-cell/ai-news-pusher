// slide-11_章节扉页_第一章 - 章节分隔页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 11,
  title: '01 AI时代的创新背景'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // 左侧大编号
  slide.addText("01", {
    x: 0.5, y: 0.8, w: 4, h: 2.5,
    fontSize: 120, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 章节标题
  slide.addText("AI时代的创新背景", {
    x: 0.5, y: 3.0, w: 8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("理解AI技术演进与创新范式转移", {
    x: 0.5, y: 3.8, w: 6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 2, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 右侧装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 0, w: 1.5, h: 5.625,
    fill: { color: theme.accent, transparency: 20 }, line: { type: 'none' }
  });

  // 页码
  slide.addText("11", {
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
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
