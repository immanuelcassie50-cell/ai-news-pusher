const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 61,
  title: '来源三：行业报告与研究机构'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with source number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("3", {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("来源三：行业报告与研究机构", {
    x: 1.1, y: 0.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Left side - 报告类型
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 4.3, h: 1.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });

  slide.addText("报告类型", {
    x: 0.7, y: 1.2, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "市场规模", options: { bullet: true, breakLine: true } },
    { text: "竞争格局", options: { bullet: true, breakLine: true } },
    { text: "趋势分析", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.65, w: 3.9, h: 1.1,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, paraSpaceAfter: 6
  });

  // Right side - 权威机构
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.1, w: 4.3, h: 1.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("权威机构", {
    x: 5.4, y: 1.2, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "Gartner、Forrester、IDC", options: { bullet: true, breakLine: true } },
    { text: "艾瑞、36kr", options: { bullet: true } }
  ], {
    x: 5.4, y: 1.65, w: 3.9, h: 1.1,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, paraSpaceAfter: 6
  });

  // 获取渠道 - full width
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.1, w: 9, h: 1.1,
    fill: { color: theme.secondary }
  });

  slide.addText("获取渠道", {
    x: 0.7, y: 3.2, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("官网发布  |  付费数据库  |  行业社群", {
    x: 0.7, y: 3.6, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });

  // AI应用 - full width at bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.light }
  });

  slide.addText("AI应用：AI提取报告核心观点", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.9,
    fontSize: 20, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-61-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
