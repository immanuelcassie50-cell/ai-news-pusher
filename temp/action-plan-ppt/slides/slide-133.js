// slide-133.js - 补充提醒：情境真实可识别
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 133, title: "补充提醒" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具四 · 执行意图", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("一个补充提醒", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("关于\"情境\"的真实性与可识别性", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 大金句
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 1.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("执行意图的有效性，依赖于\"当\"后面的情境是真实会出现的、可被识别的。", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("如果那个情境本身很少出现，或很难被识别，执行意图的效力就会下降。", {
    x: 0.7, y: 2.0, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true, valign: "middle"
  });

  // 选择标准
  slide.addText("选择触发情境的两个标准", {
    x: 0.5, y: 2.7, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 两栏
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 4.3, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 4.3, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 高频率", {
    x: 0.7, y: 3.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("每周都会出现的情境", {
    x: 0.7, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("效果更好", {
    x: 0.7, y: 3.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("周例会 / 早晨打开电脑 / 季度复盘", {
    x: 0.7, y: 4.25, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });
  slide.addText("→ 频繁触发 = 行为稳定", {
    x: 0.7, y: 4.5, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 4.4, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 高可识别", {
    x: 5.3, y: 3.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("容易被当事人注意到的", {
    x: 5.3, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("效果更好", {
    x: 5.3, y: 3.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("明显的日历事件 / 视觉可见的物品", {
    x: 5.3, y: 4.25, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });
  slide.addText("→ 容易识别 = 自动激活", {
    x: 5.3, y: 4.5, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 底部
  slide.addText("执行意图的效力 = 情境真实性 × 行为具体性", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
