// slide-24.js - M2 章节封面
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'section', index: 24, title: '模块 2：立场 vs 利益' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText("M2", {
    x: 0.6, y: 0.6, w: 3.5, h: 2.5,
    fontSize: 200, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("MODULE  TWO", {
    x: 4.0, y: 1.4, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, charSpacing: 8
  });

  slide.addText("立场 vs 利益", {
    x: 4.0, y: 1.8, w: 5.5, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("谈判概念密度最高的部分", {
    x: 4.0, y: 2.7, w: 5.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 3.3, w: 1, h: 0.02,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  slide.addText("核心内容：", {
    x: 4.0, y: 3.45, w: 5.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  立场与利益的本质区别\n·  三个深度案例（薪资 / 跨部门 / 价格）\n·  利益挖掘的提问技术三件套\n·  利益的四个维度（实质/程序/关系/原则）\n·  立场固守的心理机制 + 战略性信息透明", {
    x: 4.0, y: 3.75, w: 5.5, h: 1.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, lineSpacing: 16
  });

  slide.addText("学习时长：2.5 - 3 小时（含演练）", {
    x: 0.6, y: 4.95, w: 6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("24", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-24-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
