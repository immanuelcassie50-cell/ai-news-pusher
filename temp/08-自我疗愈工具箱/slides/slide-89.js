const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "睡前工具组合B: 身体扫描版",
  type: "content",
  pageNumber: 89
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
  slide.addText("89", {
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
  slide.addText("组合B", {
    x: 0.5, y: 0.35, w: 1.2, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("身体扫描版", {
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

  // Main content - two columns
  // Left: Body scan
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 0.1, h: 2.5,
    fill: { color: theme.primary }
  });

  slide.addText("5-7分钟", {
    x: 0.75, y: 1.35, w: 1.2, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("完整身体扫描", {
    x: 0.75, y: 1.75, w: 3.9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("从脚趾到头顶\n缓慢、有意识地扫描\n只是留意身体感受\n不评判、不分析", {
    x: 0.75, y: 2.3, w: 3.9, h: 1.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Right: Two outcomes
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 4.5, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText("如果睡着了 = 成功", {
    x: 5.0, y: 1.25, w: 4.5, h: 1.1,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 2.5, w: 4.5, h: 1.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 2.5, w: 0.1, h: 1.25,
    fill: { color: theme.accent }
  });

  slide.addText("如果还清醒", {
    x: 5.25, y: 2.6, w: 4.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("缓慢腹式呼吸\n专注呼气，让身体自然放松", {
    x: 5.25, y: 3.0, w: 4.1, h: 0.65,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.0, w: 9, h: 0.9,
    fill: { color: theme.accent }
  });

  slide.addText("提示：身体扫描是最温和的睡前练习，即使没有完全放松，也能帮助身心进入休息状态", {
    x: 0.5, y: 4.0, w: 9, h: 0.9,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
