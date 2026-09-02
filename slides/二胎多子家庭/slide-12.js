// slide-12.js - Three Layers of Fairness (公平感的三个层面)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '公平感的三个层面'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("公平感的三个层面", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 3 layers
  const layers = [
    { num: "1", title: "结果公平", desc: "资源分配的平均" },
    { num: "2", title: "过程公平", desc: "参与机会的均等" },
    { num: "3", title: "关系公平", desc: "情感关注的平衡" }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.3;
  const startX = 0.5;
  const cardY = 1.3;
  const gap = 0.35;

  layers.forEach((layer, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: 0.08,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.7) / 2, y: cardY + 0.4, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(layer.num, {
      x: x + (cardWidth - 0.7) / 2, y: cardY + 0.4, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(layer.title, {
      x: x + 0.2, y: cardY + 1.4, w: cardWidth - 0.4, h: 0.7,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(layer.desc, {
      x: x + 0.2, y: cardY + 2.2, w: cardWidth - 0.4, h: 0.8,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
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
  pres.writeFile({ fileName: "slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
