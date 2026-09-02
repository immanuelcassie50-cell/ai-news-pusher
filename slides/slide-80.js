// slide-80.js - 练习：核心概念解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 80,
  title: '练习：核心概念解释'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：核心概念解释", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Instruction
  slide.addText("请解释以下概念（每题不少于100字）：", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Concepts
  const concepts = [
    { num: "1", term: "边际效用" },
    { num: "2", term: "自发秩序" },
    { num: "3", term: "交易成本" },
    { num: "4", term: "逆向选择" },
    { num: "5", term: "人力资本" }
  ];

  const startY = 1.55;
  const itemHeight = 0.7;

  concepts.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.58,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.04 }
    });

    // Number badge
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.1, w: 0.38, h: 0.38,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.7, y: y + 0.1, w: 0.38, h: 0.38,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Term
    slide.addText(item.term, {
      x: 1.25, y: y + 0.05, w: 3, h: 0.48,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Writing line
    slide.addShape("rect", {
      x: 3.5, y: y + 0.3, w: 5.8, h: 0.02,
      fill: { color: theme.light, transparency: 50 }
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("80", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-80-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
