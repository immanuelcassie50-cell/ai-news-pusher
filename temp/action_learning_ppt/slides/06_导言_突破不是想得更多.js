// 06 导言 - 突破不是想得更多（引述+出处布局）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '突破不是想得更多'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标识
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("导言  /  Introduction", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 小标题
  slide.addText("05  核心论断", {
    x: 0.5, y: 0.85, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大引号
  slide.addText("“", {
    x: 0.5, y: 1.4, w: 1.4, h: 1.6,
    fontSize: 180, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 主引述上半
  slide.addText("突破，", {
    x: 1.8, y: 1.7, w: 7.5, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle", margin: 0
  });

  // 主引述下半（重点色）
  slide.addText("不是想得更多，", {
    x: 1.8, y: 2.5, w: 7.5, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("而是换一套假设。", {
    x: 1.8, y: 3.3, w: 7.5, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰横线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.8, y: 4.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 出处
  slide.addText("—— 行动学习 · 创新解决方案", {
    x: 2.5, y: 4.32, w: 5, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右下水印大字
  slide.addText("NEW", {
    x: 7.2, y: 0.5, w: 2.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
    color: theme.accent, charSpacing: 8,
    align: "right", valign: "middle", margin: 0
  });
  slide.addText("ASSUMPTION", {
    x: 7.0, y: 0.8, w: 2.6, h: 0.4,
    fontSize: 18, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "06", "导言与课程地图");
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
  pres.writeFile({ fileName: "06_导言_突破不是想得更多_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
