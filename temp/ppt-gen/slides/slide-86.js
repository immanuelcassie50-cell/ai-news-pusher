// slide-86.js - Change Story Framework
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 86,
  title: '变革故事讲述框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革故事讲述框架", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("好的变革故事让愿景变得真实、可触达", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "left"
  });

  const storyParts = [
    { part: "从前（现状）", content: "描述当前的痛点和挑战，让听众产生共鸣", example: ""我们每天花3小时填表，却没人看过这些数据"" },
    { part: "但是（障碍）", content: "说明为什么现在必须改变，障碍是什么", example: ""如果不变，3年后我们的市场份额将缩水50%"" },
    { part: "于是（行动）", content: "提出变革方案，说明你的计划", example: ""因此我们决定投资新系统，自动化这些流程"" },
    { part: "终于（愿景）", content: "描绘变革后的美好未来", example: ""3个月后，你将每天节省2小时，可以用在与客户沟通上"" }
  ];

  storyParts.forEach((s, i) => {
    const y = 1.5 + i * 0.98;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.8, h: 0.85,
      fill: { color: theme.accent }
    });
    slide.addText(s.part, {
      x: 0.5, y: y + 0.25, w: 1.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.3, y: y, w: 7.2, h: 0.85,
      fill: { color: theme.light }
    });
    slide.addText(s.content, {
      x: 2.5, y: y + 0.08, w: 6.8, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText(s.example, {
      x: 2.5, y: y + 0.45, w: 6.8, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true, align: "left"
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
  pres.writeFile({ fileName: "slide-86-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
