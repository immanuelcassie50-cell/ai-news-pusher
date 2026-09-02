// slide-43.js - Exercise 4: Trust Maintenance Plan
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 43,
  title: '练习：设计信任维护计划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("练习：设计信任维护计划", {
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

  const exTasks = [
    "针对你组织的一个具体变革项目",
    "设计一个持续沟通机制的框架",
    "包括：沟通渠道、频率、内容、反馈机制",
    "预判可能出现的信任危机场景，准备应对策略"
  ];

  exTasks.forEach((t, i) => {
    slide.addText((i+1) + ". " + t, {
      x: 0.7, y: 1.8 + i * 0.65, w: 8, h: 0.55,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("时间：15分钟  |  形式：小组讨论", {
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
  pres.writeFile({ fileName: "slide-43-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
