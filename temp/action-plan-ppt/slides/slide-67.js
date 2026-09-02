// slide-67.js - M 的正确用法：点燃启动 vs 维持运转
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "usage", index: 67, title: "M 的正确用法" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("M 的正确用法", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("用动机去点燃启动，而不是用动机去维持运转", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左栏 - 点燃启动
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 3.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("M 的最佳用途", {
    x: 0.7, y: 1.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redLight, bold: true
  });

  slide.addText("点燃启动", {
    x: 0.7, y: 1.95, w: 4, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addShape("rect", {
    x: 0.7, y: 2.55, w: 0.4, h: 0.04,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });

  slide.addText("帮你克服第一次的惰性", {
    x: 0.7, y: 2.7, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("让一个新行为发生一次", {
    x: 0.7, y: 3.0, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("在形成节奏之前推一把", {
    x: 0.7, y: 3.3, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  slide.addText("✓ 适合用 M", {
    x: 0.7, y: 3.9, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.goldAccent, bold: true
  });
  slide.addText("启动一个新的计划", {
    x: 0.7, y: 4.2, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });
  slide.addText("推动一个从未做过的尝试", {
    x: 0.7, y: 4.5, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });

  // 右栏 - 维持运转
  slide.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.4, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  slide.addText("M 不应承担", {
    x: 5.3, y: 1.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  slide.addText("维持运转", {
    x: 5.3, y: 1.95, w: 4, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  slide.addShape("rect", {
    x: 5.3, y: 2.55, w: 0.4, h: 0.04,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  slide.addText("每周、每天、每次的执行", {
    x: 5.3, y: 2.7, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("当外部条件变差时坚持", {
    x: 5.3, y: 3.0, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("在状态低谷时仍能发生", {
    x: 5.3, y: 3.3, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("✗ 不应只用 M", {
    x: 5.3, y: 3.9, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("靠提醒「这件事很重要」", {
    x: 5.3, y: 4.2, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("靠反复宣讲意义", {
    x: 5.3, y: 4.5, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("长期重复的任务，需要 A 和 P 承担主要工作", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
