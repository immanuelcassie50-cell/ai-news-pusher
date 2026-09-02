const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("核心金句回顾", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Core quotes
  const quotes = [
    { text: "信息不是力量，筛选过的信息才是力量", source: "课程核心观点" },
    { text: "焦虑不是你的问题，是信息环境的问题", source: "Module 2" },
    { text: "少即是多，慢即是快", source: " Module 3" },
    { text: "决策质量取决于决策框架，而非信息量", source: "Module 4" },
    { text: "系统不是为了控制，而是为了自由", source: "Module 6" }
  ];

  quotes.forEach((quote, i) => {
    const y = 1.25 + i * 0.85;
    // Quote mark
    slide.addText("“", {
      x: 0.4, y: y - 0.1, w: 0.4, h: 0.5,
      fontSize: 32, fontFace: "Georgia",
      color: theme.accent
    });
    // Quote text
    slide.addText(quote.text, {
      x: 0.8, y: y + 0.05, w: 7.5, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // Source tag
    slide.addShape(pres.ShapeType.roundRect, {
      x: 8.4, y: y + 0.1, w: 1.2, h: 0.35,
      fill: { color: theme.secondary, transparency: 70 },
      rectRadius: 0.05
    });
    slide.addText(quote.source, {
      x: 8.4, y: y + 0.1, w: 1.2, h: 0.35,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "middle"
    });
    // Separator
    if (i < quotes.length - 1) {
      slide.addShape(pres.ShapeType.line, {
        x: 0.5, y: y + 0.78, w: 9.0, h: 0,
        line: { color: theme.light, width: 0.5, transparency: 60 }
      });
    }
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("83", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
