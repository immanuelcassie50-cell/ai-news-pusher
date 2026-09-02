// 03 导言 - 但感觉不够劲（三栏对比布局）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '但感觉不够劲'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标识
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("导言  /  Introduction", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("02  但感觉不够劲", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引子
  slide.addText("方案看起来都对，但全部做了，问题会有些改善 —— 改变局面？没那么有把握。", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个并列卡片
  const cardY = 2.15;
  const cardH = 2.5;
  const cardW = 2.85;
  const gap = 0.15;
  const startX = 0.5;

  // 卡片 1
  const x1 = startX;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x1, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x1, y: cardY, w: cardW, h: 0.12,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("01", {
    x: x1 + 0.2, y: cardY + 0.25, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("你的感受", {
    x: x1 + 0.2, y: cardY + 0.7, w: cardW - 0.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("方案看起来都对", {
    x: x1 + 0.2, y: cardY + 1.15, w: cardW - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("但感觉不够劲", {
    x: x1 + 0.2, y: cardY + 1.5, w: cardW - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x1 + 0.2, y: cardY + 1.95, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("改变局面没把握", {
    x: x1 + 0.2, y: cardY + 2.05, w: cardW - 0.4, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 卡片 2
  const x2 = startX + cardW + gap;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x2, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x2, y: cardY, w: cardW, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("02", {
    x: x2 + 0.2, y: cardY + 0.25, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("这种感受", {
    x: x2 + 0.2, y: cardY + 0.7, w: cardW - 0.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("往往是准确的", {
    x: x2 + 0.2, y: cardY + 1.15, w: cardW - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("不是因为你", {
    x: x2 + 0.2, y: cardY + 1.5, w: cardW - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x2 + 0.2, y: cardY + 1.95, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("不够努力或不够聪明", {
    x: x2 + 0.2, y: cardY + 2.05, w: cardW - 0.4, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 卡片 3
  const x3 = startX + (cardW + gap) * 2;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x3, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x3, y: cardY, w: cardW, h: 0.12,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("03", {
    x: x3 + 0.2, y: cardY + 0.25, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("原因在于", {
    x: x3 + 0.2, y: cardY + 0.7, w: cardW - 0.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("所有方案都来自", {
    x: x3 + 0.2, y: cardY + 1.15, w: cardW - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("同一套假设", {
    x: x3 + 0.2, y: cardY + 1.5, w: cardW - 0.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x3 + 0.2, y: cardY + 1.95, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("如果你能想到，问题早该解决", {
    x: x3 + 0.2, y: cardY + 2.05, w: cardW - 0.4, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "03", "导言与课程地图");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "03_导言_但感觉不够劲_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
