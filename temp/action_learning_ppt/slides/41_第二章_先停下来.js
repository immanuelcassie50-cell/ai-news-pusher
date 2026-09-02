// 41_第二章_先停下来 - 大引述型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 41,
  title: '在找新方案之前，先停下来'
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
  slide.addText("CHAPTER 02  /  导  入", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("先停下来，看看你手里有什么", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大引号装饰
  slide.addText('"', {
    x: 0.4, y: 1.7, w: 1.2, h: 1.2,
    fontSize: 140, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 中央大引述
  slide.addText("第一章的诊断帮你看到了方案的局限来源。", {
    x: 1.4, y: 2.1, w: 8, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("接下来你可能会想：那就直接去找新方案吧。", {
    x: 1.4, y: 2.8, w: 8, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 强调行
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.4, y: 3.9, w: 0.06, h: 0.7,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("等一下。", {
    x: 1.6, y: 3.85, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("先把现有方案，认真整理一遍。", {
    x: 1.6, y: 4.25, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "41", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "41_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
