// slide-17.js - Content: 提示词模板 · 场景描述
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 17,
  title: "提示词模板 · 场景描述"
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
  slide.addText("提示词模板 · 场景描述", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Form fields
  const fields = [
    { label: "场景名称", placeholder: "[填写你的场景定位表里的场景名称]" },
    { label: "客户特征", placeholder: "资产量级、典型特征、关系阶段" },
    { label: "触发情境", placeholder: "[描述什么事情触发了这次沟通，客户当前的情绪状态]" },
    { label: "沟通方式", placeholder: "[电话/面谈/微信]" }
  ];

  fields.forEach((field, i) => {
    const y = 1.1 + i * 1.0;

    // Label
    slide.addText(field.label, {
      x: 0.5, y: y, w: 1.8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Input box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 2.4, y: y, w: 7.1, h: 0.8,
      fill: { color: theme.light },
      rectRadius: 0.05
    });

    // Placeholder text
    slide.addText(field.placeholder, {
      x: 2.6, y: y, w: 6.7, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "left", valign: "middle"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("17", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };