// 页 26: 案例 - 航空 vs 制造业
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '第一章 天花板三 案例：制造业 vs 航空'
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
  slide.addText("案例  /  CEILING 03", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("预测设备故障 —— 制造业 vs 航空业", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 共通问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.55,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.08, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText([
    { text: "问题  ", options: { color: theme.accent, fontSize: 12, bold: true } },
    { text: "「预测设备故障」—— 制造业长期头疼，用了很多传统方法收效甚微。", options: { color: theme.secondary, fontSize: 13, italic: true } }
  ], {
    x: 0.8, y: 1.55, w: 8.7, h: 0.55,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 对比卡 - 制造业
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.3, w: 4.4, h: 2.8,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.3, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("制造业", {
    x: 0.5, y: 2.3, w: 4.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("现状", {
    x: 0.7, y: 2.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("传统方法收效甚微；从业者在行业内部已知做法里寻找。", {
    x: 0.7, y: 3.25, w: 4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("盲点", {
    x: 0.7, y: 4.0, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("不知道航空业几十年前就解决了这个问题。", {
    x: 0.7, y: 4.3, w: 4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "top", margin: 0
  });

  // 对比卡 - 航空业
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.3, w: 4.4, h: 2.8,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.3, w: 4.4, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("航空业", {
    x: 5.1, y: 2.3, w: 4.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("几十年前已成熟", {
    x: 5.3, y: 2.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("完整的预测性维护体系 —— 通过大量传感器数据建立故障预测模型。", {
    x: 5.3, y: 3.25, w: 4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });
  slide.addText("原理通用", {
    x: 5.3, y: 4.0, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("但经验没主动流向制造业 —— 两个行业之间几乎没有流动。", {
    x: 5.3, y: 4.3, w: 4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "top", margin: 0
  });

  // 结论
  slide.addText("两个行业的从业者各自只在自己熟悉的解法空间里找答案。", {
    x: 0.5, y: 5.15, w: 9, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "26", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "26_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
