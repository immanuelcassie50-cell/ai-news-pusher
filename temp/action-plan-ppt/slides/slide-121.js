// slide-121.js - 策略三：简化化
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "strategy", index: 121, title: "策略三：简化化" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具三 · 降低摩擦", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 三个策略导航
  const strategies = [
    { num: "1", title: "默认化", active: false },
    { num: "2", title: "预设化", active: false },
    { num: "3", title: "简化化", active: true }
  ];

  strategies.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 0.55, w: 2.9, h: 0.55,
      fill: { color: s.active ? theme.primary : theme.paper }, line: { color: s.active ? theme.primary : theme.paperLine, width: 1 }
    });
    slide.addShape("ellipse", {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fill: { color: s.active ? "FFFFFF" : theme.inkMute }, line: { color: s.active ? "FFFFFF" : theme.inkMute }
    });
    slide.addText(s.num, {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fontSize: 13, fontFace: "Arial",
      color: s.active ? theme.primary : "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: x + 0.6, y: 0.65, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: s.active ? "FFFFFF" : theme.ink, bold: true, valign: "middle"
    });
  });

  // 大标题
  slide.addText("策略三 · 简化化", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("评估每一步执行的复杂度，主动问：能更简单吗？", {
    x: 0.5, y: 1.85, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 核心解释
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 9, h: 1.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 0.15, h: 1.0,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("简化化 = 主动挑战\"有必要这么复杂吗？\"", {
    x: 0.9, y: 2.5, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("很多\"无法执行\"的任务，是因为被设计得比必要的更复杂", {
    x: 0.9, y: 2.9, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三个问题
  const questions = [
    "这一步有必要这么复杂吗？",
    "能不能更简单？",
    "能不能减少步骤？"
  ];

  questions.forEach((q, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 3.6, w: 2.9, h: 1.15,
      fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
    });
    slide.addShape("ellipse", {
      x: x + 0.2, y: 3.75, w: 0.4, h: 0.4,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText("?", {
      x: x + 0.2, y: 3.75, w: 0.4, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(q, {
      x: x + 0.7, y: 3.7, w: 2.1, h: 0.9,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, valign: "middle"
    });
  });

  // 底部
  slide.addText("简化不是\"偷工减料\"，而是\"去掉不必要的部分\"", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
