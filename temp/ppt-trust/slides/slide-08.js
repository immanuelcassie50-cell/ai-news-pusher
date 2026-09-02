function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Layer number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.4, y: 0.3, w: 0.7, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("02", {
    x: 0.4, y: 0.3, w: 0.7, h: 0.7,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("真实信任", {
    x: 1.3, y: 0.35, w: 4, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Definition section
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.2, w: 9.2, h: 0.9,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("定义：别人相信你——你不是在演", {
    x: 0.6, y: 1.2, w: 8.8, h: 0.9,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Key insight section
  slide.addText("关键洞察", {
    x: 0.4, y: 2.35, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 2.8, w: 9.2, h: 0.8,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("真实不是完全不经营，而是经营不能替代真实", {
    x: 0.6, y: 2.8, w: 8.8, h: 0.8,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Warning section
  slide.addText("警示", {
    x: 0.4, y: 3.85, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const warningItems = [
    "包装不能明显背离真实生活",
    "包装不能明显背离真实能力",
    "包装不能明显背离真实态度"
  ];

  warningItems.forEach((item, i) => {
    const y = 4.3 + i * 0.4;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(item, {
      x: 0.95, y: y, w: 8, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}
module.exports = { createSlide };
