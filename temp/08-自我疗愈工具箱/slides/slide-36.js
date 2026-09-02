const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "关于正念的常见误解",
  type: "content",
  pageNumber: 36
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
  slide.addText("36", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("关于正念的常见误解", {
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

  const misconceptions = [
    {
      myth: '"放空什么都不想"',
      reality: "正念不是停止思考，而是觉察思考本身"
    },
    {
      myth: '"逃避现实"',
      reality: "正念恰恰是全然地面对当下真实体验"
    },
    {
      myth: '"需要大量时间"',
      reality: "从1分钟甚至几秒钟都可以开始"
    },
    {
      myth: '"与文化/宗教冲突"',
      reality: "正念是普适的心理训练，与任何信仰兼容"
    }
  ];

  misconceptions.forEach((item, i) => {
    const y = 1.2 + i * 1.0;

    // Misconception card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.3, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.08 }
    });

    // X mark
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.65, y: y + 0.25, w: 0.35, h: 0.35,
      fill: { color: theme.light }
    });
    slide.addText("✕", {
      x: 0.65, y: y + 0.22, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(item.myth, {
      x: 1.15, y: y, w: 3.5, h: 0.85,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Arrow
    slide.addText("→", {
      x: 4.8, y: y, w: 0.4, h: 0.85,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // Reality card
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 4.3, h: 0.85,
      fill: { color: theme.bg }
    });

    // Check mark
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.35, y: y + 0.25, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText("✓", {
      x: 5.35, y: y + 0.22, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(item.reality, {
      x: 5.85, y: y, w: 3.5, h: 0.85,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
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
