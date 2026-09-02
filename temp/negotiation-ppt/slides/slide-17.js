// slide-17.js - 故事 2：张经理小王采购
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 17, title: '故事 2：采购' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 故事 2：采购谈判", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("张经理 vs 小王：同一家公司，同一份预算", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.4, w: 9.2, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("背景：A 公司采购一批办公设备，预算上限 80 万。供应商 B 报价 78 万。", {
    x: 0.5, y: 1.4, w: 9.0, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, valign: "middle"
  });

  // LEFT: 张经理
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.1, w: 4.5, h: 2.7,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.1, w: 4.5, h: 0.45,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("张经理  ·  当成\"结果\"", {
    x: 0.55, y: 2.1, w: 4.2, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("动作：", {
    x: 0.55, y: 2.65, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true
  });
  slide.addText("直接签合同。理由：\"在预算内，差不多就定下来\"。", {
    x: 0.55, y: 2.95, w: 4.2, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, lineSpacing: 16
  });
  slide.addText("六个月后发现：", {
    x: 0.55, y: 3.6, w: 2.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true
  });
  slide.addText("B 给另一家类似规模公司的报价是 70 万——同型号、同售后。", {
    x: 0.55, y: 3.9, w: 4.2, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, lineSpacing: 16
  });
  slide.addText("多付出了 8 万——\"信息差利润\"", {
    x: 0.55, y: 4.5, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true
  });

  // RIGHT: 小王
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.5, h: 2.7,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.5, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("小王  ·  当成\"起点\"", {
    x: 5.25, y: 2.1, w: 4.2, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("动作：", {
    x: 5.25, y: 2.65, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true
  });
  slide.addText("·  联系另外两家供应商 C 和 D，分别拿到 76 万、74 万报价\n·  把三家拉进比较表（配置 / 服务 / 付款条件）\n·  约 B 谈：\"三家备选，区间 74-76 万，谈综合方案\"", {
    x: 5.25, y: 2.95, w: 4.2, h: 1.2,
    fontSize: 10.5, fontFace: "Microsoft YaHei", color: theme.primary, lineSpacing: 15
  });
  slide.addText("结果：", {
    x: 5.25, y: 4.18, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent, bold: true
  });
  slide.addText("B 把价格降到 73 万 + 两年延保", {
    x: 5.25, y: 4.45, w: 4.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("17", {
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
  pres.writeFile({ fileName: "slide-17-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
