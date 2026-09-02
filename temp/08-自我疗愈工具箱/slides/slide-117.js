/**
 * Slide 117 - 参考文献与延伸阅读
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
  slide.addText("参考文献与延伸阅读", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Left column - References
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 4.4, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.08 }
  });

  slide.addText("核心参考文献", {
    x: 0.7, y: 1.15, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const references = [
    { author: "Kabat-Zinn, J.", work: "《正念：此生最重要的一堂课》" },
    { author: "Neff, K.", work: "《自我关怀：接纳不完美的自己》" },
    { author: "Pennebaker, J.W.", work: "《打开心门：书写情绪的力量》" },
    { author: "Carlson, R.", work: "《专念：积极心理学的正确打开方式》" },
    { author: "Emmons, R.", work: "《感恩的力量》" }
  ];

  references.forEach((ref, i) => {
    const y = 1.6 + i * 0.48;

    // Author
    slide.addText(ref.author, {
      x: 0.7, y: y, w: 1.8, h: 0.25,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    // Work
    slide.addText(ref.work, {
      x: 0.7, y: y + 0.22, w: 4, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Right column - Chinese recommendations
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.0, w: 4.4, h: 2.8,
    fill: { color: theme.accent }
  });

  slide.addText("中文推荐阅读", {
    x: 5.3, y: 1.15, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  const chineseBooks = [
    "《当下的力量》- Eckhart Tolle",
    "《不与自己对抗》- 马克·威廉姆斯",
    "《轻疗愈》- 尼克·奥特纳",
    "《情绪的力量》- 劳丽·桑antos",
    "《睡眠革命》- 尼克·利特尔黑尔斯"
  ];

  chineseBooks.forEach((book, i) => {
    slide.addText("• " + book, {
      x: 5.3, y: 1.6 + i * 0.42, w: 4, h: 0.38,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Bottom section - Online resources
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.0, w: 9, h: 0.95,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.08 }
  });

  slide.addText("在线资源", {
    x: 0.7, y: 4.1, w: 8, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  slide.addText([
    { text: "• 心理卫生机构官网：如中国心理卫生协会、各地精神卫生中心", options: { breakLine: true } },
    { text: "• 正念冥想APP：Insight Timer、Headspace、Calm等（部分有中文）", options: { breakLine: true } },
    { text: "• 专业心理咨询平台：如简单心理、壹心理、KnowYourself等" }
  ], {
    x: 0.7, y: 4.45, w: 8.5, h: 0.45,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    lineSpaceMult: 1.3
  });

  // Page number
  slide.addText("117", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Appendix",
  title: "参考文献与延伸阅读",
  pageNumber: 117
};

module.exports = { createSlide, slideConfig };
