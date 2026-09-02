// slide-111.js - 锚定的明确性：时间点变得明确
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 111, title: "锚定的明确性" };

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
  slide.addText("锚定的明确性 · 时间点变得明确", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("这种明确性是锚定行为有效的关键部分", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 模糊 → 清晰的对比图
  // 左：模糊
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("模糊的时间点", {
    x: 0.7, y: 1.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"定期\"", {
    x: 0.7, y: 2.0, w: 4, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("\"有空时\"", {
    x: 0.7, y: 2.4, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });
  slide.addText("\"想起来就做\"", {
    x: 0.7, y: 2.7, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });
  slide.addText("→ 触发器不可靠", {
    x: 0.7, y: 3.0, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 箭头
  slide.addShape("rightArrow", {
    x: 4.85, y: 2.2, w: 0.3, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 右：清晰
  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 4.3, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("明确的时间点", {
    x: 5.4, y: 1.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"在 X 之后\"", {
    x: 5.4, y: 2.0, w: 4, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("\"周会结束后 5 分钟\"", {
    x: 5.4, y: 2.4, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("\"离开会议室之前\"", {
    x: 5.4, y: 2.7, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("→ 触发器稳定", {
    x: 5.4, y: 3.0, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 解释
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 9, h: 1.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("为什么\"明确\"这么重要", {
    x: 0.7, y: 3.5, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("明确的时间点 = 任务能在那个时刻被激活", {
    x: 0.7, y: 3.85, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("模糊的时间点 = 任务在脑里漂浮，没有被任何事件激活", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("\"定期\"只是频次，不是触发器；\"在 X 之后\"才是触发器", {
    x: 0.7, y: 4.5, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 底部
  slide.addText("锚定的本质：把\"何时做\"从一个频次变成一个事件", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
