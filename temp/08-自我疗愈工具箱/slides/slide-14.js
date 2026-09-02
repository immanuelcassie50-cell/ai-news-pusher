const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "呼吸调节法原理",
  type: "content",
  pageNumber: 14
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
  slide.addText("呼吸调节法原理", {
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

  // Left column - Why breathing works
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.3, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("为什么呼吸能影响神经系统", {
    x: 0.8, y: 1.45, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const leftPoints = [
    "呼吸是唯一可以主观控制的自主神经功能",
    "通过刻意调节呼吸，可间接调节自主神经系统",
    "深呼吸激活副交感神经，降低应激反应"
  ];

  slide.addText(
    leftPoints.map((p, i) => ({
      text: p,
      options: { bullet: true, breakLine: i < leftPoints.length - 1 }
    })),
    {
      x: 0.8, y: 2.0, w: 3.9, h: 2.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top",
      paraSpaceAfter: 10
    }
  );

  // Right column - Science
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.3, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("科学原理", {
    x: 5.3, y: 1.45, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Vagus nerve icon placeholder - circle with text
  slide.addShape(pres.ShapeType.ellipse, {
    x: 5.5, y: 2.1, w: 1.2, h: 1.2,
    fill: { color: theme.light }
  });
  slide.addText("迷走\n神经", {
    x: 5.5, y: 2.1, w: 1.2, h: 1.2,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("副交感神经激活", {
    x: 6.8, y: 2.3, w: 2.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  slide.addText("心率降低 → 血压下降 → 皮质醇减少", {
    x: 6.8, y: 2.7, w: 2.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Key insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 5.3, y: 3.5, w: 3.9, h: 1.4,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 1.5 }
  });

  slide.addText("核心机制", {
    x: 5.5, y: 3.6, w: 3.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("呼气时副交感神经占主导\n吸气时交感神经占主导", {
    x: 5.5, y: 3.95, w: 3.5, h: 0.85,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
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
  slide.addText("14", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
