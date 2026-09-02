const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程评估问卷", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Intro
  slide.addText("您的反馈是我们改进的动力", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Rating items
  const ratingItems = [
    { label: "课程内容", desc: "系统性、实用性、互动性" },
    { label: "讲师表现", desc: "专业度、表达力、感染力" },
    { label: "练习设计", desc: "贴近实战、反馈及时" },
    { label: "整体收获", desc: "知识掌握、能力提升" }
  ];

  const ratings = ["非常满意", "满意", "一般", "不满意"];
  const ratingColors = [theme.accent, "#43aa8b", theme.secondary, theme.primary];

  ratingItems.forEach((item, i) => {
    const y = 1.5 + i * 0.85;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 9.2, h: 0.75,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Label
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 1.8, h: 0.75,
      fill: { color: theme.primary }
    });
    slide.addText(item.label, {
      x: 0.4, y: y, w: 1.8, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(item.desc, {
      x: 0.4, y: y + 0.4, w: 1.8, h: 0.3,
      fontSize: 7, fontFace: "Microsoft YaHei",
      color: "ffffff",
      align: "center", valign: "top", transparency: 30
    });

    // Rating circles
    ratings.forEach((rating, j) => {
      const rx = 2.5 + j * 1.7;

      slide.addShape(pres.ShapeType.ellipse, {
        x: rx, y: y + 0.18, w: 0.4, h: 0.4,
        fill: { color: ratingColors[j], transparency: 70 },
        line: { color: ratingColors[j], width: 1 }
      });

      slide.addText(rating, {
        x: rx - 0.3, y: y + 0.55, w: 1.0, h: 0.2,
        fontSize: 8, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "center"
      });
    });
  });

  // Open feedback section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.95,
    fill: { color: theme.light }
  });

  slide.addText("建议与意见", {
    x: 0.6, y: 5.0, w: 8.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Input lines
  for (let i = 0; i < 2; i++) {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 5.32 + i * 0.28, w: 8.8, h: 0.02,
      fill: { color: theme.secondary, transparency: 50 }
    });
  }

  return slide;
}

module.exports = { createSlide };
