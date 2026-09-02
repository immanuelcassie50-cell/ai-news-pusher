// slide-16.js - Content: 提示词模板 · Role与背景
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 16,
  title: "提示词模板 · Role与背景"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("提示词模板 · Role与背景", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Role card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.4,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText("Role", {
    x: 0.8, y: 1.2, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("高净值客户服务话术设计师", {
    x: 0.8, y: 1.6, w: 8.4, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Background card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.7, w: 9, h: 1.9,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText("Background", {
    x: 0.8, y: 2.8, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("我是招商证券的财富顾问，需要为以下服务场景生成一套专业的话术模板。", {
    x: 0.8, y: 3.3, w: 8.4, h: 1.1,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "top"
  });

  // Code-like formatting indicator
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.8, y: 1.15, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("</>", {
    x: 8.8, y: 1.15, w: 0.5, h: 0.5,
    fontSize: 10, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("16", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };