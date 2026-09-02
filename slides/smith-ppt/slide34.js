const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("弗里德曼对斯密的重新诠释", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Central comparison diagram
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 4.3, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("斯密的遗产", {
    x: 0.6, y: 1.2, w: 4.1, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText([
    { text: "\"看不见的手\"引导自利行为", options: { bullet: true, breakLine: true } },
    { text: "自由市场自发秩序", options: { bullet: true, breakLine: true } },
    { text: "政府角色：守夜人", options: { bullet: true, breakLine: true } },
    { text: "劳动分工与专业化", options: { bullet: true, breakLine: true } },
    { text: "价格作为市场信号", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.75, w: 4, h: 1.8,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Arrow
  slide.addText("→", {
    x: 4.6, y: 2.1, w: 0.8, h: 0.6,
    fontFace: "Arial", fontSize: 32, color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.15, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.15, w: 4.3, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("弗里德曼的诠释", {
    x: 5.3, y: 1.2, w: 4.1, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText([
    { text: "用价格理论证明市场效率", options: { bullet: true, breakLine: true } },
    { text: "货币理论补充斯密的价格机制", options: { bullet: true, breakLine: true } },
    { text: "反对政府干预的理由：信息不对称", options: { bullet: true, breakLine: true } },
    { text: "自由选择：经济学与伦理的交汇", options: { bullet: true, breakLine: true } },
    { text: "消费者主权：需求决定生产", options: { bullet: true } }
  ], {
    x: 5.4, y: 1.75, w: 4, h: 1.8,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Key insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.85, w: 9, h: 1,
    fill: { color: theme.accent, transparency: 90 }
  });
  slide.addText("核心洞见", {
    x: 0.6, y: 3.9, w: 1.5, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 12, color: theme.accent, bold: true
  });
  slide.addText("弗里德曼将斯密的自由放任思想从道德哲学转化为可检验的经济学命题，通过价格理论和货币理论为\"小政府\"提供了坚实的实证基础。", {
    x: 0.6, y: 4.25, w: 8.8, h: 0.55,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Quote
  slide.addText("\"让人们自由选择，他们会比政府做得更好\" — 弗里德曼", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary,
    italic: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("34", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
