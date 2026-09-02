/**
 * Slide 67 - 感恩日记法
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("感恩日记法", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("最简单的书写练习，从感恩开始", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Left side - Why gratitude works
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 4.5, h: 2.5,
    fill: { color: theme.accent }
  });

  slide.addText("为什么感恩有效", {
    x: 0.7, y: 1.7, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText([
    { text: "心理学机制:", options: { breakLine: true, bold: true } },
    { text: "", options: { breakLine: true } },
    { text: "1. 转移注意力到积极体验", options: { breakLine: true } },
    { text: "2. 中和负面情绪 bias", options: { breakLine: true } },
    { text: "3. 增强社会连接感", options: { breakLine: true } },
    { text: "4. 促进多巴胺分泌" }
  ], {
    x: 0.7, y: 2.3, w: 4.1, h: 1.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    lineSpaceMult: 1.4
  });

  // Right side - Research reference
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.3, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addText("Emmons & McCullough", {
    x: 5.4, y: 1.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("2003年 研究证实：写感恩日记的人更快乐、更有活力", {
    x: 5.4, y: 2.0, w: 3.9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Basic format section
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 2.75, w: 4.3, h: 1.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addText("基本格式", {
    x: 5.4, y: 2.9, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText("每天记录 3 件感恩的事 + 原因", {
    x: 5.4, y: 3.3, w: 3.9, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false
  });

  // Bottom - Key benefits
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 10 }
  });

  const benefits = [
    { text: "提升幸福感", x: 0.7 },
    { text: "减少抑郁情绪", x: 3.0 },
    { text: "改善睡眠质量", x: 5.3 },
    { text: "增强心理韧性", x: 7.6 }
  ];

  benefits.forEach((b, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: b.x, y: 4.35, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText((i + 1).toString(), {
      x: b.x, y: 4.35, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });
    slide.addText(b.text, {
      x: b.x + 0.45, y: 4.35, w: 2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Tip
  slide.addText("提示：从今天开始，只需 5 分钟", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center", bold: false
  });

  // Page number
  slide.addText("67", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "感恩日记法",
  pageNumber: 67
};

module.exports = { createSlide, slideConfig };
