// 47_第二章_第一类_一个提醒 - 大字型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 47,
  title: '一个很重要的态度提醒'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧大色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.4, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.9, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("A  REMINDER  /  态度提醒", {
    x: 1.1, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 章节小标
  slide.addText("关于第一类方案", {
    x: 0.9, y: 0.85, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大引述
  slide.addText("不要为了创新而创新", {
    x: 0.9, y: 1.8, w: 8.5, h: 1.0,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("把好方案推翻。", {
    x: 0.9, y: 2.85, w: 8.5, h: 1.0,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.9, y: 4.0, w: 0.8, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 解释
  slide.addText("如果一个方案基础扎实、方向清晰，", {
    x: 0.9, y: 4.2, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("那它就是好方案，", {
    x: 0.9, y: 4.55, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("不需要因为『看起来太常规』而怀疑它。", {
    x: 0.9, y: 4.9, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "47", "第二章 系统盘点");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.9, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.9, y: 5.46, w: 5, h: 0.25,
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
  pres.writeFile({ fileName: "47_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
