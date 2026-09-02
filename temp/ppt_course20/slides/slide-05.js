const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("信息爆炸时代的育儿困境", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("每天有超过3000篇育儿文章发布", {
    x: 0.5, y: 1.4, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  const stats = [
    { value: "3000+", label: "每日育儿文章" },
    { value: "500+", label: "育儿APP数量" },
    { value: "100+", label: "专家意见冲突" },
    { value: "∞", label: "信息无限涌来" }
  ];
  stats.forEach((stat, i) => {
    const x = 0.7 + i * 2.35;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.1, w: 2.1, h: 1.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addText(stat.value, {
      x: x, y: 2.3, w: 2.1, h: 0.9,
      fontSize: 36, fontFace: "Arial", bold: true,
      color: theme.accent, align: "center"
    });
    slide.addText(stat.label, {
      x: x, y: 3.2, w: 2.1, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
