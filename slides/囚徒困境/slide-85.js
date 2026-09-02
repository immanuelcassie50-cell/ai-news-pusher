// slide-85.js - Game Theory in Negotiation (博弈论与谈判策略)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 85,
  title: '博弈论与谈判策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("博弈论与谈判策略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key principle
  slide.addText("将博弈论应用于谈判，设计让对方合作的策略", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three key applications
  const apps = [
    {
      title: "分析对手动机",
      desc: "理解对方的最优反应是什么",
      example: "如果我提价，对手会怎么做？"
    },
    {
      title: "设计诱因",
      desc: "让合作成为对方的最优选择",
      example: "设计激励让对方愿意合作"
    },
    {
      title: "策略互动",
      desc: "考虑双方决策的相互影响",
      example: "我的行动会如何影响对方下一步？"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.6;
  const startX = 0.55;
  const startY = 1.65;
  const gapX = 0.25;

  apps.forEach((app, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.1,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText((idx + 1).toString(), {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.25, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(app.title, {
      x: x + 0.15, y: startY + 1.0, w: cardWidth - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(app.desc, {
      x: x + 0.15, y: startY + 1.4, w: cardWidth - 0.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: startY + 1.85, w: cardWidth - 0.6, h: 0.02,
      fill: { color: theme.light }
    });

    // Example
    slide.addText("例如：" + app.example, {
      x: x + 0.15, y: startY + 1.95, w: cardWidth - 0.3, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.45, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("换位思考：站在对方角度思考最优策略", {
    x: 0.5, y: 4.45, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("85", {
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
  pres.writeFile({ fileName: "slide-85-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
