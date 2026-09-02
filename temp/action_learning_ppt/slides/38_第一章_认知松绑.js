// 页 38: 对比 - 新奇 vs 有效
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 38,
  title: '第一章 认知松绑：新奇 vs 有效'
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
  slide.addText("认知松绑  /  UNBUNDLE", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("找一个「更创新」的方案？不必。", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("你要找的不是「新奇」，而是「有效」。", {
    x: 0.5, y: 1.4, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 对比
  // 左 - 新奇
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 4.4, h: 1.95,
    fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 4.4, h: 0.5,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addText("新奇", {
    x: 0.5, y: 1.95, w: 4.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("你们以前没做过的", {
    x: 0.7, y: 2.65, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("有些「没做过的方案」，放到整个行业看，其实已经是惯常做法。", {
    x: 0.7, y: 3.1, w: 4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "top", margin: 0
  });

  // 右 - 有效
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.95, w: 4.4, h: 1.95,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.95, w: 4.4, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("有效", {
    x: 5.1, y: 1.95, w: 4.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("做了之后问题会真正改变", {
    x: 5.3, y: 2.65, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("有些看似不新奇的方案，只是重新组合了现有的元素，但效果完全不同。", {
    x: 5.3, y: 3.1, w: 4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "top", margin: 0
  });

  // 关系
  slide.addText("两件事有交集，但不是同一件事", {
    x: 0.5, y: 4.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 突破性解法来源
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.7,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("突破性解法 = 方法，不是天赋", {
    x: 0.7, y: 4.5, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("挑战一个大家以为不能动的假设 / 把其他领域成熟的原理引入 / 把独立方向组合出新效果", {
    x: 0.7, y: 4.8, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "38", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "38_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
