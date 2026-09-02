// slide-70.js - Summary/Closing: 结语：站在斯密
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 70,
  title: '结语：站在斯密'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large decorative quote mark
  slide.addText("“", {
    x: 0.3, y: 0.5, w: 1.5, h: 1.5,
    fontSize: 150, fontFace: "Georgia",
    color: theme.bg,
    transparency: 70
  });

  // Main closing statement
  slide.addText("站在斯密的肩膀上", {
    x: 0.5, y: 1.0, w: 9, h: 1,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("我们看得更远", {
    x: 0.5, y: 1.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 2.7, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three key takeaways
  const takeawayY = 3.0;
  const cardW = 2.8;
  const cardH = 1.5;
  const cardGap = 0.3;
  const startX = (10 - 3 * cardW - 2 * cardGap) / 2;

  const takeaways = [
    { num: "01", text: '斯密不只是"自由市场之父"，他是完整人性观的探索者' },
    { num: "02", text: "市场与道德不可分离，理解斯密需要读他的全部著作" },
    { num: "03", text: "理解斯密是理解经济思想史的起点，而非终点" }
  ];

  takeaways.forEach((item, i) => {
    const x = startX + i * (cardW + cardGap);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: takeawayY, w: cardW, h: cardH,
      fill: { color: theme.bg }
    });

    // Number
    slide.addText(item.num, {
      x: x + 0.1, y: takeawayY + 0.1, w: 0.5, h: 0.4,
      fontSize: 18, fontFace: "Georgia",
      color: theme.accent, bold: true
    });

    // Text
    slide.addText(item.text, {
      x: x + 0.1, y: takeawayY + 0.55, w: cardW - 0.2, h: 0.85,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Thank you
  slide.addText("感谢聆听", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("70", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-70-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
