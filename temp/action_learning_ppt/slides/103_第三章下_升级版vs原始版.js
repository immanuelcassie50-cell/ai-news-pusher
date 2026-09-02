// 页 103: 升级版 vs 原始版 - 对比
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 103,
  title: '升级版 vs 原始版'
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
  slide.addText("跨行业迁移  ·  两个版本的差异", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("升级版 vs 原始版", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("差距在于：操作的是方案，还是原理", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 左 - 原始版
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 4.4, h: 0.5,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("原始版", {
    x: 0.7, y: 2.1, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("搬运具体方案", {
    x: 0.7, y: 2.75, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText([
    { text: "• 直接去看别人怎么做\n", options: { fontSize: 12, color: theme.secondary } },
    { text: "• 想\"能不能用在我们这里\"\n", options: { fontSize: 12, color: theme.secondary } },
    { text: "• 关注操作步骤本身\n", options: { fontSize: 12, color: theme.secondary } },
    { text: "• 条件不匹配时方案失效", options: { fontSize: 12, color: theme.accent, bold: true } }
  ], {
    x: 0.7, y: 3.25, w: 4, h: 1.7,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "top", margin: 0,
    paraSpaceAfter: 4
  });

  // 中间箭头
  slide.addText("→", {
    x: 4.9, y: 3.4, w: 0.6, h: 0.5,
    fontSize: 32, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右 - 升级版
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.4, h: 2.95,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("升级版", {
    x: 5.3, y: 2.1, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("提取底层原理", {
    x: 5.3, y: 2.75, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText([
    { text: "• 抽象化问题到与行业无关的层面\n", options: { fontSize: 12, color: theme.secondary } },
    { text: "• 找\"结构相似\"的外部场景\n", options: { fontSize: 12, color: theme.secondary } },
    { text: "• 提取\"为什么有效\"的原理\n", options: { fontSize: 12, color: theme.secondary } },
    { text: "• 在自己的资源和约束里重建", options: { fontSize: 12, color: theme.accent, bold: true } }
  ], {
    x: 5.3, y: 3.25, w: 4, h: 1.7,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "top", margin: 0,
    paraSpaceAfter: 4
  });

  addFooter(slide, pres, theme, "103", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "103_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
