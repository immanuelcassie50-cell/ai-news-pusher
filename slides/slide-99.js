// slide-99.js - 博弈论与谈判策略
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 99,
  title: '博弈论与谈判策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("博弈论与谈判策略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("将博弈论应用于实际谈判", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three key principles as cards
  const principles = [
    {
      title: "了解你的BATNA",
      desc: "Best Alternative to Negotiated Agreement\n你的最佳替代方案是什么？\n这决定了你的底线",
      color: theme.primary
    },
    {
      title: "理解对方激励",
      desc: "对方的核心利益是什么？\n他们在担心什么？\n找到利益的交叉点",
      color: theme.accent
    },
    {
      title: "设计利益对齐机制",
      desc: "如何让双方都愿意合作？\n结构化安排让利益一致\n而不是零和博弈",
      color: theme.secondary
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.5;
  const startX = 0.5;
  const gap = 0.35;

  principles.forEach((p, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card
    slide.addShape("roundRect", {
      x: x, y: 1.65, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 },
      rectRadius: 0.1
    });

    // Top accent bar
    slide.addShape("rect", {
      x: x, y: 1.65, w: cardWidth, h: 0.08,
      fill: { color: p.color }
    });

    // Title
    slide.addText(p.title, {
      x: x + 0.15, y: 1.85, w: cardWidth - 0.3, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: p.color, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(p.desc, {
      x: x + 0.15, y: 2.4, w: cardWidth - 0.3, h: 1.65,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom insight box
  slide.addShape("roundRect", {
    x: 0.5, y: 4.4, w: 9, h: 1.0,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });

  slide.addText("核心洞察", {
    x: 0.7, y: 4.5, w: 1.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("好的谈判不是'赢得'对方，而是找到双方利益的最大交集", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("99", {
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
  pres.writeFile({ fileName: "slide-99-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
