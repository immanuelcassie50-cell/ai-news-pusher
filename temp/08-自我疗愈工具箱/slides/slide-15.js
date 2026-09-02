const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "4-7-8呼吸法",
  type: "content",
  pageNumber: 15
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
  slide.addText("4-7-8呼吸法", {
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

  // Timeline pattern showing 4-7-8
  const phases = [
    { num: "4", label: "秒", action: "吸气", color: theme.primary },
    { num: "7", label: "秒", action: "屏气", color: theme.accent },
    { num: "8", label: "秒", action: "呼气", color: theme.light }
  ];

  const phaseWidth = 2.2;
  const startX = 1.2;
  const arrowY = 1.8;

  phases.forEach((phase, i) => {
    const x = startX + i * (phaseWidth + 0.6);

    // Circle for number
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.6, y: 1.4, w: 1.0, h: 1.0,
      fill: { color: phase.color }
    });
    slide.addText(phase.num, {
      x: x + 0.6, y: 1.4, w: 1.0, h: 1.0,
      fontSize: 32, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Label under circle
    slide.addText(phase.label, {
      x: x + 0.6, y: 2.4, w: 1.0, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Action text
    slide.addText(phase.action, {
      x: x, y: 2.75, w: 2.2, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: phase.color, bold: true,
      align: "center", valign: "middle"
    });

    // Arrow between phases
    if (i < phases.length - 1) {
      slide.addText("→", {
        x: x + phaseWidth - 0.1, y: 1.7, w: 0.8, h: 0.5,
        fontSize: 24, fontFace: "Arial",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    }
  });

  // Instructions card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.35, w: 5.5, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("操作步骤", {
    x: 0.8, y: 3.45, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const steps = [
    "舌尖顶住上颚，牙齿轻咬",
    "用鼻子深深吸气（4秒）",
    "屏住呼吸（7秒）",
    "用嘴缓缓呼气，发出轻微声音（8秒）",
    "重复3-4个循环"
  ];

  slide.addText(
    steps.map((s, i) => ({
      text: s,
      options: { bullet: { type: "number" }, breakLine: i < steps.length - 1 }
    })),
    {
      x: 0.8, y: 3.85, w: 5.1, h: 1.2,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top"
    }
  );

  // Audio script card
  slide.addShape(pres.ShapeType.rect, {
    x: 6.3, y: 3.35, w: 3.3, h: 1.8,
    fill: { color: theme.primary }
  });

  slide.addText("讲师引导语", {
    x: 6.5, y: 3.45, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("\"现在用鼻子深深吸一口气...\n很好，现在屏住呼吸...\n现在慢慢用嘴呼气...\"", {
    x: 6.5, y: 3.9, w: 2.9, h: 1.1,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "top"
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
  slide.addText("15", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
