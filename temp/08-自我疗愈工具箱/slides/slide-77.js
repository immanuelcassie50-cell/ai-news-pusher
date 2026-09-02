const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "晨间激活工具概述",
  type: "content",
  pageNumber: 77
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
  slide.addText("77", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("晨间激活工具概述", {
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

  // Morning state card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  // Left accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 0.1, h: 2.0,
    fill: { color: theme.accent }
  });

  slide.addText("晨间心理状态", {
    x: 0.75, y: 1.35, w: 3.9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText('从睡眠状态过渡到清醒状态\n意识逐渐恢复，但可能仍有残留的困倦感\n身体需要一个温和的"启动"过程', {
    x: 0.75, y: 1.85, w: 3.9, h: 1.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Goal card
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 4.5, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  // Left accent
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 0.1, h: 2.0,
    fill: { color: theme.primary }
  });

  slide.addText("目标", {
    x: 5.25, y: 1.35, w: 4.1, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText('温和、有觉知、自我关怀的开始\n不是"激动兴奋"，而是"扎根当下"\n为一天的心理状态定调', {
    x: 5.25, y: 1.85, w: 4.1, h: 1.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Key insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.5, w: 9, h: 1.4,
    fill: { color: theme.primary }
  });

  slide.addText("核心洞见", {
    x: 0.75, y: 3.65, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText('晨间练习的目的不是"做完"，而是"带着觉知开始"\n即使只有1-2分钟，也比匆忙跳过着床单更有价值', {
    x: 0.75, y: 4.1, w: 8.5, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
