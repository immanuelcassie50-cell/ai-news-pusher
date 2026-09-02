const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("自检清单：好锚点 vs 坏锚点", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 0.45,
    fill: { color: theme.secondary }
  });
  slide.addText("好锚点的特征", {
    x: 0.5, y: 1.25, w: 4.3, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.25, w: 4.3, h: 0.45,
    fill: { color: theme.light }
  });
  slide.addText("坏锚点的特征", {
    x: 5.2, y: 1.25, w: 4.3, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  const goodItems = [
    "表述清晰，所有人都能理解",
    "有具体的执行标准可对照",
    "在压力下仍能坚持",
    "经过充分讨论达成共识",
    "能够解释\"为什么这样做\"",
    "定期回顾而非一成不变"
  ];
  const badItems = [
    "模糊抽象，无法判断是否做到",
    "\"差不多就行\"的心态",
    "只在孩子表现好时有效",
    "一方强加，另一方被迫接受",
    "无法回答选择它的理由",
    "制定后再无人过问"
  ];
  goodItems.forEach((item, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: 1.85 + i * 0.55, w: 4.3, h: 0.5,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.65, y: 1.97 + i * 0.55, w: 0.25, h: 0.25,
      fill: { color: theme.secondary }
    });
    slide.addText(item, {
      x: 1.0, y: 1.85 + i * 0.55, w: 3.65, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  badItems.forEach((item, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: 1.85 + i * 0.55, w: 4.3, h: 0.5,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.35, y: 1.97 + i * 0.55, w: 0.25, h: 0.25,
      fill: { color: theme.light }
    });
    slide.addText(item, {
      x: 5.7, y: 1.85 + i * 0.55, w: 3.65, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.15, w: 9, h: 0.04,
    fill: { color: theme.accent }
  });
  slide.addText("提示：每季度对家庭锚点进行一次全面检视", {
    x: 0.5, y: 5.25, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("45", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
