// 页 30: 大字 - 天花板四 识别特征 (停止就回来)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 30,
  title: '第一章 天花板四 识别特征'
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
  slide.addText("识别特征  /  CEILING 04", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标签
  slide.addText("看效果能否持续", {
    x: 0.5, y: 0.85, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 大字主问
  slide.addText("你的方案做了会有效果，", {
    x: 0.5, y: 1.7, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("但效果维持需要", {
    x: 0.5, y: 2.35, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("持续的人工推动", {
    x: 0.5, y: 3.0, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 分割线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 3.85, w: 1, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 关键判断
  slide.addText("一旦停止，", {
    x: 0.5, y: 4.0, w: 9, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("问题就回来了。", {
    x: 0.5, y: 4.45, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 警示条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2, y: 5.05, w: 6, h: 0.3,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2, y: 5.05, w: 0.06, h: 0.3,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("根本机制没有被改变。", {
    x: 2.2, y: 5.05, w: 5.7, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "30", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "30_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
