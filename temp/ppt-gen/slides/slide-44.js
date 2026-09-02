// slide-44.js - Part 4 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 44,
  title: '第四部分小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("第四部分小结", {
    x: 0.5, y: 0.4, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const summary4 = [
    { title: "信任要素", content: "一致性、透明性、可及性、回应性" },
    { title: "沟通机制", content: "频率稳定、渠道多元、内容有数据、反馈闭环" },
    { title: "透明度原则", content: "知道什么说什么，不知道明确告知时间" },
    { title: "员工参与", content: "从知情到共创，参与度越高承诺度越高" }
  ];

  summary4.forEach((s, i) => {
    const y = 1.1 + i * 0.95;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 2, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.5, y: y + 0.2, w: 2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(s.content, {
      x: 2.7, y: y + 0.2, w: 6.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("进入第五部分：变革韧性文化建设", {
    x: 0.5, y: 5.1, w: 6, h: 0.3,
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
  pres.writeFile({ fileName: "slide-44-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
