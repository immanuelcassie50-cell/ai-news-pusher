const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("课程学习总结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four day cards
  const days = [
    {
      day: "Day 1",
      title: "认识催化官",
      tools: "静默书写 / ORID / 六帽",
      color: theme.accent
    },
    {
      day: "Day 2",
      title: "团队动力",
      tools: "提问技术 / AAR",
      color: theme.primary
    },
    {
      day: "Day 3",
      title: "复杂情境",
      tools: "利益相关方 / 冲突管理",
      color: theme.secondary
    },
    {
      day: "Day 4",
      title: "综合认证",
      tools: "催化方案 / 模拟会议",
      color: theme.accent
    }
  ];

  days.forEach((d, i) => {
    const x = 0.5 + i * 2.35;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.1, w: 2.2, h: 4.2,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
    });

    // Day badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.35, y: 1.3, w: 1.5, h: 0.5,
      fill: { color: d.color }
    });
    slide.addText(d.day, {
      x: x + 0.35, y: 1.3, w: 1.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(d.title, {
      x: x + 0.1, y: 2.0, w: 2.0, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.5, y: 2.65, w: 1.2, h: 0.04,
      fill: { color: d.color }
    });

    // Tools label
    slide.addText("核心工具", {
      x: x + 0.1, y: 2.85, w: 2.0, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // Tools
    slide.addText(d.tools, {
      x: x + 0.1, y: 3.2, w: 2.0, h: 1.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center"
    });
  });

  // Bottom journey line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.45, w: 9, h: 0.08,
    fill: { color: theme.secondary }
  });

  // Arrow markers
  for (let i = 0; i < 4; i++) {
    const x = 1.6 + i * 2.35;
    slide.addShape(pres.ShapeType.ellipse, {
      x: x - 0.12, y: 5.37, w: 0.25, h: 0.25,
      fill: { color: theme.accent }
    });
  }

  return slide;
}

module.exports = { createSlide };
