// slide-129.js - 标准格式：当[情境]，我将[行为]
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "formula", index: 129, title: "标准格式" };

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
  slide.addText("标准格式与\"具体\"要求", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("注意\"具体\"这个词 · 它非常重要", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 标准格式
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 1.0,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });
  slide.addText("标准格式", {
    x: 0.7, y: 1.55, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("\"当[具体情境/时间]，我将[具体行为]。\"", {
    x: 0.7, y: 1.9, w: 8.6, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 正反例子
  // 左：反例
  slide.addShape("rect", {
    x: 0.5, y: 2.7, w: 4.3, h: 2.1,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.7, w: 4.3, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 不是执行意图（模糊）", {
    x: 0.7, y: 2.75, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const bads = [
    { text: "\"当我有空的时候，我会做这件事\"", reason: "\"有空\"不是具体情境" },
    { text: "\"当我有需要解决的问题时，我会找人沟通\"", reason: "太模糊 · 不可识别" }
  ];
  bads.forEach((b, i) => {
    const y = 3.2 + i * 0.75;
    slide.addText(b.text, {
      x: 0.7, y: y, w: 4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
    slide.addText("→ " + b.reason, {
      x: 0.7, y: y + 0.3, w: 4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkMute, italic: true
    });
  });

  // 右：正例
  slide.addShape("rect", {
    x: 5.1, y: 2.7, w: 4.4, h: 2.1,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.7, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 是执行意图（具体）", {
    x: 5.3, y: 2.75, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  const goods = [
    { text: "\"当周三进展会议结束后，我会在 10 分钟内...\"", reason: "情境 + 行为都具体可识别" },
    { text: "\"如果本周五收到某供应商的反馈邮件...\"", reason: "触发情境 + 行为明确" }
  ];
  goods.forEach((g, i) => {
    const y = 3.2 + i * 0.75;
    slide.addText(g.text, {
      x: 5.3, y: y, w: 4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
    slide.addText("→ " + g.reason, {
      x: 5.3, y: y + 0.3, w: 4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true, bold: true
    });
  });

  // 底部
  slide.addText("\"具体\" = 情境可识别 + 行为可执行 + 时间边界清晰", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
