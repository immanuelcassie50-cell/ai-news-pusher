// slide-08.js - Content Page: 理解斯密的不同视角
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '理解斯密的不同视角'
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
  slide.addText("理解斯密的不同视角", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("同一思想，不同解读", {
    x: 0.5, y: 0.95, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Four perspectives in 2x2 grid
  const cardW = 4.35;
  const cardH = 1.85;
  const startX = 0.5;
  const startY = 1.5;
  const gapX = 0.3;
  const gapY = 0.25;

  const perspectives = [
    {
      title: "自由市场的圣徒",
      icon: "→",
      desc: '新古典经济学、芝加哥学派将斯密视为自由放任经济的代言人，强调"看不见的手"的自动调节机制。',
      thinker: "代表：弗里德曼、哈耶克"
    },
    {
      title: "制度主义者",
      icon: "◊",
      desc: "强调斯密对制度、法律框架的重视。市场需要正义的制度环境，而非无政府状态。",
      thinker: "代表：诺斯、Acemoglu"
    },
    {
      title: "道德哲学家",
      icon: "♦",
      desc: "回归《道德情操论》，强调斯密的伦理关切。市场成功需要道德基础——信任、同理心、美德。",
      thinker: "代表：Sen、MacIntyre"
    },
    {
      title: "批判理论家",
      icon: "✕",
      desc: "批判斯密为资本主义辩护。指出其对劳动分工、异化的忽视，对工人阶级的影响。",
      thinker: "代表：马克思传统"
    }
  ];

  perspectives.forEach((p, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.1, h: cardH,
      fill: { color: i === 0 ? theme.primary : (i === 1 ? theme.accent : (i === 2 ? theme.light : theme.secondary)) }
    });

    // Title
    slide.addText(p.title, {
      x: x + 0.25, y: y + 0.15, w: cardW - 0.4, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(p.desc, {
      x: x + 0.25, y: y + 0.55, w: cardW - 0.4, h: 0.85,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });

    // Thinker attribution
    slide.addText(p.thinker, {
      x: x + 0.25, y: y + 1.45, w: cardW - 0.4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false, italic: true,
      align: "left", valign: "middle"
    });
  });

  // Bottom note
  slide.addText("斯密思想的复杂性：他是自由市场者还是制度主义者？是个人主义者还是社群主义者？", {
    x: 0.5, y: 5.15, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("8", {
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
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
