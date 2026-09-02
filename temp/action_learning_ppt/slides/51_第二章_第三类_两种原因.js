// 51_第二章_第三类_两种原因 - 两栏
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 51,
  title: '第三类空白的两种原因'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("WHY  EMPTY  /  为什么是空白", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("为什么关键突破口没有对应方案？", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("两种原因，对应两种处理路径。", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧卡片：做不到
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 4.4, h: 2.85,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 4.4, h: 0.4,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("原因 A", {
    x: 0.7, y: 2.1, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("『做不到』", {
    x: 2.7, y: 2.65, w: 2, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "right", valign: "middle", margin: 0
  });
  slide.addText("感觉做不到", {
    x: 0.7, y: 2.65, w: 3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("『做不到』是否真的成立？", {
    x: 0.7, y: 3.5, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.0, w: 4, h: 0.85,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText("→  第三章方法二：假设挑战", {
    x: 0.85, y: 4.05, w: 3.7, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("验证这个『做不到』是否真的成立", {
    x: 0.85, y: 4.45, w: 3.7, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧卡片：不知从哪入手
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.4, h: 2.85,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("原因 B", {
    x: 5.3, y: 2.1, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("『不知从哪入手』", {
    x: 7.3, y: 2.65, w: 2, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "right", valign: "middle", margin: 0
  });
  slide.addText("不知道从哪里下手", {
    x: 5.3, y: 2.65, w: 3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 3.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("如何打开新的方向？", {
    x: 5.3, y: 3.5, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 4.0, w: 4, h: 0.85,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText("→  第三章方法一：问题重构", {
    x: 5.45, y: 4.05, w: 3.7, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("或外部视角打开新的方向", {
    x: 5.45, y: 4.45, w: 3.7, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 底部说明
  slide.addText("第三类空白的处理：分清原因，再选择对应的创新方法。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "51", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "51_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
