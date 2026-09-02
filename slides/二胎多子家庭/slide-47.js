// slide-47.js - 冲突的双重性质
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 47,
  title: '冲突的双重性质'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("冲突的双重性质", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Two sides comparison
  const sides = [
    {
      label: "破坏性",
      icon: "✗",
      color: theme.light,
      items: ["伤害感情", "破坏关系"]
    },
    {
      label: "建设性",
      icon: "✓",
      color: theme.accent,
      items: ["学习协商", "理解差异"]
    }
  ];

  const cardWidth = 4.2;
  const cardHeight = 2.8;
  const startX = 0.5;
  const startY = 1.3;
  const gap = 0.6;

  sides.forEach((side, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.06,
      fill: { color: side.color }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.8) / 2, y: startY + 0.4, w: 0.8, h: 0.8,
      fill: { color: side.color }
    });
    slide.addText(side.icon, {
      x: x + (cardWidth - 0.8) / 2, y: startY + 0.4, w: 0.8, h: 0.8,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Label
    slide.addText(side.label, {
      x: x, y: startY + 1.4, w: cardWidth, h: 0.5,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Items
    side.items.forEach((item, i) => {
      slide.addText("• " + item, {
        x: x + 0.8, y: startY + 2.0 + i * 0.35, w: cardWidth - 1.6, h: 0.35,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.light, bold: false,
        align: "center", valign: "middle"
      });
    });
  });

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("父母的介入方式", {
    x: 0.7, y: 4.5, w: 2.5, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("决定冲突走向破坏性还是建设性", {
    x: 3.2, y: 4.5, w: 6, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-47-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
