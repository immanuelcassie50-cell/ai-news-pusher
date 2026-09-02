const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // White background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: theme.bg }
  });

  // Header accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.08,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("行动学习循环", {
    x: 0.6, y: 0.4, w: 5, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Center of the cycle
  const centerX = 5;
  const centerY = 3.2;
  const radius = 1.8;

  // Draw cycle stages
  const stages = [
    { label: "计划", angle: -90 },
    { label: "行动", angle: 0 },
    { label: "反思", angle: 90 },
    { label: "学习", angle: 180 }
  ];

  // Draw connecting arrows (circular path)
  slide.addShape(pres.ShapeType.arc, {
    x: centerX - radius - 0.3, y: centerY - radius - 0.3, w: (radius + 0.3) * 2, h: (radius + 0.3) * 2,
    line: { color: theme.secondary, width: 3 },
    fill: { color: theme.bg, transparency: 100 },
    shapeName: "arc"
  });

  // Draw stage circles and labels
  stages.forEach((stage, i) => {
    const rad = (stage.angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(rad);
    const y = centerY + radius * Math.sin(rad);

    // Circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x - 0.55, y: y - 0.55, w: 1.1, h: 1.1,
      fill: { color: i % 2 === 0 ? theme.primary : theme.accent }
    });

    // Label
    slide.addText(stage.label, {
      x: x - 0.55, y: y - 0.2, w: 1.1, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "ffffff", align: "center", bold: true
    });

    // Arrow indicators between stages
    if (i < stages.length) {
      const nextRad = (stages[(i + 1) % stages.length].angle * Math.PI) / 180;
      const arrowX = centerX + (radius + 0.5) * Math.cos((stage.angle + 45) * Math.PI / 180);
      const arrowY = centerY + (radius + 0.5) * Math.sin((stage.angle + 45) * Math.PI / 180);
    }
  });

  // Center circle with icon/text
  slide.addShape(pres.ShapeType.ellipse, {
    x: centerX - 0.7, y: centerY - 0.7, w: 1.4, h: 1.4,
    fill: { color: theme.light },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("循环", {
    x: centerX - 0.7, y: centerY - 0.2, w: 1.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: true
  });

  // Description text at bottom
  slide.addText("在行动中学习，在学习中行动", {
    x: 0.6, y: 5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  return slide;
}

module.exports = { createSlide };
