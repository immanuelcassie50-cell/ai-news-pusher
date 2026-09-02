// 页 124: 重新组装 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 124,
  title: '重新组装'
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
  slide.addText("组合创新  ·  一种被忽视的思路", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("重新组装", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("面对十几二十条方案，有一种思路很容易被忽视", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 大引述框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 1.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("这些方案里，", {
    x: 0.7, y: 2.25, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("有没有两个或几个组合在一起，效果会超过它们各自单独的效果之和？", {
    x: 0.7, y: 2.75, w: 8.6, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 关键判断
  slide.addText("组合不只是在\"做加法\" —— 真正的组合，", {
    x: 0.5, y: 3.7, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("是让每个方案的价值在另一个方案的支撑下被放大。", {
    x: 0.5, y: 4.1, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三种判断标准
  slide.addText("判断标准", {
    x: 0.5, y: 4.6, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("→  下一页", {
    x: 7.0, y: 4.6, w: 2.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "right", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "124", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "124_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
