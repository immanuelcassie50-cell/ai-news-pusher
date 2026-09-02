const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 60,
  title: '来源二：官网与社交媒体'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with source number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("2", {
    x: 0.5, y: 0.4, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("来源二：官网与社交媒体", {
    x: 1.1, y: 0.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Platform analysis framework - 3 column layout
  const colW = 2.9;
  const colH = 3.5;
  const startX = 0.5;
  const gap = 0.2;

  // Column 1 - 官网
  slide.addShape(pres.ShapeType.rect, {
    x: startX, y: 1.1, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });

  slide.addText("官网", {
    x: startX, y: 1.2, w: colW, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText([
    { text: "产品功能", options: { bullet: true, breakLine: true } },
    { text: "定价", options: { bullet: true, breakLine: true } },
    { text: "客户案例", options: { bullet: true, breakLine: true } },
    { text: "招聘动态", options: { bullet: true } }
  ], {
    x: startX + 0.2, y: 1.8, w: colW - 0.4, h: 2.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, paraSpaceAfter: 8
  });

  // Column 2 - 社交媒体
  slide.addShape(pres.ShapeType.rect, {
    x: startX + colW + gap, y: 1.1, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("社交媒体", {
    x: startX + colW + gap, y: 1.2, w: colW, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  slide.addText([
    { text: "LinkedIn", options: { bullet: true, breakLine: true } },
    { text: "微信公众号", options: { bullet: true, breakLine: true } },
    { text: "行业论坛", options: { bullet: true } }
  ], {
    x: startX + colW + gap + 0.2, y: 1.8, w: colW - 0.4, h: 2.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, paraSpaceAfter: 8
  });

  // Column 3 - 观察重点
  slide.addShape(pres.ShapeType.rect, {
    x: startX + (colW + gap) * 2, y: 1.1, w: colW, h: colH,
    fill: { color: theme.secondary }
  });

  slide.addText("观察重点", {
    x: startX + (colW + gap) * 2, y: 1.2, w: colW, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText([
    { text: "营销口号变化", options: { bullet: true, breakLine: true } },
    { text: "新产品预告", options: { bullet: true, breakLine: true } },
    { text: "客户评价", options: { bullet: true } }
  ], {
    x: startX + (colW + gap) * 2 + 0.2, y: 1.8, w: colW - 0.4, h: 2.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", paraSpaceAfter: 8
  });

  // Bottom AI应用 bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.6,
    fill: { color: theme.light }
  });

  slide.addText("AI应用：AI分析官网文案风格和定位", {
    x: 0.7, y: 4.8, w: 8.6, h: 0.6,
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
  pres.writeFile({ fileName: "slide-60-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
