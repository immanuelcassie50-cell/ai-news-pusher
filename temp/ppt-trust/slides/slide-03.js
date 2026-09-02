function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Core question - large text
  slide.addText("核心问题", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("你有没有观察过，一个人攒了十年的好口碑，能被一句话几天内清零？", {
    x: 0.5, y: 1.1, w: 9, h: 1.4,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three names section
  slide.addText("三个名字", {
    x: 0.5, y: 2.7, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Name cards
  const names = ["韩红", "雷军", "李佳琦"];
  const nameX = [0.5, 3.5, 6.5];

  names.forEach((name, i) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: nameX[i], y: 3.2, w: 2.5, h: 0.8,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });

    slide.addText(name, {
      x: nameX[i], y: 3.2, w: 2.5, h: 0.8,
      fontSize: 28, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
  });

  // Bottom insight bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 9, h: 0.7,
    fill: { color: theme.light },
    rectRadius: 0.05
  });

  slide.addText("这三人八竿子打不着，但塌的方式是同一套机制", {
    x: 0.5, y: 4.5, w: 9, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
}
module.exports = { createSlide };
