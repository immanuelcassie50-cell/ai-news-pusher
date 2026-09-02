// slide-107.js - 原型设计概述
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 107,
  title: '原型设计 | Prototype Design'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("原型设计", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("Prototype Design", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("用最简单的方式验证想法", {
    x: 0.5, y: 1.7, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 4 content cards in 2x2 grid
  const cardData = [
    { title: "原型定义", desc: "模拟最终产品的早期版本，用于测试和验证核心假设" },
    { title: "原型目的", desc: "快速获取用户反馈，降低开发风险和不确定性" },
    { title: "原型价值", desc: "用最小成本验证最大价值，避免无效投入" },
    { title: "原型类型谱系", desc: "从低保真到高保真，根据需求选择合适层级" }
  ];

  const cardW = 4.3;
  const cardH = 1.3;
  const startX = 0.5;
  const startY = 2.3;
  const gapX = 0.4;
  const gapY = 0.3;

  cardData.forEach((card, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.06, h: cardH,
      fill: { color: theme.accent }
    });

    // Card title
    slide.addText(card.title, {
      x: x + 0.2, y: y + 0.15, w: cardW - 0.3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Card description
    slide.addText(card.desc, {
      x: x + 0.2, y: y + 0.55, w: cardW - 0.3, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Fidelity spectrum bar at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.08,
    fill: { color: theme.light }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 3, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("低保真", {
    x: 0.5, y: 5.1, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addText("→", {
    x: 4.5, y: 5.1, w: 1, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
  slide.addText("高保真", {
    x: 8, y: 5.1, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "right"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("107", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
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
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-107-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
