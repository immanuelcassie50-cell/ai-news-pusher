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
  slide.addText("第二阶段（第11-20天）：建立框架", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Phase 2 details
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.25, w: 9.2, h: 0.6,
    fill: { color: theme.accent, transparency: 70 },
    rectRadius: 0.08
  });
  slide.addText("核心目标：建立信息来源清单和评估标准卡，形成决策框架", {
    x: 0.5, y: 1.35, w: 9.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  // Tasks
  const tasks = [
    { day: "第11-13天", task: "完善清单", desc: "完善信息来源清单，按三个层级分类，删除低质量来源" },
    { day: "第14-16天", task: "制定标准", desc: "制定评估标准卡，熟悉五个评估维度" },
    { day: "第17-20天", task: "实践应用", desc: "选择一个小决策，用评估标准卡实践一次" }
  ];

  tasks.forEach((t, i) => {
    const y = 2.0 + i * 1.1;
    // Day badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 1.5, h: 0.9,
      fill: { color: theme.accent },
      rectRadius: 0.08
    });
    slide.addText(t.day, {
      x: 0.5, y: y, w: 1.5, h: 0.9,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Task and desc
    slide.addShape(pres.ShapeType.roundRect, {
      x: 2.15, y: y, w: 7.45, h: 0.9,
      fill: { color: theme.bg },
      line: { color: theme.accent, width: 1 },
      rectRadius: 0.08
    });
    slide.addText(t.task, {
      x: 2.3, y: y + 0.1, w: 7.1, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(t.desc, {
      x: 2.3, y: y + 0.48, w: 7.1, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Tip
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 5.25, w: 9.2, h: 0.35,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.05
  });
  slide.addText("提示：把清单和标准卡打印出来，贴在显眼位置", {
    x: 0.5, y: 5.25, w: 9.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("90", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
