// 01 封面 - 课程总览
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '封面 - 课程总览'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细线装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.6, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 系列标识
  slide.addText("行动学习  /  Action Learning", {
    x: 0.6, y: 0.78, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Georgia",
    color: theme.secondary, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 课程编号
  slide.addText("课程编号  AL-2026-01", {
    x: 6.5, y: 0.78, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 4,
    align: "right", valign: "middle", margin: 0
  });

  // 章节小标识
  slide.addText("课程总览", {
    x: 0.6, y: 1.5, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 主标题
  slide.addText("创新解决方案", {
    x: 0.6, y: 1.95, w: 7, h: 1.3,
    fontSize: 72, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("不是要创新，是要找到真正有效的解法", {
    x: 0.6, y: 3.3, w: 7, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰横线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.0, w: 1.2, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 课程要点
  slide.addText([
    { text: "5", options: { fontSize: 22, color: theme.primary, bold: true, fontFace: "Georgia" } },
    { text: " 种系统方法  /  ", options: { fontSize: 12, color: theme.secondary, fontFace: "Microsoft YaHei" } },
    { text: "6", options: { fontSize: 22, color: theme.primary, bold: true, fontFace: "Georgia" } },
    { text: " 份实操文档  /  ", options: { fontSize: 12, color: theme.secondary, fontFace: "Microsoft YaHei" } },
    { text: "168", options: { fontSize: 22, color: theme.primary, bold: true, fontFace: "Georgia" } },
    { text: " 页授课内容", options: { fontSize: 12, color: theme.secondary, fontFace: "Microsoft YaHei" } }
  ], {
    x: 0.6, y: 4.2, w: 7, h: 0.4,
    align: "left", valign: "middle", margin: 0
  });

  // 底部小字
  slide.addText("授课版本  /  第二版", {
    x: 0.6, y: 4.9, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧装饰：深红色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.8, y: 1.0, w: 1.8, h: 1.8,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 右侧装饰：浅灰红色块（错位）
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.2, y: 2.5, w: 1.2, h: 1.2,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 右侧装饰：砖红小方块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.6, y: 3.4, w: 0.7, h: 0.7,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 装饰圆点
  slide.addShape(pres.shapes.OVAL, {
    x: 7.4, y: 4.4, w: 0.16, h: 0.16,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 7.7, y: 4.4, w: 0.16, h: 0.16,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.0, y: 4.4, w: 0.16, h: 0.16,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 右下版本信息
  slide.addText("AL  /  2026", {
    x: 7.2, y: 4.85, w: 2.4, h: 0.3,
    fontSize: 10, fontFace: "Georgia",
    color: theme.secondary, charSpacing: 4,
    align: "right", valign: "middle", margin: 0
  });

  return slide;
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
  pres.writeFile({ fileName: "01_封面_课程总览_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
