// slide-18.js - Content: 提示词模板 · 沟通目标与阻力
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 18,
  title: "提示词模板 · 沟通目标与阻力"
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
  slide.addText("提示词模板 · 沟通目标与阻力", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Left section - 沟通目标
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.4, h: 3.8,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText("沟通目标", {
    x: 0.7, y: 1.2, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("这次沟通结束时，希望达到的效果：", {
    x: 0.7, y: 1.7, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle"
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.2, w: 4, h: 2.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.05
  });

  slide.addText("[具体描述]", {
    x: 0.9, y: 2.4, w: 3.6, h: 2.1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "left", valign: "top"
  });

  // Right section - 客户常见阻力
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 1.1, w: 4.4, h: 3.8,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText("客户常见阻力", {
    x: 5.3, y: 1.2, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  const resistances = [
    { num: "1", text: '质疑你的专业判断："你当时说这个稳的"' },
    { num: "2", text: '要求立刻采取行动："我现在想全部赎回"' },
    { num: "3", text: "沉默或冷淡应对" }
  ];

  resistances.forEach((r, i) => {
    const y = 1.8 + i * 1.0;

    slide.addShape(pres.shapes.OVAL, {
      x: 5.3, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.secondary }
    });
    slide.addText(r.num, {
      x: 5.3, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(r.text, {
      x: 5.85, y: y, w: 3.5, h: 0.8,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "left", valign: "middle"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("18", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };