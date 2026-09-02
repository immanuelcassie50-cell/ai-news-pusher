// slide-101.js - SCAMPER: P (Put to other uses 其它用途)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 101,
  title: 'SCAMPER | P - 其它用途'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("SCAMPER", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, charSpacing: 4
  });

  slide.addText("P - 其它用途", {
    x: 0.5, y: 0.55, w: 5, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("还能用在什么地方？", {
    x: 0.5, y: 1.05, w: 4, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Four uses in a flow layout
  const uses = [
    { title: "跨界应用", desc: "在不同行业领域使用" },
    { title: "场景迁移", desc: "应用于全然不同的场景" },
    { title: "价值重塑", desc: "挖掘新的价值主张" },
    { title: "用户延展", desc: "面向不同的用户群体" }
  ];

  const startY = 1.55;
  const itemH = 0.7;
  const gap = 0.12;

  uses.forEach((item, i) => {
    const y = startY + i * (itemH + gap);

    // Row background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: itemH,
      fill: { color: "FFFFFF" }
    });

    // Left accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: itemH,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.75, y: y + 0.12, w: 0.46, h: 0.46,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.75, y: y + 0.12, w: 0.46, h: 0.46,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.4, y: y + 0.1, w: 2, h: 0.3,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: 1.4, y: y + 0.38, w: 7.5, h: 0.28,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Arrow between rows
  for (let i = 0; i < 3; i++) {
    const y = startY + (i + 1) * (itemH + gap) - gap / 2 - 0.06;
    slide.addText("↓", {
      x: 0.9, y: y, w: 0.3, h: 0.2,
      fontSize: 10, fontFace: "Arial",
      color: theme.light, align: "center"
    });
  }

  // Case study
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("案例  军用技术转民用", {
    x: 0.7, y: 4.68, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("GPS定位、互联网、无人机技术最初为军事目的开发，如今广泛应用于民用领域，创造出全新的市场", {
    x: 0.7, y: 4.98, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("101", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };