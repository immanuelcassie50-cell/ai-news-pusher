// 页 36: 解释 - 读懂诊断结果
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: '第一章 读懂诊断结果'
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
  slide.addText("完成之后  /  HOW TO READ", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("读懂你的诊断结果", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 问 1: 哪种最多
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.7,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 1.7, w: 0.4, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("1", {
    x: 0.7, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("哪种天花板在你的清单里出现次数最多？", {
    x: 1.25, y: 1.55, w: 8, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("打钩最集中的类型，说明你的思考在那个维度有固定的局限。", {
    x: 0.7, y: 2.3, w: 8.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("这不是坏事，知道了才能针对性地补。", {
    x: 0.7, y: 2.6, w: 8.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 问 2: 哪种没有
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 9, h: 0.7,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 3.15, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("2", {
    x: 0.7, y: 3.15, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("哪种几乎没有出现？", {
    x: 1.25, y: 3.0, w: 8, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 两种可能
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.8, w: 4.3, h: 0.85,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.8, w: 0.08, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("可能 A", {
    x: 0.95, y: 3.85, w: 4, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("你在那个维度确实已经有了覆盖", {
    x: 0.95, y: 4.1, w: 4, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 3.8, w: 4.3, h: 0.85,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 3.8, w: 0.08, h: 0.85,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("更常见  /  B", {
    x: 5.45, y: 3.85, w: 4, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("那种类型的方案根本没出现在清单里 —— 你从来没在那个方向上想过", {
    x: 5.45, y: 4.1, w: 4, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 关键提醒
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText([
    { text: "更关键的问题  ", options: { color: theme.light, fontSize: 11, bold: true } },
    { text: "对事分析里识别出的重要突破口，方案清单里有没有任何一条在朝它努力？", options: { color: "FFFFFF", fontSize: 12 } }
  ], {
    x: 0.7, y: 4.8, w: 8.6, h: 0.5,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "36", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "36_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
