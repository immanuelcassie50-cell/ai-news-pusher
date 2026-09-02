// 02 导言 - 你走到这里（引述型布局）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 2,
  title: '你走到这里，带着什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标识
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("导言  /  Introduction", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 章节小标题
  slide.addText("01  你走到这里", {
    x: 0.5, y: 0.8, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 大引述
  slide.addText("你做了不少事才走到这里。", {
    x: 0.7, y: 1.6, w: 8.6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 历程描述
  slide.addText("目标建立  /  对事分析  /  利益相关方梳理  ——  三个模块下来，", {
    x: 0.7, y: 2.55, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 关键事实
  slide.addText("消耗了相当的精力，手里有了一批初步方案。", {
    x: 0.7, y: 2.92, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 数字对比
  slide.addText([
    { text: "少则 ", options: { fontSize: 14, color: theme.secondary, fontFace: "Microsoft YaHei" } },
    { text: "5-6", options: { fontSize: 28, color: theme.accent, bold: true, fontFace: "Georgia" } },
    { text: " 条    多则 ", options: { fontSize: 14, color: theme.secondary, fontFace: "Microsoft YaHei" } },
    { text: "10-20", options: { fontSize: 28, color: theme.accent, bold: true, fontFace: "Georgia" } },
    { text: " 条", options: { fontSize: 14, color: theme.secondary, fontFace: "Microsoft YaHei" } }
  ], {
    x: 0.7, y: 3.6, w: 8.6, h: 0.6,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.4, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 总结语
  slide.addText("这是正常的。认真做完前面的分析之后，方案会自然涌现出来。", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧大数字水印
  slide.addText("01", {
    x: 8.0, y: 0.6, w: 1.8, h: 1.4,
    fontSize: 96, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "02", "导言与课程地图");
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
  pres.writeFile({ fileName: "02_导言_你走到这里_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
