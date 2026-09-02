// slide-09.js - 迭代与收尾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '迭代与收尾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 页面标题
  slide.addText("迭代与收尾", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 迭代部分
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.4, h: 3.0,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addText("迭代时", {
    x: 0.7, y: 1.35, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText([
    { text: "精确指出：", options: { bold: true, breakLine: true } },
    { text: "哪里需要调整，为什么", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "错误示范：", options: { bold: true, color: theme.primary, breakLine: true } },
    { text: "\"不对，重写\"——给AI的信息太少", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "正确示范：", options: { bold: true, color: "2E7D32", breakLine: true } },
    { text: "\"第3段的竞品参数对比，需要补充工作温度范围和防护等级，格式保持和上面一致\"", options: {} }
  ], {
    x: 0.7, y: 1.85, w: 4, h: 2.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // 收尾部分
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 1.2, w: 4.4, h: 3.0,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addText("收尾时", {
    x: 5.3, y: 1.35, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText([
    { text: "保存有效的提示词进Get笔记", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "格式：", options: { breakLine: true } },
    { text: "场景名称-步骤名称-有效提示词", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "下次遇到同类步骤，直接调用，稍作调整就能用", options: {} }
  ], {
    x: 5.3, y: 1.85, w: 4, h: 2.2,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // 底部提示
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 1.0,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText("迭代 = 深化（方向对） / 纠偏（方向偏） / 收尾（内容够）", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "./output/slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };