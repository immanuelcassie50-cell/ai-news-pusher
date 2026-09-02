const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("信息经济学与柠檬市场", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("51", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Akerlof's insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.1,
    fill: { color: theme.secondary }, rectRadius: 0.1
  });
  slide.addText("乔治·阿克洛夫（1970）", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", color: theme.light,
    bold: true
  });
  slide.addText("「信息不对称」导致市场失灵：二手车市场中，卖家知道车况，买家不知道", {
    x: 0.7, y: 1.55, w: 8.6, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei", color: "FFFFFF"
  });

  // Left - Problem
  slide.addText("市场失灵机制", {
    x: 0.5, y: 2.4, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.85, w: 4.3, h: 2.1,
    fill: { color: "FFFFFF" }, rectRadius: 0.1,
    line: { color: theme.light, width: 1 }
  });

  const problems = [
    "买家无法区分好车与坏车",
    "好车价格被低估",
    "好车车主不愿出售",
    "市场中只剩坏车（逆向选择）",
    "市场最终崩溃"
  ];

  problems.forEach((prob, i) => {
    slide.addText([
      { text: (i < 4 ? "→ " : "✗ "), options: { color: theme.accent, bold: true } },
      { text: prob, options: { color: theme.secondary } }
    ], {
      x: 0.7, y: 3.0 + i * 0.38, w: 4, h: 0.38,
      fontSize: 13, fontFace: "Microsoft YaHei"
    });
  });

  // Right - Solutions
  slide.addText("斯密时代的解决之道", {
    x: 5.2, y: 2.4, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 2.85, w: 4.3, h: 2.1,
    fill: { color: "FFFFFF" }, rectRadius: 0.1,
    line: { color: theme.light, width: 1 }
  });

  const solutions = [
    "声誉机制：重复交易建立信任",
    "担保制度：卖方提供质量保证",
    "品牌效应：大商家拿声誉担保",
    "政府监管：强制信息披露"
  ];

  solutions.forEach((sol, i) => {
    slide.addText([
      { text: "✓ ", options: { color: theme.primary, bold: true } },
      { text: sol, options: { color: theme.secondary } }
    ], {
      x: 5.4, y: 3.0 + i * 0.48, w: 4, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei"
    });
  });

  return slide;
}

module.exports = { createSlide };
