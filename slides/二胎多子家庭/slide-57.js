// slide-57.js - 常见错误与避免
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 57,
  title: '常见错误与避免'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("常见错误与避免", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 mistakes and solutions
  const mistakes = [
    { wrong: "急于评判对错", right: "先倾听，再引导" },
    { wrong: "替孩子做决定", right: "邀请孩子参与解决" },
    { wrong: "忽略情绪，只讲道理", right: "先回应情绪，再谈事情" },
    { wrong: "一次没效果就放弃", right: "反复练习，保持耐心" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.85;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.4;
  const gapY = 0.3;

  mistakes.forEach((item, idx) => {
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

    // Wrong section
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 0.06,
      fill: { color: theme.light }
    });
    slide.addText("✗", {
      x: x + 0.2, y: y + 0.2, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(item.wrong, {
      x: x + 0.6, y: y + 0.2, w: 3.4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });

    // Right section
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y + 0.75, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }
    });
    slide.addText("✓", {
      x: x + 0.2, y: y + 0.95, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(item.right, {
      x: x + 0.6, y: y + 0.95, w: 3.4, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "top"
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
  pres.writeFile({ fileName: "slide-57-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
