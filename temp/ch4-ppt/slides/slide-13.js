// slide-13.js - 模式B：分步执行型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '模式B：分步执行型'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("模式B：分步执行型", {
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
  slide.addText("你已经有了任务分解链，每轮对话对应任务链里的一个步骤。AI做完一步，你核查完，再让它做下一步。", {
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
    "每轮开头明确说：\"基于上面的XXX，现在我需要你做YYY\"",
    "上一轮的输出直接成为下一轮的输入素材",
    "不要让AI在一轮里做两个步骤"
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
  slide.addText("有明确步骤的工作流程、已完成任务链之后的实际执行", {
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
  slide.addText("跳步骤，合并多步为一步", {
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
  pres.writeFile({ fileName: "./output/slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };