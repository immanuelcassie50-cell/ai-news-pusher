const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("决策简化：从\"纠结\"到\"行动\"", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const strategies = [
    { title: "设定底线", desc: "哪些是绝对不接受/接受的？提前划定红线" },
    { title: "满意即可", desc: "不是选最优方案，而是选足够好的方案" },
    { title: "设置期限", desc: "信息收集不超过XX分钟，到时间必须做决定" },
    { title: "允许试错", desc: "决定后如果不对，可以调整；完美决策不存在" }
  ];
  strategies.forEach((s, i) => {
    const y = 1.35 + i * 0.95;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: 1.2, y: y, w: 2.5, h: 0.55,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, valign: "middle"
    });
    slide.addText(s.desc, {
      x: 3.7, y: y, w: 5.8, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.04,
    fill: { color: theme.accent }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("30", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
