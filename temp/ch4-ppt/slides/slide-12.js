// slide-12.js - 模式A：逐步收敛型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '模式A：逐步收敛型'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("模式A：逐步收敛型", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 适用场景
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 0.9,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addText("适用场景", {
    x: 0.7, y: 1.3, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("你对最终产出物有大致方向，但还不确定具体应该包含什么。需要先让AI给一个框架，再逐步确认和深化。", {
    x: 0.7, y: 1.65, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // 操作要点
  slide.addText("操作要点", {
    x: 0.5, y: 2.3, w: 3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  const steps = [
    "第1轮给宽泛方向，让AI输出初步框架或结构",
    "第2轮针对框架某一块，给具体方向，深化内容",
    "第3轮修正问题，调整格式，收尾"
  ];

  steps.forEach((text, idx) => {
    const yPos = 2.8 + idx * 0.55;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos + 0.1, w: 0.2, h: 0.2,
      fill: { color: theme.primary }
    });
    slide.addText(text, {
      x: 1.1, y: yPos, w: 8, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 最常用于
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.5, w: 4.3, h: 0.9,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("最常用于", {
    x: 0.7, y: 4.55, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle"
  });
  slide.addText("写作类任务、分析报告初稿、需求整理", {
    x: 0.7, y: 4.9, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle"
  });

  // 什么时候会用坏
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.0, y: 4.5, w: 4.5, h: 0.9,
    fill: { color: "FFE8E8" },
    rectRadius: 0.08
  });
  slide.addText("什么时候会用坏", {
    x: 5.2, y: 4.55, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("第1轮框架还没确认就急着让AI填内容", {
    x: 5.2, y: 4.9, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };