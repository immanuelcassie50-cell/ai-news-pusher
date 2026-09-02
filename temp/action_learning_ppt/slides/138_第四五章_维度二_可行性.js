// 页 138: 解释说明 - 维度二 可行性
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 138,
  title: '维度二：可行性'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("维度二  /  Dimension 02", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大数字水印
  slide.addText("02", {
    x: 7.8, y: 0.4, w: 1.8, h: 1.4,
    fontSize: 96, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("可行性", {
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
  slide.addText("在当前的资源、权限、时间约束下，能真正推进吗？", {
    x: 0.7, y: 2.05, w: 8.5, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 关键提示
  slide.addText("一个常被忽视的关键点", {
    x: 0.5, y: 3.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // 大字论断
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 9, h: 1.5,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 0.1, h: 1.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("可行性不能单独评估，", {
    x: 0.8, y: 3.6, w: 8.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("必须结合利益相关方分析。", {
    x: 0.8, y: 4.0, w: 8.5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("很多「看起来不可行」的方案，其实只是「目前没有关键利益相关方的支持」。", {
    x: 0.8, y: 4.55, w: 8.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "138", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "138_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
