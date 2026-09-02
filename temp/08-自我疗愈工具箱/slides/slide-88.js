const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "睡前工具组合A: PMR助眠版",
  type: "content",
  pageNumber: 88
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
  slide.addText("88", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.35, w: 1.2, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("组合A", {
    x: 0.5, y: 0.35, w: 1.2, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("PMR助眠版", {
    x: 1.85, y: 0.35, w: 4, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Steps timeline
  const steps = [
    { time: "5-7分钟", title: "完整或简化版PMR", desc: "渐进式肌肉放松", detail: "从脚到头，或只做主要肌群" },
    { time: "1分钟", title: "腹式呼吸", desc: "在床上，闭眼", detail: "缓慢深呼吸，感受腹部起伏" },
    { time: "2分钟", title: '"只是呼吸"冥想', desc: "如果思绪仍然活跃", detail: "专注呼吸，不评判，允许思绪来去" }
  ];

  // Timeline line
  slide.addShape(pres.ShapeType.rect, {
    x: 1.3, y: 2.5, w: 7.4, h: 0.04,
    fill: { color: theme.accent }
  });

  steps.forEach((step, i) => {
    const x = 1.3 + i * 3;

    // Timeline node
    slide.addShape(pres.ShapeType.ellipse, {
      x: x - 0.15, y: 2.37, w: 0.3, h: 0.3,
      fill: { color: theme.primary }
    });

    // Time badge above
    slide.addShape(pres.ShapeType.rect, {
      x: x - 0.5, y: 1.55, w: 1.0, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(step.time, {
      x: x - 0.5, y: 1.55, w: 1.0, h: 0.4,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step card below
    slide.addShape(pres.ShapeType.rect, {
      x: x - 1.1, y: 2.85, w: 2.2, h: 2.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x - 1.1, y: 2.85, w: 2.2, h: 0.06,
      fill: { color: theme.primary }
    });

    slide.addText(step.title, {
      x: x - 1.1, y: 3.0, w: 2.2, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(step.desc, {
      x: x - 1.0, y: 3.5, w: 2.0, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });

    slide.addText(step.detail, {
      x: x - 1.0, y: 3.85, w: 2.0, h: 0.8,
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
