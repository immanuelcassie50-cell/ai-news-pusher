// slide-08.js - Self-assessment 3 (常见挑战自检)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '常见挑战自检'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("常见挑战自检", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 challenges in 2x2 grid
  const challenges = [
    "总是被拿来比较的孩子",
    "争抢玩具和父母注意力",
    '年龄大的被要求"让着"小的',
    "秘密被妹妹/弟弟告诉父母"
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.7;
  const startX = 0.5;
  const startY = 1.3;
  const gapX = 0.4;
  const gapY = 0.35;

  challenges.forEach((challenge, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Warning icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.55, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText("!", {
      x: x + 0.25, y: y + 0.55, w: 0.6, h: 0.6,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Challenge text
    slide.addText(challenge, {
      x: x + 1.0, y: y, w: 3.0, h: cardHeight,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
