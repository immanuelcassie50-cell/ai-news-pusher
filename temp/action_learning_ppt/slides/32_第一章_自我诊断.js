// 页 32: 大引述 - 自我诊断 (练习引入)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '第一章 自我诊断'
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
  slide.addText("练习  /  EXERCISE", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("现在轮到你了", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 大引述
  slide.addText("你的方案", {
    x: 0.5, y: 1.6, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("卡在哪里？", {
    x: 0.5, y: 2.4, w: 9, h: 1.0,
    fontSize: 60, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 3.5, w: 1, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 提示
  slide.addText("目的不是批评你现有的方案", {
    x: 0.5, y: 3.7, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("而是找出它们属于哪种类型 —— 知道哪个区域需要补充。", {
    x: 0.5, y: 4.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 所需材料
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 4.65, w: 5, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("所需材料：你之前产出的方案清单", {
    x: 2.5, y: 4.65, w: 5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "32", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "32_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
