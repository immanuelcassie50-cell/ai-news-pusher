const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("8", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("标准三：可积累", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("这件事做完后，能复用吗？有复利效应吗？", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Questions
  const questions = [
    "这套方法能复用到其他场景吗？",
    "这次沉淀的资产（模板/代码/数据）下次还能用吗？",
    "会越做越快、越做越好吗？",
    "能力提升是线性还是指数级的？"
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
  slide.addText("提示：可积累的工作是和时间做朋友，不可积累的工作是和时间做敌人", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false
  });

  return slide;
}

module.exports = { createSlide };
