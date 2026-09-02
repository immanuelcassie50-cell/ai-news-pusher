const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "自我对话改写示例",
  type: "content",
  pageNumber: 57
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
  slide.addText("自我对话改写示例", {
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

  // Subtitle - transformation arrow concept
  slide.addText("内在批评者 → 自我慈悲", {
    x: 6.5, y: 0.5, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true,
    align: "center", valign: "middle"
  });

  // Arrow icon between before/after
  slide.addShape(pres.ShapeType.rightArrow, {
    x: 4.65, y: 2.5, w: 0.7, h: 0.4,
    fill: { color: theme.accent }
  });

  // Case 1 - Zhang Wei 考试失利
  // Before card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.3, w: 4.0, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  // Before label - red/critical
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.3, w: 1.2, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("批评者", {
    x: 0.6, y: 1.3, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Case 1 Before text
  slide.addText("\"我真是太笨了，这么简单的题都做错\"", {
    x: 0.8, y: 1.8, w: 3.6, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle"
  });

  // Case 1 name tag
  slide.addText("张三 考试失利", {
    x: 0.8, y: 2.85, w: 3.6, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "right", valign: "middle"
  });

  // After card
  slide.addShape(pres.ShapeType.rect, {
    x: 5.4, y: 1.3, w: 4.0, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  // After label - gold/compassion
  slide.addShape(pres.ShapeType.rect, {
    x: 5.4, y: 1.3, w: 1.2, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("慈悲心", {
    x: 5.4, y: 1.3, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Case 1 After text
  slide.addText("\"这次没考好确实让我失落，但我知道一次考试不能定义我的能力\"", {
    x: 5.6, y: 1.8, w: 3.6, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Case 2 - Li Na 工作失误
  // Before card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.35, w: 4.0, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  // Before label
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.35, w: 1.2, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("批评者", {
    x: 0.6, y: 3.35, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Case 2 Before text
  slide.addText("\"我又犯错了，老板肯定对我很失望\"", {
    x: 0.8, y: 3.85, w: 3.6, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle"
  });

  // Case 2 name tag
  slide.addText("李娜 工作失误", {
    x: 0.8, y: 4.9, w: 3.6, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "right", valign: "middle"
  });

  // After card
  slide.addShape(pres.ShapeType.rect, {
    x: 5.4, y: 3.35, w: 4.0, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  // After label
  slide.addShape(pres.ShapeType.rect, {
    x: 5.4, y: 3.35, w: 1.2, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("慈悲心", {
    x: 5.4, y: 3.35, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Case 2 After text
  slide.addText("\"犯错让我感到尴尬，但每个人都会犯错，这让我更加谨慎\"", {
    x: 5.6, y: 3.85, w: 3.6, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
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
  slide.addText("57", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
