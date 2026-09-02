// 42_第二章_两个原因 - 两栏对比型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 42,
  title: '为什么必须盘点：两个原因'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("WHY  /  为什么要盘点", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("这件事比听起来更重要", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 4.4, h: 3.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("原因 1", {
    x: 0.7, y: 1.8, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("01", {
    x: 4.4, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "right", valign: "middle", margin: 0
  });
  slide.addText("可能已有真正有效的方案，", {
    x: 0.7, y: 2.4, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("只是被淹没在大量『还行但不够』的方案里，没有被识别出来。", {
    x: 0.7, y: 2.9, w: 4, h: 1.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("→  应该被保留，", {
    x: 0.7, y: 4.05, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("而不是在『找新方案』的冲动里被一起推翻。", {
    x: 0.7, y: 4.35, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.8, w: 4.4, h: 3.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.8, w: 4.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("原因 2", {
    x: 5.3, y: 1.8, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("02", {
    x: 9.0, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "right", valign: "middle", margin: 0
  });
  slide.addText("找准创新工作的重点", {
    x: 5.3, y: 2.4, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("对事分析里的关键突破口，哪些已有解法、哪些完全空白——空白才是创新重点。", {
    x: 5.3, y: 2.9, w: 4, h: 1.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("→  把能量投到对的位置。", {
    x: 5.3, y: 4.05, w: 4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部金句
  slide.addText("盘点不是为了评判，而是为了知道把能量投到哪里。", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "42", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "42_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
