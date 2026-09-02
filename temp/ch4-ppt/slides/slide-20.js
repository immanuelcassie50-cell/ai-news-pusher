// slide-20.js - 迭代时你要做什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 20,
  title: '迭代时你要做什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("迭代时你要做什么", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 核心原则
  slide.addText("精确指出：哪里需要调整，为什么", {
    x: 0.5, y: 1.2, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // 对比展示
  // 错误示范
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.0, w: 4.4, h: 2.5,
    fill: { color: "FFE8E8" },
    rectRadius: 0.1
  });
  slide.addText("错误示范", {
    x: 0.7, y: 2.15, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("\"不对，重写\"", {
    x: 0.7, y: 2.7, w: 4, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle"
  });
  slide.addText("这给AI的信息太少，它不知道哪里不对，往往重写出来和上一版差不多。", {
    x: 0.7, y: 3.3, w: 4, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // 正确示范
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.4, h: 2.5,
    fill: { color: "E8F5E8" },
    rectRadius: 0.1
  });
  slide.addText("正确示范", {
    x: 5.3, y: 2.15, w: 4, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "2E7D32", bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("\"第3段的竞品参数对比，现在只列了量程和精度，需要补充工作温度范围和防护等级，格式保持和上面一致\"", {
    x: 5.3, y: 2.7, w: 4, h: 1.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // 底部说明
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.75,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("这样的指令AI知道哪里改、改什么、改成什么样，执行效率高很多", {
    x: 0.7, y: 4.8, w: 8.6, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-20-preview.pptx" });
}

module.exports = { createSlide, slideConfig };