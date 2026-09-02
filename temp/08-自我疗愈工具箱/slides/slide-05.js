/**
 * Slide 05 - 心理健康的"预防医学"视角
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
  slide.addText('心理健康的"预防医学"视角', {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("治未病 - 在问题发生前做好预防", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Left side - Concept explanation
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.6, w: 4.5, h: 2.2,
    fill: { color: theme.primary }
  });

  slide.addText('"治未病"理念', {
    x: 0.7, y: 1.75, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText([
    { text: "• 未病先防：培养日常保养习惯", options: { breakLine: true } },
    { text: "• 既病防变：早期干预防止恶化", options: { breakLine: true } },
    { text: "• 愈后防复：持续维护心理健康" }
  ], {
    x: 0.7, y: 2.35, w: 4.1, h: 1.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    lineSpaceMult: 1.6
  });

  // Right side - Research data section
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.6, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addText("研究数据", {
    x: 5.4, y: 1.75, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText("70%", {
    x: 5.4, y: 2.25, w: 1.5, h: 0.8,
    fontSize: 40, fontFace: "Arial",
    color: theme.accent, bold: true
  });
  slide.addText("的心理问题可通过早期干预改善", {
    x: 6.8, y: 2.45, w: 2.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  slide.addText("50%", {
    x: 5.4, y: 3.0, w: 1.5, h: 0.6,
    fontSize: 36, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("的心理疾病与日常压力管理不当相关", {
    x: 6.8, y: 3.15, w: 2.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Bottom - Mental health continuum
  slide.addText("心理健康连续谱", {
    x: 0.5, y: 4.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Spectrum bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 9, h: 0.3,
    fill: { color: theme.accent }
  });

  // Spectrum labels
  const spectrumLabels = [
    { text: "心理健康", x: 0.5, color: theme.accent },
    { text: "轻度困扰", x: 3.2, color: theme.light },
    { text: "中度问题", x: 5.7, color: theme.primary },
    { text: "严重疾病", x: 8.0, color: theme.secondary }
  ];

  spectrumLabels.forEach(label => {
    slide.addShape(pres.ShapeType.rect, {
      x: label.x, y: 4.85, w: 0.03, h: 0.25,
      fill: { color: label.color }
    });
    slide.addText(label.text, {
      x: label.x - 0.5, y: 5.1, w: 1.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: label.color, align: "center", bold: false
    });
  });

  // Arrow indicator
  slide.addText("← 日常保养作用区间 →", {
    x: 2.5, y: 4.5, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  // Page number
  slide.addText("05", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 1",
  title: "心理健康的预防医学视角",
  pageNumber: 5
};

module.exports = { createSlide, slideConfig };
