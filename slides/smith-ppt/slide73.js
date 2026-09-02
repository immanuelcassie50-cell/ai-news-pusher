const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("讨论问题二", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("市场的边界", {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Question box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.1, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("核心问题", {
    x: 0.7, y: 2.2, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("斯密时代的市场与现代市场经济，他的思想还能指导我们到哪里？", {
    x: 0.7, y: 2.55, w: 8.6, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Two columns
  // Left column - 斯密时代的观点
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.5, w: 4.3, h: 1.7,
    fill: { color: theme.secondary },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.2 }
  });
  slide.addText("斯密的边界观", {
    x: 0.7, y: 3.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText([
    { text: "• 市场经济有其自然边界", options: { breakLine: true } },
    { text: "• 政府职能：国防、司法、公共工程", options: { breakLine: true } },
    { text: "• 反对垄断与特权" }
  ], {
    x: 0.7, y: 4.0, w: 4, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Right column - 现代挑战
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 3.5, w: 4.3, h: 1.7,
    fill: { color: theme.light },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.2 }
  });
  slide.addText("现代边界争议", {
    x: 5.4, y: 3.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "• 市场失灵：外部性、 信息不对称", options: { breakLine: true } },
    { text: "• 公共品供给不足", options: { breakLine: true } },
    { text: "• 平台经济的垄断新形态" }
  ], {
    x: 5.4, y: 4.0, w: 4, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("73", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
