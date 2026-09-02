// 页 37: 大字 - 常见发现 (集中在天花板一三)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 37,
  title: '第一章 一个常见发现'
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
  slide.addText("一个常见发现  /  FINDING", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标签
  slide.addText("大多数人做完诊断会发现", {
    x: 0.5, y: 0.85, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 大字主问
  slide.addText("几乎所有方案", {
    x: 0.5, y: 1.5, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("都集中在", {
    x: 0.5, y: 2.2, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 两个色块 - 天花板一 + 天花板三
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1, y: 3.0, w: 3.7, h: 1.1,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("天花板一", {
    x: 1, y: 3.1, w: 3.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("在原有问题定义内", {
    x: 1, y: 3.5, w: 3.7, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 加号
  slide.addText("+", {
    x: 4.7, y: 3.0, w: 0.6, h: 1.1,
    fontSize: 30, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 3.0, w: 3.7, h: 1.1,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("天花板三", {
    x: 5.3, y: 3.1, w: 3.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("来自行业已知做法", {
    x: 5.3, y: 3.5, w: 3.7, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 缺席的两块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.7,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addText([
    { text: "天花板二 ", options: { color: theme.secondary, fontSize: 12, bold: true } },
    { text: "（被假设限制了方向）和 ", options: { color: theme.secondary, fontSize: 12 } },
    { text: "天花板四 ", options: { color: theme.secondary, fontSize: 12, bold: true } },
    { text: "（只解决了症状）的方案极少，甚至没有。", options: { color: theme.secondary, fontSize: 12 } }
  ], {
    x: 0.5, y: 4.3, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei",
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("这不是个人失误，而是人在面对复杂问题时的自然反应。", {
    x: 0.5, y: 4.65, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.6, y: 5.05, w: 0.8, h: 0.04,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 页脚
  addFooter(slide, pres, theme, "37", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "37_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
