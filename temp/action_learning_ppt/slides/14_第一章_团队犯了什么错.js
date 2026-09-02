// 页 14: 解释说明 - 框架分析
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '第一章 团队犯了什么错'
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
  slide.addText("为什么会这样", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("团队犯了什么错？", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.65,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.1, h: 0.65,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("他们的方案没有一个是错的 —— 每一条都有道理，都来自真实的行业经验。", {
    x: 0.8, y: 1.55, w: 8.6, h: 0.65,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 真正的问题
  slide.addText("问题出在「思考框架」上", {
    x: 0.5, y: 2.4, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 框架流动示意
  // 框1: 问题定义
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.95, w: 2.5, h: 0.8,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("投诉是客服问题", {
    x: 0.5, y: 2.95, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("问题定义", {
    x: 0.5, y: 3.4, w: 2.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 箭头 1
  slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
    x: 3.1, y: 3.25, w: 0.2, h: 0.2,
    fill: { color: theme.accent }, line: { type: 'none' }, rotate: 30
  });
  slide.addText("→", {
    x: 3.05, y: 3.15, w: 0.4, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 框2: 思考框架
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 2.95, w: 2.5, h: 0.8,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("改进客服流程", {
    x: 3.5, y: 2.95, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("思考框架", {
    x: 3.5, y: 3.4, w: 2.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 箭头 2
  slide.addText("→", {
    x: 6.05, y: 3.15, w: 0.4, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 框3: 方案涌现
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 2.95, w: 2.5, h: 0.8,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("培训、SLA、例会...", {
    x: 6.5, y: 2.95, w: 2.5, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("方案涌现", {
    x: 6.5, y: 3.4, w: 2.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.95, w: 9, h: 1.3,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("结论", {
    x: 0.7, y: 4.05, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("在这个框架里，所有的方案都会在「如何把客服做得更好」这个方向上涌现。", {
    x: 0.7, y: 4.35, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText([
    { text: "不在这个框架里的原因", options: { color: theme.primary, fontSize: 14, bold: true } },
    { text: "（账单系统 bug）", options: { color: theme.secondary, fontSize: 14 } },
    { text: "  永远不会出现在方案清单里。", options: { color: theme.accent, fontSize: 14, bold: true } }
  ], {
    x: 0.7, y: 4.7, w: 8.6, h: 0.45,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "14", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "14_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
