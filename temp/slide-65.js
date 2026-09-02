const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 65,
  title: '来源七：内部销售团队'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with source number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("7", {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("来源七：内部销售团队", {
    x: 1.1, y: 0.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Left side - 为什么重要 (large highlight card)
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 4.3, h: 2.2,
    fill: { color: theme.primary }
  });

  slide.addText("为什么重要？", {
    x: 0.7, y: 1.2, w: 3.9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("一线销售最了解竞品动态", {
    x: 0.7, y: 1.8, w: 3.9, h: 1.3,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // Right side - 收集机制
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.1, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("收集机制", {
    x: 5.4, y: 1.2, w: 3.9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "周会分享", options: { bullet: true, breakLine: true } },
    { text: "战败分析", options: { bullet: true, breakLine: true } },
    { text: "竞品动态群", options: { bullet: true } }
  ], {
    x: 5.4, y: 1.75, w: 3.9, h: 1.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, paraSpaceAfter: 8
  });

  // Bottom section - two cards side by side
  // 关键问题
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.5, w: 4.3, h: 1.3,
    fill: { color: theme.secondary }
  });

  slide.addText("关键问题", {
    x: 0.7, y: 3.6, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText(""客户为什么选他不选我们？"", {
    x: 0.7, y: 4.0, w: 3.9, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // AI应用
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 3.5, w: 4.3, h: 1.3,
    fill: { color: theme.light }
  });

  slide.addText("AI应用", {
    x: 5.4, y: 3.6, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("AI汇总分析销售提供的竞品信息", {
    x: 5.4, y: 4.0, w: 3.9, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
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
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
