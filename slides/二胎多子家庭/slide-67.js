// slide-67.js - 比较性语言陷阱
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 67,
  title: '比较性语言陷阱'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("比较性语言陷阱", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Intro text
  slide.addText("这些常见说法，你说过吗？", {
    x: 0.5, y: 1.1, w: 9, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left", valign: "middle"
  });

  // Problematic phrases
  const phrases = [
    { text: '"你看看你哥哥多懂事"', icon: "X" },
    { text: '"为什么你不能像妹妹一样乖"', icon: "X" },
    { text: '"你是哥哥，应该让着弟弟"', icon: "X" },
    { text: '"姐姐都考95分，你呢"', icon: "X" }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.35;
  const startX = 0.5;
  const startY = 1.7;
  const gapX = 0.3;
  const gapY = 0.25;

  phrases.forEach((phrase, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Warning badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.4, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(phrase.icon, {
      x: x + 0.2, y: y + 0.4, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Phrase text
    slide.addText(phrase.text, {
      x: x + 0.9, y: y + 0.35, w: cardWidth - 1.1, h: 0.65,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fill: { color: theme.accent, transparency: 90 }
  });
  slide.addText('这些话看似"鼓励"，实则伤害孩子自尊，挑起兄弟姐妹间的竞争', {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-67-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
