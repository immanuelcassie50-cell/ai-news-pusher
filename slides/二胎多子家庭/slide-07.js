// slide-07.js - Self-assessment 2 (自我评估问题)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '自我评估问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("自我评估问题", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 5 reflection questions
  const questions = [
    '你是否曾被孩子说"不公平"？',
    "兄弟姐妹发生冲突时，你通常如何处理？",
    "你是否能叫出每个孩子的3个优点？",
    "你每周有多少专属陪伴时间？",
    '你的养育方式更偏向于"指挥官"还是"合作伙伴"？'
  ];

  const startY = 1.2;
  const itemHeight = 0.82;

  questions.forEach((q, idx) => {
    const y = startY + idx * itemHeight;

    // Number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y + 0.1, w: 0.45, h: 0.45,
      fill: { color: theme.accent },
      rectRadius: 0.08
    });
    slide.addText((idx + 1).toString(), {
      x: 0.5, y: y + 0.1, w: 0.45, h: 0.45,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question text
    slide.addText(q, {
      x: 1.1, y: y, w: 8.4, h: 0.65,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.1, w: 0.05, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("请认真思考，每个问题都没有标准答案", {
    x: 0.7, y: 5.1, w: 8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
