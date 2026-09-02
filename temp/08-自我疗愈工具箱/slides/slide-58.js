const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "晨间自我关怀宣言",
  type: "content",
  pageNumber: 58
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
  slide.addText("晨间自我关怀宣言", {
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

  // Practice instruction card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.3, w: 3.8, h: 1.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  // Practice icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.8, y: 1.5, w: 0.7, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("晨", {
    x: 0.8, y: 1.5, w: 0.7, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("练习方式", {
    x: 1.65, y: 1.45, w: 2.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("早晨对镜梳妆时，对自己说温暖的话", {
    x: 1.65, y: 1.85, w: 2.6, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Mirror visual element
  slide.addShape(pres.ShapeType.ellipse, {
    x: 5.8, y: 1.4, w: 2.0, h: 2.0,
    fill: { color: theme.accent, transparency: 20 },
    line: { color: theme.accent, width: 3 }
  });

  // Mirror inner reflection effect
  slide.addShape(pres.ShapeType.ellipse, {
    x: 6.0, y: 1.6, w: 1.6, h: 1.6,
    fill: { color: "FFFFFF", transparency: 50 }
  });

  // Heart in mirror
  slide.addShape(pres.ShapeType.heart, {
    x: 6.45, y: 2.0, w: 0.7, h: 0.65,
    fill: { color: theme.light }
  });

  slide.addText("对镜说", {
    x: 5.8, y: 3.5, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Main declaration text block with accent styling
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 2.7, w: 4.8, h: 2.55,
    fill: { color: theme.accent },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.15 }
  });

  // Inner white area for text
  slide.addShape(pres.ShapeType.rect, {
    x: 0.65, y: 2.75, w: 4.7, h: 2.45,
    fill: { color: "FFFFFF" }
  });

  // Gold left border accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0.65, y: 2.75, w: 0.08, h: 2.45,
    fill: { color: theme.accent }
  });

  // Declaration text
  slide.addText([
    { text: "今天，我会对自己温柔一些。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "当我犯错时，我会提醒自己这只是人之常情。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "我值得被关怀，就像我关怀他人一样。", options: {} }
  ], {
    x: 0.9, y: 2.9, w: 4.3, h: 2.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle",
    lineSpacing: 24
  });

  // Quote mark decoration
  slide.addText('"', {
    x: 4.8, y: 2.65, w: 0.5, h: 0.6,
    fontSize: 48, fontFace: "Georgia",
    color: theme.accent,
    align: "center", valign: "top"
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
  slide.addText("58", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
