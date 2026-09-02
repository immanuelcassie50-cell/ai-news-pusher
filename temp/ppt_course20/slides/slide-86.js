const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("决策日志金句", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Log template visual
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.25, w: 5.5, h: 4.0,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 1.5 },
    rectRadius: 0.1
  });

  slide.addText("决策日志的价值", {
    x: 0.55, y: 1.35, w: 5.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary
  });

  const logValues = [
    { field: "记录", value: "为未来的自己留下参考" },
    { field: "反思", value: "发现决策中的盲点和改进空间" },
    { field: "传承", value: "成为家庭知识积累的一部分" },
    { field: "验证", value: "用结果检验当初的判断" }
  ];

  logValues.forEach((lv, i) => {
    const y = 1.85 + i * 0.75;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.6, y: y, w: 1.0, h: 0.4,
      fill: { color: theme.accent },
      rectRadius: 0.05
    });
    slide.addText(lv.field, {
      x: 0.6, y: y, w: 1.0, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(lv.value, {
      x: 1.75, y: y, w: 4.0, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Key quotes on the right
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.1, y: 1.25, w: 3.5, h: 4.0,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.1
  });

  slide.addText("金句摘录", {
    x: 6.2, y: 1.35, w: 3.3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent
  });

  const quotes = [
    "今天的记录，是明天的智慧",
    "不记录，等于没发生",
    "复盘不是为了后悔，而是为了下次更好",
    "好的决策者，都是从错误中学习的人"
  ];

  quotes.forEach((q, i) => {
    const y = 1.85 + i * 0.85;
    slide.addText("「" + q, {
      x: 6.3, y: y, w: 3.2, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    if (i < quotes.length - 1) {
      slide.addShape(pres.ShapeType.line, {
        x: 6.3, y: y + 0.72, w: 3.0, h: 0,
        line: { color: theme.light, width: 0.5, transparency: 60 }
      });
    }
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("86", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
