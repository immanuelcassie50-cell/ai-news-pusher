// 页 102: 形式二：跨行业原理迁移 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 102,
  title: '形式二 跨行业原理迁移'
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
  slide.addText("形式二  ·  CROSS-INDUSTRY TRANSFER", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("跨行业原理迁移（升级版）", {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("不是搬运具体方案，而是提取底层原理", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 左栏：常见错法
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 4.4, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("最常见的错法", {
    x: 0.7, y: 2.15, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("直接去看别人的做法，", {
    x: 0.7, y: 2.85, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("然后想\"能不能用在我们这里\"。", {
    x: 0.7, y: 3.3, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.85, w: 0.4, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("成功率很低 —— 任何方案背后都有一整套匹配条件，条件变了方案不一定还有效。", {
    x: 0.7, y: 4.0, w: 4, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 右栏：真正有效的做法
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.15, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.15, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("真正有效的做法", {
    x: 5.3, y: 2.15, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("提取底层原理", {
    x: 5.3, y: 2.85, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("而不是搬运具体方案。", {
    x: 5.3, y: 3.3, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 3.85, w: 0.4, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("需要三步：抽象化问题 → 寻找场景 → 提取原理，在自己的场景里重建。", {
    x: 5.3, y: 4.0, w: 4, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  addFooter(slide, pres, theme, "102", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "102_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
