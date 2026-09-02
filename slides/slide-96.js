// slide-96.js - Reputation Investment Strategy
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 96,
  title: '声誉投资策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("声誉投资策略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three investment principles as cards
  const principles = [
    {
      title: "时间一致性",
      desc: "长期保持一致的行为模式，让他人能预测你的反应",
      icon: "1"
    },
    {
      title: "超额付出",
      desc: "在没有要求时主动做善事，积累善意储备",
      icon: "2"
    },
    {
      title: "承诺兑现",
      desc: "每一个承诺都认真对待，从不失信",
      icon: "3"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.2;
  const startX = 0.5;
  const gap = 0.35;

  principles.forEach((p, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape("roundRect", {
      x: x, y: 1.3, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 },
      rectRadius: 0.1
    });

    // Top colored section
    slide.addShape("rect", {
      x: x, y: 1.3, w: cardWidth, h: 1.0,
      fill: { color: idx === 0 ? theme.primary : idx === 1 ? theme.accent : theme.secondary }
    });

    // Number
    slide.addText(p.icon, {
      x: x, y: 1.35, w: cardWidth, h: 0.5,
      fontSize: 32, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(p.title, {
      x: x + 0.15, y: 2.4, w: cardWidth - 0.3, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.4, y: 3.0, w: cardWidth - 0.8, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(p.desc, {
      x: x + 0.15, y: 3.15, w: cardWidth - 0.3, h: 1.2,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom note
  slide.addText("声誉投资与金融投资一样，需要耐心和纪律", {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("96", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "slide-96-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
