// slide-33.js - Exercise 3: Communication Plan
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 33,
  title: '练习：设计一个部门的变革沟通方案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("练习：设计一个部门的变革沟通方案", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 8.5, h: 3.5,
    fill: { color: theme.light }
  });

  slide.addText("任务要求：", {
    x: 0.7, y: 1.3, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const tasks = [
    "选定一个你熟悉的部门或团队",
    "分析该部门员工最关心的三个问题",
    "设计一个为期4周的沟通计划",
    "包括：沟通频率、渠道、内容、反馈机制"
  ];

  tasks.forEach((t, i) => {
    slide.addText((i+1) + ". " + t, {
      x: 0.7, y: 1.8 + i * 0.65, w: 8, h: 0.55,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("时间：15分钟  |  形式：小组讨论后选代表分享", {
    x: 0.7, y: 4.3, w: 6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-33-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
