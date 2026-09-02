const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("催化效果的评估方法", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("多维度评估，全面了解催化成效", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left section - Evaluation dimensions
  slide.addText("评估维度", {
    x: 0.5, y: 1.5, w: 4.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const dimensions = [
    { num: "1", title: "过程评估", desc: "会议是否顺畅", color: theme.accent },
    { num: "2", title: "结果评估", desc: "是否达成目标", color: theme.primary },
    { num: "3", title: "参与度评估", desc: "是否人人参与", color: "#43aa8b" },
    { num: "4", title: "感受度评估", desc: "参与者是否满意", color: theme.secondary }
  ];

  dimensions.forEach((d, i) => {
    const y = 1.95 + i * 0.82;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.5, h: 0.72,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.1, h: 0.72,
      fill: { color: d.color }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.75, y: y + 0.16, w: 0.4, h: 0.4,
      fill: { color: d.color }
    });
    slide.addText(d.num, {
      x: 0.75, y: y + 0.16, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(d.title, {
      x: 1.3, y: y + 0.12, w: 3.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(d.desc, {
      x: 1.3, y: y + 0.4, w: 3.5, h: 0.26,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right section - Evaluation methods
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.4, h: 3.7,
    fill: { color: theme.light }
  });

  slide.addText("评估方法", {
    x: 5.4, y: 1.65, w: 4.0, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const methods = [
    { title: "会后问卷", desc: "设计简洁的满意度调查", icon: "📋" },
    { title: "观察员反馈", desc: "第三方的客观观察记录", icon: "👁️" },
    { title: "后续跟踪", desc: "2-4周后跟进行动落实", icon: "📅" },
    { title: "关键事件回忆", desc: "让参与者回忆印象深刻的事", icon: "💭" }
  ];

  methods.forEach((m, i) => {
    const y = 2.15 + i * 0.78;

    // Method card
    slide.addShape(pres.ShapeType.rect, {
      x: 5.4, y: y, w: 4.0, h: 0.68,
      fill: { color: "ffffff" }
    });

    // Icon
    slide.addText(m.icon, {
      x: 5.55, y: y + 0.1, w: 0.5, h: 0.48,
      fontSize: 18
    });

    // Title
    slide.addText(m.title, {
      x: 6.15, y: y + 0.1, w: 3.0, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(m.desc, {
      x: 6.15, y: y + 0.38, w: 3.0, h: 0.26,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom evaluation matrix
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.3, w: 9.2, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("评估时机：会后24h内（感受）→ 1周后（行为）→ 1月后（结果）", {
    x: 0.6, y: 5.3, w: 8.8, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff",
    valign: "middle", align: "center"
  });

  return slide;
}

module.exports = { createSlide };
