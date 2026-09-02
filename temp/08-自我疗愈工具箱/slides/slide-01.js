const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "自我疗愈工具箱",
  type: "cover"
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

  // Course number badge - positioned top right
  slide.addShape(pres.ShapeType.rect, {
    x: 8.5, y: 0.4, w: 1.2, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("08", {
    x: 8.5, y: 0.4, w: 1.2, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Decorative gold accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 1.5, y: 2.3, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("自我疗愈工具箱", {
    x: 1.5, y: 2.5, w: 7, h: 1.2,
    fontSize: 52, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("可以每天用的心理调节方法", {
    x: 1.5, y: 3.7, w: 7, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Bottom decorative element - red block
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.2, w: 10, h: 0.425,
    fill: { color: theme.primary }
  });

  // Gold accent on bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 1.5, y: 5.2, w: 1.5, h: 0.425,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
