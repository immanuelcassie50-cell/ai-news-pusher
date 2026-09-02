const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("常见问题FAQ", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // FAQ items
  const faqs = [
    {
      q: "学完就能成为催化师吗？",
      a: "需要不断实践和反思，课程是起点而非终点",
      color: theme.primary
    },
    {
      q: "催化师适合哪些场景？",
      a: "战略会议/团队融合/项目复盘/问题解决等",
      color: theme.accent
    },
    {
      q: "如何积累催化经验？",
      a: "从身边小会议开始，逐步扩大范围",
      color: theme.secondary
    },
    {
      q: "认证有效期多久？",
      a: "认证有效期2年，需持续实践和复训",
      color: "#43aa8b"
    }
  ];

  faqs.forEach((faq, i) => {
    const y = 1.15 + i * 1.05;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 9.2, h: 0.95,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Q badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 0.5, h: 0.95,
      fill: { color: faq.color }
    });
    slide.addText("Q", {
      x: 0.4, y: y + 0.25, w: 0.5, h: 0.45,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Question
    slide.addText(faq.q, {
      x: 1.1, y: y + 0.1, w: 8.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: faq.color, bold: true
    });

    // Answer
    slide.addText("A：" + faq.a, {
      x: 1.1, y: y + 0.48, w: 8.3, h: 0.38,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.4, w: 9.2, h: 0.45,
    fill: { color: theme.light }
  });
  slide.addText("更多问题欢迎在学员群交流讨论", {
    x: 0.6, y: 5.4, w: 8.8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
