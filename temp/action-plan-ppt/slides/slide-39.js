// slide-39.js - 稳健性的本质
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "quote", index: 39, title: "稳健性的本质" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("ESSENCE", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("稳健性的本质", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大金句卡片
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 0.12, h: 1.7,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大引号
  slide.addText('"', {
    x: 0.8, y: 1.85, w: 0.6, h: 0.8,
    fontSize: 60, fontFace: "Arial",
    color: theme.redLight, bold: true
  });

  // 核心金句
  slide.addText("稳健性测试的本质，是评估这个任务的发生，", {
    x: 1.5, y: 2.05, w: 7.5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("依赖多少的\"额外精力\"。", {
    x: 1.5, y: 2.55, w: 7.5, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("—— 投入的额外精力越多，稳健性越低", {
    x: 1.5, y: 3.15, w: 7.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true
  });

  // 三个状态对比
  const states = [
    {
      label: "状态好",
      desc: "能执行",
      bg: theme.primary,
      textColor: "FFFFFF"
    },
    {
      label: "状态一般",
      desc: "开始延后",
      bg: theme.paper,
      textColor: theme.ink
    },
    {
      label: "被延后几次后",
      desc: "归类为\"等状态好时\"",
      bg: theme.paperWarm,
      textColor: theme.redDeep
    }
  ];

  const cardW = 2.95;
  const startX = 0.5;
  const gap = 0.15;

  states.forEach((s, i) => {
    const x = startX + i * (cardW + gap);
    const y = 3.85;

    slide.addShape("rect", {
      x, y, w: cardW, h: 1.2,
      fill: { color: s.bg }, line: { color: s.bg === theme.paper ? theme.paperLine : s.bg, width: 1 }
    });

    slide.addText(s.label, {
      x: x + 0.2, y: y + 0.15, w: cardW - 0.4, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: s.textColor, bold: true
    });

    slide.addText(s.desc, {
      x: x + 0.2, y: y + 0.6, w: cardW - 0.4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: s.textColor
    });
  });

  // 底部金句
  slide.addText("那个\"等状态好时\"——可能永远不会来。", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
