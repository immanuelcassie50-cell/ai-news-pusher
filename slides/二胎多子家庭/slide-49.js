// slide-49.js - STEA四步法介绍
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 49,
  title: 'STEA冲突转化四步法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("STEA冲突转化四步法", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 steps
  const steps = [
    { letter: "S", name: "See", chinese: "看见情绪" },
    { letter: "T", name: "Translate", chinese: "翻译需求" },
    { letter: "E", name: "Explore", chinese: "探索方案" },
    { letter: "A", name: "Agree", chinese: "达成协议" }
  ];

  const cardWidth = 2.1;
  const cardHeight = 3.5;
  const startX = 0.5;
  const startY = 1.2;
  const gap = 0.27;

  steps.forEach((step, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }
    });

    // Letter circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.9) / 2, y: startY + 0.4, w: 0.9, h: 0.9,
      fill: { color: theme.primary }
    });
    slide.addText(step.letter, {
      x: x + (cardWidth - 0.9) / 2, y: startY + 0.4, w: 0.9, h: 0.9,
      fontSize: 32, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // English name
    slide.addText(step.name, {
      x: x, y: startY + 1.5, w: cardWidth, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Chinese name
    slide.addText(step.chinese, {
      x: x, y: startY + 2.1, w: cardWidth, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Bottom description
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.03,
    fill: { color: theme.light }
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
  pres.writeFile({ fileName: "slide-49-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
