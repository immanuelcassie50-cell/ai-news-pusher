// slide-21.js - Content: 提示词模板 · 输出要求
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 21,
  title: "提示词模板 · 输出要求"
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
  slide.addText("提示词模板 · 输出要求", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Structure sections
  const sections = [
    { num: "一", title: "开场话术", desc: "前3句话，情绪接住优先，体现主动性" },
    { num: "二", title: "标准流程话术", desc: "分步骤，每步含：步骤名称、目的、具体话术、判断节点" },
    { num: "三", title: "客户典型反应与应对变体", desc: "3种反应" },
    { num: "四", title: "绝对雷区", desc: "5-7条不能说的话" }
  ];

  sections.forEach((s, i) => {
    const y = 1.0 + i * 1.05;

    // Number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 0.6, h: 0.9,
      fill: { color: theme.secondary },
      rectRadius: 0.08
    });
    slide.addText(s.num, {
      x: 0.5, y: y, w: 0.6, h: 0.9,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(s.title, {
      x: 1.3, y: y, w: 3, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(s.desc, {
      x: 1.3, y: y + 0.45, w: 8.2, h: 0.45,
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
  slide.addText("21", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };