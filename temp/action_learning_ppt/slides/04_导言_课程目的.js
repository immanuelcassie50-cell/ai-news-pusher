// 04 导言 - 课程目的（大数字 + 说明布局）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '课程目的 - 找更好的解法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标识
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("导言  /  Introduction", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 小标题
  slide.addText("03  课程目的", {
    x: 0.5, y: 0.85, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大数字
  slide.addText("01", {
    x: 0.4, y: 1.6, w: 2.6, h: 1.6,
    fontSize: 130, fontFace: "Georgia",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 数字下小标
  slide.addText("ONE GOAL", {
    x: 0.4, y: 3.2, w: 2.6, h: 0.3,
    fontSize: 11, fontFace: "Georgia",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 左侧小字
  slide.addText("一个目的", {
    x: 0.4, y: 3.7, w: 2.6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 分隔竖线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.3, y: 1.6, w: 0.02, h: 2.8,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 右侧内容
  slide.addText("帮你系统地找到更好的解法。", {
    x: 3.6, y: 1.6, w: 5.8, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("不否定常规方案的前提下，找到那些你还没想到、", {
    x: 3.6, y: 2.4, w: 5.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("但做了很可能真正改变局面的解法。", {
    x: 3.6, y: 2.78, w: 5.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个关键词
  const tags = [
    { label: "不否定常规", color: theme.light },
    { label: "系统地找", color: theme.accent },
    { label: "真正有效", color: theme.primary }
  ];
  tags.forEach((tag, i) => {
    const x = 3.6 + i * 1.95;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.5, w: 1.8, h: 0.45,
      fill: { color: tag.color }, line: { type: 'none' }
    });
    slide.addText(tag.label, {
      x: x, y: 3.5, w: 1.8, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: i === 1 ? "FFFFFF" : (i === 2 ? "FFFFFF" : theme.secondary),
      bold: true, align: 'center', valign: 'middle', margin: 0
    });
  });

  // 底部引文
  slide.addText("—— 不是替代你的方案，而是补全你的方案。", {
    x: 3.6, y: 4.3, w: 5.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "04", "导言与课程地图");
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
  pres.writeFile({ fileName: "04_导言_课程目的_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
