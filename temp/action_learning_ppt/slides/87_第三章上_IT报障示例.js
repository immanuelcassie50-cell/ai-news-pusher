// 页 87: 第三章上 - IT 报障示例（案例）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 87,
  title: 'IT 报障示例'
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
  slide.addText("参考示例  /  IT 设备报障", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("参考示例  /  IT 设备报障", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 原始问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.8,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.08, h: 0.8,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("原始问题", {
    x: 0.7, y: 1.6, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("如何更快地处理员工 IT 设备报障请求", {
    x: 0.7, y: 1.9, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个方向示例
  // 往深走
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.5, w: 2.9, h: 2.45,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.5, w: 2.9, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("往深走", {
    x: 0.7, y: 2.5, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("员工设备报障背后，", {
    x: 0.7, y: 3.0, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("有哪些是重复发生的", {
    x: 0.7, y: 3.35, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("系统性原因？", {
    x: 0.7, y: 3.7, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "top", margin: 0
  });
  // 数据
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.2, w: 2.5, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("40%  /  老旧机型", {
    x: 0.7, y: 4.3, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("25%  /  充电不规范", {
    x: 0.7, y: 4.6, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 往上走
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.55, y: 2.5, w: 2.9, h: 2.45,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.55, y: 2.5, w: 2.9, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("往上走", {
    x: 3.75, y: 2.5, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("如何减少员工", {
    x: 3.75, y: 3.0, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("因设备问题产生", {
    x: 3.75, y: 3.35, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("的工作中断时长", {
    x: 3.75, y: 3.7, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "top", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.75, y: 4.2, w: 2.5, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("不只是「快点修」", {
    x: 3.75, y: 4.3, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("而是「少修 + 修时影响小」", {
    x: 3.75, y: 4.6, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 横向移动
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.6, y: 2.5, w: 2.9, h: 2.45,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.6, y: 2.5, w: 2.9, h: 0.4,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("横向移动", {
    x: 6.8, y: 2.5, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("改变设备采购标准", {
    x: 6.8, y: 3.0, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("和健康监控机制", {
    x: 6.8, y: 3.35, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("能否减少报障？", {
    x: 6.8, y: 3.7, w: 2.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "top", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.8, y: 4.2, w: 2.5, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("不是处理报障", {
    x: 6.8, y: 4.3, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("而是改变发生条件", {
    x: 6.8, y: 4.6, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部
  slide.addText("三组完全不同的解法方向，都描述同一个现实", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "87", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "87_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
