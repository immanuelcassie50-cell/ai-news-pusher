const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("如何设置合理的里程碑？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const milestones = [
    { week: "第1周", goal: "最小可行性目标", detail: "每天只做5分钟，不追求完美", icon: "S" },
    { week: "第2-3周", goal: "建立节奏感", detail: "固定时间、固定地点、形成触发", icon: "R" },
    { week: "第4-6周", goal: "突破舒适区", detail: "逐步增加难度，建立信心", icon: "B" },
    { week: "第7-10周", goal: "强化与调整", detail: "根据实际情况微调策略", icon: "A" }
  ];
  milestones.forEach((m, i) => {
    const y = 1.35 + i * 0.95;
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText(m.week, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fontSize: 9, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(m.goal, {
      x: 1.4, y: y, w: 3.5, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(m.detail, {
      x: 1.4, y: y + 0.38, w: 4.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 6.3, y: 1.35, w: 3.3, h: 3.4,
    fill: { color: theme.accent, transparency: 20 }
  });
  slide.addText("SMART原则", {
    x: 6.5, y: 1.5, w: 2.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center"
  });
  const smart = [
    "S - Specific 具体的",
    "M - Measurable 可测量的",
    "A - Achievable 可实现的",
    "R - Relevant 相关的",
    "T - Time-bound 有时限的"
  ];
  smart.forEach((s, i) => {
    slide.addText(s, {
      x: 6.5, y: 2.0 + i * 0.5, w: 2.9, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("55", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
