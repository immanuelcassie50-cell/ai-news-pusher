// 62_第二章_核心认知 - 大字型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 62,
  title: '第二章核心认知'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 整页左 1/3 主色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.3, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 左侧大数字水印
  slide.addText("02", {
    x: 0.4, y: 0.6, w: 2.8, h: 1.6,
    fontSize: 130, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.3, w: 0.5, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("CHAPTER  02", {
    x: 0.4, y: 2.45, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: "FFFFFF", charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("系统盘点", {
    x: 0.4, y: 2.85, w: 2.8, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧底部装饰
  slide.addText("看清你手里有什么", {
    x: 0.4, y: 4.7, w: 2.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧大引述
  slide.addText("💡 核心认知", {
    x: 3.7, y: 0.7, w: 5.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心句
  slide.addText("盘点方案不是统计数量，", {
    x: 3.7, y: 1.3, w: 6, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("而是检查覆盖质量。", {
    x: 3.7, y: 2.0, w: 6, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三类方案
  const types = [
    { x: 3.7, t: "第一类", d: "直接保留" },
    { x: 5.7, t: "第二类", d: "原方向深化" },
    { x: 7.7, t: "第三类", d: "结构化创新" }
  ];
  types.forEach((t) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: t.x, y: 3.05, w: 1.9, h: 1.4,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addText(t.t, {
      x: t.x, y: 3.15, w: 1.9, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: t.x + 0.5, y: 3.6, w: 0.9, h: 0.04,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(t.d, {
      x: t.x, y: 3.75, w: 1.9, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 收尾金句
  slide.addText("分类结果，决定你在第三章里应该用哪些方法、往哪里发力。", {
    x: 3.7, y: 4.7, w: 6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "62", "第二章 系统盘点");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 3.5, y: 5.46, w: 5, h: 0.25,
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
  pres.writeFile({ fileName: "62_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
