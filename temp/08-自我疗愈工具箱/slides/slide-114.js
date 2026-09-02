/**
 * Slide 114 - 卡片7：感恩日记
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
  slide.addText("工具卡片 7", {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("感恩日记", {
    x: 2.5, y: 0.3, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("培养积极情绪的简单日常练习", {
    x: 2.5, y: 0.85, w: 5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Diary template card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 5.5, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 3, angle: 45, opacity: 0.1 }
  });

  // Diary header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 5.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("日期：____________", {
    x: 0.7, y: 1.4, w: 5.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Section 1: Three things
  slide.addText("今天值得感恩的三件事：", {
    x: 0.7, y: 1.95, w: 5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  const gratitudeItems = [
    { num: "1.", placeholder: "因为_____（原因）" },
    { num: "2.", placeholder: "因为_____（原因）" },
    { num: "3.", placeholder: "因为_____（原因）" }
  ];

  gratitudeItems.forEach((item, i) => {
    const y = 2.35 + i * 0.55;

    // Number
    slide.addText(item.num, {
      x: 0.7, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Placeholder line
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y + 0.25, w: 4.5, h: 0.02,
      fill: { color: theme.light }
    });
    slide.addText(item.placeholder, {
      x: 1.1, y: y, w: 4.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false, italic: true
    });
  });

  // Section 2: Deep reflection
  slide.addText("如果只能感恩一件事，我会感恩_____", {
    x: 0.7, y: 4.1, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.7, y: 4.45, w: 5, h: 0.02,
    fill: { color: theme.light }
  });

  // Section 3: Small joy
  slide.addText("今天的小确幸：_____", {
    x: 0.7, y: 4.55, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.7, y: 4.9, w: 5, h: 0.02,
    fill: { color: theme.light }
  });

  // Right side - tips
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2, y: 1.35, w: 3.3, h: 1.6,
    fill: { color: theme.accent }
  });
  slide.addText("练习提示", {
    x: 6.4, y: 1.5, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText([
    { text: "• 每天固定时间记录", options: { breakLine: true } },
    { text: "• 睡前或清晨最佳", options: { breakLine: true } },
    { text: "• 具体描述感恩原因", options: { breakLine: true } },
    { text: "• 感受感恩时的情绪" }
  ], {
    x: 6.4, y: 1.9, w: 3, h: 0.95,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.3
  });

  // Research evidence
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2, y: 3.1, w: 3.3, h: 2.05,
    fill: { color: theme.primary }
  });
  slide.addText("研究支持", {
    x: 6.4, y: 3.25, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("Robert Emmons\n感恩研究证明：", {
    x: 6.4, y: 3.65, w: 3, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false
  });
  slide.addText([
    { text: "• 提高主观幸福感", options: { breakLine: true } },
    { text: "• 减少抑郁情绪", options: { breakLine: true } },
    { text: "• 增强人际关系", options: { breakLine: true } },
    { text: "• 改善睡眠质量" }
  ], {
    x: 6.4, y: 4.15, w: 3, h: 0.9,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    lineSpaceMult: 1.3
  });

  // Page number
  slide.addText("114", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "tool-card",
  module: "Tool Cards",
  title: "感恩日记",
  pageNumber: 114
};

module.exports = { createSlide, slideConfig };
