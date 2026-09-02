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
  slide.addText("催化师的角色定位", {
    x: 0.6, y: 0.4, w: 6, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Core message box
  slide.addShape(pres.ShapeType.rect, {
    x: 1.5, y: 1.2, w: 7, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText('催化师是"空间创造者"而非"答案提供者"', {
    x: 1.5, y: 1.35, w: 7, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "ffffff", align: "center", bold: true
  });

  // Three traits in triangle layout
  const traits = [
    { label: "保持中立", x: 5, y: 2.5 },
    { label: "提问优先", x: 2.5, y: 4 },
    { label: "赋能团队", x: 7.5, y: 4 }
  ];

  // Draw connecting lines to center
  const centerX = 5;
  const centerY = 3.5;

  // Center circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: centerX - 0.6, y: centerY - 0.6, w: 1.2, h: 1.2,
    fill: { color: theme.primary }
  });
  slide.addText("催化师", {
    x: centerX - 0.6, y: centerY - 0.15, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", align: "center"
  });

  // Trait circles and labels
  traits.forEach((trait, i) => {
    // Connecting line
    slide.addShape(pres.ShapeType.rect, {
      x: Math.min(centerX, trait.x) + 0.3,
      y: Math.min(centerY, trait.y) + (i === 0 ? 0.5 : 0),
      w: Math.abs(trait.x - centerX) - 0.6,
      h: 0.04,
      fill: { color: theme.secondary }
    });

    // Trait circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: trait.x - 0.55, y: trait.y - 0.55, w: 1.1, h: 1.1,
      fill: { color: theme.light },
      line: { color: theme.accent, width: 2 }
    });

    // Number in circle
    slide.addText(String(i + 1), {
      x: trait.x - 0.55, y: trait.y - 0.25, w: 1.1, h: 0.5,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, align: "center", bold: true
    });

    // Label below
    slide.addText(trait.label, {
      x: trait.x - 0.8, y: trait.y + 0.6, w: 1.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", bold: true
    });
  });

  // Bottom explanation
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 5, w: 8.8, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("通过创造安全、开放的空间，激发团队潜能，引导而非指导", {
    x: 0.6, y: 5.1, w: 8.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  return slide;
}

module.exports = { createSlide };
