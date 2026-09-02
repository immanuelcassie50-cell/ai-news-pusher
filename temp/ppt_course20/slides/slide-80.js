const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("Module 6 核心要点", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Key takeaways in visual format
  const takeaways = [
    { num: "01", title: "建立系统", desc: "用四个组件构建家庭信息管理系统", color: theme.primary },
    { num: "02", title: "分层信任", desc: "信息来源分三层，优先级清晰不焦虑", color: theme.secondary },
    { num: "03", title: "五维评估", desc: "从可信度、证据、适用性、可操作性、长期影响判断", color: theme.accent },
    { num: "04", title: "锚点决策", desc: "信息锚点、决策锚点、共识锚点快速决策", color: theme.light },
    { num: "05", title: "日志复盘", desc: "记录决策过程，持续优化迭代", color: theme.secondary }
  ];

  takeaways.forEach((ta, i) => {
    const y = 1.25 + i * 0.85;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 9.2, h: 0.75,
      fill: { color: theme.bg, transparency: 10 },
      line: { color: ta.color, width: 1.5 },
      rectRadius: 0.06
    });
    // Number badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.55, y: y + 0.15, w: 0.6, h: 0.45,
      fill: { color: ta.color },
      rectRadius: 0.06
    });
    slide.addText(ta.num, {
      x: 0.55, y: y + 0.15, w: 0.6, h: 0.45,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Title
    slide.addText(ta.title, {
      x: 1.35, y: y + 0.15, w: 2.0, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // Description
    slide.addText(ta.desc, {
      x: 3.5, y: y + 0.18, w: 5.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("80", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
