// D-16 Q&A 收尾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 8,
  title: 'Q&A'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // 大 Q&A 字
  slide.addText("Q & A", {
    x: 0.6, y: 1.6, w: 9, h: 1.5,
    fontSize: 96, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  // 副标题
  slide.addText("评委 · 学员 · 领导 · 现场交流", {
    x: 0.6, y: 3.0, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  // 装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.3, y: 3.7, w: 1.4, h: 0.06,
    fill: { color: theme.accent }, line: { type: "none" }
  });

  // 二维码占位
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.3, y: 4.0, w: 1.4, h: 1.4,
    fill: { color: "FFFFFF" }, line: { type: "none" }
  });
  slide.addText("扫码 · 评审信息门户\n（预留）", {
    x: 4.3, y: 4.0, w: 1.4, h: 1.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // 页码
  slide.addText("德赛西威 AI 赋能课程评审全流程", {
    x: 0.6, y: 5.2, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
