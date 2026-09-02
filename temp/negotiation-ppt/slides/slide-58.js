// slide-58.js - 准备不到位 vs 准备到位
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 58, title: '准备不到位 vs 准备到位' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 案例：同样谈判，两个准备", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("你下周要谈的薪资——准备和不准备，差多少？", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Two columns
  // LEFT - Unprepared
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.5, w: 4.5, h: 3.5,
    fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.5, w: 4.5, h: 0.5,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("不准备 · 张三", {
    x: 0.55, y: 1.5, w: 4.2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("事先的状态：", {
    x: 0.55, y: 2.1, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("\"老板最近心情不错 / 应该会涨吧 / 等下周聊\"", {
    x: 0.55, y: 2.4, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, lineSpacing: 13
  });
  slide.addText("谈判中：", {
    x: 0.55, y: 2.85, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("\"老板给 8% → 想拒绝但说不出为什么 → 接受\"", {
    x: 0.55, y: 3.15, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, lineSpacing: 13
  });
  slide.addText("结果：", {
    x: 0.55, y: 3.6, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("涨 8%，低于市场水平；自己还觉得\"应该满足\"", {
    x: 0.55, y: 3.9, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 13
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 4.45, w: 4.2, h: 0.45,
    fill: { color: theme.bg }, line: { color: theme.secondary, width: 1 }
  });
  slide.addText("差距：年收入少 2-4 万", {
    x: 0.65, y: 4.45, w: 4.0, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, valign: "middle"
  });

  // RIGHT - Prepared
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.5, w: 4.5, h: 3.5,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.5, w: 4.5, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("准备好 · 李四", {
    x: 5.25, y: 1.5, w: 4.2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("事先的状态：", {
    x: 5.25, y: 2.1, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("\"八步表已填完 / 准备表带在包 / 演练了 3 次\"", {
    x: 5.25, y: 2.4, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, lineSpacing: 13
  });
  slide.addText("谈判中：", {
    x: 5.25, y: 2.85, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("\"老板给 8% → 用 4 维利益挑战 → 提出 A/B/C 方案\"", {
    x: 5.25, y: 3.15, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, lineSpacing: 13
  });
  slide.addText("结果：", {
    x: 5.25, y: 3.6, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("涨 18% + 远程 1 天 + 培训预算 5 万", {
    x: 5.25, y: 3.9, w: 4.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 13
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 4.45, w: 4.2, h: 0.45,
    fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("差距：年收入多 5-8 万 + 弹性 + 长期投资", {
    x: 5.35, y: 4.45, w: 4.0, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("58", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-58-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
