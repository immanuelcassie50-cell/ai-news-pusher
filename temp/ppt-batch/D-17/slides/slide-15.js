// D-17 Q&A
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 15,
  title: 'Q&A'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText("Q & A", {
    x: 0.6, y: 1.6, w: 9, h: 1.5,
    fontSize: 96, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("评委 · 学员 · 领导 · 现场交流", {
    x: 0.6, y: 3.0, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.3, y: 3.7, w: 1.4, h: 0.06,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.3, y: 4.0, w: 1.4, h: 1.4,
    fill: { color: "FFFFFF" }, line: { type: "none" }
  });
  slide.addText("扫码 · 提示词库\n（预留）", {
    x: 4.3, y: 4.0, w: 1.4, h: 1.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });
  slide.addText("德赛西威 AI 赋能课程评审全流程 · D-17 内训师示范课", {
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
  pres.writeFile({ fileName: "slide-15-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
