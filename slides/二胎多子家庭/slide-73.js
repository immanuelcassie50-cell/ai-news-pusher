// slide-73.js - 合作性框架介绍
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 73,
  title: '合作性框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("合作性框架", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three concept cards
  const concepts = [
    { icon: "→", title: "从竞争到合作", desc: '不再是"你输我赢"，而是"共赢思维"' },
    { icon: "＆", title: '"我们"vs"你/他"', desc: '用"我们"代替"你"和"他"，增强归属感' },
    { icon: "◎", title: "共同目标", desc: "设立全家共同目标，促进团队协作" }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.5;
  const startX = 0.5;
  const cardY = 1.2;
  const gap = 0.35;

  concepts.forEach((concept, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: 0.08,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.9) / 2, y: cardY + 0.4, w: 0.9, h: 0.9,
      fill: { color: theme.primary }
    });
    slide.addText(concept.icon, {
      x: x + (cardWidth - 0.9) / 2, y: cardY + 0.4, w: 0.9, h: 0.9,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(concept.title, {
      x: x + 0.15, y: cardY + 1.5, w: cardWidth - 0.3, h: 0.7,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(concept.desc, {
      x: x + 0.15, y: cardY + 2.2, w: cardWidth - 0.3, h: 1.1,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
    });
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
  pres.writeFile({ fileName: "slide-73-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
