const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("什么是核心锚点？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 9, h: 1.3,
    fill: { color: theme.secondary, transparency: 15 }
  });
  slide.addText("核心锚点是你育儿的终极目标，是所有决策的北极星", {
    x: 0.7, y: 1.5, w: 8.6, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });
  slide.addText("核心锚点的特征", {
    x: 0.5, y: 2.85, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  const features = [
    { title: "长期导向", desc: "关注10年后的结果，而非眼前的得失" },
    { title: "价值驱动", desc: "基于你认同的教育理念，而非外界标准" },
    { title: "高度稳定", desc: "不会随流行趋势或他人评价而动摇" }
  ];
  features.forEach((f, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.4, w: 2.9, h: 1.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 3.4, w: 2.9, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(f.title, {
      x: x, y: 3.4, w: 2.9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(f.desc, {
      x: x + 0.15, y: 4.0, w: 2.6, h: 1.1,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("36", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
