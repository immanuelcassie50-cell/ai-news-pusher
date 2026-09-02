const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "完整版五感练习",
  type: "content",
  pageNumber: 41
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("41", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("完整版五感练习", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("5分钟版本", {
    x: 5.5, y: 0.45, w: 2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Timeline steps
  const timeline = [
    { label: "准备", duration: "30秒", desc: "调整呼吸\n安静下来" },
    { label: "视觉", duration: "60秒", desc: "观察5样\n眼前事物" },
    { label: "听觉", duration: "60秒", desc: "倾听4种\n周围声音" },
    { label: "身体", duration: "60秒", desc: "感受身体\n与椅子接触" },
    { label: "嗅觉", duration: "30秒", desc: "闻空气中的\n气味" },
    { label: "味觉", duration: "30秒", desc: "品尝口中\n的味道" },
    { label: "触觉", duration: "60秒", desc: "感受3种\n不同触感" },
    { label: "整合", duration: "30秒", desc: "整体回顾\n本次练习" }
  ];

  // Timeline line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.9, y: 2.85, w: 8.2, h: 0.06,
    fill: { color: theme.accent }
  });

  timeline.forEach((step, i) => {
    const x = 0.5 + i * 1.15;

    // Circle on timeline
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.35, y: 2.7, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });

    // Duration badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.05, y: 1.5, w: 0.95, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(step.duration, {
      x: x + 0.05, y: 1.5, w: 0.95, h: 0.35,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Label
    slide.addText(step.label, {
      x: x, y: 1.9, w: 1.05, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(step.desc, {
      x: x, y: 3.2, w: 1.05, h: 0.7,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "top"
    });
  });

  // Tip box at bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.4, w: 9, h: 0.75,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.08 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.4, w: 0.1, h: 0.75,
    fill: { color: theme.accent }
  });

  slide.addText("小贴士", {
    x: 0.75, y: 4.45, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("刚开始练习时可能觉得步骤多，记不住。没有关系，可以从STOP四步法开始，每次只用1-2个感官，慢慢增加。", {
    x: 0.75, y: 4.75, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
