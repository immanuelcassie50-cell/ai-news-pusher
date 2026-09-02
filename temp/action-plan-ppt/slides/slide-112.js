// slide-112.js - 常见误用：事件锚定 vs 时间锚定
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 112, title: "常见误用" };

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
  slide.addText("常见误用：事件锚定 vs 时间锚定", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("\"在 X 之后\" ≠ \"在某个时间点\"", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三栏
  // 左：不是锚定
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 3.0, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 3.0, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 不是锚定", {
    x: 0.7, y: 1.55, w: 2.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"等周会结束有空了\"", {
    x: 0.7, y: 2.1, w: 2.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("\"有空\"不是固定发生的事件", {
    x: 0.7, y: 2.6, w: 2.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("\"忙起来就没空了\"", {
    x: 0.7, y: 3.0, w: 2.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 触发器不可靠", {
    x: 0.7, y: 4.0, w: 2.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 中：时间锚定
  slide.addShape("rect", {
    x: 3.6, y: 1.5, w: 3.0, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 3.6, y: 1.5, w: 3.0, h: 0.5,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("✓ 时间锚定", {
    x: 3.8, y: 1.55, w: 2.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"每天下午 2 点\"", {
    x: 3.8, y: 2.1, w: 2.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("时间固定", {
    x: 3.8, y: 2.6, w: 2.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("但容易被其他会议拖延", {
    x: 3.8, y: 3.0, w: 2.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 触发器相对可靠", {
    x: 3.8, y: 4.0, w: 2.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 右：事件锚定
  slide.addShape("rect", {
    x: 6.7, y: 1.5, w: 2.8, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 6.7, y: 1.5, w: 2.8, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓✓ 事件锚定", {
    x: 6.9, y: 1.55, w: 2.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"周会结束后的 5 分钟内\"", {
    x: 6.9, y: 2.1, w: 2.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("事件不会被推迟", {
    x: 6.9, y: 2.6, w: 2.4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("周会结束 = 一定发生", {
    x: 6.9, y: 3.0, w: 2.4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("→ 触发器最可靠", {
    x: 6.9, y: 4.0, w: 2.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  // 底部金句
  slide.addText("事件锚定往往比时间锚定更可靠 · 事件不会被推迟，而\"下午 2 点\"会因为其他会议被拖延", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
