// slide-127.js - 为什么有效 (1)：消除决策负荷
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 127, title: "为什么有效 (1)" };

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
  slide.addText("为什么有效 · 机制 1", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("机制一 · 消除执行时的决策负荷", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 大金句
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("当那个时刻到来时，没有需要做的决定，只有需要执行的行为。", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.9,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // 对比：执行时刻的决策
  // 左：没有执行意图
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 4.3, h: 2.2,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 4.3, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 没有执行意图", {
    x: 0.7, y: 2.65, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("执行时刻需要做：", {
    x: 0.7, y: 3.1, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  const decisions = [
    "\"要不要现在做？\"",
    "\"应该从哪里开始？\"",
    "\"在哪里做合适？\""
  ];
  decisions.forEach((d, i) => {
    slide.addShape("ellipse", {
      x: 0.85, y: 3.55 + i * 0.35, w: 0.08, h: 0.08,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
    slide.addText(d, {
      x: 1.0, y: 3.5 + i * 0.35, w: 3.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  slide.addText("→ 认知资源被实时决策消耗", {
    x: 0.7, y: 4.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右：有执行意图
  slide.addShape("rect", {
    x: 5.1, y: 2.6, w: 4.4, h: 2.2,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.6, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 有执行意图", {
    x: 5.3, y: 2.65, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("执行时刻：", {
    x: 5.3, y: 3.1, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  const noDecisions = [
    "✓ 情境已确定",
    "✓ 行为已明确",
    "✓ 直接行动"
  ];
  noDecisions.forEach((d, i) => {
    slide.addShape("ellipse", {
      x: 5.45, y: 3.55 + i * 0.35, w: 0.08, h: 0.08,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(d, {
      x: 5.6, y: 3.5 + i * 0.35, w: 3.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  slide.addText("→ 没有决策消耗 = 没有拖延温床", {
    x: 5.3, y: 4.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  // 底部
  slide.addText("实时决策是拖延和放弃的温床 · 提前解决 = 现场无需决定", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
