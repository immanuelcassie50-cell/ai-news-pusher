// 页 128: AI辅助 定位 - 大字
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 128,
  title: 'AI辅助 · 定位'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部标识
  slide.addText("AI 辅助  ·  工具，不是答案", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("AI 辅助：工具，不是答案", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("AI 不能替代前面五种方法 —— 它也处于同样的\"常规解法\"框架里", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大引述
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 1.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("AI 给出的方案，", {
    x: 0.7, y: 2.25, w: 8.6, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("通常也是\"最常见的做法\"。", {
    x: 0.7, y: 2.8, w: 8.6, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 解释
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.7, w: 9, h: 1.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.7, w: 0.08, h: 1.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("为什么？", {
    x: 0.75, y: 3.8, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("AI 的\"训练数据\"来自已有的文字记录，而最多文字记录的，恰恰是最常见的方法。", {
    x: 0.75, y: 4.1, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("AI 最有价值的使用方式，是在你用方法一到五完成了框架层面的突破之后，用它来快速填充候选内容。", {
    x: 0.75, y: 4.55, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "top", margin: 0
  });

  addFooter(slide, pres, theme, "128", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "128_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
