const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "如何选择适合你的技巧",
  type: "content",
  pageNumber: 25
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("如何选择适合你的技巧", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three comparison cards
  const techniques = [
    {
      title: "呼吸调节法",
      bestFor: "适合你如果：",
      points: [
        "时间紧迫，只能快速完成",
        "情绪容易突然爆发",
        "需要在任何场合使用",
        "无法安静躺下或坐下"
      ],
      color: theme.primary
    },
    {
      title: "身体扫描",
      bestFor: "适合你如果：",
      points: [
        "头脑停不下来",
        "想增加对身体感受的觉察",
        "有睡眠问题",
        "喜欢安静、内观的练习"
      ],
      color: theme.accent
    },
    {
      title: "PMR",
      bestFor: "适合你如果：",
      points: [
        "身体有明显紧张感",
        "喜欢通过身体感受学习",
        "喜欢结构化的练习步骤",
        "有慢性疼痛或肌肉紧张"
      ],
      color: theme.light
    }
  ];

  const cardW = 2.9;
  const cardH = 3.7;
  const gap = 0.25;
  const startX = 0.6;

  techniques.forEach((tech, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Color header bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: cardW, h: 0.7,
      fill: { color: tech.color }
    });

    // Title
    slide.addText(tech.title, {
      x: x, y: 1.25, w: cardW, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Best for label
    slide.addText(tech.bestFor, {
      x: x + 0.2, y: 2.05, w: cardW - 0.4, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: tech.color, bold: true,
      align: "left", valign: "middle"
    });

    // Points
    slide.addText(
      tech.points.map((p, idx) => ({
        text: p,
        options: { bullet: true, breakLine: idx < tech.points.length - 1 }
      })),
      {
        x: x + 0.2, y: 2.45, w: cardW - 0.4, h: 2.3,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        valign: "top",
        paraSpaceAfter: 8
      }
    );
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 5.05, w: 8.8, h: 0.4,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 1 }
  });

  slide.addText("💡 建议：可以先尝试每种技巧1-2次，找到最适合自己的1-2种坚持练习", {
    x: 0.8, y: 5.05, w: 8.4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("25", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
