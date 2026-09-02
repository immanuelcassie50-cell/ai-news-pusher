// slide-29.js - Four Levels of Consensus
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 29,
  title: '共识建立的四个层次'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("共识建立的四个层次", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const levels = [
    { level: "知情", desc: "知道变革要发生，了解基本内容", color: theme.light },
    { level: "理解", desc: "理解变革的原因和对自己的影响", color: theme.secondary },
    { level: "认同", desc: "从心里认可变革的方向和价值", color: theme.accent },
    { level: "承诺", desc: "愿意主动投入，积极推动变革", color: theme.primary }
  ];

  levels.forEach((l, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.5, h: 0.9,
      fill: { color: l.color }
    });
    slide.addText(l.level, {
      x: 0.5, y: y + 0.25, w: 1.5, h: 0.4,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2, y: y, w: 7, h: 0.9,
      fill: { color: theme.light }
    });
    slide.addText(l.desc, {
      x: 2.2, y: y + 0.25, w: 6.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("每个层次需要的沟通深度和参与方式不同", {
    x: 0.5, y: 5.1, w: 8, h: 0.3,
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
  pres.writeFile({ fileName: "slide-29-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
