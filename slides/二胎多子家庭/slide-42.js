// slide-42.js - 常见障碍与应对
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 42,
  title: '常见障碍与应对'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("常见障碍与应对", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 challenges in 2x2 grid
  const challenges = [
    { title: "时间不够", solution: "化整为零，10分钟也行" },
    { title: "孩子不配合", solution: "让他选择时间形式" },
    { title: "其他孩子打扰", solution: "设定\"不打扰\"规则" },
    { title: "手机诱惑", solution: "物理隔离，全家约定" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.8;
  const startX = 0.5;
  const startY = 1.3;
  const gapX = 0.4;
  const gapY = 0.35;

  challenges.forEach((item, idx) => {
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

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fill: { color: theme.primary }
    });
    slide.addText(String(idx + 1), {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Challenge title
    slide.addText(item.title, {
      x: x + 0.95, y: y + 0.2, w: 3.0, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Solution text
    slide.addText(item.solution, {
      x: x + 0.95, y: y + 0.75, w: 3.0, h: 0.85,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
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
  pres.writeFile({ fileName: "slide-42-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
