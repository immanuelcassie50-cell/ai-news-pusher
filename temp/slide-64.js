const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 64,
  title: '来源六：第三方数据平台'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with source number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("6", {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("来源六：第三方数据平台", {
    x: 1.1, y: 0.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Table-like comparison layout
  const tableData = [
    { type: "数据类型", items: "工商信息、融资历史、团队背景" },
    { type: "企业信息平台", items: "天眼查、企查查、IT桔子、Crunchbase" },
    { type: "员工评价平台", items: "脉脉" },
    { type: "社交声量平台", items: "新榜" }
  ];

  // Header row
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fill: { color: theme.secondary }
  });

  slide.addText("数据类型 / 平台", {
    x: 0.7, y: 1.1, w: 3, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  slide.addText("具体平台", {
    x: 3.7, y: 1.1, w: 5.6, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // Data rows
  tableData.forEach((row, i) => {
    const y = 1.7 + i * 0.65;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.65,
      fill: { color: bgColor },
      line: { color: theme.accent, width: 0.5 }
    });

    slide.addText(row.type, {
      x: 0.7, y: y, w: 3, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(row.items, {
      x: 3.7, y: y, w: 5.6, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // AI应用 - bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.light }
  });

  slide.addText("AI应用：AI聚合多平台数据形成竞品画像", {
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
  pres.writeFile({ fileName: "slide-64-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
