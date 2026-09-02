function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("韩红案例关键词", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, color: theme.primary,
    bold: true, align: "center"
  });

  // Left column - keywords
  const leftX = 0.6;

  // Mechanism
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX, y: 1.2, w: 4.2, h: 0.9,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("机制：位置错配", {
    x: leftX + 0.2, y: 1.35, w: 3.8, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 18, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Line crossed
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX, y: 2.3, w: 4.2, h: 0.9,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });

  slide.addText("踩中的线：边界信任", {
    x: leftX + 0.2, y: 2.45, w: 3.8, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 18, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Association
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX, y: 3.4, w: 4.2, h: 0.9,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText("关联：与李佳琦是同一种机制", {
    x: leftX + 0.2, y: 3.55, w: 3.8, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary,
    align: "center", valign: "middle"
  });

  slide.addText("——位置错配", {
    x: leftX + 0.2, y: 3.95, w: 3.8, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.secondary,
    align: "center"
  });

  // Right side - quote highlight
  const rightX = 5.2;

  slide.addShape(pres.ShapeType.roundRect, {
    x: rightX, y: 1.2, w: 4.2, h: 3.1,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });

  slide.addText("金句", {
    x: rightX + 0.3, y: 1.4, w: 3.6, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: "FFFFFF",
    align: "left"
  });

  slide.addText("\"我又没有恶意\"", {
    x: rightX + 0.3, y: 1.9, w: 3.6, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 22, color: "FFFFFF",
    bold: true, align: "center"
  });

  slide.addText("是最危险的说服自己的一句话", {
    x: rightX + 0.3, y: 2.5, w: 3.6, h: 1.5,
    fontFace: "Microsoft YaHei", fontSize: 20, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}
module.exports = { createSlide };
