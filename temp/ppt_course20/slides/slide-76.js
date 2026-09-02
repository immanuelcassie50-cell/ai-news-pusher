const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("工具卡的使用场景", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Scenarios with tool cards
  const scenarios = [
    {
      scenario: "刷到一篇让你焦虑的文章时",
      tool: "信息来源清单",
      action: "先查来源是否在Tier 1，不在则快速划过"
    },
    {
      scenario: "纠结要不要给孩子报某个课程时",
      tool: "评估标准卡",
      action: "用5个维度打分，看综合得分是否值得"
    },
    {
      scenario: "和家人教育理念冲突时",
      tool: "决策锚点卡",
      action: "用共识锚点问：我们能否找到共同点？"
    },
    {
      scenario: "做完一个重大决定后",
      tool: "日志与复盘",
      action: "记录决策过程，设定复盘时间点"
    }
  ];

  scenarios.forEach((s, i) => {
    const y = 1.2 + i * 1.05;
    // Row background
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 9.2, h: 0.95,
      fill: { color: theme.bg, transparency: 10 },
      rectRadius: 0.06
    });
    // Scenario text
    slide.addText(s.scenario, {
      x: 0.55, y: y + 0.08, w: 4.0, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // Arrow
    slide.addText("->", {
      x: 4.5, y: y + 0.08, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: theme.accent, align: "center"
    });
    // Tool badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 4.95, y: y + 0.08, w: 1.8, h: 0.38,
      fill: { color: theme.secondary },
      rectRadius: 0.05
    });
    slide.addText(s.tool, {
      x: 4.95, y: y + 0.08, w: 1.8, h: 0.38,
      fontSize: 10, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Action
    slide.addText(s.action, {
      x: 0.55, y: y + 0.5, w: 8.9, h: 0.38,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("76", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
