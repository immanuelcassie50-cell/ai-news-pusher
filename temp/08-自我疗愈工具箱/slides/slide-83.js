const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "情绪低落时急救工具概述",
  type: "content",
  pageNumber: 83
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
  slide.addText("83", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("情绪低落时急救工具概述", {
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

  // Characteristics card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 0.1, h: 2.5,
    fill: { color: theme.primary }
  });

  slide.addText("情绪低谷特征", {
    x: 0.75, y: 1.35, w: 3.9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const chars = [
    "能量低，不想动",
    "难以集中注意力",
    "对事物失去兴趣",
    "想要孤立自己"
  ];

  chars.forEach((c, i) => {
    const py = 1.95 + i * 0.45;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.85, y: py + 0.1, w: 0.1, h: 0.1,
      fill: { color: theme.light }
    });

    slide.addText(c, {
      x: 1.1, y: py, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Needs card
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 4.5, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 0.1, h: 2.5,
    fill: { color: theme.accent }
  });

  slide.addText("急救工具需求", {
    x: 5.25, y: 1.35, w: 4.1, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const needs = [
    "快速有效",
    "不消耗额外能量",
    "不要求高难度动作",
    "立即可执行"
  ];

  needs.forEach((n, i) => {
    const py = 1.95 + i * 0.45;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.35, y: py + 0.1, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });

    slide.addText(n, {
      x: 5.6, y: py, w: 3.7, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Core principle
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.0, w: 9, h: 1.0,
    fill: { color: theme.primary }
  });

  slide.addText("核心原则：先稳定，再调节", {
    x: 0.5, y: 4.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText('不追求"开心起来"，只追求"不再恶化"', {
    x: 0.5, y: 4.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent,
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
