// 页 68: 第三章上 - 两种方法概览（两栏对比）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '两种方法概览'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("两种方法  /  专门对付框架本身", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("两种方法概览", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("这两种方法在实际工作中产出突破的频率最高，也是最被忽视的", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 左卡片 - 方法一
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 3.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 0.6,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("方法 一", {
    x: 0.7, y: 2.05, w: 1.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("METHOD 01", {
    x: 2.5, y: 2.05, w: 2.2, h: 0.5,
    fontSize: 11, fontFace: "Georgia",
    color: theme.light,
    align: "right", valign: "middle", margin: 0
  });

  slide.addText("问题重构", {
    x: 0.7, y: 2.75, w: 4, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("改变问题是怎么被定义的", {
    x: 0.7, y: 3.5, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("从而打开被封闭的解法空间。问题怎么问，决定了你能看到什么。", {
    x: 0.7, y: 3.95, w: 4, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 关键词
  slide.addText("关键词：表述 / 切入 / 重新定义", {
    x: 0.7, y: 4.6, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右卡片 - 方法二
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.4, h: 3.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.4, h: 0.6,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("方法 二", {
    x: 5.3, y: 2.05, w: 1.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("METHOD 02", {
    x: 7.1, y: 2.05, w: 2.2, h: 0.5,
    fontSize: 11, fontFace: "Georgia",
    color: "FFFFFF",
    align: "right", valign: "middle", margin: 0
  });

  slide.addText("假设挑战", {
    x: 5.3, y: 2.75, w: 4, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 3.35, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("把隐含的假设显性化", {
    x: 5.3, y: 3.5, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("区分哪些是真正的约束，哪些只是从来没被测试过的假设。", {
    x: 5.3, y: 3.95, w: 4, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  slide.addText("关键词：约束 / 溯源 / 测试", {
    x: 5.3, y: 4.6, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "68", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "68_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
