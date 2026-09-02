const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程总结", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("为什么斯密仍然重要？", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Reasons grid
  const reasons = [
    {
      title: "分析框架的持久力",
      content: "他的许多分析范疇（分工、交换、价格信号）仍是现代经济学的基石"
    },
    {
      title: "对人性的深刻洞察",
      content: "对人类复杂动机的细腻描写，超越了简单的'经济人'标签"
    },
    {
      title: "跨时代的争议性",
      content: "他的思想持续引发争议：自由市场vs政府干预，个人利益vs集体利益"
    },
    {
      title: "现代思想的源头",
      content: "理解斯密，才能理解从古典经济学到当代制度经济学的思想脉络"
    }
  ];

  reasons.forEach((r, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 1.95 + Math.floor(i / 2) * 1.5;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.35,
      fill: { color: i < 2 ? theme.primary : theme.secondary }
    });

    // Title
    slide.addText(r.title, {
      x: x + 0.2, y: y + 0.15, w: 4, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    // Content
    slide.addText(r.content, {
      x: x + 0.2, y: y + 0.6, w: 4, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF"
    });
  });

  // Bottom highlight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("斯密的遗产：不是教条，而是思考市场与道德的起点", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("85", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
