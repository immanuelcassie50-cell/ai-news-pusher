// 页 140: 解释说明 - 维度三 突破性
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 140,
  title: '维度三：突破性'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("维度三  /  Dimension 03", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大数字水印
  slide.addText("03", {
    x: 7.8, y: 0.4, w: 1.8, h: 1.4,
    fontSize: 96, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("突破性", {
    x: 0.5, y: 0.85, w: 7, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.75, w: 0.08, h: 1.0,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("核心问题", {
    x: 0.7, y: 1.75, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("相比现有的常规方案，真正的不同在哪里？", {
    x: 0.7, y: 2.05, w: 8.5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("为什么这次会有效？", {
    x: 0.7, y: 2.55, w: 8.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 关键作用
  slide.addText("这个维度是专门防止 ——", {
    x: 0.5, y: 3.15, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 引述卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.55, w: 9, h: 1.45,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("把常规方案", {
    x: 0.5, y: 3.6, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("包装成创新方案。", {
    x: 0.5, y: 4.1, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("—— 突破性低 = 没改变问题入口或系统条件", {
    x: 0.5, y: 4.7, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "140", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "140_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
