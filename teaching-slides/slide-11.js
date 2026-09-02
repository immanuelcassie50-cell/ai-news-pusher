const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("分类与排序方法", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Left column - Classification
  // Left card background
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.2, w: 4.4, h: 3.8,
    fill: { color: theme.light },
    line: { color: theme.secondary, width: 0.5 }
  });

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.2, w: 0.12, h: 3.8,
    fill: { color: theme.accent }
  });

  // Left icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: 2.2, y: 1.45, w: 0.8, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("类", {
    x: 2.2, y: 1.55, w: 0.8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle", margin: 0
  });

  // Left title
  slide.addText("分类原则", {
    x: 0.7, y: 2.35, w: 3.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Left content
  slide.addText([
    { text: "相似性", options: { bold: true, color: theme.accent } },
    { text: "：将相似特征归为一类", options: { color: theme.primary } }
  ], { x: 0.8, y: 2.9, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", margin: 0 });

  slide.addText([
    { text: "独立性", options: { bold: true, color: theme.accent } },
    { text: "：各类别之间相互独立", options: { color: theme.primary } }
  ], { x: 0.8, y: 3.35, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", margin: 0 });

  slide.addText([
    { text: "完整性", options: { bold: true, color: theme.accent } },
    { text: "：覆盖所有要素无遗漏", options: { color: theme.primary } }
  ], { x: 0.8, y: 3.8, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", margin: 0 });

  // Left bottom note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 4.4, w: 3.7, h: 0.4,
    fill: { color: theme.secondary, transparency: 20 }
  });
  slide.addText("先分类后排序，每步都需集体确认", {
    x: 0.9, y: 4.45, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", margin: 0
  });

  // Right column - Sorting
  // Right card background
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.2, w: 4.4, h: 3.8,
    fill: { color: theme.light },
    line: { color: theme.secondary, width: 0.5 }
  });

  // Right accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.2, w: 0.12, h: 3.8,
    fill: { color: theme.primary }
  });

  // Right icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: 7.0, y: 1.45, w: 0.8, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText("序", {
    x: 7.0, y: 1.55, w: 0.8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle", margin: 0
  });

  // Right title
  slide.addText("排序方法", {
    x: 5.5, y: 2.35, w: 3.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Right content
  slide.addText([
    { text: "投票法", options: { bold: true, color: theme.accent } },
    { text: "：多数决，快速决策", options: { color: theme.primary } }
  ], { x: 5.6, y: 2.9, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", margin: 0 });

  slide.addText([
    { text: "共识法", options: { bold: true, color: theme.accent } },
    { text: "：全员认可，确保执行", options: { color: theme.primary } }
  ], { x: 5.6, y: 3.35, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", margin: 0 });

  slide.addText([
    { text: "权重法", options: { bold: true, color: theme.accent } },
    { text: "：赋权评分，科学排序", options: { color: theme.primary } }
  ], { x: 5.6, y: 3.8, w: 3.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", margin: 0 });

  // Right bottom note
  slide.addShape(pres.ShapeType.rect, {
    x: 5.6, y: 4.4, w: 3.7, h: 0.4,
    fill: { color: theme.secondary, transparency: 20 }
  });
  slide.addText("操作要点：先分类后排序，每步都需集体确认", {
    x: 5.7, y: 4.45, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", margin: 0
  });

  // Divider arrow
  slide.addText("→", {
    x: 4.55, y: 2.8, w: 0.9, h: 0.6,
    fontSize: 36, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", margin: 0
  });

  return slide;
}

module.exports = { createSlide };
