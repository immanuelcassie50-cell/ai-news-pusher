// slide-83.js - 核心概念速查
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 83,
  title: '核心概念速查'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("核心概念速查", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Concepts grid (2x3)
  const concepts = [
    { term: "边际效用", def: "衡量价值的主观尺度" },
    { term: "自发秩序", def: "人类行动的意外产物" },
    { term: "交易成本", def: "市场运行的摩擦力" },
    { term: "科斯定理", def: "产权与效率的关系" },
    { term: "人力资本", def: "人的知识与技能" },
    { term: "柠檬市场", def: "信息不对称的后果" }
  ];

  const cardWidth = 2.9;
  const cardHeight = 1.4;
  const startX = 0.5;
  const startY = 1.15;
  const gapX = 0.25;
  const gapY = 0.2;

  concepts.forEach((concept, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Top accent bar
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }
    });

    // Term
    slide.addText(concept.term, {
      x: x + 0.2, y: y + 0.25, w: 2.5, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Definition
    slide.addText(concept.def, {
      x: x + 0.2, y: y + 0.75, w: 2.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("83", {
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
  pres.writeFile({ fileName: "slide-83-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
