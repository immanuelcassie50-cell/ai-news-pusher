const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("三个锚点的协调与可能冲突", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("当三个锚点相互矛盾时如何处理？", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const anchors = [
    { name: "核心锚点", color: theme.primary, desc: "长期稳定的价值观原则" },
    { name: "底线锚点", color: theme.accent, desc: "不可逾越的红线" },
    { name: "弹性锚点", color: theme.light, desc: "可灵活调整的边界" }
  ];
  anchors.forEach((a, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 1.05, y: 1.65, w: 0.9, h: 0.9,
      fill: { color: a.color }
    });
    slide.addText(a.name, {
      x: x, y: 2.6, w: 3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: a.color, align: "center"
    });
    slide.addText(a.desc, {
      x: x, y: 2.95, w: 3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.4, w: 9, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText("冲突处理原则", {
    x: 0.7, y: 3.55, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  const principles = [
    { priority: "第一", rule: "底线锚点 > 核心锚点 > 弹性锚点", reason: "红线不可触碰" },
    { priority: "第二", rule: "当核心与弹性冲突时", reason: "回到家庭价值观检验" },
    { priority: "第三", rule: "当多个底线冲突时", reason: "选择伤害最小的那个方向" }
  ];
  principles.forEach((p, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.7, y: 3.95 + i * 0.45, w: 0.5, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(p.priority, {
      x: 0.7, y: 3.95 + i * 0.45, w: 0.5, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(p.rule, {
      x: 1.3, y: 3.95 + i * 0.45, w: 3.8, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(p.reason, {
      x: 5.2, y: 3.95 + i * 0.45, w: 4, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("44", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
