// 页 28: 解释 - 天花板四 症状 vs 系统 (引入)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '第一章 天花板四：只解决了症状，没有动产生症状的系统条件'
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
  slide.addText("天花板 04  /  CEILING", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("只解决了症状，没动产生症状的系统条件", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 「点方案」概念
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.7,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.1, h: 0.7,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText([
    { text: "很多常规方案是「", options: { color: theme.secondary, fontSize: 14 } },
    { text: "点方案", options: { color: theme.accent, fontSize: 16, bold: true } },
    { text: "」 —— 精准地解决一个具体的表象问题，但没有处理产生这个表象问题的系统原因。", options: { color: theme.secondary, fontSize: 14 } }
  ], {
    x: 0.8, y: 1.55, w: 8.6, h: 0.7,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 时间线 - 症状演变
  // 时间轴
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 3.0, w: 8.4, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 阶段 1 - 短期有效
  slide.addShape(pres.shapes.OVAL, {
    x: 0.8, y: 2.9, w: 0.22, h: 0.22,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("短期", {
    x: 0.5, y: 2.5, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("做了有改善", {
    x: 0.3, y: 3.2, w: 1.4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 阶段 2 - 几个月后
  slide.addShape(pres.shapes.OVAL, {
    x: 4.9, y: 2.9, w: 0.22, h: 0.22,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("数月后", {
    x: 4.5, y: 2.5, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("改善速度停滞", {
    x: 4.2, y: 3.2, w: 1.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 阶段 3 - 长期
  slide.addShape(pres.shapes.OVAL, {
    x: 8.78, y: 2.9, w: 0.22, h: 0.22,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("再后", {
    x: 8.4, y: 2.5, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("问题回来了", {
    x: 8.0, y: 3.2, w: 1.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 关键判断
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.85, w: 9, h: 1.2,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("为什么？", {
    x: 0.7, y: 3.95, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("点方案不是没有效果，而是", {
    x: 0.7, y: 4.25, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("效果不持续。", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "28", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "28_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
