// slide-03.js - Content Page: 为什么学习斯密？
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '为什么学习斯密？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page title
  slide.addText("为什么学习斯密？", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("The Living Legacy of Adam Smith", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: theme.light, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Main content - Two columns
  const leftColX = 0.5;
  const rightColX = 5.2;
  const startY = 1.6;

  // Left column - Reasons
  const reasons = [
    { title: "经济学之父", desc: "现代经济学的奠基人，《国富论》开创了自由市场理论" },
    { title: "道德哲学先驱", desc: "《道德情操论》探讨同理心、正义与美德" },
    { title: "思想史坐标", desc: "理解自由主义、资本主义、全球化的思想源头" }
  ];

  reasons.forEach((item, i) => {
    const y = startY + i * 1.1;

    // Accent dot
    slide.addShape(pres.shapes.OVAL, {
      x: leftColX, y: y + 0.15, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(item.title, {
      x: leftColX + 0.4, y: y, w: 4, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: leftColX + 0.4, y: y + 0.4, w: 4.2, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Right column - Quote box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightColX, y: startY, w: 4.3, h: 2.8,
    fill: { color: theme.secondary }
  });

  // Quote mark
  slide.addText('"', {
    x: rightColX + 0.2, y: startY + 0.1, w: 0.6, h: 0.8,
    fontSize: 60, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "left", valign: "top"
  });

  // Quote text
  slide.addText("斯密教我们理解市场的力量，也提醒我们市场的道德边界。", {
    x: rightColX + 0.3, y: startY + 0.8, w: 3.7, h: 1.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "top"
  });

  // Quote attribution
  slide.addText("——理解斯密的现代意义", {
    x: rightColX + 0.3, y: startY + 2.2, w: 3.7, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "right", valign: "middle"
  });

  // Bottom insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 10 }
  });

  slide.addText('斯密不是简单的"市场原教旨主义者"，他的思想远比流行标签复杂。', {
    x: 0.7, y: 4.7, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
