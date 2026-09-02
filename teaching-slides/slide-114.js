const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header with warning color
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("敏感话题处理技巧", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("谨慎处理，维护信任", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left section - Topic types
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.5, w: 4.5, h: 2.6,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addText("敏感话题类型", {
    x: 0.6, y: 1.65, w: 4.1, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const topics = [
    { icon: "👤", text: "人事问题（裁员/晋升）" },
    { icon: "💰", text: "薪酬福利" },
    { icon: "🏛️", text: "办公室政治" },
    { icon: "📊", text: "绩效反馈" }
  ];

  topics.forEach((t, i) => {
    const y = 2.15 + i * 0.48;

    slide.addText(t.icon, {
      x: 0.7, y: y, w: 0.4, h: 0.4,
      fontSize: 14
    });

    slide.addText(t.text, {
      x: 1.2, y: y, w: 3.5, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Right section - Principles
  slide.addText("处理原则", {
    x: 5.2, y: 1.5, w: 4.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const principles = [
    { num: "1", title: "提前沟通", desc: "与发起人明确边界和期望" },
    { num: "2", title: "设定边界", desc: "清楚告知参与者讨论范围" },
    { num: "3", title: "保持中立", desc: "不偏袒任何一方，公正引导" },
    { num: "4", title: "灵活暂停", desc: "必要时暂停或改期" }
  ];

  principles.forEach((p, i) => {
    const y = 1.95 + i * 0.72;
    const isEven = i % 2 === 0;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 4.4, h: 0.62,
      fill: { color: isEven ? theme.light : "ffffff" }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.35, y: y + 0.12, w: 0.38, h: 0.38,
      fill: { color: theme.primary }
    });
    slide.addText(p.num, {
      x: 5.35, y: y + 0.12, w: 0.38, h: 0.38,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(p.title, {
      x: 5.85, y: y + 0.08, w: 3.5, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(p.desc, {
      x: 5.85, y: y + 0.34, w: 3.5, h: 0.24,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Warning box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.25, w: 9.2, h: 0.5,
    fill: { color: theme.accent, transparency: 15 }
  });

  slide.addText("⚠️ 敏感话题会议的底线：不做裁判，只做引导；不给答案，只给框架", {
    x: 0.6, y: 4.25, w: 8.8, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // Checkmark list
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.9, w: 9.2, h: 0.9,
    fill: { color: theme.primary }
  });

  const checks = [
    "提前了解参与者的顾虑",
    "准备备用话题",
    "准备退出策略"
  ];

  checks.forEach((c, i) => {
    const x = 0.6 + i * 3.0;

    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 5.2, w: 0.3, h: 0.3,
      fill: { color: "ffffff", transparency: 80 }
    });
    slide.addText("✓", {
      x: x, y: 5.2, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(c, {
      x: x + 0.4, y: 5.2, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "ffffff",
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
