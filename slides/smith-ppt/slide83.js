const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程回顾", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("核心概念速查", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Two columns of concepts
  const leftConcepts = [
    { term: "看不见的手", def: "个人追求利益时，不知不觉促进社会利益的现象" },
    { term: "劳动分工", def: "将生产过程分解为不同环节的专业化操作" },
    { term: "交换倾向", def: "人类天生愿意与他人交换的心理本能" },
    { term: "同情心", def: "设身处地感受他人处境的情感能力" }
  ];

  const rightConcepts = [
    { term: "公正旁观者", def: "理性第三人视角，评判行为合宜性" },
    { term: "合宜感", def: "行为得体、恰到好处的主观感受" },
    { term: "智慧与谨慎", def: "自我利益与道德约束的平衡" },
    { term: "美德", def: "克己、仁慈、正义的综合体现" }
  ];

  // Left column
  leftConcepts.forEach((c, i) => {
    const y = 1.9 + i * 0.85;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.3, h: 0.75,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.15, h: 0.75,
      fill: { color: theme.primary }
    });
    slide.addText(c.term, {
      x: 0.75, y: y + 0.05, w: 3.9, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(c.def, {
      x: 0.75, y: y + 0.38, w: 3.9, h: 0.32,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right column
  rightConcepts.forEach((c, i) => {
    const y = 1.9 + i * 0.85;
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 4.3, h: 0.75,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 0.15, h: 0.75,
      fill: { color: theme.accent }
    });
    slide.addText(c.term, {
      x: 5.45, y: y + 0.05, w: 3.9, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(c.def, {
      x: 5.45, y: y + 0.38, w: 3.9, h: 0.32,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("83", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
