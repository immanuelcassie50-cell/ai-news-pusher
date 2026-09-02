const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("第一阶段（第1-10天）：建立意识", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Phase 1 details
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.25, w: 9.2, h: 0.6,
    fill: { color: theme.light, transparency: 70 },
    rectRadius: 0.08
  });
  slide.addText("核心目标：认识信息过载问题，开始有意识地记录和观察", {
    x: 0.5, y: 1.35, w: 9.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  // Tasks
  const tasks = [
    { day: "第1-3天", task: "观察记录", desc: "记录你每天接触育儿信息的渠道、时间和情绪反应" },
    { day: "第4-6天", task: "识别焦虑", desc: "找出让你最焦虑的三条信息，分析触发焦虑的原因" },
    { day: "第7-10天", task: "初步整理", desc: "建立自己的信息来源清单初版，标注主要来源" }
  ];

  tasks.forEach((t, i) => {
    const y = 2.0 + i * 1.1;
    // Day badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 1.5, h: 0.9,
      fill: { color: theme.light },
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
      line: { color: theme.light, width: 1 },
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
  slide.addText("提示：这个阶段不要追求完美，重点是开始觉察", {
    x: 0.5, y: 5.25, w: 9.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("89", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
