// slide-27.js - Stakeholder Matrix
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 27,
  title: '利益相关方影响力-利益矩阵'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("利益相关方影响力-利益矩阵", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // 2x2 matrix
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.2, y: 1.1, w: 4.2, h: 3.5,
    fill: { color: theme.light }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 1.2, y: 2.85, w: 4.2, h: 0,
    line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 3.3, y: 1.1, w: 0, h: 3.5,
    line: { color: theme.secondary, width: 1 }
  });

  slide.addText("高影响力", {
    x: 0.3, y: 2.6, w: 0.8, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("低影响力", {
    x: 0.3, y: 3.1, w: 0.8, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  slide.addText("高利益", {
    x: 2.3, y: 0.8, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("低利益", {
    x: 4.4, y: 0.8, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Quadrant labels
  slide.addText("重点管理", {
    x: 1.4, y: 1.4, w: 1.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });
  slide.addText("保持满意", {
    x: 3.5, y: 1.4, w: 1.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("定期告知", {
    x: 1.4, y: 3.1, w: 1.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("持续观察", {
    x: 3.5, y: 3.1, w: 1.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Right side strategies
  slide.addText("策略指引：", {
    x: 5.8, y: 1.1, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const strategies = [
    "重点管理：主动沟通，优先解决关切",
    "保持满意：定期通报，维护关系",
    "定期告知：信息透明，避免猜疑",
    "持续观察：建立预警机制"
  ];

  strategies.forEach((s, i) => {
    slide.addText("· " + s, {
      x: 5.8, y: 1.6 + i * 0.55, w: 3.7, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-27-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
