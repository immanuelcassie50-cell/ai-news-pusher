const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("弹性锚点：边界在哪里？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("在坚持原则与灵活应变之间找到平衡", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.7, w: 4.3, h: 3.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.7, w: 4.3, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("弹性区的特征", {
    x: 0.5, y: 1.7, w: 4.3, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  const flexFeatures = [
    "允许根据情境调整具体做法",
    "不同家庭成员可以有不同的执行方式",
    "可以随孩子年龄增长而扩展",
    "不会因为一时挫折而彻底崩塌"
  ];
  flexFeatures.forEach((f, i) => {
    slide.addText(f, {
      x: 0.7, y: 2.35 + i * 0.6, w: 3.9, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: 2.5 + i * 0.6, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.7, w: 4.3, h: 3.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.7, w: 4.3, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("判断标准", {
    x: 5.2, y: 1.7, w: 4.3, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  const standards = [
    { q: "是否触及底线锚点？", a: "是 → 不可调整" },
    { q: "调整后家庭氛围是否仍和谐？", a: "否 → 需要重新考虑" },
    { q: "孩子是否能理解这种灵活性？", a: "是 → 说明沟通到位" },
    { q: "是否为了短期方便而妥协？", a: "是 → 警惕短期主义" }
  ];
  standards.forEach((s, i) => {
    slide.addText(s.q, {
      x: 5.4, y: 2.35 + i * 0.7, w: 3.9, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(s.a, {
      x: 5.4, y: 2.65 + i * 0.7, w: 3.9, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei", italic: true,
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("43", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
