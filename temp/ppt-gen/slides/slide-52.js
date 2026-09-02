// slide-52.js - Part 5 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 52,
  title: '第五部分小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("第五部分小结", {
    x: 0.5, y: 0.4, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const summary5 = [
    { title: "韧性文化", content: "让组织具备持续适应、持续学习、持续成长的能力" },
    { title: "疲劳预防", content: "控制节奏、留出恢复期、及时庆祝胜利" },
    { title: "心理安全", content: "表达、试错、求助、质疑都要安全" },
    { title: "大使体系", content: "培养变革大使，发挥桥梁和带动作用" }
  ];

  summary5.forEach((s, i) => {
    const y = 1.1 + i * 0.95;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.5, y: y + 0.2, w: 2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.5, y: y, w: 7, h: 0.8,
      fill: { color: theme.light }
    });
    slide.addText(s.content, {
      x: 2.7, y: y + 0.2, w: 6.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("进入第六部分：变革领导力与利益相关方管理", {
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
  pres.writeFile({ fileName: "slide-52-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
