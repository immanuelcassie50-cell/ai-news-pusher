// 页 123: 方法五引入 - 大字 - 组合创新
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 123,
  title: '方法五引入 组合创新'
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
  slide.addText("方法五  ·  COMBINATION INNOVATION", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("组合创新", {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("大多数有效的创新，是重新组装而不是无中生有", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大引述
  slide.addText("两个方案组合起来，", {
    x: 0.6, y: 2.4, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("效果超过它们各自单独的效果之和？", {
    x: 0.6, y: 3.05, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.9, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 引文出处
  slide.addText("这不是在贬低这类创新 —— 重新组合是最可靠的创新方式，", {
    x: 0.6, y: 4.1, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("因为每个组成部分的有效性都已经在其他地方得到了验证，只有组合本身是新的。", {
    x: 0.6, y: 4.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "123", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "123_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
