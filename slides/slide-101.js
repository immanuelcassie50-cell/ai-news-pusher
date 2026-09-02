// slide-101.js - Coalition Building
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 101,
  title: '联盟与利益集团'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("联盟与利益集团", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main concept
  slide.addText("当多方参与时：联合起来改变博弈结构", {
    x: 0.5, y: 1.15, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three key aspects as horizontal cards
  const aspects = [
    {
      title: "建立联盟",
      points: ["找到利益一致的伙伴", "形成集体议价能力", "改变谈判力量对比"],
      color: theme.primary
    },
    {
      title: "改变博弈",
      points: ["从竞争转为合作", "扩大正和空间", "创造共同利益"],
      color: theme.accent
    },
    {
      title: "增强地位",
      points: ["提升谈判筹码", "分散背叛风险", "实现多方共赢"],
      color: theme.secondary
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.0;
  const startX = 0.5;
  const gap = 0.35;

  aspects.forEach((asp, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape("roundRect", {
      x: x, y: 1.75, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.08
    });

    // Top colored bar
    slide.addShape("rect", {
      x: x, y: 1.75, w: cardWidth, h: 0.08,
      fill: { color: asp.color }
    });

    // Title
    slide.addText(asp.title, {
      x: x + 0.15, y: 1.95, w: cardWidth - 0.3, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: asp.color, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.3, y: 2.5, w: cardWidth - 0.6, h: 0.015,
      fill: { color: theme.light }
    });

    // Points
    asp.points.forEach((point, pIdx) => {
      slide.addText("•  " + point, {
        x: x + 0.2, y: 2.65 + pIdx * 0.55, w: cardWidth - 0.4, h: 0.5,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 4.95, w: 9, h: 0.5,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("联盟的力量在于：改变博弈本身，而不只是赢得现有的游戏", {
    x: 0.5, y: 4.95, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("101", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-101-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
