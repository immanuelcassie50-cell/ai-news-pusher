// slide-64.js - Content: 斯密思想的多维遗产
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 64,
  title: '斯密思想的多维遗产'
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
  slide.addText("斯密思想的多维遗产", {
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

  // 2x2 grid of dimension cards
  const cardW = 4.35;
  const cardH = 1.85;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.3;
  const gapY = 0.2;

  const dimensions = [
    {
      title: "经济学维度",
      subtitle: "古典政治经济学奠基人",
      points: ["《国富论》开创性研究", "劳动价值论的早期形式", "分工与专业化理论"],
      color: theme.primary
    },
    {
      title: "伦理学维度",
      subtitle: "美德伦理学的现代形态",
      points: ["同情心作为道德基础", "旁观者视角的道德判断", "美德与自利的调和"],
      color: theme.secondary
    },
    {
      title: "社会学维度",
      subtitle: "社会分工与合作秩序",
      points: ["劳动分工的社会意义", "社会凝聚力的来源", "从孤立到社会性"],
      color: theme.light
    },
    {
      title: "政治学维度",
      subtitle: "有限政府与法治精神",
      points: ["守夜人政府理论", "法治优于人治", "制度与正义框架"],
      color: theme.accent
    }
  ];

  const positions = [
    { x: startX, y: startY },
    { x: startX + cardW + gapX, y: startY },
    { x: startX, y: startY + cardH + gapY },
    { x: startX + cardW + gapX, y: startY + cardH + gapY }
  ];

  dimensions.forEach((dim, i) => {
    const pos = positions[i];

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: pos.x, y: pos.y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Header bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: pos.x, y: pos.y, w: cardW, h: 0.5,
      fill: { color: dim.color }
    });

    // Title
    slide.addText(dim.title, {
      x: pos.x + 0.15, y: pos.y, w: cardW - 0.3, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      valign: "middle"
    });

    // Subtitle
    slide.addText(dim.subtitle, {
      x: pos.x + 0.15, y: pos.y + 0.55, w: cardW - 0.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: dim.color, bold: true
    });

    // Points
    slide.addText(dim.points.map((p, idx) => ({
      text: p,
      options: { bullet: true, breakLine: idx < dim.points.length - 1 }
    })), {
      x: pos.x + 0.15, y: pos.y + 0.85, w: cardW - 0.3, h: 0.9,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      paraSpaceAfter: 2
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("64", {
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
  pres.writeFile({ fileName: "slide-64-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
