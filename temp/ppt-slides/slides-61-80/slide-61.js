// slide-61.js - 冲突发展的四个阶段
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 61,
  title: '冲突发展的四个阶段'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("冲突发展的四个阶段", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Timeline base line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.9, w: 8.4, h: 0.04,
    fill: { color: theme.secondary }
  });

  // Timeline stages
  const stages = [
    { num: "1", title: "潜伏期", desc: "矛盾积累\n隐性对抗", color: theme.secondary },
    { num: "2", title: "爆发期", desc: "公开对抗\n情绪激烈", color: theme.accent },
    { num: "3", title: "蔓延期", desc: "波及扩大\n立场强化", color: theme.accent },
    { num: "4", title: "消退期", desc: "逐步缓和\n或持续恶化", color: theme.secondary }
  ];

  stages.forEach((stage, i) => {
    const x = 1.2 + i * 2.2;

    // Circle node
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.65, y: 2.65, w: 0.55, h: 0.55,
      fill: { color: stage.color }
    });
    slide.addText(stage.num, {
      x: x + 0.65, y: 2.65, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title above
    slide.addText(stage.title, {
      x: x, y: 1.9, w: 1.85, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description below
    slide.addText(stage.desc, {
      x: x, y: 3.4, w: 1.85, h: 1.0,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
    });
  });

  // Arrow indicators between stages
  for (let i = 0; i < 3; i++) {
    const x = 2.0 + i * 2.2;
    slide.addText("→", {
      x: x + 1.4, y: 2.65, w: 0.5, h: 0.55,
      fontSize: 24, fontFace: "Arial",
      color: theme.secondary,
      align: "center", valign: "middle"
    });
  }

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.75,
    fill: { color: theme.light }
  });
  slide.addText("引导者介入最佳时机：潜伏期和消退期 — 预防和巩固", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.75,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("61", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };