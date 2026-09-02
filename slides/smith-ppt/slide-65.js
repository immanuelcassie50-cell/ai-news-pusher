// slide-65.js - Content: 斯密与当代中国的关系
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 65,
  title: '斯密与当代中国的关系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("斯密与当代中国的关系", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Timeline layout
  // Timeline horizontal line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.0, w: 8.4, h: 0.04,
    fill: { color: theme.light }
  });

  // Timeline nodes
  const timelineNodes = [
    { x: 1.3, year: "1978", label: "改革开放" },
    { x: 3.5, year: "1990s", label: "市场经济改革" },
    { x: 5.7, year: "2000s", label: "深化市场改革" },
    { x: 7.9, year: "Today", label: "新发展格局" }
  ];

  timelineNodes.forEach((node) => {
    // Node circle
    slide.addShape(pres.shapes.OVAL, {
      x: node.x - 0.15, y: 1.85, w: 0.3, h: 0.3,
      fill: { color: theme.primary }
    });

    // Year
    slide.addText(node.year, {
      x: node.x - 0.5, y: 1.5, w: 1, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Label
    slide.addText(node.label, {
      x: node.x - 0.7, y: 2.2, w: 1.4, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Content cards below timeline
  const cardY = 2.9;
  const cardW = 2.9;
  const cardH = 2.3;
  const cardGap = 0.25;

  // Card 1
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: cardY, w: cardW, h: 0.45,
    fill: { color: theme.primary }
  });

  slide.addText("重新发现斯密", {
    x: 0.5, y: cardY, w: cardW, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("改革开放后，中国学者重新认识斯密，摆脱意识形态束缚", {
    x: 0.65, y: cardY + 0.55, w: cardW - 0.3, h: 1.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 2
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + cardGap, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + cardW + cardGap, y: cardY, w: cardW, h: 0.45,
    fill: { color: theme.secondary }
  });

  slide.addText("斯密来了吗？", {
    x: 0.5 + cardW + cardGap, y: cardY, w: cardW, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("市场经济改革是否意味着斯密的胜利？中国模式与斯密理想的距离", {
    x: 0.65 + cardW + cardGap, y: cardY + 0.55, w: cardW - 0.3, h: 1.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Card 3
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (cardW + cardGap), y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5 + 2 * (cardW + cardGap), y: cardY, w: cardW, h: 0.45,
    fill: { color: theme.accent }
  });

  slide.addText("斯密 vs 凯恩斯", {
    x: 0.5 + 2 * (cardW + cardGap), y: cardY, w: cardW, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("政府与市场的边界之争：斯密强调有限政府，凯恩斯主张积极干预", {
    x: 0.65 + 2 * (cardW + cardGap), y: cardY + 0.55, w: cardW - 0.3, h: 1.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("65", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
