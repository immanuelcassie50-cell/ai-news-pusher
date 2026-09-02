const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 62,
  title: '来源四：客户反馈与调研'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with source number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("4", {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("来源四：客户反馈与调研", {
    x: 1.1, y: 0.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // 2x2 grid layout
  const cardW = 4.3;
  const cardH = 1.5;
  const startX = 0.5;
  const gap = 0.2;

  // Card 1 - 一手信息
  slide.addShape(pres.ShapeType.rect, {
    x: startX, y: 1.1, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });

  slide.addText("一手信息", {
    x: startX + 0.2, y: 1.2, w: cardW - 0.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("客户主动提及的竞品评价", {
    x: startX + 0.2, y: 1.65, w: cardW - 0.4, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Card 2 - 调研方法
  slide.addShape(pres.ShapeType.rect, {
    x: startX + cardW + gap, y: 1.1, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("调研方法", {
    x: startX + cardW + gap + 0.2, y: 1.2, w: cardW - 0.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("销售访谈  |  客户问卷  |  NPS分析", {
    x: startX + cardW + gap + 0.2, y: 1.65, w: cardW - 0.4, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Card 3 - 关键问题 (highlighted)
  slide.addShape(pres.ShapeType.rect, {
    x: startX, y: 2.8, w: cardW, h: cardH,
    fill: { color: theme.primary }
  });

  slide.addText("关键问题", {
    x: startX + 0.2, y: 2.9, w: cardW - 0.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText(""您之前用的是什么？为什么换？"", {
    x: startX + 0.2, y: 3.35, w: cardW - 0.4, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // Card 4 - AI应用
  slide.addShape(pres.ShapeType.rect, {
    x: startX + cardW + gap, y: 2.8, w: cardW, h: cardH,
    fill: { color: theme.light }
  });

  slide.addText("AI应用", {
    x: startX + cardW + gap + 0.2, y: 2.9, w: cardW - 0.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("AI分析客户反馈中的竞品关键词", {
    x: startX + cardW + gap + 0.2, y: 3.35, w: cardW - 0.4, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // Bottom insight
  slide.addText("核心：一手信息价值最高，客户真实反馈最能反映竞品实力", {
    x: 0.5, y: 4.6, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2B2D42",
    accent: "8D99AE",
    light: "ED233C",
    bg: "F8F9FA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-62-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
