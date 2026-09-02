// slide-117.js - 认知摩擦：单页+例子
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "friction-type", index: 117, title: "认知摩擦" };

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

  // 类型导航
  const types = [
    { num: "1", title: "物理摩擦", active: false },
    { num: "2", title: "认知摩擦", active: true },
    { num: "3", title: "协调摩擦", active: false }
  ];

  types.forEach((t, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 0.55, w: 2.9, h: 0.55,
      fill: { color: t.active ? theme.primary : theme.paper }, line: { color: t.active ? theme.primary : theme.paperLine, width: 1 }
    });
    slide.addShape("ellipse", {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fill: { color: t.active ? "FFFFFF" : theme.inkMute }, line: { color: t.active ? "FFFFFF" : theme.inkMute }
    });
    slide.addText(t.num, {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fontSize: 13, fontFace: "Arial",
      color: t.active ? theme.primary : "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(t.title, {
      x: x + 0.6, y: 0.65, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: t.active ? "FFFFFF" : theme.ink, bold: true, valign: "middle"
    });
  });

  // 标题
  slide.addText("认知 / 决策摩擦", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 定义
  slide.addText("执行前需要做多少决定？", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 例子
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 9, h: 2.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("典型表现", {
    x: 0.7, y: 2.45, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const examples = [
    "每次执行前都要想\"这次谈什么\"",
    "每次都要想\"用什么格式\"",
    "每次都要想\"针对谁\"",
    "每次都要想\"多长时间\""
  ];
  examples.forEach((e, i) => {
    const y = 2.95 + Math.floor(i / 2) * 0.55;
    const x = 0.7 + (i % 2) * 4.4;
    slide.addShape("ellipse", {
      x: x, y: y + 0.1, w: 0.1, h: 0.1,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(e, {
      x: x + 0.2, y: y, w: 4.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 解决方向
  slide.addShape("rect", {
    x: 0.5, y: 3.5, w: 9, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("解决方向", {
    x: 0.7, y: 3.55, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("在计划设计阶段就把这些决定预先做好 · 固定格式、时长、频率", {
    x: 2.0, y: 3.55, w: 7.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, valign: "middle"
  });

  // 底部
  slide.addText("未解决的问题 = 执行时的认知阻力 · 直接导致拖延", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
