const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("9", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("聚焦排序矩阵", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Matrix grid (2x2)
  const matrixX = 1.5;
  const matrixY = 1.3;
  const cellW = 3.5;
  const cellH = 1.8;

  // Quadrant colors: Quick Wins (green-ish), Major Projects (primary), Fill-ins (light), Avoid (gray)
  const quadrants = [
    { x: 0, y: 0, label: "Quick Wins", sub: "高价值 x 低难度", color: "4CAF50" },
    { x: cellW, y: 0, label: "Major Projects", sub: "高价值 x 高难度", color: theme.primary },
    { x: 0, y: cellH, label: "Fill-ins", sub: "低价值 x 低难度", color: theme.accent },
    { x: cellW, y: cellH, label: "Avoid", sub: "低价值 x 高难度", color: theme.light }
  ];

  quadrants.forEach((q) => {
    // Cell background
    slide.addShape(pres.ShapeType.roundRect, {
      x: matrixX + q.x, y: matrixY + q.y, w: cellW - 0.1, h: cellH - 0.1,
      fill: { color: q.color, transparency: q.color === theme.primary ? 0 : 80 },
      line: { color: q.color, width: 1 },
      rectRadius: 0.08
    });

    // Label
    slide.addText(q.label, {
      x: matrixX + q.x + 0.15, y: matrixY + q.y + 0.3, w: cellW - 0.4, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: q.color === theme.light ? theme.secondary : theme.bg, bold: true
    });

    // Sub label
    slide.addText(q.sub, {
      x: matrixX + q.x + 0.15, y: matrixY + q.y + 0.9, w: cellW - 0.4, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: q.color === theme.light ? theme.accent : theme.bg, bold: false
    });
  });

  // Axis labels
  slide.addText("难度 →", {
    x: 4.2, y: 4.95, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  slide.addText("价值 →", {
    x: 0.5, y: 2.5, w: 0.8, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: false,
    rotate: 270
  });

  // Priority arrow
  slide.addText("优先做", {
    x: 1.7, y: 1.0, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "4CAF50", bold: true
  });

  return slide;
}

module.exports = { createSlide };
