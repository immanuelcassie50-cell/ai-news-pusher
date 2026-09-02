// slide-46.js - What is Change Resilience Culture
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 46,
  title: '什么是变革韧性文化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("什么是变革韧性文化", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Definition
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 8.5, h: 1.5,
    fill: { color: theme.light }
  });

  slide.addText("变革韧性文化 = 组织在变革中快速适应、持续学习、\n                从挫折中恢复并变得更强的能力", {
    x: 0.7, y: 1.3, w: 8, h: 1.1,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Three characteristics
  const chars = [
    { title: "快速适应", desc: "能够迅速感知变化并调整策略" },
    { title: "持续学习", desc: "从每次变革中提取经验教训" },
    { title: "恢复成长", desc: "遭遇挫折后能复原并变得更强" }
  ];

  chars.forEach((c, i) => {
    const y = 2.8 + i * 0.9;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.5, h: 0.75,
      fill: { color: theme.accent }
    });
    slide.addText(c.title, {
      x: 0.5, y: y + 0.17, w: 2.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3, y: y, w: 6, h: 0.75,
      fill: { color: theme.light }
    });
    slide.addText(c.desc, {
      x: 3.2, y: y + 0.17, w: 5.6, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-46-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
