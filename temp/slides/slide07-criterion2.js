const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("7", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("标准二：能落地", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("你有足够的资源和能力完成这件事吗？", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Questions
  const questions = [
    "你需要的时间和精力，你现有吗？",
    "需要的技术或工具，你具备吗？",
    "需要配合的人，你能协调到吗？",
    "预估的难度，是跳一跳能够到的吗？"
  ];

  questions.forEach((q, i) => {
    const y = 1.6 + i * 0.9;

    // Bullet point
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.15, w: 0.15, h: 0.15,
      fill: { color: theme.primary }
    });

    // Question text
    slide.addText(q, {
      x: 1.1, y: y, w: 8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("提示：接地气的计划才是计划，不落地的理想只是幻想", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false
  });

  return slide;
}

module.exports = { createSlide };
