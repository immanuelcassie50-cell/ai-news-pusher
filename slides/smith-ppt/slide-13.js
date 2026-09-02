const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("门格尔的边际革命", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Three-column layout
  const colW = 2.9;
  const colGap = 0.15;
  const startX = 0.5;
  const colY = 1.15;

  // Column 1: Subjective Value
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX, y: colY, w: colW, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX, y: colY, w: colW, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("主观价值论", {
    x: startX, y: colY + 0.08, w: colW, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText([
    { text: "价值来源于个体的主观评价", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "一块面包对饥饿的人比对吃饱的人价值更高", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "价值是情境依赖的，而非 intrinsic", options: { fontSize: 12 } }
  ], {
    x: startX + 0.15, y: colY + 0.65, w: colW - 0.3, h: 2.7,
    fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top"
  });

  // Column 2: Marginal Utility
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX + colW + colGap, y: colY, w: colW, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX + colW + colGap, y: colY, w: colW, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("边际效用", {
    x: startX + colW + colGap, y: colY + 0.08, w: colW, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText([
    { text: "连续追加的单位，边际效用递减", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "第十杯水的边际效用远低于第一杯", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "定价基于最后一单位的效用", options: { fontSize: 12 } }
  ], {
    x: startX + colW + colGap + 0.15, y: colY + 0.65, w: colW - 0.3, h: 2.7,
    fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top"
  });

  // Column 3: Methodological Individualism
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX + 2 * (colW + colGap), y: colY, w: colW, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX + 2 * (colW + colGap), y: colY, w: colW, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("方法论个人主义", {
    x: startX + 2 * (colW + colGap), y: colY + 0.08, w: colW, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText([
    { text: "社会现象从个体行动中涌现", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "拒绝将国家、社会视为有意志的整体", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "一切分析从个体偏好与选择出发", options: { fontSize: 12 } }
  ], {
    x: startX + 2 * (colW + colGap) + 0.15, y: colY + 0.65, w: colW - 0.3, h: 2.7,
    fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("13", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
