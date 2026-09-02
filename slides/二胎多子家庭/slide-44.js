// slide-44.js - 互动练习3
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 44,
  title: '练习：设计专属时间'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("互动练习", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Exercise title
  slide.addText("练习：设计专属时间", {
    x: 0.5, y: 1.2, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Instruction text
  slide.addText("为你的每个孩子设计专属时间方案", {
    x: 0.5, y: 1.9, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left"
  });

  // Three child cards
  const children = [
    { name: "孩子1", questions: ["什么时候？", "在哪里？", "做什么？"] },
    { name: "孩子2", questions: ["什么时候？", "在哪里？", "做什么？"] },
    { name: "孩子3", questions: ["什么时候？", "在哪里？", "做什么？"] }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.4;
  const startX = 0.5;
  const startY = 2.6;
  const gap = 0.35;

  children.forEach((child, idx) => {
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
      fill: { color: theme.primary }
    });

    // Child name
    slide.addText(child.name, {
      x: x, y: startY + 0.3, w: cardWidth, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Questions
    child.questions.forEach((q, qIdx) => {
      slide.addText(q, {
        x: x + 0.3, y: startY + 0.95 + qIdx * 0.45, w: cardWidth - 0.6, h: 0.4,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.light, bold: false,
        align: "left", valign: "middle"
      });
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
  pres.writeFile({ fileName: "slide-44-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
