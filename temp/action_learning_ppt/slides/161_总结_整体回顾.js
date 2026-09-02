// 页 161: 大字 - 整体回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 161,
  title: '整体回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("写在最后  /  Recap", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大字
  slide.addText("我们一起走过的路 ——", {
    x: 0.5, y: 1.4, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("从看清天花板，", {
    x: 0.5, y: 2.2, w: 9, h: 0.9,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("到走出一条真正有效的解法。", {
    x: 0.5, y: 3.15, w: 9, h: 0.9,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 4.15, w: 1, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 副标
  slide.addText("看清 → 换假设 → 换视角 → 评估 → 组合 → 出发", {
    x: 0.5, y: 4.3, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 底部金句
  slide.addText("不是要创新，是要找到真正有效的解法。", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "161", "写在最后");
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
  pres.writeFile({ fileName: "161_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
