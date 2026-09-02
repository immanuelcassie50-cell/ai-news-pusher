const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("30天行动计划指南", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Three phases timeline
  const phases = [
    { name: "第一阶段", days: "第1-10天", goal: "建立意识", tasks: "认识信息过载\n开始记录信息源", color: theme.light },
    { name: "第二阶段", days: "第11-20天", goal: "建立框架", tasks: "建立信息来源清单\n实践评估标准卡", color: theme.accent },
    { name: "第三阶段", days: "第21-30天", goal: "形成习惯", tasks: "家庭会议启动\n日志复盘习惯", color: theme.secondary }
  ];

  // Timeline line
  slide.addShape(pres.ShapeType.rect, {
    x: 1.5, y: 2.3, w: 7.0, h: 0.08,
    fill: { color: theme.primary, transparency: 70 }
  });

  phases.forEach((phase, i) => {
    const x = 1.5 + i * 3.5;
    // Circle on timeline
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.9, y: 2.1, w: 0.5, h: 0.5,
      fill: { color: phase.color }
    });
    slide.addText(String(i + 1), {
      x: x + 0.9, y: 2.1, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Phase card
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 2.8, w: 3.0, h: 2.4,
      fill: { color: theme.bg },
      line: { color: phase.color, width: 2 },
      rectRadius: 0.1
    });
    // Phase name
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.3, y: 2.95, w: 2.4, h: 0.4,
      fill: { color: phase.color },
      rectRadius: 0.05
    });
    slide.addText(phase.name, {
      x: x + 0.3, y: 2.95, w: 2.4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Days
    slide.addText(phase.days, {
      x: x + 0.1, y: 3.45, w: 2.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
    // Goal
    slide.addText("目标: " + phase.goal, {
      x: x + 0.1, y: 3.85, w: 2.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });
    // Tasks
    slide.addText(phase.tasks, {
      x: x + 0.15, y: 4.25, w: 2.7, h: 0.8,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("88", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
