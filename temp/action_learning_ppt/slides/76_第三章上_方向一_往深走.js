// 页 76: 第三章上 - 方向一 往深走（解释引入）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 76,
  title: '方向一 往深走 - 引入'
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
  slide.addText("方向 一  /  往深走", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("方向一  /  往深走", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("从表象到本质", {
    x: 0.5, y: 1.42, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大问号
  slide.addText("?", {
    x: 0.5, y: 2.2, w: 1.5, h: 1.8,
    fontSize: 120, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右侧解释
  slide.addText("当你在解决一个问题的时候，", {
    x: 2.5, y: 2.2, w: 7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("你处理的是症状，", {
    x: 2.5, y: 2.6, w: 7, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("还是产生症状的原因？", {
    x: 2.5, y: 3.1, w: 7, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 分割
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 3.8, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 关键动作
  slide.addText("「往深走」 = 不断追问为什么", {
    x: 2.5, y: 3.95, w: 7, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("这个问题是怎么产生的？这个原因背后是什么原因？", {
    x: 2.5, y: 4.4, w: 7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部
  slide.addText("系统性原因的解法，才有持续改善效果", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "76", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "76_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
