const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("聚焦的三个标准", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three cards
  const cards = [
    { num: "1", title: "价值大", desc: "对核心目标贡献大" },
    { num: "2", title: "能落地", desc: "资源能力可支撑" },
    { num: "3", title: "可积累", desc: "可复用、有复利" }
  ];

  cards.forEach((card, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.4, w: 2.9, h: 3.5,
      fill: { color: theme.bg },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 1.05, y: 1.7, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(card.num, {
      x: x + 1.05, y: 1.8, w: 0.8, h: 0.6,
      fontSize: 24, fontFace: "Arial",
      color: theme.bg, bold: true,
      align: "center"
    });

    // Card title
    slide.addText(card.title, {
      x: x + 0.2, y: 2.8, w: 2.5, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Card description
    slide.addText(card.desc, {
      x: x + 0.2, y: 3.5, w: 2.5, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center"
    });
  });

  return slide;
}

module.exports = { createSlide };
