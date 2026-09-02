// slide-01_封面 - AI时代的企业创新
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: 'AI时代的企业创新'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 右侧装饰性几何块 - 大矩形
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 0, w: 3.5, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 右侧装饰 - 金黄色竖条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.3, y: 0.8, w: 0.08, h: 2.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 右侧装饰 - 亮黄色小方块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 3.8, w: 0.6, h: 0.6,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 右侧装饰 - 金黄色圆形
  slide.addShape(pres.shapes.OVAL, {
    x: 8.5, y: 1.2, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 左侧顶部课程编号
  slide.addText("COURSE 42", {
    x: 0.5, y: 0.4, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧主标题
  slide.addText("AI时代的企业创新", {
    x: 0.5, y: 1.5, w: 5.5, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧副标题
  slide.addText("如何在智能化浪潮中\n构建持续创新能力", {
    x: 0.5, y: 2.8, w: 5.5, h: 1.0,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "top", margin: 0
  });

  // 左侧底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 2.5, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 左侧底部信息
  slide.addText("2026 · 企业内训课程", {
    x: 0.5, y: 4.2, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
