/**
 * Slide 105 - 30天挑战
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Full-width header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("30天挑战", {
    x: 0.5, y: 0.15, w: 5, h: 0.55,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });
  slide.addText(" trial period", {
    x: 3.5, y: 0.15, w: 3, h: 0.55,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, bold: false,
    valign: "middle"
  });

  // Subtitle
  slide.addText("用30天时间，让新的习惯生根发芽", {
    x: 0.5, y: 0.7, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false
  });

  // Challenge steps - 3 columns
  const challenges = [
    {
      title: "每日任务",
      icon: "每日",
      items: [
        "完成2-3个核心习惯",
        "根据场景使用对应工具",
        "记录完成情况"
      ]
    },
    {
      title: "追踪方式",
      icon: "追踪",
      items: [
        "使用追踪表打勾",
        "记录感受和效果",
        "标注未完成的原因"
      ]
    },
    {
      title: "第30天复盘",
      icon: "30天",
      items: [
        "整体完成度如何？",
        "哪些工具有效果？",
        "需要如何调整？"
      ]
    }
  ];

  const cardW = 2.9;
  const cardH = 2.2;
  const startX = 0.5;
  const startY = 1.35;
  const gap = 0.35;

  challenges.forEach((c, i) => {
    const x = startX + i * (cardW + gap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (cardW - 0.8) / 2, y: startY + 0.15, w: 0.8, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(c.icon, {
      x: x + (cardW - 0.8) / 2, y: startY + 0.15, w: 0.8, h: 0.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(c.title, {
      x: x + 0.1, y: startY + 1.0, w: cardW - 0.2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Items
    slide.addText(
      c.items.map((item, idx) => ({
        text: "• " + item,
        options: { breakLine: idx < c.items.length - 1 }
      })),
      {
        x: x + 0.2, y: startY + 1.4, w: cardW - 0.4, h: 0.75,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        lineSpaceMult: 1.4
      }
    );
  });

  // 30-day tracking grid
  const gridY = 3.7;
  slide.addText("30天追踪表", {
    x: 0.5, y: gridY, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Simple grid representation
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: gridY + 0.4, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5, transparency: 85 }
  });

  // Day numbers (first 10 shown as example)
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "..."];
  const dayW = 0.85;
  days.forEach((day, i) => {
    const x = 0.55 + i * dayW;
    slide.addText("D" + day, {
      x: x, y: gridY + 0.45, w: dayW - 0.05, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "center"
    });
    // Checkbox
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: gridY + 0.75, w: 0.4, h: 0.35,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 0.5 }
    });
  });

  // Questions at day 30 box
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: gridY, w: 4.3, h: 1.4,
    fill: { color: theme.secondary }
  });
  slide.addText("第30天要问的问题", {
    x: 5.4, y: gridY + 0.1, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText([
    { text: "• 我的核心习惯坚持得如何？", options: { breakLine: true } },
    { text: "• 哪些工具对我最有效？", options: { breakLine: true } },
    { text: "• 下一步如何调整计划？", options: { breakLine: true } },
    { text: "• 我对自己更了解了哪些？" }
  ], {
    x: 5.4, y: gridY + 0.45, w: 4, h: 0.9,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    lineSpaceMult: 1.35
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("105", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "30天挑战",
  pageNumber: 105
};

module.exports = { createSlide, slideConfig };
