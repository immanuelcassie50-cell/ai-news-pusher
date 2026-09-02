// slide-60.js - Content: 斯密论教育
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 60,
  title: '斯密论教育'
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
  slide.addText("斯密论教育", {
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

  // Left side - Main concept
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.25, w: 4.3, h: 1.5,
    fill: { color: theme.secondary }
  });

  slide.addText("人力资本投资", {
    x: 0.7, y: 1.35, w: 3.9, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("斯密最早提出教育作为人力资本投资的概念，认为对人的投资是最有价值的投资。", {
    x: 0.7, y: 1.85, w: 3.9, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Right side - four concept cards in 2x2 grid
  const cardW = 2.15;
  const cardH = 1.1;
  const startX = 5.1;
  const startY = 1.25;
  const gapX = 0.2;
  const gapY = 0.15;

  // Card positions
  const positions = [
    { x: startX, y: startY },
    { x: startX + cardW + gapX, y: startY },
    { x: startX, y: startY + cardH + gapY },
    { x: startX + cardW + gapX, y: startY + cardH + gapY }
  ];

  const contents = [
    { title: "个人发展", desc: "教育提升个人能力与收入潜力" },
    { title: "社会进步", desc: "国民素质提升推动社会繁荣" },
    { title: "国家教育", desc: "政府有责任普及基础教育" },
    { title: "市场教育", desc: "市场提供职业与专业培训" }
  ];

  positions.forEach((pos, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: pos.x, y: pos.y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    slide.addText(contents[i].title, {
      x: pos.x + 0.1, y: pos.y + 0.1, w: cardW - 0.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(contents[i].desc, {
      x: pos.x + 0.1, y: pos.y + 0.45, w: cardW - 0.2, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom section - Key insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 9, h: 2.2,
    fill: { color: theme.light },
    transparency: 40
  });

  slide.addText("穷人教育与阶层流动：斯密的远见", {
    x: 0.7, y: 3.15, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "斯密认为，穷人的教育关系到整个社会的利益", options: { bullet: true, breakLine: true } },
    { text: "教育机会的不平等会固化社会阶层", options: { bullet: true, breakLine: true } },
    { text: "国家应确保所有儿童接受基本教育，无论贫富", options: { bullet: true, breakLine: true } },
    { text: "这一观点领先于时代200年", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.6, w: 8.6, h: 1.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    paraSpaceAfter: 6
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("60", {
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
  pres.writeFile({ fileName: "slide-60-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
