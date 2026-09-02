// slide-18.js - Deep Reading of Imbalance Signals (失衡信号的深层解读)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '失衡信号的深层解读'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("失衡信号的深层解读", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 deeper signals
  const signals = [
    { num: "1", title: "过度补偿", desc: "用物质弥补陪伴的缺失" },
    { num: "2", title: "标签固化", desc: '"你是哥哥要让着"' },
    { num: "3", title: "秘密管家", desc: "监视父母对兄弟姐妹的好" },
    { num: "4", title: "关系切割", desc: "声称与某兄弟姐妹不相干" }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.6;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.4;
  const gapY = 0.3;

  signals.forEach((signal, idx) => {
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
      fill: { color: theme.primary }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.3, y: y + 0.25, w: 0.55, h: 0.55,
      fill: { color: theme.primary }
    });
    slide.addText(signal.num, {
      x: x + 0.3, y: y + 0.25, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(signal.title, {
      x: x + 1.0, y: y + 0.2, w: 3.2, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(signal.desc, {
      x: x + 1.0, y: y + 0.8, w: 3.2, h: 0.6,
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
  pres.writeFile({ fileName: "slide-18-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
