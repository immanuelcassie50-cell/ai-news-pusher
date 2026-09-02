const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // White background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: theme.bg }
  });

  // Header accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.08,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("学习目标", {
    x: 0.6, y: 0.4, w: 4, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Four cards in 2x2 grid
  const cards = [
    {
      num: "01",
      title: "掌握行动学习循环",
      desc: "理解行动学习循环与催化师核心能力"
    },
    {
      num: "02",
      title: "熟练运用工具",
      desc: "静默书写、ORID、六顶思考帽等工具"
    },
    {
      num: "03",
      title: "学会提问技术",
      desc: "掌握提问技术与团队动力管理"
    },
    {
      num: "04",
      title: "复杂情境应对",
      desc: "具备复杂情境应对与综合催化方案设计能力"
    }
  ];

  const cardW = 4.2;
  const cardH = 1.8;
  const startX = 0.6;
  const startY = 1.3;
  const gapX = 0.4;
  const gapY = 0.35;

  cards.forEach((card, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.light }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.25, y: y + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(card.num, {
      x: x + 0.25, y: y + 0.35, w: 0.6, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", align: "center", bold: true
    });

    // Card title
    slide.addText(card.title, {
      x: x + 1, y: y + 0.3, w: 3, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Card description
    slide.addText(card.desc, {
      x: x + 0.25, y: y + 1.05, w: 3.7, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide };
