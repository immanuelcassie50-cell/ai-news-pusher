/**
 * Slide 64 - 书写疗愈的科学
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
  slide.addText("书写疗愈的科学", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("James Pennebaker 的开创性研究", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Left side - Origin story card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 4.5, h: 2.8,
    fill: { color: theme.primary }
  });

  slide.addText("研究起源 (1986)", {
    x: 0.7, y: 1.7, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText([
    { text: "James Pennebaker 开始研究", options: { breakLine: true } },
    { text: "创伤经历与身体健康的关系", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "经典实验设计:", options: { breakLine: true } },
    { text: "• 4天连续书写", options: { breakLine: true } },
    { text: "• 每天15分钟", options: { breakLine: true } },
    { text: "• 书写创伤经历与感受", options: { breakLine: true } }
  ], {
    x: 0.7, y: 2.3, w: 4.1, h: 2,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    lineSpaceMult: 1.4
  });

  // Right side - Key findings
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.3, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addText("惊人发现", {
    x: 5.4, y: 1.7, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Result highlight
  slide.addText("43%", {
    x: 5.4, y: 2.2, w: 1.8, h: 0.8,
    fontSize: 48, fontFace: "Arial",
    color: theme.accent, bold: true
  });
  slide.addText("更少就医次数", {
    x: 7.2, y: 2.45, w: 2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  slide.addText("书写组比对照组的健康状况显著更好", {
    x: 5.4, y: 3.1, w: 3.9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  slide.addText("这一发现开启了书写疗愈研究的热潮", {
    x: 5.4, y: 3.6, w: 3.9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Bottom - Impact section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 9, h: 0.9,
    fill: { color: theme.accent, transparency: 20 }
  });

  slide.addText("200+", {
    x: 0.7, y: 4.6, w: 1.5, h: 0.7,
    fontSize: 36, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("项研究证实书写疗愈的益处", {
    x: 2.2, y: 4.75, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  slide.addText("被广泛应用于临床心理治疗、企业员工援助、教育等领域", {
    x: 5.5, y: 4.75, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Page number
  slide.addText("64", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "书写疗愈的科学",
  pageNumber: 64
};

module.exports = { createSlide, slideConfig };
