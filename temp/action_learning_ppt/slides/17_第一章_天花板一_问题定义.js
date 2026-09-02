// 页 17: 解释 - 天花板一引入
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 17,
  title: '第一章 天花板一：在问题的定义范围内找答案'
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
  slide.addText("天花板 01  /  CEILING", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("在问题的定义范围内找答案", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大字
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 4.2, h: 3.5,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 4.2, h: 0.1,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("危险", {
    x: 0.7, y: 1.85, w: 3.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("问题的定义本身，", {
    x: 0.7, y: 2.2, w: 3.8, h: 0.5,
    fontSize: 19, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("就已经把", {
    x: 0.7, y: 2.7, w: 3.8, h: 0.5,
    fontSize: 19, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("最好的答案", {
    x: 0.7, y: 3.2, w: 3.8, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("挡在了外面。", {
    x: 0.7, y: 3.7, w: 3.8, h: 0.5,
    fontSize: 19, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧解释
  slide.addText("这是思维的自然运作方式", {
    x: 5.0, y: 1.7, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("我们总是在接受了问题定义之后，开始寻找答案 —— 这不是思维偷懒，而是思维的自然运作方式。", {
    x: 5.0, y: 2.15, w: 4.5, h: 0.85,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 关键句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 3.2, w: 4.5, h: 1.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("开篇案例", {
    x: 5.2, y: 3.35, w: 4.1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("问题被定义为「投诉处理效率」，于是所有方案都是「如何更快、更好地处理投诉」。", {
    x: 5.2, y: 3.7, w: 4.1, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "top", margin: 0
  });
  slide.addText("账单系统问题，", {
    x: 5.2, y: 4.4, w: 4.1, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("从来没有机会进入视野。", {
    x: 5.2, y: 4.7, w: 4.1, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "17", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "17_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
