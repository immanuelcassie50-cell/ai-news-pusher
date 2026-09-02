// 50_第二章_第三类_关键空白 - 图文混排
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 50,
  title: '第三类：关键空白'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("TYPE  03  /  关键空白", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第三类：关键突破口是空白", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧文字
  slide.addText("第三类不是你手里已有方案的一种类型，", {
    x: 0.5, y: 1.65, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("而是你手里", {
    x: 0.5, y: 2.05, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.5, w: 5.5, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("『应该有但没有』的方向。", {
    x: 0.5, y: 2.6, w: 5.5, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("对事分析里识别为重要突破口的关键领域，", {
    x: 0.5, y: 3.35, w: 5.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("在现有方案里完全没有对应的解法——", {
    x: 0.5, y: 3.7, w: 5.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("没有一条方案在朝那个方向努力。", {
    x: 0.5, y: 4.05, w: 5.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 0.06, h: 0.35,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("这个空白，才是真正需要结构化创新方法填补的地方。", {
    x: 0.7, y: 4.6, w: 5.3, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧视觉：缺口图
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.4, y: 1.65, w: 3.2, h: 3.3,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addText("现有方案覆盖图", {
    x: 6.5, y: 1.75, w: 3, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });

  // 4 个色块表示 4 个方向
  const dirs = [
    { x: 6.6, y: 2.25, c: theme.primary, label: "方向A" },
    { x: 8.2, y: 2.25, c: theme.accent, label: "方向B" },
    { x: 6.6, y: 3.45, c: theme.secondary, label: "方向C" },
    { x: 8.2, y: 3.45, c: theme.light, label: "方向D", empty: true }
  ];
  dirs.forEach((d) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: d.x, y: d.y, w: 1.3, h: 1.1,
      fill: { color: d.c }, line: { type: 'none' }
    });
    slide.addText(d.label, {
      x: d.x, y: d.y, w: 1.3, h: 1.1,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: d.empty ? theme.secondary : "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 空白标识
  slide.addShape(pres.shapes.OVAL, {
    x: 8.6, y: 3.25, w: 0.5, h: 0.5,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
  });
  slide.addText("?", {
    x: 8.6, y: 3.25, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("← 关键空白", {
    x: 6.4, y: 4.65, w: 3.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "50", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "50_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
