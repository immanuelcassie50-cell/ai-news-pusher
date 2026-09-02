const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("21", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("本节小结（上）", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Checkmark points
  const points = [
    "聚焦的本质：资源有限，选择即代价",
    "分散精力机会成本大：10个60分不如1个100分",
    "聚焦三标准：价值大、能落地、可积累",
    "聚焦排序矩阵帮助判断优先级",
    "TOP1选择：列出→筛选→定位→问自己"
  ];

  points.forEach((point, i) => {
    const y = 1.3 + i * 0.8;

    // Checkmark
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.1, w: 0.3, h: 0.3,
      fill: { color: "4CAF50" }
    });
    slide.addText("✓", {
      x: 0.6, y: y + 0.05, w: 0.3, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.bg, bold: true,
      align: "center"
    });

    // Point text
    slide.addText(point, {
      x: 1.1, y: y, w: 8.3, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  return slide;
}

module.exports = { createSlide };
