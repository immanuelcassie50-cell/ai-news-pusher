const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派的当代传承", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Three contemporary figures
  const cardW = 2.9;
  const cardH = 2.8;
  const cardY = 1.15;
  const gap = 0.2;

  // Card 1: Kirzner
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardW, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("Israel Kirzner", {
    x: 0.5, y: cardY + 0.1, w: cardW, h: 0.25,
    fontSize: 13, fontFace: "Georgia",
    color: "FFFFFF", italic: true, align: "center"
  });
  slide.addText("1930-", {
    x: 0.5, y: cardY + 0.38, w: cardW, h: 0.2,
    fontSize: 10, fontFace: "Calibri",
    color: theme.light, align: "center"
  });
  slide.addText([
    { text: "企业家发现理论", options: { bold: true, breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "市场过程中的\"警觉\"（alertness）——企业家识别利润机会的能力", options: { breakLine: true, fontSize: 10 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "《竞争与企业家精神》(1973)", options: { fontSize: 10 } }
  ], {
    x: 0.65, y: cardY + 0.75, w: cardW - 0.3, h: 1.9,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Card 2: Rothbard
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + gap, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + gap, y: cardY, w: cardW, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("Murray Rothbard", {
    x: 0.5 + cardW + gap, y: cardY + 0.1, w: cardW, h: 0.25,
    fontSize: 13, fontFace: "Georgia",
    color: "FFFFFF", italic: true, align: "center"
  });
  slide.addText("1926-1995", {
    x: 0.5 + cardW + gap, y: cardY + 0.38, w: cardW, h: 0.2,
    fontSize: 10, fontFace: "Calibri",
    color: theme.light, align: "center"
  });
  slide.addText([
    { text: "自由至上主义", options: { bold: true, breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "将米塞斯的方法论与无政府资本主义结合", options: { breakLine: true, fontSize: 10 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "《人、经济与国家》(1962)", options: { fontSize: 10 } }
  ], {
    x: 0.65 + cardW + gap, y: cardY + 0.75, w: cardW - 0.3, h: 1.9,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Card 3: Loner
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (cardW + gap), y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (cardW + gap), y: cardY, w: cardW, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("Hans-Hermann Hoppe", {
    x: 0.5 + 2 * (cardW + gap), y: cardY + 0.1, w: cardW, h: 0.25,
    fontSize: 13, fontFace: "Georgia",
    color: theme.primary, italic: true, align: "center"
  });
  slide.addText("1949-", {
    x: 0.5 + 2 * (cardW + gap), y: cardY + 0.38, w: cardW, h: 0.2,
    fontSize: 10, fontFace: "Calibri",
    color: theme.secondary, align: "center"
  });
  slide.addText([
    { text: "论证伦理学", options: { bold: true, breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "从自有权出发为市场经济提供伦理基础", options: { breakLine: true, fontSize: 10 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "《民主的黄昏》(1994)", options: { fontSize: 10 } }
  ], {
    x: 0.65 + 2 * (cardW + gap), y: cardY + 0.75, w: cardW - 0.3, h: 1.9,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Bottom: key message
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.15, w: 9, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派的思想遗产", {
    x: 0.7, y: 4.25, w: 8.6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("在金融危机、信息时代、创新经济学的语境下，持续提供独特的理论视角与政策启示", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("26", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
