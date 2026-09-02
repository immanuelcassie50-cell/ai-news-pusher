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
  slide.addText("如何检验学习成果？", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Self-assessment criteria
  const criteria = [
    { q: "我能快速判断一条信息的来源可靠性吗？", indicator: "可以在30秒内给出判断" },
    { q: "我能在决策前使用评估标准吗？", indicator: "遇到重大决策会主动使用" },
    { q: "我能向家人解释我的决策依据吗？", indicator: "可以用课程框架清晰表达" },
    { q: "我有持续记录决策日志的习惯吗？", indicator: "已记录3次以上真实决策" },
    { q: "我的育儿焦虑是否有所缓解？", indicator: "感受到明显的变化" }
  ];

  criteria.forEach((c, i) => {
    const y = 1.2 + i * 0.85;
    // Question
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 6.8, h: 0.75,
      fill: { color: theme.bg, transparency: 10 },
      rectRadius: 0.06
    });
    slide.addText((i + 1) + ". " + c.q, {
      x: 0.55, y: y + 0.08, w: 6.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText("验证: " + c.indicator, {
      x: 0.55, y: y + 0.42, w: 6.5, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    // Checklist box
    slide.addShape(pres.ShapeType.roundRect, {
      x: 7.4, y: y + 0.15, w: 2.2, h: 0.45,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 1 },
      rectRadius: 0.06
    });
    slide.addText("[ ] Yes  [ ] Partially", {
      x: 7.4, y: y + 0.15, w: 2.2, h: 0.45,
      fontSize: 9, fontFace: "Arial",
      color: theme.light, align: "center", valign: "middle"
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("92", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
