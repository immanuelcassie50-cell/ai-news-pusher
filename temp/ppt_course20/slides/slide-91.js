const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("第三阶段（第21-30天）：形成习惯", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Phase 3 details
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.25, w: 9.2, h: 0.6,
    fill: { color: theme.secondary, transparency: 70 },
    rectRadius: 0.08
  });
  slide.addText("核心目标：启动家庭会议，建立日志复盘习惯", {
    x: 0.5, y: 1.35, w: 9.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  // Tasks
  const tasks = [
    { day: "第21-24天", task: "家庭启动", desc: "召开第一次家庭会议，分享所学，征询家人意见" },
    { day: "第25-27天", task: "建立日志", desc: "选择一个真实决策，填写决策日志并复盘" },
    { day: "第28-30天", task: "习惯巩固", desc: "回顾30天收获，制定后续优化计划" }
  ];

  tasks.forEach((t, i) => {
    const y = 2.0 + i * 1.1;
    // Day badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 1.5, h: 0.9,
      fill: { color: theme.secondary },
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
      line: { color: theme.secondary, width: 1 },
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
  slide.addText("提示：30天不是终点，是新习惯的起点", {
    x: 0.5, y: 5.25, w: 9.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("91", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
