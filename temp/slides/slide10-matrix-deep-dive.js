const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("聚焦排序矩阵详解", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Four quadrant explanations
  const quadrants = [
    {
      title: "Quick Wins（高价值 × 低难度）",
      action: "立即执行！投入小、回报大",
      color: "4CAF50"
    },
    {
      title: "Major Projects（高价值 × 高难度）",
      action: "分解任务，逐步推进",
      color: theme.primary
    },
    {
      title: "Fill-ins（低价值 × 低难度）",
      action: "空闲时做，填充时间",
      color: theme.accent
    },
    {
      title: "Avoid（低价值 × 高难度）",
      action: "尽量避免或委托他人",
      color: theme.light
    }
  ];

  quadrants.forEach((q, i) => {
    const y = 1.0 + i * 1.1;

    // Color indicator
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.12, h: 0.9,
      fill: { color: q.color }
    });

    // Title
    slide.addText(q.title, {
      x: 0.8, y: y, w: 8.5, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Action
    slide.addText(q.action, {
      x: 0.8, y: y + 0.45, w: 8.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false
    });
  });

  return slide;
}

module.exports = { createSlide };
