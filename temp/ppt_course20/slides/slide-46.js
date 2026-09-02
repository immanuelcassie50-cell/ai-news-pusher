const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("练习：我的三个锚点", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("动手写出属于你的家庭锚点", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const exercises = [
    {
      type: "核心锚点",
      prompt: "在教育孩子的过程中，什么是你认为最重要、不可妥协的价值观？",
      placeholder: "例如：尊重、诚信、好奇心..."
    },
    {
      type: "底线锚点",
      prompt: "什么是绝对不能跨越的红线？即使发生冲突也要坚持的是什么？",
      placeholder: "例如：不人身攻击、不说谎、不伤害他人..."
    },
    {
      type: "弹性锚点",
      prompt: "哪些方面你愿意灵活调整？边界在哪里？",
      placeholder: "例如：作业完成时间、电子设备使用时长..."
    }
  ];
  exercises.forEach((ex, i) => {
    const y = 1.65 + i * 1.25;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 1.1,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 2.2, h: 1.1,
      fill: { color: i === 0 ? theme.primary : (i === 1 ? theme.accent : theme.light) }
    });
    slide.addText(ex.type, {
      x: 0.5, y: y, w: 2.2, h: 1.1,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(ex.prompt, {
      x: 2.85, y: y + 0.1, w: 6.4, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 2.85, y: y + 0.55, w: 6.4, h: 0.4,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 0.5, dashType: "dash" }
    });
    slide.addText(ex.placeholder, {
      x: 2.95, y: y + 0.55, w: 6.2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei", italic: true,
      color: theme.secondary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.04,
    fill: { color: theme.accent }
  });
  slide.addText("与家人一起讨论，达成共识后正式记录下来", {
    x: 0.5, y: 5.1, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("46", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
