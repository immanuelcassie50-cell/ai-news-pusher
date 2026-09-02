// slide-22.js - Content: 第五章核心逻辑
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 22,
  title: '第五章核心逻辑'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("第五章核心逻辑", {
    x: 0.5, y: 0.3, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Core flow diagram
  const steps = [
    { num: "1", title: "任务分解", desc: "把任务拆解成步骤" },
    { num: "2", title: "工具路由", desc: "判断每个步骤选什么工具" },
    { num: "3", title: "格式桥梁", desc: "工具间用Markdown传递" },
    { num: "4", title: "产出积累", desc: "存提示词和任务链" }
  ];

  steps.forEach((step, i) => {
    const xPos = 0.5 + i * 2.4;

    // Step circle
    slide.addShape(pres.shapes.OVAL, {
      x: xPos + 0.6, y: 1.0, w: 1.0, h: 1.0,
      fill: { color: theme.primary }
    });

    slide.addText(step.num, {
      x: xPos + 0.6, y: 1.0, w: 1.0, h: 1.0,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: xPos, y: 2.15, w: 2.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(step.desc, {
      x: xPos, y: 2.55, w: 2.2, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // Arrow
    if (i < 3) {
      slide.addText("→", {
        x: xPos + 1.9, y: 1.2, w: 0.6, h: 0.6,
        fontSize: 24, fontFace: "Arial",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    }
  });

  // Key insight cards
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 4.2, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("工具路由核心原则", {
    x: 0.7, y: 3.3, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "从步骤的核心需求出发", options: { bullet: true, breakLine: true } },
    { text: "不是从顺手程度出发", options: { bullet: true, breakLine: true } },
    { text: "每个工具都有它不擅长的事", options: { bullet: true, breakLine: true } },
    { text: "把步骤给了不擅长的工具，结果往往比自己做还差", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.75, w: 3.8, h: 1.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 3.2, w: 4.5, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("格式桥梁口诀", {
    x: 5.2, y: 3.3, w: 4.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("AI输出Markdown\n你来控制最终格式\n\n不要让AI生Word\n让AI生内容", {
    x: 5.2, y: 3.8, w: 4.1, h: 1.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };