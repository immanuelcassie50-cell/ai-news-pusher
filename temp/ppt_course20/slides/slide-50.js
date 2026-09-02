const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("决策日志：追踪你的判断过程", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fill: { color: theme.accent, transparency: 40 }
  });
  slide.addText("记录不是为了后悔，而是为了校准", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });
  const items = [
    { q: "情境", a: "当时面临的具体情况是什么？" },
    { q: "判断", a: "我当时的决定是什么？" },
    { q: "依据", a: "我基于哪些信息做出这个判断？" },
    { q: "结果", a: "实际结果如何？" },
    { q: "反思", a: "如果重来，我会怎么改进？" }
  ];
  items.forEach((item, i) => {
    const y = 1.95 + i * 0.68;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.2, h: 0.55,
      fill: { color: theme.secondary }
    });
    slide.addText(item.q, {
      x: 0.5, y: y, w: 1.2, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(item.a, {
      x: 1.85, y: y, w: 7.6, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("50", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
