// 页 78: 第三章上 - 方向一 工具 - 五个为什么（大字）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 78,
  title: '方向一 工具 - 五个为什么'
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
  slide.addText("方向一  /  工具", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("「往深走」的工具", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大字
  slide.addText("五个", {
    x: 0.5, y: 1.7, w: 4.4, h: 1.4,
    fontSize: 100, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("为什么", {
    x: 0.5, y: 3.1, w: 4.4, h: 1.0,
    fontSize: 60, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.0, y: 4.15, w: 1.0, h: 0.05,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("5 Whys", {
    x: 0.5, y: 4.3, w: 4.4, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: theme.secondary, italic: true, charSpacing: 4,
    align: "center", valign: "middle", margin: 0
  });

  // 右侧说明
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.7, w: 4.3, h: 3.2,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
  });

  slide.addText("使用方法", {
    x: 5.4, y: 1.85, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("用「为什么」连续追问", {
    x: 5.4, y: 2.15, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 列表
  const points = [
    "数字「五」不必机械凑够",
    "有时候两三次就到了根本",
    "有时候需要六七次",
    "关键在于触底 —— 那个「再往下已经没更深原因」的层次",
    "每次以上一个答案为起点继续追问"
  ];

  points.forEach((p, i) => {
    const yPos = 2.7 + i * 0.42;
    slide.addShape(pres.shapes.OVAL, {
      x: 5.4, y: yPos + 0.13, w: 0.1, h: 0.1,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(p, {
      x: 5.6, y: yPos, w: 3.8, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部
  slide.addText("数字不重要，到达根本才是目的", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "78", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "78_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
