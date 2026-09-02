// slide-77.js - Punishment Mechanism Design (惩罚机制设计)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 77,
  title: '惩罚机制设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("惩罚机制设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("有效的惩罚必须满足三个条件", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three conditions
  const conditions = [
    {
      title: "及时",
      english: "Timely",
      desc: "背叛发生后立即触发惩罚机制",
      icon: "1"
    },
    {
      title: "成比例",
      english: "Proportionate",
      desc: "惩罚力度与背叛程度相匹配",
      icon: "2"
    },
    {
      title: "可执行",
      english: "Enforceable",
      desc: "有足够力量确保惩罚落实",
      icon: "3"
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const startY = 1.7;
  const gapX = 0.25;

  conditions.forEach((cond, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 2.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.12,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardWidth / 2 - 0.4, y: startY + 0.4, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(cond.icon, {
      x: x + cardWidth / 2 - 0.4, y: startY + 0.4, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(cond.title, {
      x: x + 0.15, y: startY + 1.35, w: cardWidth - 0.3, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English
    slide.addText(cond.english, {
      x: x + 0.15, y: startY + 1.75, w: cardWidth - 0.3, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.5, y: startY + 2.1, w: cardWidth - 1.0, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(cond.desc, {
      x: x + 0.15, y: startY + 2.2, w: cardWidth - 0.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Warning box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.8,
    fill: { color: "c53030", transparency: 90 },
    line: { color: "c53030", width: 1 }
  });
  slide.addText("惩罚过轻 = 无效约束  |  惩罚过重 = 合作关系破裂", {
    x: 0.5, y: 4.5, w: 9, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "c53030", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("77", {
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
  pres.writeFile({ fileName: "slide-77-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
