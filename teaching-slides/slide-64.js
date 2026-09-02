const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习一：案例分析 — 深度研讨", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Case study panel
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 2.2,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 0.15, h: 2.2,
    fill: { color: theme.accent }
  });

  slide.addText("真实案例：某电商团队的AI引入历程", {
    x: 0.8, y: 1.2, w: 8.5, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const casePoints = [
    "背景：团队10人，月处理订单10万+，人工审核压力大",
    "痛点：重复劳动多、员工疲惫、错误率上升",
    "引入：先试点后推广，3个月后覆盖80%业务流程",
    "挑战：初期员工抵触，担心被取代；促进师引导沟通",
    "结果：效率提升40%，员工转向更高价值工作"
  ];

  casePoints.forEach((point, i) => {
    slide.addText((i + 1) + ". " + point, {
      x: 0.9, y: 1.65 + i * 0.38, w: 8.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  // Discussion questions
  slide.addText("研讨问题", {
    x: 0.5, y: 3.5, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const questions = [
    { q: "这个团队做对了什么？", type: "成功因素" },
    { q: "如果你是促进师，会如何处理员工抵触？", type: "策略设计" },
    { q: "40%效率提升如何测量？有哪些潜在风险？", type: "效果评估" }
  ];

  questions.forEach((item, i) => {
    const y = 3.95 + i * 0.5;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.5, h: 0.4,
      fill: { color: theme.secondary }
    });
    slide.addText(item.type, {
      x: 0.5, y: y, w: 1.5, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "ffffff",
      align: "center", valign: "middle"
    });

    slide.addText(item.q, {
      x: 2.1, y: y, w: 7.4, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.dark,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
