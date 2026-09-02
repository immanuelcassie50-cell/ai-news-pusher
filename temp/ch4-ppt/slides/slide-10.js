// slide-10.js - AI失忆问题
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: 'AI失忆问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("AI失忆问题", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 问题说明
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.4,
    fill: { color: "FFF0F0" },
    rectRadius: 0.1
  });
  slide.addText("症状", {
    x: 0.7, y: 1.35, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("对话进行很多轮、内容积累很长时，AI会开始\"忘记\"前面的信息。第5轮的回答和第1轮说的某个设定产生矛盾，或者重复解决第3轮已经解决的问题。", {
    x: 0.7, y: 1.8, w: 8.6, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // 应对方式
  slide.addText("应对方式", {
    x: 0.5, y: 3.0, w: 3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // 方式1
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.5, w: 4.4, h: 1.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 3.65, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("1", {
    x: 0.7, y: 3.65, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("主动提醒AI关键上下文", {
    x: 1.4, y: 3.65, w: 3.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("在新一轮开头加一句：\"基于前面确认的XXX，这轮我们做YYY\"", {
    x: 0.7, y: 4.25, w: 4, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "top"
  });

  // 方式2
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 3.5, w: 4.4, h: 1.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 5.3, y: 3.65, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 5.3, y: 3.65, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("开新对话继续", {
    x: 6.0, y: 3.65, w: 3.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("如果对话太长，考虑开一个新对话，把前面已经确认的关键信息重新打一遍给AI", {
    x: 5.3, y: 4.25, w: 4, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };