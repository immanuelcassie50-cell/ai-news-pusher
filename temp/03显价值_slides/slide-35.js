// slide-35.js - Summary: 你会带走什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 35,
  title: '你会带走什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Title
  slide.addText("你会带走什么", {
    x: 0.5, y: 0.5, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 1.25, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Three takeaways
  const takeaways = [
    "理解为什么「干了很多却没人重视」，往往不是贡献不够，而是语言不对",
    "掌握3种价值换算公式，能把浪费清单里的任意一条翻译成业务损失数字",
    "完成价值损失描述表，让你的改善提案在管理层面前真正有重量"
  ];

  takeaways.forEach((takeaway, i) => {
    const y = 1.7 + i * 1.0;

    slide.addShape(pres.shapes.OVAL, {
      x: 1.0, y: y + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 1.0, y: y + 0.1, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(takeaway, {
      x: 1.7, y: y, w: 7.5, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };