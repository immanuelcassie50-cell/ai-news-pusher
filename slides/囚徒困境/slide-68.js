// slide-68.js - Escrow Mechanisms (保证金与托管机制)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '保证金与托管机制'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("保证金与托管机制", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main diagram area
  // Left: Party A
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.8, w: 2.2, h: 1.4,
    fill: { color: theme.primary }
  });
  slide.addText("甲方", {
    x: 0.6, y: 1.9, w: 2.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("存入保证金", {
    x: 0.6, y: 2.4, w: 2.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Right: Party B
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.2, y: 1.8, w: 2.2, h: 1.4,
    fill: { color: theme.primary }
  });
  slide.addText("乙方", {
    x: 7.2, y: 1.9, w: 2.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("存入保证金", {
    x: 7.2, y: 2.4, w: 2.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Center: Escrow
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 1.5, w: 3, h: 2.0,
    fill: { color: theme.accent }
  });
  slide.addText("第三方托管", {
    x: 3.5, y: 1.7, w: 3, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("ESCROW", {
    x: 3.5, y: 2.3, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });
  slide.addText("双方共同信任的中立方", {
    x: 3.5, y: 2.7, w: 3, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Arrows (using lines)
  slide.addShape(pres.shapes.LINE, {
    x: 2.8, y: 2.5, w: 0.7, h: 0,
    line: { color: theme.secondary, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 6.5, y: 2.5, w: 0.7, h: 0,
    line: { color: theme.secondary, width: 2 }
  });

  // Key principles at bottom
  const principles = [
    { title: "对等存入", desc: "双方同时拿出等额筹码" },
    { title: "条件释放", desc: "义务完成后才能拿回" },
    { title: "惩罚归属", desc: "违约方损失保证金" }
  ];

  const cardWidth = 2.9;
  const startX = 0.6;
  const startY = 3.7;
  const gapX = 0.25;

  principles.forEach((p, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 1.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(p.title, {
      x: x + 0.15, y: startY + 0.15, w: cardWidth - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(p.desc, {
      x: x + 0.15, y: startY + 0.55, w: cardWidth - 0.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("68", {
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
  pres.writeFile({ fileName: "slide-68-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
