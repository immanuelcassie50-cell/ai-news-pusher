// slide-97.js - 持续成长建议
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 97,
  title: '持续成长'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("持续成长", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Suggestions
  const suggestions = [
    "每周复盘实践效果",
    "加入家长互助社群",
    "定期参加进阶课程",
    "记录孩子的成长变化"
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.5;
  const startX = 0.65;
  const startY = 1.3;
  const gapX = 0.3;
  const gapY = 0.3;

  suggestions.forEach((sug, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.06, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(String(idx + 1), {
      x: x + 0.3, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: theme.light, bold: true,
      align: "left", valign: "top"
    });

    // Suggestion text
    slide.addText(sug, {
      x: x + 0.9, y: y + 0.35, w: 3.1, h: 0.9,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Motivational quote at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.65, y: 4.6, w: 8.7, h: 0.7,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.1
  });
  slide.addText(""育儿是一场马拉松，而非短跑。持续陪伴，静待花开。"", {
    x: 0.65, y: 4.6, w: 8.7, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
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
  pres.writeFile({ fileName: "slide-97-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
