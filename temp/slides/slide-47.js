// slide-47.js - What AI Cannot Do
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 47,
  title: 'AI不擅长的'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("AI不擅长的", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Main insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fill: { color: theme.accent, transparency: 90 },
    line: { color: theme.accent, width: 1.5 },
    rectRadius: 0.1
  });
  slide.addText("判断力 = 长期跟真实的人打交道积累出来的经验直觉", {
    x: 0.7, y: 0.95, w: 8.6, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Items that AI cannot do
  const items = [
    "这个孩子是谁",
    "他对什么真正投入过",
    "他家庭的真实处境和顾虑是什么",
    "他嘴上说的和心里想的是不是一回事",
    "五年后这个行业的产业逻辑会怎么变",
    "哪些信息是可信的、哪些是噪音"
  ];

  // Create 2-column layout
  const colWidth = 4.35;
  const itemHeight = 0.7;
  const startY = 1.8;

  items.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * (colWidth + 0.3);
    const y = startY + row * (itemHeight + 0.15);

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: colWidth, h: itemHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.1
    });

    // Warning indicator
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.2, w: 0.3, h: 0.3,
      fill: { color: theme.secondary }
    });
    slide.addText("!", {
      x: x + 0.15, y: y + 0.2, w: 0.3, h: 0.3,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Item text
    slide.addText(item, {
      x: x + 0.55, y: y, w: colWidth - 0.7, h: itemHeight,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("这些，永远得靠人", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("47", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-47-preview.pptx" })
    .then(() => console.log("Preview saved: slide-47-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
