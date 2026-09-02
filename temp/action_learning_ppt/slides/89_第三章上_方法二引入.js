// 页 89: 第三章上 - 方法二引入 - 假设挑战（大字）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '方法二引入 - 假设挑战'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("方法 二  /  METHOD 02", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("假设挑战", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("每一个「做不到」背后，都有一个假设", {
    x: 0.5, y: 1.42, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大字
  slide.addText("事实 vs 假设", {
    x: 0.5, y: 2.2, w: 9, h: 0.7,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 关键区分
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.05, w: 4.4, h: 1.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.05, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("事实", {
    x: 0.7, y: 3.05, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("你验证过的", {
    x: 0.7, y: 3.6, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("FACT", {
    x: 0.7, y: 4.05, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Georgia",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.05, w: 4.4, h: 1.4,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.05, w: 4.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("假设", {
    x: 5.3, y: 3.05, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("没验证过却当成事实使用", {
    x: 5.3, y: 3.6, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("ASSUMPTION", {
    x: 5.3, y: 4.05, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Georgia",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 底部金句
  slide.addText("「根本没有人真正尝试过」的假设，往往就是突破口", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "89", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "89_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
