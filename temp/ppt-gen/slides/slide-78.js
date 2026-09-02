// slide-78.js - Post-Course Application Plan
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 78,
  title: '课后应用计划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("课后应用计划", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const timeline = [
    { time: "一周内", action: "回顾课程笔记，选择一个实际变革场景进行诊断分析" },
    { time: "一个月内", action: "应用所学方法，启动或优化实际变革项目的变革管理工作" },
    { time: "三个月内", action: "复盘变革管理效果，总结经验教训，形成个人方法论" },
    { time: "持续", action: "分享经验，帮助他人，不断迭代优化变革管理能力" }
  ];

  timeline.forEach((t, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.8, h: 0.85,
      fill: { color: theme.accent }
    });
    slide.addText(t.time, {
      x: 0.5, y: y + 0.25, w: 1.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.3, y: y, w: 7.2, h: 0.85,
      fill: { color: theme.light }
    });
    slide.addText(t.action, {
      x: 2.5, y: y + 0.25, w: 6.8, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
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
  pres.writeFile({ fileName: "slide-78-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
