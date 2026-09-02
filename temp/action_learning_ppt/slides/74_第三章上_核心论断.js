// 页 74: 第三章上 - 核心论断（大字）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 74,
  title: '核心论断 - 表述决定解法'
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
  slide.addText("核心论断  /  CORE CLAIM", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大引号
  slide.addText("「", {
    x: 0.5, y: 1.4, w: 1.5, h: 1.5,
    fontSize: 140, fontFace: "Georgia",
    color: theme.accent,
    align: "left", valign: "top", margin: 0
  });

  // 第一行
  slide.addText("问题的表述方式，", {
    x: 1.8, y: 1.7, w: 7.7, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 第二行 - 强调
  slide.addText("决定了你看到的解法", {
    x: 1.8, y: 2.5, w: 7.7, h: 1.0,
    fontSize: 52, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.8, y: 3.6, w: 0.8, h: 0.05,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 第三行
  slide.addText("改变问题怎么问，解法的可能性会完全不同", {
    x: 1.8, y: 3.8, w: 7.7, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部小标识
  slide.addText("—— 三个问题定义，三组完全不同的解法方向", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "74", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "74_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
