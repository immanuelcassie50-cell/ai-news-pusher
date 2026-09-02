const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "五感正念练习原理",
  type: "content",
  pageNumber: 39
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
  slide.addText("39", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("五感正念练习原理", {
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

  // Core insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 9, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText('核心原理：感觉器官让我们锚定在"此时此刻"', {
    x: 0.7, y: 1.3, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("思维总是关于过去或未来，而感官体验永远发生在当下", {
    x: 0.7, y: 1.8, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Two-column comparison
  // Left column - Thoughts
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.5, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.5, w: 4.3, h: 0.55,
    fill: { color: theme.light }
  });

  slide.addText("思维", {
    x: 0.5, y: 2.5, w: 4.3, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const thoughtPoints = [
    "涉及过去（回忆、遗憾）",
    "涉及未来（担忧、计划）",
    "容易陷入反刍思维",
    "消耗认知资源"
  ];

  thoughtPoints.forEach((point, i) => {
    slide.addText("×  " + point, {
      x: 0.7, y: 3.15 + i * 0.45, w: 4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Right column - Senses
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 2.5, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 2.5, w: 4.3, h: 0.55,
    fill: { color: theme.primary }
  });

  slide.addText("感官", {
    x: 5.2, y: 2.5, w: 4.3, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const sensePoints = [
    "永远发生在当下",
    "天然与身体连接",
    "无需努力维持",
    "即时可用的锚点"
  ];

  sensePoints.forEach((point, i) => {
    slide.addText("✓  " + point, {
      x: 5.4, y: 3.15 + i * 0.45, w: 4, h: 0.4,
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
