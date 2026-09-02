// slide-65.js - Action Plan Template
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 65,
  title: '行动计划模板：我的变革管理计划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("行动计划模板：我的变革管理计划", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Template sections
  const sections = [
    { title: "我负责的变革项目/场景", content: "描述：_______________" },
    { title: "我将如何建立变革共识", content: "策略：_______________" },
    { title: "我将如何维护员工信任", content: "机制：_______________" },
    { title: "我将如何管理利益相关方", content: "策略：_______________" },
    { title: "我需要提升的关键能力", content: "能力：_______________" }
  ];

  sections.forEach((s, i) => {
    const y = 1.1 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 3, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.5, y: y + 0.15, w: 3, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3.5, y: y, w: 5.5, h: 0.7,
      fill: { color: theme.light }
    });
    slide.addText(s.content, {
      x: 3.7, y: y + 0.2, w: 5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
