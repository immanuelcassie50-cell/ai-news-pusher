// slide-03.js - 模块一章节页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 3,
  title: '模块一：多轮对话的底层节奏'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 大编号
  slide.addText("01", {
    x: 0.5, y: 1.5, w: 2.5, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("多轮对话的底层节奏", {
    x: 3, y: 2, w: 6.5, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // 副标题
  slide.addText("输入 → 生成 → 判断 → 迭代", {
    x: 3, y: 3.1, w: 6.5, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "CCCCCC",
    align: "left", valign: "middle"
  });

  // 红色装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.06,
    fill: { color: theme.primary }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3C",
    secondary: "4A4A4A",
    accent: "C43C3C",
    light: "888888",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };