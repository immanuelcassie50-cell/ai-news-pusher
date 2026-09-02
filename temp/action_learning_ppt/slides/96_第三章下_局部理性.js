// 页 96: 局部理性 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 96,
  title: '局部理性'
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
  slide.addText("外部视角  ·  为什么内部人看不到", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("局部理性", {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("在系统内部看起来都有道理，从外部看起来完全不可理解", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 左栏 - 现象
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.2, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.2, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("内部人看到的", {
    x: 0.7, y: 2.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText([
    { text: "• 每一个奇怪的做法背后，都有一个内部的理由\n", options: { fontSize: 13, color: theme.secondary } },
    { text: "• 每一个明显的不合理，都有\"但我们这里不一样\"的解释\n", options: { fontSize: 13, color: theme.secondary } },
    { text: "• 所有人都在用一套\"局部合理解释\"消解异常\n", options: { fontSize: 13, color: theme.secondary } }
  ], {
    x: 0.7, y: 2.85, w: 4.0, h: 2.2,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "top", margin: 0,
    paraSpaceAfter: 8
  });

  // 右栏 - 关键判断
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.2, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.2, w: 4.4, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("外部人看到的", {
    x: 5.3, y: 2.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText([
    { text: "• 看到奇怪的地方，会觉得\"奇怪\"\n", options: { fontSize: 13, color: theme.secondary } },
    { text: "• 不会立刻找到内部理由把这种奇怪感消化掉\n", options: { fontSize: 13, color: theme.secondary } },
    { text: "• 保留\"奇怪感\"，是发现问题的起点\n", options: { fontSize: 13, color: theme.accent, bold: true } }
  ], {
    x: 5.3, y: 2.85, w: 4.0, h: 2.2,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "top", margin: 0,
    paraSpaceAfter: 8
  });

  addFooter(slide, pres, theme, "96", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "96_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
