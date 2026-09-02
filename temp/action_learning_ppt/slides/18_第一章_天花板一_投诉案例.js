// 页 18: 案例 - 投诉案例再分析
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '第一章 天花板一 案例：投诉再分析'
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
  slide.addText("案例  /  CEILING 01", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("投诉案例 —— 重新看一遍", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 时间线
  // 阶段1
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 1.7, w: 0.4, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("1", {
    x: 0.5, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("问题被定义", {
    x: 1.0, y: 1.7, w: 1.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("「降低投诉量」", {
    x: 1.0, y: 2.05, w: 2.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 阶段2
  slide.addShape(pres.shapes.OVAL, {
    x: 3.4, y: 1.7, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("2", {
    x: 3.4, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("方案涌现", {
    x: 3.9, y: 1.7, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("全部在「投诉处理」框架内", {
    x: 3.9, y: 2.05, w: 2.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 阶段3
  slide.addShape(pres.shapes.OVAL, {
    x: 6.5, y: 1.7, w: 0.4, h: 0.4,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("3", {
    x: 6.5, y: 1.7, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("结果", {
    x: 7.0, y: 1.7, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("投诉量只降了 12%", {
    x: 7.0, y: 2.05, w: 2.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 连接线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.9, y: 1.89, w: 2.5, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.8, y: 1.89, w: 2.7, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.9, y: 1.89, w: 2.5, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 真正根源 - 大色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.6, w: 9, h: 2.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.6, w: 0.1, h: 2.0,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("偶然发现的真正根源", {
    x: 0.8, y: 2.7, w: 5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText([
    { text: "60%+ 的投诉", options: { color: theme.accent, fontSize: 22, bold: true } },
    { text: " 来自账单环节的系统问题 ——", options: { color: theme.secondary, fontSize: 16 } }
  ], {
    x: 0.8, y: 3.05, w: 8.4, h: 0.5,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("账单系统 bug 错误地显示额外费用，每次都需要人工核实，流程繁琐。", {
    x: 0.8, y: 3.6, w: 8.4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 关键判断
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.05, w: 8.4, h: 0.5,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText([
    { text: "如果当初把问题定义为「", options: { color: theme.secondary, fontSize: 13 } },
    { text: "为什么这么多投诉", options: { color: theme.primary, fontSize: 13, bold: true } },
    { text: "」，账单 bug 一开始就会进入视野。", options: { color: theme.secondary, fontSize: 13 } }
  ], {
    x: 0.95, y: 4.05, w: 8.1, h: 0.5,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 启示
  slide.addText("启示  /  问题定义方式决定方案方向", {
    x: 0.5, y: 4.75, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "18", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "18_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
