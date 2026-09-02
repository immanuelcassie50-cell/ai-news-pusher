// 页 142: 表格 2x2 - 评估矩阵
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 142,
  title: '评估矩阵'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("评估矩阵  /  Matrix", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("有效性 × 突破性 = 方案定位", {
    x: 0.5, y: 0.85, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 顶部标签 - 突破性
  slide.addText("突破性", {
    x: 0.5, y: 1.45, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 列头
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.6, y: 1.85, w: 3.7, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("高", {
    x: 1.6, y: 1.85, w: 3.7, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("改变了问题入口或系统条件", {
    x: 1.6, y: 2.35, w: 3.7, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 1.85, w: 3.7, h: 0.5,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("低", {
    x: 5.5, y: 1.85, w: 3.7, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("在现有框架内，常规方向", {
    x: 5.5, y: 2.35, w: 3.7, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 左侧行头 - 有效性
  slide.addText("有 效 性", {
    x: 0.5, y: 2.7, w: 1.0, h: 1.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "center", valign: "middle", margin: 0
  });
  // 箭头装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.7, w: 0.04, h: 1.9,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 第一行 - 高有效性
  // 左格：★★★ 优先推进
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.6, y: 2.7, w: 3.7, h: 0.95,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 2 }
  });
  slide.addText("★★★", {
    x: 1.6, y: 2.75, w: 3.7, h: 0.4,
    fontSize: 22, fontFace: "Georgia",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("优先推进", {
    x: 1.6, y: 3.15, w: 3.7, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 行头 - 高
  slide.addText("高", {
    x: 1.6, y: 2.65, w: 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右格：★★ 保留推进
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 2.7, w: 3.7, h: 0.95,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 2 }
  });
  slide.addText("★★", {
    x: 5.5, y: 2.75, w: 3.7, h: 0.4,
    fontSize: 22, fontFace: "Georgia",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("保留推进", {
    x: 5.5, y: 3.15, w: 3.7, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 第二行 - 待验证
  // 左格：★ 设计验证实验
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.6, y: 3.7, w: 3.7, h: 0.95,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
  });
  slide.addText("★", {
    x: 1.6, y: 3.75, w: 3.7, h: 0.4,
    fontSize: 22, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("设计验证实验", {
    x: 1.6, y: 4.15, w: 3.7, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 行头 - 待验证
  slide.addText("待", {
    x: 1.6, y: 3.65, w: 0.3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右格：✗ 暂不投入
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 3.7, w: 3.7, h: 0.95,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 2 }
  });
  slide.addText("✗", {
    x: 5.5, y: 3.75, w: 3.7, h: 0.4,
    fontSize: 22, fontFace: "Georgia",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("暂不投入", {
    x: 5.5, y: 4.15, w: 3.7, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.45,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText("提示：可行性是筛选条件，不是打分维度 —— 先用可行性筛选，再进矩阵。", {
    x: 0.5, y: 4.85, w: 9, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "142", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "142_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
