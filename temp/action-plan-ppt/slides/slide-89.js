// slide-89.js - 章节扉页「第三部分：四个行为设计工具」
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "divider", index: 89, title: "第三部分 四个行为设计工具" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深红色大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.2, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧顶部小字
  slide.addText("PART", {
    x: 0.5, y: 0.6, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 8, bold: true
  });

  // 左侧装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 0.5, h: 0.04,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });

  // 巨大数字
  slide.addText("03", {
    x: 0.5, y: 1.4, w: 3.5, h: 2.5,
    fontSize: 200, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  // 左侧底部小字
  slide.addText("FOUR TOOLS", {
    x: 0.5, y: 4.2, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 4
  });

  slide.addText("Behavior Design Toolkit", {
    x: 0.5, y: 4.6, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.redLight
  });

  // 右侧主标题
  slide.addText("四个行为设计工具", {
    x: 4.6, y: 1.5, w: 5.2, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("把诊断变成行动", {
    x: 4.6, y: 2.15, w: 5.2, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 副标题
  slide.addText("对应 B=MAP 弱点的四种解决方案", {
    x: 4.6, y: 3.1, w: 5.2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 装饰线
  slide.addShape("rect", {
    x: 4.6, y: 3.6, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 引言
  slide.addText("诊断完之后，靠什么把任务变得\"会做\"", {
    x: 4.6, y: 3.8, w: 5.2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true
  });

  // 右侧小字标签
  slide.addText("SECTION 03", {
    x: 4.6, y: 4.6, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
