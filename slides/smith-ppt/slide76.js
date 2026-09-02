const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("练习一", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("思想流派匹配", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Instructions
  slide.addText("连线题：请将思想家与其核心主张配对", {
    x: 0.5, y: 1.75, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left column - Thinkers
  const thinkers = [
    { num: "①", name: "亚当·斯密" },
    { num: "②", name: "哈耶克" },
    { num: "③", name: "凯恩斯" },
    { num: "④", name: "马克思" }
  ];

  thinkers.forEach((t, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: 2.3 + i * 0.7, w: 2.5, h: 0.55,
      fill: { color: theme.secondary }
    });
    slide.addText(t.num + " " + t.name, {
      x: 0.6, y: 2.35 + i * 0.7, w: 2.3, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", valign: "middle"
    });
  });

  // Right column - Ideas
  const ideas = [
    { num: "A", text: "看不见的手，自发秩序" },
    { num: "B", text: "政府干预，刺激需求" },
    { num: "C", text: "阶级斗争，历史唯物主义" },
    { num: "D", text: "知识分工，信息分散" }
  ];

  ideas.forEach((idea, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 5.5, y: 2.3 + i * 0.7, w: 4, h: 0.55,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(idea.num + ". " + idea.text, {
      x: 5.6, y: 2.35 + i * 0.7, w: 3.8, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Connection lines hint
  slide.addText("连线答案：①—A  ②—D  ③—B  ④—C", {
    x: 0.5, y: 5.0, w: 5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("76", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
