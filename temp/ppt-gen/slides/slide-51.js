// slide-51.js - Exercise 5: Culture Diagnosis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 51,
  title: '练习：变革文化诊断'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("练习：变革文化诊断", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 8.5, h: 3.8,
    fill: { color: theme.light }
  });

  slide.addText("任务：评估你组织的变革文化现状", {
    x: 0.7, y: 1.3, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const tasks = [
    "1. 对照以下四个维度，给组织打分（1-5分）",
    "   · 心理安全：员工敢于表达不同意见吗？",
    "   · 学习导向：组织能从变革中总结经验吗？",
    "   · 适应性：组织对变化的响应速度如何？",
    "   · 韧性水平：经历挫折后组织恢复能力如何？",
    "2. 识别你组织变革文化最强的1个方面",
    "3. 识别最需要改善的1个方面",
    "4. 每个人提出1条具体改善建议"
  ];

  tasks.forEach((t, i) => {
    slide.addText(t, {
      x: 0.7, y: 1.85 + i * 0.6, w: 8, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("时间：15分钟  |  形式：小组讨论（4人一组）", {
    x: 0.7, y: 4.65, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-51-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
