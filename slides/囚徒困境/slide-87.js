// slide-87.js - Best Response Analysis (应对不同类型的对手)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 87,
  title: '应对不同类型的对手'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("应对不同类型的对手", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key principle
  slide.addText("分析对方的最优反应，设计你的策略", {
    x: 0.5, y: 1.05, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Opponent types
  const opponents = [
    {
      type: "合作型",
      color: theme.primary,
      strategy: " TFT策略\n（以牙还牙）",
      response: "初始合作，之后复制对方上一步行动"
    },
    {
      type: "竞争型",
      color: "c53030",
      strategy: " 强硬策略\n（永不先合作）",
      response: "建立可信威胁，让对方先让步"
    },
    {
      type: "随机型",
      color: theme.accent,
      strategy: " 混合策略\n（不可预测）",
      response: "保持一定不可预测性，避免被利用"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.8;
  const startX = 0.55;
  const startY = 1.55;
  const gapX = 0.25;

  opponents.forEach((opp, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.12,
      fill: { color: opp.color }
    });

    // Type label
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardWidth / 2 - 0.5, y: startY + 0.3, w: 1.0, h: 0.6,
      fill: { color: opp.color }
    });
    slide.addText(opp.type, {
      x: x + cardWidth / 2 - 0.5, y: startY + 0.35, w: 1.0, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Strategy
    slide.addText(opp.strategy, {
      x: x + 0.15, y: startY + 1.05, w: cardWidth - 0.3, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: startY + 1.7, w: cardWidth - 0.6, h: 0.02,
      fill: { color: theme.light }
    });

    // Response
    slide.addText(opp.response, {
      x: x + 0.15, y: startY + 1.8, w: cardWidth - 0.3, h: 0.9,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom note
  slide.addText("知己知彼：了解对手类型，选择针对性策略", {
    x: 0.5, y: 4.55, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("87", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-87-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
