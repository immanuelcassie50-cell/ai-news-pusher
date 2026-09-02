const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 57,
  title: '为什么竞品分析是销售的核心能力？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("为什么竞品分析是销售的核心能力？", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Left card - Benefit
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });

  slide.addText("价值", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText("了解竞品才能有效差异化", {
    x: 0.7, y: 2.1, w: 3.9, h: 1.3,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  // Right card - Risk
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.4, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("风险", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  slide.addText("不了解竞品就像蒙着眼睛打仗", {
    x: 5.4, y: 2.1, w: 3.9, h: 1.3,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  // Key insight card at bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.9, w: 9, h: 1.4,
    fill: { color: theme.primary }
  });

  slide.addText("核心洞察", {
    x: 0.7, y: 4.0, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("竞品分析不是为了复制，而是为了找到自己的独特位置", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.8,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-57-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
