// slide-105.js - 为什么有效：习惯/流程的内建触发
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 105, title: "为什么有效" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具二 · 锚定行为", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("为什么这件事有效", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 大金句
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9, h: 1.1,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("行为之所以会稳定发生，", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("很大程度上是因为它有一个可靠的触发器。", {
    x: 0.7, y: 1.7, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 两栏对比
  // 左：已有行为
  slide.addShape("rect", {
    x: 0.5, y: 2.5, w: 4.3, h: 2.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.5, w: 4.3, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("已有行为 / 习惯 / 固定流程", {
    x: 0.7, y: 2.55, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const hasList = [
    "有内建的触发器",
    "在特定情境下自动激活",
    "不需要每次靠记忆启动"
  ];
  hasList.forEach((t, i) => {
    slide.addShape("ellipse", {
      x: 0.85, y: 3.15 + i * 0.45, w: 0.1, h: 0.1,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(t, {
      x: 1.05, y: 3.05 + i * 0.45, w: 3.7, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  slide.addText("→ 不需要再为它建触发器", {
    x: 0.7, y: 4.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 右：新任务
  slide.addShape("rect", {
    x: 5.1, y: 2.5, w: 4.4, h: 2.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.5, w: 4.4, h: 0.45,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("新任务", {
    x: 5.3, y: 2.55, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const newList = [
    "没有触发器",
    "靠记忆或意志力启动",
    "新任务经常被遗忘"
  ];
  newList.forEach((t, i) => {
    slide.addShape("ellipse", {
      x: 5.45, y: 3.15 + i * 0.45, w: 0.1, h: 0.1,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
    slide.addText(t, {
      x: 5.65, y: 3.05 + i * 0.45, w: 3.7, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  slide.addText("→ 需要借助已有触发器", {
    x: 5.3, y: 4.45, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  // 底部
  slide.addText("借用一个已经存在的触发器，是新任务最可靠的\"启动开关\"", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
