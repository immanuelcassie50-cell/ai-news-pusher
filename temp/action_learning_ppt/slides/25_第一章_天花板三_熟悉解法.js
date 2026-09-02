// 页 25: 解释 - 天花板三 熟悉解法 (引入)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: '第一章 天花板三：只在熟悉的解法空间里找'
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
  slide.addText("天花板 03  /  CEILING", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("只在熟悉的解法空间里找", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引入句
  slide.addText("每个人提出的方案，都来自他的经历和知识范围", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 双面性对比
  // 左卡 - 好
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 4.4, h: 1.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 0.1, h: 1.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("熟悉的好处", {
    x: 0.7, y: 2.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("在某个行业待了十年的人，提方案时知道哪些坑、可行性高、有路径依赖。", {
    x: 0.7, y: 2.55, w: 4.05, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 右卡 - 坏
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.15, w: 4.4, h: 1.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.15, w: 0.1, h: 1.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("熟悉的代价", {
    x: 5.3, y: 2.2, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("其他行业里已经成熟解决了的问题，在这里依然作为「新挑战」存在。", {
    x: 5.3, y: 2.55, w: 4.05, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 核心金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.75, w: 9, h: 1.3,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("结果", {
    x: 0.7, y: 3.85, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("不是问题不一样 ——", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("是两个人群只在自己熟悉的解法空间里找答案。", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.45,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "25", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "25_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
