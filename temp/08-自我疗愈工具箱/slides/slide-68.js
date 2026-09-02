/**
 * Slide 68 - 感恩日记格式与示例
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
  slide.addText("感恩日记格式与示例", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("简单的模板，温暖的记录", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Left side - Template
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 4.5, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 4.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("感恩日记模板", {
    x: 0.7, y: 1.55, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Template content
  const templateLines = [
    { label: "日期:", value: "________年____月____日" },
    { label: "", value: "" },
    { label: "今天感恩的三件事:", value: "" },
    { label: "1.", value: "____________________" },
    { label: "2.", value: "____________________" },
    { label: "3.", value: "____________________" },
    { label: "", value: "" },
    { label: "如果只能感恩一件事:", value: "" },
    { label: "", value: "____________________" }
  ];

  let yPos = 2.15;
  templateLines.forEach(line => {
    if (line.label) {
      slide.addText(line.label, {
        x: 0.7, y: yPos, w: 2.5, h: 0.3,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: true
      });
    }
    if (line.value) {
      slide.addText(line.value, {
        x: 2.2, y: yPos, w: 2.5, h: 0.3,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.light, bold: false
      });
    }
    yPos += 0.32;
  });

  // Right side - Example
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.3, h: 3.4,
    fill: { color: theme.accent, transparency: 15 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.3, h: 0.5,
    fill: { color: theme.accent }
  });

  slide.addText("示例记录", {
    x: 5.4, y: 1.55, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Example content
  slide.addText("2024年8月20日", {
    x: 5.4, y: 2.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "1. 早上起床看到窗外阳光明媚", options: { breakLine: true } },
    { text: "   → 新的一天充满希望", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "2. 同事给我带了咖啡", options: { breakLine: true } },
    { text: "   → 感受到被关心的温暖", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "3. 完成了今天的工作计划", options: { breakLine: true } },
    { text: "   → 充实感让我满足", options: { breakLine: true } }
  ], {
    x: 5.4, y: 2.5, w: 4, h: 1.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.2
  });

  slide.addText("如果只能感恩一件事: 和家人一起晚餐的时光", {
    x: 5.4, y: 4.4, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false
  });

  // Bottom tip
  slide.addText('关键：写出"为什么"感恩，而不只是"什么"', {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: false
  });

  // Page number
  slide.addText("68", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "感恩日记格式与示例",
  pageNumber: 68
};

module.exports = { createSlide, slideConfig };
