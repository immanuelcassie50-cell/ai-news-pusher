// slide-09.js - Intro Summary (准备好了吗)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 9,
  title: '准备好了吗？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("准备好了吗？", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 key points
  const points = [
    "放下完美父母的包袱",
    "用好奇代替评判",
    "承诺每天进步一点点",
    "记住：没有绝对的公平，只有合适的平衡"
  ];

  const startY = 1.4;
  const itemHeight = 0.95;

  points.forEach((point, idx) => {
    const y = startY + idx * itemHeight;

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText("✓", {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Point text
    slide.addText(point, {
      x: 1.4, y: y, w: 8, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Decorative line at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.1, w: 2.5, h: 0.03,
    fill: { color: theme.primary }
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
  pres.writeFile({ fileName: "slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
