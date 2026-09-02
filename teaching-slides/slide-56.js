const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("课程收获梳理", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four gain cards in 2x2 grid
  const gains = [
    {
      icon: "📚",
      title: "知识",
      desc: "理解了行动学习循环和催化师角色",
      color: theme.accent
    },
    {
      icon: "⚡",
      title: "技能",
      desc: "掌握了提问技术和多种工具",
      color: theme.primary
    },
    {
      icon: "💡",
      title: "态度",
      desc: "认识到中立赋能的重要性",
      color: theme.secondary
    },
    {
      icon: "🚀",
      title: "实践",
      desc: "能够设计完整的催化方案",
      color: theme.accent
    }
  ];

  gains.forEach((g, i) => {
    const x = 0.5 + (i % 2) * 4.6;
    const y = 1.1 + Math.floor(i / 2) * 2.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.9,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
    });

    // Left color bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.12, h: 1.9,
      fill: { color: g.color }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.35, y: y + 0.55, w: 0.8, h: 0.8,
      fill: { color: g.color }
    });
    slide.addText(g.icon, {
      x: x + 0.35, y: y + 0.55, w: 0.8, h: 0.8,
      fontSize: 28,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(g.title, {
      x: x + 1.35, y: y + 0.4, w: 2.8, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(g.desc, {
      x: x + 1.35, y: y + 0.95, w: 2.8, h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom summary bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.15, w: 10, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("四天学习，全面提升知识、技能、态度与实践能力", {
    x: 0.5, y: 5.15, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
