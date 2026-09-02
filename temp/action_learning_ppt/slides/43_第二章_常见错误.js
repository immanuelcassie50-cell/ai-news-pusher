// 43_第二章_常见错误 - 大字型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 43,
  title: '常见错误：方案越多越好'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧色块（占 1/3）
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.3, h: 5.625,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 左侧标签
  slide.addText("⚡  一个常见的误解", {
    x: 0.4, y: 0.5, w: 2.8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大字
  slide.addText("20", {
    x: 0.4, y: 1.4, w: 2.8, h: 1.4,
    fontSize: 120, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("条方案", {
    x: 0.4, y: 2.85, w: 2.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 左侧底部对比
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.6, w: 0.4, h: 0.04,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("vs.", {
    x: 0.4, y: 3.7, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: "Georgia",
    color: theme.light, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("5", {
    x: 0.4, y: 4.1, w: 2.8, h: 1.0,
    fontSize: 60, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("条高质量方案", {
    x: 0.4, y: 5.05, w: 2.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 右侧大标题
  slide.addText("数量≠质量", {
    x: 3.7, y: 1.0, w: 6, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 右侧说明
  slide.addText("大量平庸的方案不等于高质量的方案集。", {
    x: 3.7, y: 2.0, w: 6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个问题
  const issues = [
    { num: "①", t: "稀释注意力", d: "让真正有潜力的想法淹没在噪音里" },
    { num: "②", t: "掩盖覆盖维度", d: "20 条同向的方案 ≠ 覆盖更广" },
    { num: "③", t: "陷入数量游戏", d: "让你以为『已尽力』" }
  ];
  issues.forEach((it, i) => {
    const y = 2.8 + i * 0.65;
    slide.addText(it.num, {
      x: 3.7, y: y, w: 0.4, h: 0.4,
      fontSize: 18, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(it.t, {
      x: 4.1, y: y, w: 1.8, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(it.d, {
      x: 5.9, y: y, w: 3.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "43", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "43_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
