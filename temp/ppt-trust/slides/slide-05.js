function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("公式变量拆解", {
    x: 0.6, y: 0.2, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // 2x2 grid of cards
  const cards = [
    {
      title: "触发行为",
      desc: "通常很小",
      x: 0.6, y: 1.2
    },
    {
      title: "身份权力差",
      desc: "影响力不是免费的",
      x: 5.1, y: 1.2
    },
    {
      title: "社会情绪",
      desc: "同一句话扔不同环境激起不同浪",
      x: 0.6, y: 3.2
    },
    {
      title: "历史可追溯性",
      desc: "没有说过就算了",
      x: 5.1, y: 3.2
    }
  ];

  cards.forEach((card) => {
    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: card.x, y: card.y, w: 4.3, h: 1.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1.5 },
      rectRadius: 0.1
    });

    // Accent top bar
    slide.addShape(pres.ShapeType.rect, {
      x: card.x, y: card.y, w: 4.3, h: 0.08,
      fill: { color: theme.accent }
    });

    // Card title
    slide.addText(card.title, {
      x: card.x + 0.3, y: card.y + 0.3, w: 3.7, h: 0.5,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Card description
    slide.addText(card.desc, {
      x: card.x + 0.3, y: card.y + 0.9, w: 3.7, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}
module.exports = { createSlide };
