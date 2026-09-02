/**
 * Slide 108 - 卡片1：4-7-8呼吸法
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Card label badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("工具卡片 1", {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("4-7-8呼吸法", {
    x: 2.5, y: 0.3, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("快速镇静焦虑的呼吸技术", {
    x: 2.5, y: 0.85, w: 5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Main card area
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 5.5, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 3, angle: 45, opacity: 0.1 }
  });

  // Step number circles
  const steps = [
    { num: "1", title: "吸气", desc: "4秒", detail: "用鼻子缓慢吸气" },
    { num: "2", title: "屏气", desc: "7秒", detail: "保持气息" },
    { num: "3", title: "呼气", desc: "8秒", detail: "用嘴巴呼出" },
    { num: "4", title: "重复", desc: "4次", detail: "循环练习" }
  ];

  const stepStartY = 1.6;
  const stepHeight = 0.75;

  steps.forEach((step, i) => {
    const y = stepStartY + i * stepHeight;

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.8, y: y + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: 0.8, y: y + 0.1, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Step title and description
    slide.addText(step.title, {
      x: 1.5, y: y + 0.05, w: 1.2, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(step.desc, {
      x: 2.7, y: y + 0.05, w: 0.8, h: 0.35,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(step.detail, {
      x: 1.5, y: y + 0.4, w: 3, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false
    });
  });

  // Right side -适用场景
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2, y: 1.4, w: 3.3, h: 1.5,
    fill: { color: theme.accent }
  });
  slide.addText("适用场景", {
    x: 6.4, y: 1.55, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText([
    { text: "• 焦虑发作时", options: { breakLine: true } },
    { text: "• 考试、演讲前", options: { breakLine: true } },
    { text: "• 入睡前", options: { breakLine: true } },
    { text: "• 任何需要冷静的时刻" }
  ], {
    x: 6.4, y: 1.95, w: 3, h: 0.85,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.3
  });

  // Key tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2, y: 3.05, w: 3.3, h: 1.75,
    fill: { color: theme.primary }
  });
  slide.addText("关键技巧", {
    x: 6.4, y: 3.2, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("呼气时间\n要比吸气长", {
    x: 6.4, y: 3.6, w: 2.9, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false
  });
  slide.addText("这是让副交感神经\n活跃的关键", {
    x: 6.4, y: 4.25, w: 2.9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false
  });

  // Page number
  slide.addText("108", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "tool-card",
  module: "Tool Cards",
  title: "4-7-8呼吸法",
  pageNumber: 108
};

module.exports = { createSlide, slideConfig };
