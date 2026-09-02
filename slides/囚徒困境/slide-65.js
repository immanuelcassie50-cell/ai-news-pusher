// slide-65.js - Three Directions Overview (机制设计的三个方向)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 65,
  title: '机制设计的三个方向'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("机制设计的三个方向", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three pillars
  const pillars = [
    {
      num: "1",
      title: "提高背叛成本",
      subtitle: "Increase cost of betrayal",
      desc: "让背叛行为的代价超过收益"
    },
    {
      num: "2",
      title: "增加未来价值",
      subtitle: "Increase future value",
      desc: "让长期合作收益高于短期背叛"
    },
    {
      num: "3",
      title: "建立识别机制",
      subtitle: "Detection & punishment",
      desc: "让背叛无处遁形、惩罚及时有效"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.5;
  const startX = 0.55;
  const startY = 1.3;
  const gapX = 0.25;

  pillars.forEach((pillar, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.12,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardWidth / 2 - 0.35, y: startY + 0.4, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(pillar.num, {
      x: x + cardWidth / 2 - 0.35, y: startY + 0.4, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(pillar.title, {
      x: x + 0.15, y: startY + 1.3, w: cardWidth - 0.3, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English subtitle
    slide.addText(pillar.subtitle, {
      x: x + 0.15, y: startY + 1.85, w: cardWidth - 0.3, h: 0.4,
      fontSize: 10, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.6, y: startY + 2.35, w: cardWidth - 1.2, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(pillar.desc, {
      x: x + 0.15, y: startY + 2.5, w: cardWidth - 0.3, h: 0.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom note
  slide.addText("三条路径相辅相成，共同构建稳固的合作关系", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("65", {
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
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
