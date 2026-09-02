const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("三类锚点的对比与联系", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const anchors = [
    {
      type: "核心锚点",
      color: theme.primary,
      feature: "北极星",
      desc: "终极目标",
      flexibility: "不可改变",
      example: "培养独立思考能力"
    },
    {
      type: "底线锚点",
      color: theme.light,
      feature: "安全线",
      desc: "不可逾越",
      flexibility: "严格坚守",
      example: "不单独跟陌生人走"
    },
    {
      type: "弹性锚点",
      color: theme.accent,
      feature: "调节器",
      desc: "灵活空间",
      flexibility: "可以调整",
      example: "周末作息时间"
    }
  ];
  anchors.forEach((a, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 2.9, h: 0.6,
      fill: { color: a.color }
    });
    slide.addText(a.type, {
      x: x, y: 1.35, w: 2.9, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.95, w: 2.9, h: 2.7,
      fill: { color: "FFFFFF" },
      line: { color: a.color, width: 2 }
    });
    const rows = [
      { label: "作用", value: a.feature },
      { label: "性质", value: a.desc },
      { label: "灵活度", value: a.flexibility },
      { label: "例子", value: a.example }
    ];
    rows.forEach((r, j) => {
      slide.addText(r.label, {
        x: x + 0.15, y: 2.1 + j * 0.6, w: 0.9, h: 0.5,
        fontSize: 10, fontFace: "Microsoft YaHei", bold: true,
        color: theme.secondary
      });
      slide.addText(r.value, {
        x: x + 1.05, y: 2.1 + j * 0.6, w: 1.7, h: 0.5,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fill: { color: theme.secondary, transparency: 20 }
  });
  slide.addText("三类锚点协同运作：核心锚点指明方向，底线锚点守护安全，弹性锚点保持适应力", {
    x: 0.6, y: 4.85, w: 8.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("39", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
