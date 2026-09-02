const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "情绪低落5分钟急救包",
  type: "content",
  pageNumber: 84
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("84", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("情绪低落5分钟急救包", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Timeline layout
  const steps = [
    { time: "2分钟", title: "4-7-8呼吸法", desc: "重复4个循环", detail: "吸气4秒-屏息7秒-呼气8秒" },
    { time: "2分钟", title: "快速身体扫描", desc: "从头到脚快速扫过", detail: "只是留意，不做改变" },
    { time: "1分钟", title: "自我关怀话语", desc: "默念或轻声说", detail: '例："这很艰难，但我会陪伴自己"' }
  ];

  // Timeline line
  slide.addShape(pres.ShapeType.rect, {
    x: 1.5, y: 2.4, w: 7, h: 0.04,
    fill: { color: theme.accent }
  });

  steps.forEach((step, i) => {
    const x = 1.5 + i * 3;

    // Timeline dot
    slide.addShape(pres.ShapeType.ellipse, {
      x: x - 0.15, y: 2.27, w: 0.3, h: 0.3,
      fill: { color: theme.primary }
    });

    // Time badge above
    slide.addShape(pres.ShapeType.rect, {
      x: x - 0.4, y: 1.5, w: 0.8, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(step.time, {
      x: x - 0.4, y: 1.5, w: 0.8, h: 0.4,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step card below
    slide.addShape(pres.ShapeType.rect, {
      x: x - 1.2, y: 2.75, w: 2.4, h: 2.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x - 1.2, y: 2.75, w: 2.4, h: 0.08,
      fill: { color: theme.primary }
    });

    slide.addText(step.title, {
      x: x - 1.2, y: 2.95, w: 2.4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(step.desc, {
      x: x - 1.1, y: 3.45, w: 2.2, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });

    slide.addText(step.detail, {
      x: x - 1.1, y: 3.95, w: 2.2, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
