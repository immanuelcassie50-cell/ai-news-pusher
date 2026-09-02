// slide-79.js - Reputation Mechanisms (声誉机制的作用)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 79,
  title: '声誉机制的作用'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("声誉机制的作用", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Core concept
  slide.addText("声誉是长期博弈中的\"第二张合同\"", {
    x: 0.5, y: 1.1, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // How reputation works
  const mechanisms = [
    {
      title: "信息传递",
      desc: "商业社区内消息传播迅速",
      example: "行业圈子、商会、协会"
    },
    {
      title: "声誉惩罚",
      desc: "坏名声导致被排除在外",
      example: "黑名单、拒绝合作"
    },
    {
      title: "声誉奖励",
      desc: "好名声带来更多机会",
      example: "优先合作、优惠条款"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.3;
  const startX = 0.55;
  const startY = 1.7;
  const gapX = 0.25;

  mechanisms.forEach((mech, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(mech.title, {
      x: x + 0.2, y: startY + 0.2, w: cardWidth - 0.35, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(mech.desc, {
      x: x + 0.2, y: startY + 0.7, w: cardWidth - 0.35, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: startY + 1.25, w: cardWidth - 0.4, h: 0.02,
      fill: { color: theme.light }
    });

    // Example
    slide.addText("例如：" + mech.example, {
      x: x + 0.2, y: startY + 1.4, w: cardWidth - 0.35, h: 0.8,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "top"
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1 }
  });
  slide.addText("背叛一次，声誉受损，未来的合作机会也会减少", {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("79", {
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
  pres.writeFile({ fileName: "slide-79-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
