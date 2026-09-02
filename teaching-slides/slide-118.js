const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header with warning tone
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("催化师常见错误与避免", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("避开陷阱，走向专业", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Errors and solutions - detailed table format
  const errors = [
    { error: "给建议", desc: "忍不住想帮忙", solution: "时刻提醒自己角色", icon: "💡" },
    { error: "太快推进", desc: "时间压力", solution: "观察而非评判", icon: "⏱️" },
    { error: "忽略沉默", desc: "忽视沉默者的声音", solution: "关注沉默者", icon: "🤐" },
    { error: "个人立场", desc: "被自己的观点影响", solution: "保持未知", icon: "⚖️" },
    { error: "过度控制", desc: "掌控讨论方向", solution: "相信群体智慧", icon: "🎛️" }
  ];

  // Header row
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.5, w: 1.8, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("常见错误", {
    x: 0.4, y: 1.5, w: 1.8, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 2.2, y: 1.5, w: 1.2, h: 0.5,
    fill: { color: theme.accent, transparency: 50 }
  });
  slide.addText("描述", {
    x: 2.2, y: 1.5, w: 1.2, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 3.4, y: 1.5, w: 0.5, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("", {
    x: 3.4, y: 1.5, w: 0.5, h: 0.5,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 3.9, y: 1.5, w: 2.4, h: 0.5,
    fill: { color: "#43aa8b" }
  });
  slide.addText("避免方法", {
    x: 3.9, y: 1.5, w: 2.4, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Data rows
  errors.forEach((e, i) => {
    const y = 2.1 + i * 0.6;
    const isEven = i % 2 === 0;

    // Error cell
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 1.8, h: 0.55,
      fill: { color: isEven ? "ffffff" : theme.light }
    });
    slide.addText(e.error, {
      x: 0.5, y: y, w: 1.6, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      valign: "middle"
    });

    // Description cell
    slide.addShape(pres.ShapeType.rect, {
      x: 2.2, y: y, w: 1.2, h: 0.55,
      fill: { color: isEven ? "ffffff" : theme.light }
    });
    slide.addText(e.desc, {
      x: 2.25, y: y, w: 1.1, h: 0.55,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Icon cell
    slide.addShape(pres.ShapeType.rect, {
      x: 3.4, y: y, w: 0.5, h: 0.55,
      fill: { color: isEven ? "ffffff" : theme.light }
    });
    slide.addText(e.icon, {
      x: 3.4, y: y, w: 0.5, h: 0.55,
      fontSize: 14,
      align: "center", valign: "middle"
    });

    // Solution cell
    slide.addShape(pres.ShapeType.rect, {
      x: 3.9, y: y, w: 2.4, h: 0.55,
      fill: { color: isEven ? "#43aa8b" : "#3d9970", transparency: isEven ? 0 : 85 }
    });
    slide.addText(e.solution, {
      x: 4.0, y: y, w: 2.2, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: isEven ? "#43aa8b" : theme.primary, bold: true,
      valign: "middle"
    });

    // Connector to right panel
    slide.addShape(pres.ShapeType.rect, {
      x: 6.3, y: y + 0.25, w: 0.3, h: 0.05,
      fill: { color: theme.secondary, transparency: 50 }
    });
  });

  // Right side - Key reminders
  slide.addShape(pres.ShapeType.rect, {
    x: 6.8, y: 1.5, w: 2.8, h: 3.5,
    fill: { color: theme.primary }
  });

  slide.addText("核心提醒", {
    x: 6.95, y: 1.65, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const reminders = [
    "催化师是镜子和支架",
    "不是答案的持有者",
    "而是答案发现的促进者",
    "保持好奇，保持未知",
    "相信群体的智慧"
  ];

  reminders.forEach((r, i) => {
    slide.addText("·", {
      x: 7.0, y: 2.15 + i * 0.55, w: 0.3, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent
    });

    slide.addText(r, {
      x: 7.25, y: 2.15 + i * 0.55, w: 2.2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "ffffff",
      valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.15, w: 9.2, h: 0.65,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.6, y: 5.3, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("!", {
    x: 0.6, y: 5.3, w: 0.35, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("最常见的错误：把催化师当专家用。催化师的价值在于激发，不在于给出答案", {
    x: 1.1, y: 5.15, w: 8.3, h: 0.65,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
