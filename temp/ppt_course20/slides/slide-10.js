const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("课程解决方案：三层框架", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const layers = [
    {
      layer: "第一层：过滤",
      desc: "快速筛选，淘汰明显错误或不适用的信息",
      color: theme.secondary
    },
    {
      layer: "第二层：评估",
      desc: "核实来源与证据质量，判断可信度",
      color: theme.accent
    },
    {
      layer: "第三层：决策",
      desc: "结合家庭实际情况，做出最适合的选择",
      color: theme.light
    }
  ];
  layers.forEach((l, i) => {
    const y = 1.4 + i * 1.25;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: "FFFFFF" },
      line: { color: l.color, width: 2 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 2.5, h: 1.0,
      fill: { color: l.color }
    });
    slide.addText(l.layer, {
      x: 0.5, y: y, w: 2.5, h: 1.0,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(l.desc, {
      x: 3.2, y: y, w: 6, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.04,
    fill: { color: theme.primary }
  });
  slide.addText("目标：从海量信息中快速提取有价值的内容，避免信息过载", {
    x: 0.5, y: 4.55, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
