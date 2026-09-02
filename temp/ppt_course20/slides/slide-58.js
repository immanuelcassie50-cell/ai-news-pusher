const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("Module 4 核心要点", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const modules = [
    { num: "1", title: "习惯形成需要时间", points: ["平均66天形成稳定习惯", "21天习惯法不科学", "分阶段设定目标"] },
    { num: "2", title: "SMART目标原则", points: ["具体的、可测量的", "可实现的、相关的、有时限的", "从小目标开始"] },
    { num: "3", title: "应对反弹的策略", points: ["接纳而非自责", "分析触发因素", "从小重新开始"] },
    { num: "4", title: "家庭协作重要性", points: ["父母以身作则", "让爸爸也参与", "让孩子参与决策"] }
  ];
  modules.forEach((m, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 1.3 + Math.floor(i / 2) * 2.0;
    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(m.num, {
      x: x, y: y, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(m.title, {
      x: x + 0.6, y: y, w: 3.5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, valign: "middle"
    });
    m.points.forEach((p, j) => {
      slide.addText("• " + p, {
        x: x + 0.6, y: y + 0.55 + j * 0.45, w: 3.8, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("58", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
