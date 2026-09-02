const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "渐进式肌肉放松原理",
  type: "content",
  pageNumber: 21
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
  slide.addText("渐进式肌肉放松原理", {
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

  // History card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.3, w: 4.3, h: 1.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("PMR 历史", {
    x: 0.8, y: 1.4, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("渐进式肌肉放松法（Progressive Muscle Relaxation）由美国医生 Edmund Jacobson 于1920年代创立。", {
    x: 0.8, y: 1.85, w: 3.9, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Mechanism card
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.3, w: 4.3, h: 1.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("核心机制", {
    x: 5.3, y: 1.4, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("张力释放 → 张力觉察 → 放松感知", {
    x: 5.3, y: 1.85, w: 3.9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("通过刻意绷紧再放松肌肉，建立对紧张状态的觉察能力", {
    x: 5.3, y: 2.25, w: 3.9, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "top"
  });

  // Process flow - three steps
  const steps = [
    { title: "绷紧", desc: "刻意收紧肌肉\n约5秒", color: theme.primary },
    { title: "保持", desc: "感受紧张状态\n约5秒", color: theme.accent },
    { title: "释放", desc: "突然放松\n感受差异", color: theme.light }
  ];

  const stepW = 2.0;
  const stepGap = 0.8;
  const stepStartX = 1.5;
  const stepY = 3.1;

  steps.forEach((step, i) => {
    const x = stepStartX + i * (stepW + stepGap);

    // Step circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.5, y: stepY, w: 1.0, h: 1.0,
      fill: { color: step.color }
    });
    slide.addText(step.title, {
      x: x + 0.5, y: stepY, w: 1.0, h: 1.0,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(step.desc, {
      x: x, y: stepY + 1.1, w: stepW, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
    });

    // Arrow
    if (i < steps.length - 1) {
      slide.addText("→", {
        x: x + stepW - 0.1, y: stepY + 0.25, w: 0.6, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    }
  });

  // Research support bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.55, w: 8.8, h: 0.55,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 1 }
  });

  slide.addText("研究支持：超过200项研究证实PMR对焦虑、失眠、慢性疼痛有显著效果（AARP, 2020）", {
    x: 0.8, y: 4.55, w: 8.4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
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
  slide.addText("21", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
