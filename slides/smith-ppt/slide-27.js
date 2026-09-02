const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("从斯密到奥地利学派：思想脉络", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Central flow diagram
  const boxW = 2.0;
  const boxH = 0.9;
  const arrowGap = 0.4;

  const figures = [
    { name: "亚当·斯密", concept: "看不见的手", x: 0.5, color: theme.primary },
    { name: "李嘉图", concept: "劳动价值论", x: 3.1, color: theme.secondary },
    { name: "门格尔", concept: "主观价值论", x: 5.7, color: theme.accent },
    { name: "哈耶克", concept: "自发秩序", x: 8.3, color: theme.light }
  ];

  figures.forEach((f, i) => {
    // Box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: f.x, y: 1.2, w: boxW, h: boxH,
      fill: { color: f.color }
    });
    slide.addText(f.name, {
      x: f.x, y: 1.25, w: boxW, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(f.concept, {
      x: f.x, y: 1.65, w: boxW, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.bg, align: "center"
    });

    // Arrow (except last)
    if (i < figures.length - 1) {
      slide.addText("→", {
        x: f.x + boxW, y: 1.35, w: arrowGap, h: 0.5,
        fontSize: 24, fontFace: "Arial",
        color: theme.secondary, align: "center"
      });
    }
  });

  // Key insight boxes below
  slide.addText("思想演进的逻辑", {
    x: 0.5, y: 2.4, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Two columns of insights
  const insightY = 2.9;
  const insightH = 1.6;

  // Left column
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: insightY, w: 4.4, h: insightH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: insightY, w: 0.06, h: insightH,
    fill: { color: theme.accent }
  });
  slide.addText("从客观到主观", {
    x: 0.7, y: insightY + 0.15, w: 4.0, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "斯密：价值源于劳动（客观）", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "门格尔：价值源于主观偏好", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "这一转向彻底改变了经济学的根基", options: { fontSize: 11 } }
  ], {
    x: 0.7, y: insightY + 0.55, w: 4.0, h: 1.0,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Right column
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: insightY, w: 4.4, h: insightH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: insightY, w: 0.06, h: insightH,
    fill: { color: theme.primary }
  });
  slide.addText("从设计到自发", {
    x: 5.3, y: insightY + 0.15, w: 4.0, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "斯密：自然秩序的观察者", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "哈耶克：秩序的自发演化", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "无需\"第一推动者\"，秩序自然涌现", options: { fontSize: 11 } }
  ], {
    x: 5.3, y: insightY + 0.55, w: 4.0, h: 1.0,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Bottom quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.65,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("共同精神遗产：对人的能动性的信仰，对理性自负的警惕", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("27", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
