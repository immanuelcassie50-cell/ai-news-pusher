const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("庞巴维克：时差利息论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Main content area - two columns
  // Left: Theory explanation
  slide.addText("利息的来源：时间偏好", {
    x: 0.5, y: 1.15, w: 4.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "庞巴维克（Eugen von Bohm-Bawerk）提出：利息源于人们对\"现在物品\"与\"未来物品\"的主观评价差异。", options: { breakLine: true, fontSize: 13 } },
    { text: "\n", options: { breakLine: true, fontSize: 8 } },
    { text: "人们普遍偏好\"现在\"而非\"未来\"——这被称为\"时间偏好\"（time preference）。", options: { breakLine: true, fontSize: 13 } },
    { text: "\n", options: { breakLine: true, fontSize: 8 } },
    { text: "因此，借贷利率反映了\"现在\"与\"未来\"之间的价值差额。", options: { fontSize: 13 } }
  ], {
    x: 0.5, y: 1.6, w: 4.5, h: 2.0,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Right: Visual diagram - Present vs Future
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.15, w: 4.2, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });

  // Present box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 1.4, w: 1.6, h: 1.0,
    fill: { color: theme.accent }
  });
  slide.addText("现在物品", {
    x: 5.5, y: 1.55, w: 1.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("100元", {
    x: 5.5, y: 1.95, w: 1.6, h: 0.35,
    fontSize: 14, fontFace: "Calibri",
    color: "FFFFFF", align: "center"
  });

  // Arrow between
  slide.addText(">", {
    x: 7.2, y: 1.55, w: 0.5, h: 0.8,
    fontSize: 32, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("利率 5%", {
    x: 7.0, y: 2.35, w: 1.0, h: 0.25,
    fontSize: 10, fontFace: "Calibri",
    color: theme.secondary, align: "center"
  });

  // Future box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.8, y: 1.4, w: 1.6, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("未来物品", {
    x: 7.8, y: 1.55, w: 1.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("105元", {
    x: 7.8, y: 1.95, w: 1.6, h: 0.35,
    fontSize: 14, fontFace: "Calibri",
    color: theme.primary, align: "center"
  });

  // Explanation below diagram
  slide.addText("同样金额，现在拥有比未来拥有更有价值。利息是对放弃现在消费的心理补偿。", {
    x: 5.5, y: 2.6, w: 3.8, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Bottom: Three reasons
  slide.addText("资本收益的三个来源", {
    x: 0.5, y: 3.85, w: 9, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const reasonW = 2.9;
  const reasonY = 4.3;
  const reasons = [
    { title: "时间偏好", desc: "现在比未来更有价值" },
    { title: "迂回生产", desc: "延长生产周期提高产出" },
    { title: "技术优势", desc: "资本品带来更高效率" }
  ];

  reasons.forEach((r, i) => {
    const rx = 0.5 + i * (reasonW + 0.2);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: rx, y: reasonY, w: reasonW, h: 0.8,
      fill: { color: i === 1 ? theme.accent : theme.primary, transparency: i === 1 ? 0 : 85 }
    });
    slide.addText(r.title, {
      x: rx + 0.1, y: reasonY + 0.08, w: reasonW - 0.2, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: i === 1 ? "FFFFFF" : theme.primary, bold: true
    });
    slide.addText(r.desc, {
      x: rx + 0.1, y: reasonY + 0.4, w: reasonW - 0.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: i === 1 ? theme.light : theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("15", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
