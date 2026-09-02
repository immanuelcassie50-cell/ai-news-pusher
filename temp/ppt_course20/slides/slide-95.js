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
  slide.addText("Q&A 开放问答", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Q&A format
  slide.addText("关于课程内容或实际应用，你有什么问题？", {
    x: 0.5, y: 1.3, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Question prompts
  const prompts = [
    "信息过载给你带来了哪些具体困扰？",
    "你尝试过哪些方法来解决这些问题？",
    "三个锚点框架中，你最想先实践哪个？",
    "你希望家人如何参与信息管理系统？",
    "30天行动计划，你打算从哪里开始？"
  ];

  prompts.forEach((p, i) => {
    const y = 1.85 + i * 0.7;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 9.0, h: 0.6,
      fill: { color: theme.bg, transparency: 10 },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.06
    });
    slide.addText("?", {
      x: 0.6, y: y + 0.08, w: 0.4, h: 0.45,
      fontSize: 20, fontFace: "Arial", bold: true,
      color: theme.accent, align: "center", valign: "middle"
    });
    slide.addText(p, {
      x: 1.1, y: y + 0.12, w: 8.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Invitation text
  slide.addText("请举手或直接在聊天框提问", {
    x: 0.5, y: 5.2, w: 9.0, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent, align: "center"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("95", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
