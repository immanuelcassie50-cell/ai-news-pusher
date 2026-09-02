const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("边界案例分析", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Case card - main scenario
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 9, h: 1.6,
    fill: { color: theme.light },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 4, angle: 135, opacity: 0.12 }
  });

  // Case label
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 1.5, h: 0.45,
    fill: { color: theme.secondary }
  });

  slide.addText("案例", {
    x: 0.5, y: 1.2, w: 1.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Quote marks
  slide.addText("「", {
    x: 0.6, y: 1.55, w: 0.5, h: 0.6,
    fontSize: 48, fontFace: "Georgia",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Case content
  slide.addText("客户在会后私下问：", {
    x: 1.1, y: 1.65, w: 7.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  slide.addText('你觉得我应该买那只基金？', {
    x: 1.1, y: 2.0, w: 7.8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Discussion section title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.0, w: 0.08, h: 0.5,
    fill: { color: theme.accent }
  });

  slide.addText("讨论要点", {
    x: 0.7, y: 3.0, w: 3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Discussion questions - 3 cards
  const questions = [
    { q: "催化师应该如何回应？", icon: "?" },
    { q: "如何既保持中立又展现专业？", icon: "?" },
    { q: "边界模糊时如何处理？", icon: "?" }
  ];

  const qStartX = 0.5;
  const qY = 3.65;
  const qW = 2.9;
  const qH = 1.4;
  const qGap = 0.15;

  questions.forEach((item, i) => {
    const x = qStartX + i * (qW + qGap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: qY, w: qW, h: qH,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + qW / 2 - 0.25, y: qY + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(String(i + 1), {
      x: x + qW / 2 - 0.25, y: qY + 0.15, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Question text
    slide.addText(item.q, {
      x: x + 0.15, y: qY + 0.75, w: qW - 0.3, h: 0.55,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle"
    });
  });

  // Bottom tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.25, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("💡 关键原则：保持中立、不给建议、引导思考", {
    x: 0.5, y: 5.25, w: 9, h: 0.9,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Small decorative element
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 7.3, w: 10, h: 0.2,
    fill: { color: theme.secondary, transparency: 70 }
  });

  return slide;
}

module.exports = { createSlide };
