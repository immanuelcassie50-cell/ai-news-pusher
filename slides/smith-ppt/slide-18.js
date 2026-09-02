const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("哈耶克：自发秩序理论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Quote highlight at top
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.9,
    fill: { color: theme.accent, transparency: 90 }
  });
  slide.addText("\"在各种人追求各自目标的活动中自发产生的秩序，\n是人类行动的结果，而非人类设计的结果。\"", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true
  });
  slide.addText("— F.A. 哈耶克", {
    x: 7.5, y: 1.7, w: 2, h: 0.25,
    fontSize: 11, fontFace: "Calibri",
    color: theme.secondary, align: "right"
  });

  // Two concept cards
  const cardY = 2.2;
  const cardH = 2.4;

  // Left card - Kosmos (自发秩序)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: 4.4, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("Kosmos：自发秩序", {
    x: 0.7, y: cardY + 0.08, w: 4.0, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText([
    { text: "希腊语原意：\"秩序\"", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "自发形成的社会结构", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "语言、道德、法律、市场", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "例：普通法（common law）不是任何立法机构的发明，而是长期实践中自发演化而来", options: { fontSize: 11, color: theme.secondary } }
  ], {
    x: 0.7, y: cardY + 0.6, w: 4.0, h: 1.7,
    fontFace: "Microsoft YaHei", color: theme.primary
  });

  // Right card - Taxi (组织秩序)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: cardY, w: 4.4, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: cardY, w: 4.4, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("Taxis：组织秩序", {
    x: 5.3, y: cardY + 0.08, w: 4.0, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText([
    { text: "希腊语原意：\"安排\"", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "刻意设计的社会结构", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "企业、政府、军队", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "例：公司组织架构由管理层设计，明确的等级制度和规章制度", options: { fontSize: 11, color: theme.secondary } }
  ], {
    x: 5.3, y: cardY + 0.6, w: 4.0, h: 1.7,
    fontFace: "Microsoft YaHei", color: theme.primary
  });

  // Bottom insight
  slide.addText("关键区分：自发秩序不能被取代，只能被破坏", {
    x: 0.5, y: 4.8, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("18", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
