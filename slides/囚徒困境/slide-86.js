// slide-86.js - Negotiation Framework (谈判框架设计)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 86,
  title: '谈判框架设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("谈判框架设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Four principles in 2x2 grid
  const principles = [
    {
      num: "1",
      title: "扩大蛋糕",
      english: "Expand the Pie",
      desc: "先创造价值，再分配价值"
    },
    {
      num: "2",
      title: "互惠方案",
      english: "Mutual Gains",
      desc: "寻找双方都能受益的方案"
    },
    {
      num: "3",
      title: "客观标准",
      english: "Objective Criteria",
      desc: "用外界标准支撑谈判立场"
    },
    {
      num: "4",
      title: "替代选项",
      english: "BATNA",
      desc: "明确最佳替代方案"
    }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.5;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.4;
  const gapY = 0.25;

  principles.forEach((p, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.25, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(p.num, {
      x: x + 0.25, y: y + 0.25, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(p.title, {
      x: x + 0.9, y: y + 0.2, w: 2.0, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // English
    slide.addText(p.english, {
      x: x + 0.9, y: y + 0.55, w: 2.0, h: 0.3,
      fontSize: 9, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(p.desc, {
      x: x + 3.0, y: y + 0.25, w: 1.25, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("好的框架设计让合作成为必然，而非偶然", {
    x: 0.5, y: 4.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("86", {
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
  pres.writeFile({ fileName: "slide-86-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
