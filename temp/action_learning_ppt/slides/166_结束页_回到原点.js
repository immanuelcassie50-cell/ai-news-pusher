// 页 166: Closing - 回到原点（核心金句）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'closing',
  index: 166,
  title: '回到原点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 右侧 1/3 主色块（与封面镜像）
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.7, y: 0, w: 3.3, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 右侧装饰色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.1, y: 0.8, w: 1.4, h: 1.4,
    fill: { color: "FFFFFF" }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 1.2, w: 0.8, h: 0.8,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.7, y: 2.4, w: 0.5, h: 0.5,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 右侧底部课程编号
  slide.addText("AL-2026-01", {
    x: 7.1, y: 4.8, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧：大字
  slide.addText("回到原点 ——", {
    x: 0.6, y: 1.0, w: 6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("不是要创新，", {
    x: 0.6, y: 1.7, w: 6, h: 0.9,
    fontSize: 50, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("而是要找到", {
    x: 0.6, y: 2.7, w: 6, h: 0.9,
    fontSize: 50, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("真正有效的解法。", {
    x: 0.6, y: 3.6, w: 6, h: 0.9,
    fontSize: 50, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.6, w: 0.5, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 副标
  slide.addText("—— 行动学习 · 创新解决方案", {
    x: 0.6, y: 4.75, w: 6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  return slide;
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
  pres.writeFile({ fileName: "166_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
