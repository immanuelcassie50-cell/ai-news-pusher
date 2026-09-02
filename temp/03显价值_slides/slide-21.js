// slide-21.js - Content: 翻译③：整合成汇报语言
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 21,
  title: '翻译③：整合成汇报语言'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("翻译③：整合成汇报语言", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Quote card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.15, h: 2.4,
    fill: { color: theme.accent }
  });

  slide.addText("「我们研发部每月有约135,000元的人力成本浪费在需求确认的返工和对齐上，占整个研发人力成本的约18%。", {
    x: 0.85, y: 1.3, w: 8.4, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("如果引入标准化需求模板，把确认轮次从3轮降到1轮，预计每月节约54,000元人力成本，同时功能上线周期缩短7天，帮助业务端减少机会损失。」", {
    x: 0.85, y: 2.15, w: 8.4, h: 1.1,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Key elements
  slide.addText("汇报要点", {
    x: 0.5, y: 3.7, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const elements = ["数字具体化", "占比说清楚", "改善后效果可量化"];
  elements.forEach((el, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.15, w: 2.9, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(el, {
      x: x, y: 4.15, w: 2.9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Question
  slide.addText("这段汇报和「我们流程有问题」相比，差异在哪里？", {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };