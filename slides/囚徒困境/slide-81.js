// slide-81.js - Trust Building (信任的建立与维护)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 81,
  title: '信任的建立与维护'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("信任的建立与维护", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Quote
  slide.addText("\"信任不是给予的，是挣来的\"", {
    x: 0.5, y: 1.1, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Three pillars of trust
  const pillars = [
    {
      title: "重复互动",
      english: "Repeated Interaction",
      desc: "通过多次合作积累信任",
      icon: "1"
    },
    {
      title: "可靠表现",
      english: "Reliability",
      desc: "言行一致，说到做到",
      icon: "2"
    },
    {
      title: "透明沟通",
      english: "Transparency",
      desc: "信息公开，决策可见",
      icon: "3"
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const startY = 1.7;
  const gapX = 0.25;

  pillars.forEach((pillar, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 2.4,
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
      x: x + cardWidth / 2 - 0.35, y: startY + 0.3, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(pillar.icon, {
      x: x + cardWidth / 2 - 0.35, y: startY + 0.3, w: 0.7, h: 0.7,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(pillar.title, {
      x: x + 0.15, y: startY + 1.1, w: cardWidth - 0.3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English
    slide.addText(pillar.english, {
      x: x + 0.15, y: startY + 1.45, w: cardWidth - 0.3, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.4, y: startY + 1.75, w: cardWidth - 0.8, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(pillar.desc, {
      x: x + 0.15, y: startY + 1.85, w: cardWidth - 0.3, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("信任需要时间积累，但可能因一次背叛而崩塌", {
    x: 0.5, y: 4.35, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("81", {
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
  pres.writeFile({ fileName: "slide-81-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
