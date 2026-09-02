// 页 143: 解释 - 三星方案
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 143,
  title: '三星方案：你在找的东西'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("矩阵象限  /  ★★★", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大星号水印
  slide.addText("★★★", {
    x: 7.5, y: 0.4, w: 2, h: 1.0,
    fontSize: 50, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("三星方案", {
    x: 0.5, y: 0.85, w: 7, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("高有效性  +  高突破性  =  优先推进", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // 含义卡片
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 1.5,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 0.1, h: 1.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("这是你在这个模块里要找的东西 ——", {
    x: 0.8, y: 2.2, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("有依据，能真正改变局面，", {
    x: 0.8, y: 2.65, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("区别于当前常规方案的方向。", {
    x: 0.8, y: 3.05, w: 8.5, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 关联说明
  slide.addText("它往往就是 ——", {
    x: 0.5, y: 3.85, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 流程箭头
  const path = [
    "第二章识别的第三类（覆盖空白）",
    "→",
    "第三章方法填补的新方向",
    "→",
    "★★★三星"
  ];
  path.forEach((p, i) => {
    const x = 0.5 + i * 1.85;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.4, w: 1.7, h: 0.6,
      fill: { color: i === 4 ? theme.primary : (i % 2 === 0 ? "FFFFFF" : theme.bg) },
      line: { color: theme.primary, width: 1 }
    });
    slide.addText(p, {
      x: x, y: 4.4, w: 1.7, h: 0.6,
      fontSize: i === 4 ? 18 : 11,
      fontFace: i === 4 ? "Georgia" : "Microsoft YaHei",
      color: i === 4 ? "FFFFFF" : (i % 2 === 0 ? theme.primary : theme.secondary),
      bold: i === 4,
      align: "center", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "143", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "143_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
