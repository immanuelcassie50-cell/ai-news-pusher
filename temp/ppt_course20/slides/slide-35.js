const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("为什么需要决策锚点？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.4, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText("信息过载的困境", {
    x: 0.7, y: 1.55, w: 3.9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  const leftPoints = [
    "每天收到数百条育儿建议",
    "说法不一，让人无所适从",
    "焦虑感不断累积",
    "决策效率低下"
  ];
  leftPoints.forEach((point, i) => {
    slide.addText(point, {
      x: 0.7, y: 2.1 + i * 0.65, w: 3.9, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: 2.25 + i * 0.65, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
  });
  slide.addText("锚点的作用", {
    x: 5.4, y: 1.55, w: 3.9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  const rightPoints = [
    "提供明确的判断标准",
    "减少决策时的犹豫",
    "建立内在的稳定感",
    "让选择变得清晰简单"
  ];
  rightPoints.forEach((point, i) => {
    slide.addText(point, {
      x: 5.4, y: 2.1 + i * 0.65, w: 3.9, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.4, y: 2.25 + i * 0.65, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("35", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
