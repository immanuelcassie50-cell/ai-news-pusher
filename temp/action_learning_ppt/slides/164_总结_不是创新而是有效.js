// 页 164: 大字引述 - 不是创新而是有效
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 164,
  title: '不是创新，而是有效'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("回到原点  /  Back to Origin", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大引号
  slide.addText("“", {
    x: 0.5, y: 0.8, w: 2.5, h: 2.5,
    fontSize: 240, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 大字 - 第一行
  slide.addText("不是要创新，", {
    x: 1.0, y: 1.6, w: 8, h: 1.0,
    fontSize: 50, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 大字 - 第二行（高亮）
  slide.addText("而是要找到真正有效的解法。", {
    x: 1.0, y: 2.7, w: 8.5, h: 1.0,
    fontSize: 50, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.0, y: 3.95, w: 0.6, h: 0.06,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 副标
  slide.addText("这是这门课的核心，", {
    x: 1.0, y: 4.1, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("也是这 168 页的全部意义。", {
    x: 1.0, y: 4.5, w: 8, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "164", "写在最后");
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
  pres.writeFile({ fileName: "164_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
