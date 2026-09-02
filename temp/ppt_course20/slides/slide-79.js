const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("常见问题与应对策略", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Q&A format
  const qas = [
    { q: "家人不配合，觉得太麻烦怎么办？", a: "从最小行动开始，比如先只建立信息来源清单，不追求一步到位" },
    { q: "评估标准太多，记不住怎么办？", a: "做成小卡片放在冰箱上，常用的5个维度先烂熟于心" },
    { q: "遇到分歧时听谁的？", a: "谁负责执行听谁的，事后用日志复盘验证" },
    { q: "信息源清单需要多久更新一次？", a: "每月检视一次，删除低质量来源，补充新发现的好来源" }
  ];

  qas.forEach((qa, i) => {
    const y = 1.2 + i * 1.05;
    // Q box
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 9.2, h: 0.45,
      fill: { color: theme.accent, transparency: 75 },
      rectRadius: 0.05
    });
    slide.addText("Q: " + qa.q, {
      x: 0.55, y: y + 0.02, w: 8.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // A box
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y + 0.5, w: 9.2, h: 0.5,
      fill: { color: theme.bg },
      rectRadius: 0.05
    });
    slide.addText("A: " + qa.a, {
      x: 0.55, y: y + 0.52, w: 8.9, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("79", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
