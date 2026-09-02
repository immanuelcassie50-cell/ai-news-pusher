// slide-66.js - Direction 1: Increase Cost of Betrayal (方向一：提高背叛成本)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 66,
  title: '方向一：提高背叛成本'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("方向一：提高背叛成本", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Introduction text
  slide.addText("核心逻辑：让背叛的代价高于背叛的收益", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three methods
  const methods = [
    {
      icon: "$",
      title: "经济惩罚",
      subtitle: "Financial Penalties",
      points: ["违约金条款", "赔偿损失", "没收保证金"]
    },
    {
      icon: "§",
      title: "法律后果",
      subtitle: "Legal Consequences",
      points: ["诉讼风险", "合同强制执行", "信用记录影响"]
    },
    {
      icon: "×",
      title: "关系成本",
      subtitle: "Relationship Costs",
      points: ["声誉损失", "信任破裂", "未来合作机会丧失"]
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.0;
  const startX = 0.55;
  const startY = 1.75;
  const gapX = 0.25;

  methods.forEach((method, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Icon
    slide.addText(method.icon, {
      x: x + 0.2, y: startY + 0.15, w: 0.6, h: 0.6,
      fontSize: 28, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(method.title, {
      x: x + 0.8, y: startY + 0.2, w: 1.9, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // English subtitle
    slide.addText(method.subtitle, {
      x: x + 0.8, y: startY + 0.55, w: 1.9, h: 0.3,
      fontSize: 9, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });

    // Points
    method.points.forEach((point, pIdx) => {
      const py = startY + 1.1 + pIdx * 0.55;

      // Bullet circle
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.3, y: py + 0.12, w: 0.15, h: 0.15,
        fill: { color: theme.accent }
      });

      slide.addText(point, {
        x: x + 0.55, y: py, w: 2.2, h: 0.4,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Page number badge
  slide.addText("66", {
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
  pres.writeFile({ fileName: "slide-66-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
