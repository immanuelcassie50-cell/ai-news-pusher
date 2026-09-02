// 55_第二章_示例_周日班次 - 案例框
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 55,
  title: '示例：增设周末客服班次'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部案例色块条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("⚡  CASE  /  示例", {
    x: 0.7, y: 0.5, w: 2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("降低客户投诉量", {
    x: 2.5, y: 0.5, w: 6.8, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "right", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("示例：增设周末客服班次", {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 案例框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.85, w: 5.6, h: 3.15,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.85, w: 0.1, h: 3.15,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("方案背景", {
    x: 0.85, y: 2.0, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("周日是客户来电的高峰时段，人手不足导致响应慢。", {
    x: 0.85, y: 2.35, w: 5.1, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 3.0, w: 5.1, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  slide.addText("分类判断", {
    x: 0.85, y: 3.1, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("第二类 —— 方向对，提升响应能力，但只解决了表象。", {
    x: 0.85, y: 3.45, w: 5.1, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 4.1, w: 5.1, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  slide.addText("判断理由", {
    x: 0.85, y: 4.2, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("执行后有效但无法持续，停止则效果衰减。", {
    x: 0.85, y: 4.55, w: 5.1, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 右侧启示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.4, y: 1.85, w: 3.1, h: 3.15,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("下一步", {
    x: 6.6, y: 2.0, w: 2.7, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 3, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("需要追问：", {
    x: 6.6, y: 2.45, w: 2.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("投诉的主要来源是什么？", {
    x: 6.6, y: 2.85, w: 2.7, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "top", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.6, y: 3.85, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("找到根本改善方向，", {
    x: 6.6, y: 4.0, w: 2.7, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("深化至根因。", {
    x: 6.6, y: 4.4, w: 2.7, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle", margin: 0
  });

  // 底部要点
  slide.addText("启示：方案分类不只是标签，而是『下一步该做什么』的判断依据。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "55", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "55_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
