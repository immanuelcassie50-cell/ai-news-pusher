const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("什么是弹性锚点？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 9, h: 1.3,
    fill: { color: theme.accent, transparency: 25 }
  });
  slide.addText("弹性锚点是可以灵活调整的空间，让育儿方式适应不同情境", {
    x: 0.7, y: 1.5, w: 8.6, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });
  slide.addText("弹性锚点的运用", {
    x: 0.5, y: 2.85, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  const flexPoints = [
    { scenario: "起床时间", anchor: "睡眠时长优先，具体时间灵活" },
    { scenario: "课外活动", anchor: "兴趣探索为主，数量可调整" },
    { scenario: "电子产品", anchor: "内容质量优先，时长可商量" },
    { scenario: "学习安排", anchor: "习惯养成优先，方式灵活多变" }
  ];
  flexPoints.forEach((fp, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 3.4 + row * 1.0;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 0.85,
      fill: { color: "FFFFFF" },
      line: { color: theme.accent, width: 1 }
    });
    slide.addText(fp.scenario, {
      x: x + 0.15, y: y + 0.08, w: 1.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(fp.anchor, {
      x: x + 1.4, y: y + 0.08, w: 2.85, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("38", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
