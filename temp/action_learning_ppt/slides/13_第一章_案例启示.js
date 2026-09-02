// 页 13: 案例启示 - 60%来自账单
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '第一章 案例启示：根本原因'
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
  slide.addText("案例  /  CASE  ·  下半", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("偶然的深入分析发现了什么", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 大数字
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 3.6, h: 3.0,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("60%", {
    x: 0.5, y: 1.6, w: 3.6, h: 1.5,
    fontSize: 110, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("以上的投诉", {
    x: 0.5, y: 3.05, w: 3.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("来自账单环节的系统性问题", {
    x: 0.5, y: 3.45, w: 3.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "top", margin: 0
  });
  slide.addText("（系统 bug · 错误显示额外费用）", {
    x: 0.5, y: 3.95, w: 3.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "center", valign: "top", margin: 0
  });

  // 右侧内容
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.3, y: 1.55, w: 5.2, h: 3.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.3, y: 1.55, w: 5.2, h: 0.1,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  slide.addText("这家公司的问题", {
    x: 4.5, y: 1.75, w: 4.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("账单有时错误地显示额外费用，是系统 bug 导致。每次都需要人工核实，流程繁琐，用户体验极差。", {
    x: 4.5, y: 2.1, w: 4.8, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  slide.addText("它从一开始就被挡在了外面", {
    x: 4.5, y: 2.95, w: 4.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("所有方案都在回答「如何更好地处理投诉」，但没有一个方案在问「这些投诉为什么发生」。", {
    x: 4.5, y: 3.3, w: 4.8, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 启示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.55,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 0.08, h: 0.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText([
    { text: "启示  ", options: { color: theme.accent, fontSize: 12, bold: true } },
    { text: "不是团队不努力，不是方向完全错误 —— 所有的努力都在问题定义的范围之内打转。", options: { color: theme.secondary, fontSize: 13, italic: true } }
  ], {
    x: 0.8, y: 4.7, w: 8.7, h: 0.55,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "13", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "13_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
