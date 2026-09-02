// slide-19.js - Content: 提示词模板 · 合规约束
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 19,
  title: "提示词模板 · 合规约束"
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
  slide.addText("提示词模板 · 合规约束", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Warning box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.8,
    fill: { color: theme.secondary, transparency: 15 },
    rectRadius: 0.08
  });

  slide.addText("以下内容不能出现在话术里", {
    x: 0.7, y: 1.0, w: 8.6, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // List items
  const items = [
    "不承诺收益或保本",
    "不对比产品历史最高点",
    "不评价竞争对手的产品或服务",
    "不超越客户适当性评估结果的表述"
  ];

  items.forEach((item, i) => {
    const y = 2.0 + i * 0.8;

    // Red indicator
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y + 0.15, w: 0.08, h: 0.5,
      fill: { color: theme.secondary }
    });

    // Item text
    slide.addText(item, {
      x: 0.8, y: y, w: 8.7, h: 0.8,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "left", valign: "middle"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("19", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };