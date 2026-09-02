// slide-11.js - What is Fairness (什么是公平感)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 11,
  title: '什么是公平感？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("什么是公平感？", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 key points
  const points = [
    "公平感≠平均分配",
    "公平感=被看见、被理解、被满足",
    '每个孩子对"公平"的理解不同',
    "公平感是主观的心理体验"
  ];

  const startY = 1.3;
  const itemHeight = 0.95;

  points.forEach((point, idx) => {
    const y = startY + idx * itemHeight;

    // Bullet circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Point text
    slide.addText(point, {
      x: 1.4, y: y, w: 8, h: 0.8,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom highlight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("核心洞见：公平不是秤上的砝码，而是心中的感受", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
