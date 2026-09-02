const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 59,
  title: '来源一：公开年报与媒体报道'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with source number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("1", {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("来源一：公开年报与媒体报道", {
    x: 1.1, y: 0.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Two-column layout
  // Left column - 年报
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 4.3, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });

  slide.addText("年报", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText([
    { text: "财务数据", options: { bullet: true, breakLine: true } },
    { text: "战略方向", options: { bullet: true, breakLine: true } },
    { text: "高管动态", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.7, w: 3.9, h: 1.3,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, paraSpaceAfter: 6
  });

  // Right column - 媒体报道
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.1, w: 4.3, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("媒体报道", {
    x: 5.2, y: 1.2, w: 4.3, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  slide.addText([
    { text: "产品发布", options: { bullet: true, breakLine: true } },
    { text: "融资新闻", options: { bullet: true, breakLine: true } },
    { text: "负面报道", options: { bullet: true } }
  ], {
    x: 5.4, y: 1.7, w: 3.9, h: 1.3,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, paraSpaceAfter: 6
  });

  // Bottom section - two cards
  // 采集方法
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.3, w: 4.3, h: 1.6,
    fill: { color: theme.secondary }
  });

  slide.addText("采集方法", {
    x: 0.7, y: 3.4, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText([
    { text: "证监会网站", options: { bullet: true, breakLine: true } },
    { text: "新闻聚合平台", options: { bullet: true, breakLine: true } },
    { text: "公司公告", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.85, w: 3.9, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", paraSpaceAfter: 4
  });

  // AI应用
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 3.3, w: 4.3, h: 1.6,
    fill: { color: theme.light }
  });

  slide.addText("AI应用", {
    x: 5.4, y: 3.4, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("AI快速抓取和总结长文", {
    x: 5.4, y: 3.9, w: 3.9, h: 0.9,
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
  pres.writeFile({ fileName: "slide-59-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
