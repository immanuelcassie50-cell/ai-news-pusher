// slide-36.js - Content: 三个问题的反思
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: '三个问题的反思'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("三个问题的反思", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Questions
  const questions = [
    "你的浪费清单里，哪一条用「感受语言」描述过，现在可以翻译成「业务语言」？",
    "你所在的部门，如果用「它如果做慢了、做错了，整个链条损失了什么」来衡量，价值是什么？",
    "你准备用哪个公式，来量化你的浪费清单中最重要的一条？"
  ];

  questions.forEach((q, i) => {
    const y = 1.2 + i * 1.3;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.3, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.7, y: y + 0.3, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(q, {
      x: 1.4, y: y + 0.15, w: 7.8, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };