const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("扩展秩序的三个层次", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Book reference
  slide.addText("《致命的自负》（The Fatal Conceit）1988", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Georgia",
    color: theme.light, italic: true
  });

  // Three-tier pyramid visualization
  const pyramidX = 0.8;
  const pyramidY = 1.6;

  // Top tier
  slide.addShape(pres.shapes.RECTANGLE, {
    x: pyramidX + 1.2, y: pyramidY, w: 2.6, h: 1.0,
    fill: { color: theme.primary }
  });
  slide.addText("扩展秩序", {
    x: pyramidX + 1.2, y: pyramidY + 0.1, w: 2.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("Extended Order", {
    x: pyramidX + 1.2, y: pyramidY + 0.5, w: 2.6, h: 0.35,
    fontSize: 11, fontFace: "Georgia",
    color: theme.light, italic: true, align: "center"
  });

  // Middle tier
  slide.addShape(pres.shapes.RECTANGLE, {
    x: pyramidX + 0.6, y: pyramidY + 1.1, w: 4.6, h: 1.0,
    fill: { color: theme.accent }
  });
  slide.addText("道德、传统、语言", {
    x: pyramidX + 0.6, y: pyramidY + 1.2, w: 4.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("Group Selection - 群体选择", {
    x: pyramidX + 0.6, y: pyramidY + 1.6, w: 4.6, h: 0.35,
    fontSize: 11, fontFace: "Georgia",
    color: theme.bg, italic: true, align: "center"
  });

  // Bottom tier
  slide.addShape(pres.shapes.RECTANGLE, {
    x: pyramidX, y: pyramidY + 2.2, w: 5.8, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("本能、亲属、部落", {
    x: pyramidX, y: pyramidY + 2.3, w: 5.8, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("Genetic Heritage - 基因遗传", {
    x: pyramidX, y: pyramidY + 2.7, w: 5.8, h: 0.35,
    fontSize: 11, fontFace: "Georgia",
    color: theme.secondary, italic: true, align: "center"
  });

  // Right side explanation
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.3, y: 1.6, w: 3.4, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.3, y: 1.6, w: 0.06, h: 3.0,
    fill: { color: theme.primary }
  });
  slide.addText("哈耶克的洞见", {
    x: 6.5, y: 1.75, w: 3.0, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "扩展秩序是人类合作最重要的形式：", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "它使陌生人之间的协作成为可能", options: { bullet: true, breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 4 } },
    { text: "超越亲属和部落的小圈子", options: { bullet: true, breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 4 } },
    { text: "依赖抽象规则而非具体关系", options: { bullet: true, breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 4 } },
    { text: "是文明繁荣的真正基础", options: { bullet: true, fontSize: 11 } }
  ], {
    x: 6.5, y: 2.2, w: 3.0, h: 2.2,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Bottom warning quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.75, w: 9, h: 0.55,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("\"自负\"指：理性主义者相信能够设计出比自发演化更优的制度", {
    x: 0.7, y: 4.82, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("20", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
