// 页 160: 引述 - 写给最后
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 160,
  title: '写给最后'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("写给最后  /  One Last Thing", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大引号
  slide.addText("“", {
    x: 0.5, y: 0.7, w: 2, h: 2,
    fontSize: 200, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 大字引述 - 分三行
  slide.addText("你不需要等所有方案都确定好了再出发。", {
    x: 1.0, y: 1.4, w: 8, h: 0.7,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("好的方案组合是在行动中不断校准的，", {
    x: 1.0, y: 2.2, w: 8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("不是在桌子前完全想清楚的。", {
    x: 1.0, y: 2.8, w: 8, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 第二段
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.7, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("你现在有了一个足够扎实的起点 ——", {
    x: 0.5, y: 3.85, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("带着它出发，然后根据真实推进中看到的情况，持续调整。", {
    x: 0.5, y: 4.35, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 出处
  slide.addText("—— 写给最后一个页", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "right", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "160", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "160_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
