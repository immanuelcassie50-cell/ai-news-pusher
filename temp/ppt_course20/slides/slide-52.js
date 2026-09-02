const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("每周复盘：让判断力持续迭代", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fill: { color: theme.secondary, transparency: 30 }
  });
  slide.addText("复盘的核心：不是检讨，而是校准", {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary, align: "center", valign: "middle"
  });
  const steps = [
    { step: "收集", desc: "本周做了哪些重要决策？", color: theme.secondary },
    { step: "分类", desc: "哪些做对了？哪些有偏差？", color: theme.accent },
    { step: "归因", desc: "偏差的根源是什么？", color: theme.light },
    { step: "迭代", desc: "下次如何做得更好？", color: theme.secondary }
  ];
  steps.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.9, w: 2.15, h: 3.0,
      fill: { color: "FFFFFF" },
      line: { color: s.color, width: 2 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.9, w: 2.15, h: 0.7,
      fill: { color: s.color }
    });
    slide.addText(s.step, {
      x: x, y: 1.9, w: 2.15, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: s.color === theme.accent ? theme.primary : "FFFFFF",
      align: "center", valign: "middle"
    });
    slide.addText(s.desc, {
      x: x + 0.1, y: 2.75, w: 1.95, h: 2.0,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "top"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("52", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
