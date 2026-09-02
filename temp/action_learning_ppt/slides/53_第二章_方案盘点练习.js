// 53_第二章_方案盘点练习 - 引述型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 53,
  title: '方案盘点练习'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("EXERCISE  /  练习", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("✋  方案盘点练习", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 大引号
  slide.addText('"', {
    x: 0.5, y: 1.5, w: 1, h: 1,
    fontSize: 90, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 中央大引述
  slide.addText("对你现有的所有初步方案做完整分类，", {
    x: 1.3, y: 1.85, w: 8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("同时结合对事分析的突破口，", {
    x: 1.3, y: 2.45, w: 8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("明确标出第三类的覆盖空白。", {
    x: 1.3, y: 3.05, w: 8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部三个小信息卡
  const items = [
    { x: 0.5, t: "所需材料", d: "方案清单 + 对事分析的关键突破口" },
    { x: 3.7, t: "操作方式", d: "逐条方案判断类型，填入分类表" },
    { x: 6.9, t: "产出用途", d: "决定第三章的方法选择" }
  ];
  items.forEach((it) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: it.x, y: 4.1, w: 2.9, h: 1.0,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: it.x, y: 4.1, w: 0.06, h: 1.0,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(it.t, {
      x: it.x + 0.2, y: 4.15, w: 2.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, charSpacing: 2,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(it.d, {
      x: it.x + 0.2, y: 4.5, w: 2.6, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "53", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "53_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
