// slide-25.js - 象征性执行
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "phenomenon", index: 25, title: "象征性执行" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("SYMBOLIC EXECUTION", {
    x: 0.5, y: 0.25, w: 4.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 标题
  slide.addText("象征性执行", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 大字金句
  slide.addText("形态还在，内核已空。", {
    x: 0.5, y: 1.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.95, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("苏敏的应对：加强监督，要求团队主动汇报，并在周会上公开检查进度。", {
    x: 0.5, y: 2.1, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("结果：团队开始\"象征性执行\"。", {
    x: 0.5, y: 2.45, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 两个对比
  // 形式
  slide.addShape("rect", {
    x: 0.5, y: 2.95, w: 4.3, h: 2.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.95, w: 4.3, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("形态还在", {
    x: 0.7, y: 3.0, w: 3, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("FORM", {
    x: 3.5, y: 3.05, w: 1.2, h: 0.25,
    fontSize: 9, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 3, bold: true, align: "right"
  });

  const formItems = [
    "一对一辅导照常召开",
    "复盘会照常进行",
    "汇报和材料照常提交"
  ];
  formItems.forEach((it, i) => {
    slide.addText("□ " + it, {
      x: 0.7, y: 3.55 + i * 0.4, w: 4, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 内核
  slide.addShape("rect", {
    x: 5.2, y: 2.95, w: 4.3, h: 2.0,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1.5 }
  });
  slide.addShape("rect", {
    x: 5.2, y: 2.95, w: 4.3, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("内核已空", {
    x: 5.4, y: 3.0, w: 3, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("EMPTY", {
    x: 8.2, y: 3.05, w: 1.2, h: 0.25,
    fontSize: 9, fontFace: "Arial",
    color: theme.goldAccent, charSpacing: 3, bold: true, align: "right"
  });

  const emptyItems = [
    "变成了 15 分钟的状态同步",
    "没有真正的辅导",
    "没人愿意说真实问题"
  ];
  emptyItems.forEach((it, i) => {
    slide.addText("✗ " + it, {
      x: 5.4, y: 3.55 + i * 0.4, w: 4, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // 底部
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("苏敏很困惑：她已经在认真推动这件事了，为什么还是这样？", {
    x: 0.5, y: 5.08, w: 9, h: 0.24,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
