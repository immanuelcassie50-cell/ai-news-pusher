// slide-27.js - Content: 练习3-B：扮演领导
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 27,
  title: '练习3-B：扮演领导'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("练习 3-B：扮演「第一次听到的领导」", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Purpose card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("目的：检验你的价值描述是否真的「说清楚了」，而不是只有你自己听得懂。", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Rule card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.2, w: 9, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("规则", {
    x: 0.7, y: 2.3, w: 1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("把你的价值损失描述念给旁边的人听，让他们扮演「第一次听到这件事的部门领导」，用这一个问题回应你：", {
    x: 0.7, y: 2.7, w: 8.5, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Question box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 9, h: 1.0,
    fill: { color: theme.accent }
  });

  slide.addText("「这个改善如果启动，大概需要什么资源？值不值得？」", {
    x: 0.7, y: 3.95, w: 8.6, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };