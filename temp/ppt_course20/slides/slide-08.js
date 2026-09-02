const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("为什么知道的越多，越难做决定？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 26, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("知识的\"获得感\"与\"行动力\"成反比", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei", italic: true,
    color: theme.accent, align: "center"
  });
  const flowSteps = [
    { text: "收集信息", color: theme.secondary },
    { text: "产生焦虑", color: theme.light },
    { text: "继续搜索", color: theme.accent },
    { text: "更加困惑", color: theme.light },
    { text: "推迟决策", color: theme.primary }
  ];
  flowSteps.forEach((step, i) => {
    const x = 0.7 + i * 1.9;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.0, w: 1.5, h: 0.7,
      fill: { color: step.color }
    });
    slide.addText(step.text, {
      x: x, y: 2.0, w: 1.5, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: i === 4 ? "FFFFFF" : theme.primary, align: "center", valign: "middle"
    });
    if (i < 4) {
      slide.addText("→", {
        x: x + 1.5, y: 2.0, w: 0.4, h: 0.7,
        fontSize: 18, fontFace: "Arial",
        color: theme.secondary, align: "center", valign: "middle"
      });
    }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.0, w: 9, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText("核心问题", {
    x: 0.7, y: 3.15, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent
  });
  const insights = [
    "信息积累 ≠ 决策能力提升",
    "知道\"应该做\"不等于\"如何做\"",
    "完美信息不存在，永远有遗漏"
  ];
  insights.forEach((ins, i) => {
    slide.addText("• " + ins, {
      x: 0.9, y: 3.6 + i * 0.45, w: 8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("8", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
