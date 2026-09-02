// slide-23.js - Content: 标准流程话术格式
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 23,
  title: "标准流程话术格式"
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
  slide.addText("标准流程话术格式", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Step format container
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 4.1,
    fill: { color: theme.light },
    rectRadius: 0.1
  });

  // Step fields
  const fields = [
    { label: "步骤名称", value: "[步骤名称]" },
    { label: "目的", value: "（这一步的沟通目的是什么）" },
    { label: "具体话术示例", value: "（用引号标出实际可以说的话）" },
    { label: "判断节点", value: "（什么信号表示这步完成了，可以进入下一步）" }
  ];

  fields.forEach((field, i) => {
    const y = 1.2 + i * 1.0;

    // Label badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.7, y: y, w: 1.6, h: 0.7,
      fill: { color: theme.secondary },
      rectRadius: 0.05
    });
    slide.addText(field.label, {
      x: 0.7, y: y, w: 1.6, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Value placeholder
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 2.5, y: y, w: 6.8, h: 0.7,
      fill: { color: "FFFFFF" },
      rectRadius: 0.05
    });
    slide.addText(field.value, {
      x: 2.7, y: y, w: 6.4, h: 0.7,
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
  slide.addText("23", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };