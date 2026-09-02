// 页 11: 大引述 - 先回答一个问题 (70% vs 50%)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 11,
  title: '第一章 先回答一个问题'
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
  slide.addText("先回答一个问题", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("想象三个月后，你把方案都推进了", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 大引述 1
  slide.addText("你有多大把握说：问题会真正改变？", {
    x: 0.8, y: 1.7, w: 8.5, h: 0.9,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 对比卡片 - 左
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 4.4, h: 1.7,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 0.08, h: 1.7,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("把握 高于 70%", {
    x: 0.8, y: 3.1, w: 4, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("很可能你手里已经有了真正有效的解法。本章的诊断会验证这一点。", {
    x: 0.8, y: 3.55, w: 4, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 对比卡片 - 右
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.0, w: 4.4, h: 1.7,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.0, w: 0.08, h: 1.7,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("把握 低于 50%", {
    x: 5.4, y: 3.1, w: 4, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("这种感觉很可能是准确的——不是你不够努力，而是方案里缺少某种东西。本章帮你看清楚缺的是什么。", {
    x: 5.4, y: 3.55, w: 4, h: 1.1,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "11", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "11_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
