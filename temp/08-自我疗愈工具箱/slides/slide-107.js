/**
 * Slide 107 - 附录导览
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
  slide.addText("附录", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("工具卡片、帮助资源与延伸阅读", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Card preview boxes - 3 columns
  const cardWidth = 2.8;
  const cardHeight = 1.8;
  const cardY = 1.8;
  const cardGap = 0.3;

  // Card 1 - Tool Cards
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: theme.primary }
  });
  slide.addText("工具卡片", {
    x: 0.5, y: cardY + 0.3, w: cardWidth, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("7张可打印卡片\n涵盖7大疗愈技术", {
    x: 0.5, y: cardY + 0.85, w: cardWidth, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false, align: "center"
  });

  // Card 2 - When to Seek Help
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5 + cardWidth + cardGap, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: theme.accent }
  });
  slide.addText("何时寻求专业帮助", {
    x: 0.5 + cardWidth + cardGap, y: cardY + 0.3, w: cardWidth, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center"
  });
  slide.addText("识别需要专业支持的\n警示信号与资源", {
    x: 0.5 + cardWidth + cardGap, y: cardY + 0.85, w: cardWidth, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "center"
  });

  // Card 3 - Q&A
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5 + (cardWidth + cardGap) * 2, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: theme.light }
  });
  slide.addText("常见问题解答", {
    x: 0.5 + (cardWidth + cardGap) * 2, y: cardY + 0.3, w: cardWidth, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("6个常见疑问\n详细解答", {
    x: 0.5 + (cardWidth + cardGap) * 2, y: cardY + 0.85, w: cardWidth, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false, align: "center"
  });

  // Bottom section - what's included
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.9, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.08 }
  });

  slide.addText("附录内容概览", {
    x: 0.7, y: 4.05, w: 8, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText([
    { text: "• 工具卡片（7张）：4-7-8呼吸法、腹式呼吸、三分钟呼吸空间、STOP五感正念、自我关怀话术、情绪释放四步法、感恩日记", options: { breakLine: true } },
    { text: "• 何时寻求专业帮助：警示信号识别与求助渠道", options: { breakLine: true } },
    { text: "• 常见问题解答、参考文献与延伸阅读" }
  ], {
    x: 0.7, y: 4.4, w: 8.5, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.4
  });

  // Page number
  slide.addText("107", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "appendix",
  module: "Appendix",
  title: "附录导览",
  pageNumber: 107
};

module.exports = { createSlide, slideConfig };
