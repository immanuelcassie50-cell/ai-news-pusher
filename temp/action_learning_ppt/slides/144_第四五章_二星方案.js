// 页 144: 解释 - 二星方案
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 144,
  title: '二星方案：保留推进'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("矩阵象限  /  ★★", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大星号水印
  slide.addText("★★", {
    x: 7.5, y: 0.4, w: 2, h: 1.0,
    fontSize: 60, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("二星方案", {
    x: 0.5, y: 0.85, w: 7, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("高有效性  +  低突破性  =  有效且扎实的常规方案", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // 关键提醒
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 9, h: 1.5,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 0.1, h: 1.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("这类方案应该被保留 ——", {
    x: 0.8, y: 2.25, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("它们对应的正是你第二章里的", {
    x: 0.8, y: 2.7, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("「第一类：有效直接保留」。", {
    x: 0.8, y: 3.1, w: 8.5, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 大字提醒
  slide.addText("不要因为不够新，", {
    x: 0.5, y: 3.9, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("就放弃它们。", {
    x: 0.5, y: 4.4, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "144", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "144_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
