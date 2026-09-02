const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("你的收获是什么？", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Reflection questions
  slide.addText("请思考以下问题，对照自己的收获：", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  const reflections = [
    { q: "信息过载给你带来了哪些具体的困扰？", hint: "回忆最近一次因为信息太多而焦虑的经历" },
    { q: "四层信息分类法，哪个层级对你最有帮助？", hint: "想想你平时主要信息来源属于哪一层" },
    { q: "三个锚点框架，哪个最让你有共鸣？", hint: "是你遇到决策困境时的思考方式" },
    { q: "你打算如何让家人一起参与信息管理？", hint: "想象第一次家庭会议的场景" }
  ];

  reflections.forEach((r, i) => {
    const y = 1.7 + i * 0.95;
    // Question card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 9.2, h: 0.85,
      fill: { color: theme.bg, transparency: 10 },
      line: { color: theme.accent, width: 1 },
      rectRadius: 0.06
    });
    // Number
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.55, y: y + 0.2, w: 0.45, h: 0.45,
      fill: { color: theme.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.55, y: y + 0.2, w: 0.45, h: 0.45,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Question
    slide.addText(r.q, {
      x: 1.15, y: y + 0.1, w: 8.3, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // Hint
    slide.addText(r.hint, {
      x: 1.15, y: y + 0.48, w: 8.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei", italic: true,
      color: theme.light
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("87", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
