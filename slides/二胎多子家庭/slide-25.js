// slide-25.js - 出生顺序理论
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: '出生顺序的影响'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("出生顺序的影响", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Birth order characteristics
  const orders = [
    {
      title: "老大",
      traits: ["领导者", "责任感强", "追求成就"]
    },
    {
      title: "老小",
      traits: ["会社交", "善于观察", "有创造力"]
    },
    {
      title: "中间孩子",
      traits: ["调停者", "适应力强", "社交能力强"]
    },
    {
      title: "独生",
      traits: ["早熟", "善于独处", "自我驱动"]
    }
  ];

  const cardWidth = 2.15;
  const cardHeight = 2.8;
  const startX = 0.5;
  const gap = 0.3;

  orders.forEach((order, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Title bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: 0.6,
      fill: { color: theme.secondary }
    });
    slide.addText(order.title, {
      x: x, y: 1.3, w: cardWidth, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Traits
    order.traits.forEach((trait, tIdx) => {
      const y = 2.1 + tIdx * 0.65;

      // Bullet
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.2, y: y + 0.15, w: 0.2, h: 0.2,
        fill: { color: theme.accent }
      });

      // Trait text
      slide.addText(trait, {
        x: x + 0.5, y: y, w: cardWidth - 0.7, h: 0.5,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Note at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.light, transparency: 70 }
  });
  slide.addText("注：出生顺序理论由阿德勒提出，仅供参考。每个孩子的发展受多重因素影响。", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.9,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-25-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
