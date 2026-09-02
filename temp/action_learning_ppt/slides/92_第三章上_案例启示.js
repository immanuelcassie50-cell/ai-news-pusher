// 页 92: 第三章上 - 案例启示（大字）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 92,
  title: '案例启示 - 大字'
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
  slide.addText("案例启示  /  INSIGHT", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 顶部大引号
  slide.addText("「", {
    x: 0.5, y: 1.2, w: 1.5, h: 1.5,
    fontSize: 140, fontFace: "Georgia",
    color: theme.light,
    align: "left", valign: "top", margin: 0
  });

  // 关键句 1
  slide.addText("它只是一个沉积下来的印象，", {
    x: 1.8, y: 1.7, w: 7.7, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 关键句 2
  slide.addText("被当成了不可改变的事实。", {
    x: 1.8, y: 2.3, w: 7.7, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.8, y: 3.2, w: 0.6, h: 0.04,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 关键洞察
  slide.addText("没有人去测试过这个假设", {
    x: 1.8, y: 3.4, w: 7.7, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副
  slide.addText("3 年前的项目负责人早就离职了，部门的整体文化也已经变了", {
    x: 1.8, y: 4.0, w: 7.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部金句
  slide.addText("—— 真正的突破，往往不是想出新奇的主意，", {
    x: 0.5, y: 4.7, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("而是发现「大家以为不能动但其实可以」的假设", {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "92", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "92_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
