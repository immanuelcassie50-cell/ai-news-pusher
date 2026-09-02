const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("什么是底线锚点？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 9, h: 1.3,
    fill: { color: theme.light, transparency: 30 }
  });
  slide.addText("底线锚点是不可逾越的红线，是保护孩子安全的最后屏障", {
    x: 0.7, y: 1.5, w: 8.6, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });
  slide.addText("底线锚点的类型", {
    x: 0.5, y: 2.85, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  const types = [
    { title: "安全底线", examples: "交通规则、药品安全、陌生人接触" },
    { title: "健康底线", examples: "充足睡眠、基本营养、定期体检" },
    { title: "道德底线", examples: "不说谎、不欺负他人、尊重他人" }
  ];
  types.forEach((t, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.4, w: 2.9, h: 1.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 2 }
    });
    slide.addText(t.title, {
      x: x, y: 3.5, w: 2.9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });
    slide.addText(t.examples, {
      x: x + 0.15, y: 4.1, w: 2.6, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "top"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("37", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
