// slide-16.js - 核心认知
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "quote-card", index: 16, title: "核心认知" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 背景大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 装饰矩形
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.3, h: 5.625,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });

  // 顶部小字
  slide.addText("CORE INSIGHT", {
    x: 0.8, y: 0.6, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.redLight, charSpacing: 8, bold: true
  });

  // 装饰线
  slide.addShape("rect", {
    x: 0.8, y: 1.0, w: 0.5, h: 0.04,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });

  // 大引号
  slide.addText('"', {
    x: 0.6, y: 0.9, w: 1.2, h: 1.2,
    fontSize: 100, fontFace: "Arial",
    color: theme.redDeep, bold: true
  });

  // 核心金句 - 拆为三行
  slide.addText("失败", {
    x: 1.0, y: 1.5, w: 8.5, h: 1.0,
    fontSize: 80, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("= 设计问题", {
    x: 1.0, y: 2.45, w: 8.5, h: 0.8,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("不是人的问题。", {
    x: 1.0, y: 3.25, w: 8.5, h: 0.8,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: theme.goldAccent, bold: true
  });

  // 底部细线
  slide.addShape("rect", {
    x: 1.0, y: 4.4, w: 8, h: 0.02,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });

  // 解释
  slide.addText("行动计划失败，很少是因为\"人不努力\"或\"方向不对\"。\n大多数时候，是计划在设计上只考虑了\"理想状态的自己\"，\n没有考虑\"日常状态的自己\"。", {
    x: 1.0, y: 4.55, w: 8, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redLight, lineSpacing: 18
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
