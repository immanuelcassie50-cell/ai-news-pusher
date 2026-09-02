// slide-25.js - Why Communication
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: '"为什么"沟通：变革的必要性、紧迫性与价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText('"为什么"沟通：变革的必要性、紧迫性与价值', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("员工最想知道的三个问题：", {
    x: 0.5, y: 1.1, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const whyQs = [
    { q: "为什么要变？", sub: "不变会有什么后果？" },
    { q: "为什么是现在？", sub: "为什么不能等一等？" },
    { q: "为什么是这样？", sub: "为什么选择这个方向？" }
  ];

  whyQs.forEach((item, i) => {
    const y = 1.6 + i * 1.2;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4, h: 1,
      fill: { color: theme.primary }
    });
    slide.addText(item.q, {
      x: 0.7, y: y + 0.2, w: 3.6, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "left"
    });
    slide.addText(item.sub, {
      x: 0.7, y: y + 0.55, w: 3.6, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "left"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.5, y: y, w: 5, h: 1,
      fill: { color: theme.light }
    });
    slide.addText("← 回答好这个问题，变革就成功了一半", {
      x: 4.7, y: y + 0.3, w: 4.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-25-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
