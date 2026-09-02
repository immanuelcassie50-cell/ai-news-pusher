// 页 121: 流程反转记录 - 表格 模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 121,
  title: '流程反转 记录表'
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
  slide.addText("流程反转  ·  记录模板", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("流程反转记录", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("从结果倒推，重新审视流程的步骤、顺序和必要性", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 记录表 - 用文本框展示结构化模板
  // 1. 当前流程
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.05, w: 9, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.05, w: 0.08, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("1. 当前流程的主要步骤（3~7 步）", {
    x: 0.7, y: 2.1, w: 8.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, charSpacing: 2, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("步骤1：______ → 步骤2：______ → 步骤3：______ → 步骤4：______ → 最终结果：______", {
    x: 0.7, y: 2.4, w: 8.7, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 2. 倒推
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 9, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 0.08, h: 0.85,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("2. 从结果倒推：哪个步骤是实现结果最不可缺的前提？", {
    x: 0.7, y: 3.05, w: 8.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 2, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("它目前处于流程的第几步？应该更靠前吗？_______________________________________", {
    x: 0.7, y: 3.35, w: 8.7, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 3. 并行
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.95, w: 4.4, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.95, w: 0.08, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("3. 可以并行的步骤", {
    x: 0.7, y: 4.0, w: 4.1, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, charSpacing: 2, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("可以并行的是步骤___和步骤___\n前提条件：____________________", {
    x: 0.7, y: 4.3, w: 4.1, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 4. 怀疑的步骤
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.95, w: 4.4, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.95, w: 0.08, h: 0.85,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("4. 说不清为什么需要的步骤", {
    x: 5.3, y: 4.0, w: 4.1, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 2, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("怀疑的步骤：____________________\n最初为解决什么问题？还存在吗？", {
    x: 5.3, y: 4.3, w: 4.1, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  addFooter(slide, pres, theme, "121", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "121_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
