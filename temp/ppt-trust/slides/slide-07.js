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

  slide.addText("01", {
    x: 0.4, y: 0.3, w: 0.7, h: 0.7,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("能力信任", {
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

  slide.addText("定义：别人相信你——你真有本事，你做得到", {
    x: 0.6, y: 1.2, w: 8.8, h: 0.9,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // How to sustain section
  slide.addText("撑住方式", {
    x: 0.4, y: 2.35, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  const sustainItems = ["专业知识", "履历", "判断力", "交付质量"];
  const itemX = [0.4, 2.6, 4.8, 7.0];

  sustainItems.forEach((item, i) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: itemX[i], y: 2.8, w: 2, h: 0.5,
      fill: { color: theme.secondary },
      rectRadius: 0.05
    });

    slide.addText(item, {
      x: itemX[i], y: 2.8, w: 2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle"
    });
  });

  // Collapse mode section
  slide.addText("塌的样子", {
    x: 0.4, y: 3.55, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 3.95, w: 2.5, h: 0.5,
    fill: { color: theme.accent, transparency: 20 },
    rectRadius: 0.05
  });

  slide.addText("专业祛魅", {
    x: 0.4, y: 3.95, w: 2.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center", valign: "middle"
  });

  // Self-question
  slide.addShape(pres.ShapeType.roundRect, {
    x: 3.2, y: 3.95, w: 6.4, h: 0.5,
    fill: { color: theme.light },
    rectRadius: 0.05
  });

  slide.addText("自问：我的专业资格靠什么撑住？", {
    x: 3.2, y: 3.95, w: 6.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
}
module.exports = { createSlide };
