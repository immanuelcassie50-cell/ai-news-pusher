const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "腹式呼吸",
  type: "content",
  pageNumber: 16
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("腹式呼吸", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Left side - difference comparison
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.3, w: 4.3, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("胸式呼吸 vs 腹式呼吸", {
    x: 0.8, y: 1.4, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText([
    { text: "胸式：胸部起伏为主，浅而快", options: { breakLine: true } },
    { text: "腹式：腹部起伏为主，深而慢", options: { breakLine: true } },
    { text: "腹式呼吸更能激活副交感神经", options: {} }
  ], {
    x: 0.8, y: 1.85, w: 3.9, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "top"
  });

  // Hand position diagram area
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.0, w: 4.3, h: 2.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("手位引导", {
    x: 0.8, y: 3.1, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Visual diagram - simplified body with hands
  slide.addShape(pres.ShapeType.ellipse, {
    x: 1.4, y: 3.7, w: 1.0, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("腹部", {
    x: 1.4, y: 3.7, w: 1.0, h: 1.0,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Hand indicators
  slide.addShape(pres.ShapeType.rect, {
    x: 2.5, y: 3.95, w: 0.6, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("手", {
    x: 2.5, y: 3.95, w: 0.6, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("一只手放在胸部\n另一只手放在腹部", {
    x: 3.2, y: 3.65, w: 1.5, h: 1.0,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Right side - step by step
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.3, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("练习步骤", {
    x: 5.3, y: 1.4, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const steps = [
    { num: "1", text: "舒适坐姿或躺下，双肩放松" },
    { num: "2", text: "将一只手放在胸部，另一只放在腹部" },
    { num: "3", text: "用鼻子吸气，腹部轻轻鼓起" },
    { num: "4", text: "保持胸部尽量不动" },
    { num: "5", text: "用嘴或鼻子缓缓呼气，腹部下落" },
    { num: "6", text: "重复5-10次，保持自然节奏" }
  ];

  steps.forEach((step, i) => {
    const y = 1.9 + i * 0.52;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.4, y: y, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: 5.4, y: y, w: 0.35, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(step.text, {
      x: 5.85, y: y, w: 3.4, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("16", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
