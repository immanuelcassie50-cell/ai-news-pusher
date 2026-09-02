const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派的起源", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Left content column
  slide.addText([
    { text: "1871年：边际革命的关键年份", options: { bold: true, fontSize: 18, breakLine: true } },
    { text: "\n", options: { breakLine: true, fontSize: 10 } },
    { text: "卡尔·门格尔（Carl Menger）在维也纳大学发表《国民经济学原理》，标志着奥地利学派的诞生。", options: { fontSize: 14, breakLine: true } },
    { text: "\n", options: { breakLine: true, fontSize: 10 } },
    { text: "与杰文斯、瓦尔拉斯并称为\"边际革命三杰\"，但门格尔的研究方法独树一帜。", options: { fontSize: 14 } }
  ], {
    x: 0.5, y: 1.2, w: 4.3, h: 2.5,
    fontFace: "Microsoft YaHei", color: theme.secondary,
    valign: "top"
  });

  // Right side - key figures card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 0.08, h: 2.6,
    fill: { color: theme.accent }
  });
  slide.addText("学派传承脉络", {
    x: 5.5, y: 1.35, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "门格尔 → 庞巴维克 → 维塞尔", options: { breakLine: true, fontSize: 13 } },
    { text: "\n", options: { breakLine: true, fontSize: 8 } },
    { text: "米塞斯 → 哈耶克 → 科兹纳", options: { breakLine: true, fontSize: 13 } },
    { text: "\n", options: { breakLine: true, fontSize: 8 } },
    { text: "罗斯巴德 → 柯兹纳 → 帕兰当", options: { fontSize: 13 } }
  ], {
    x: 5.5, y: 1.85, w: 3.8, h: 1.8,
    fontFace: "Calibri", color: theme.secondary
  });

  // Bottom quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.1,
    fill: { color: theme.light, transparency: 30 }
  });
  slide.addText("\"经济学研究的对象是人的行为本身，而非抽象的\"经济人\"假设。\"", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true
  });
  slide.addText("— 卡尔·门格尔", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Calibri",
    color: theme.secondary, align: "right"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
