// slide-50.js - STEA步骤1: See
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 50,
  title: 'S - See 看见情绪'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("S - See 看见情绪", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Step indicator
  slide.addText("第一步", {
    x: 8.5, y: 0.2, w: 1, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "right", valign: "middle"
  });

  // 4 actions
  const actions = [
    { title: "暂停", desc: "不立即介入评判" },
    { title: "观察", desc: "孩子此刻的情绪是什么？" },
    { title: "命名", desc: "\"我看到你很生气\"" },
    { title: "允许", desc: "不否认孩子的感受" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.8;
  const startX = 0.5;
  const startY = 1.3;
  const gapX = 0.4;
  const gapY = 0.35;

  actions.forEach((action, idx) => {
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

    // Title
    slide.addText(action.title, {
      x: x + 0.25, y: y + 0.25, w: 3.7, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(action.desc, {
      x: x + 0.25, y: y + 0.85, w: 3.7, h: 0.75,
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
  pres.writeFile({ fileName: "slide-50-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
