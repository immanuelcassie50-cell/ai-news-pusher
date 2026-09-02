// slide-92.js - Scaling Challenges (机制实施的规模挑战)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 92,
  title: '机制实施的规模挑战'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("机制实施的规模挑战", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Quote
  slide.addText("从小规模合作到大规模生态，机制需要升级", {
    x: 0.5, y: 1.05, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Three challenges
  const challenges = [
    {
      title: "信息传递衰减",
      desc: "层级越多，信息失真越严重",
      solution: "建立透明的信息渠道"
    },
    {
      title: "监督成本上升",
      desc: "参与方越多，监测越困难",
      solution: "利用技术降低监督成本"
    },
    {
      title: "信任传递障碍",
      desc: "间接合作难以建立信任",
      solution: "通过中介或声誉机制"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.4;
  const startX = 0.55;
  const startY = 1.55;
  const gapX = 0.25;

  challenges.forEach((ch, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.1,
      fill: { color: theme.primary }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText((idx + 1).toString(), {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.25, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(ch.title, {
      x: x + 0.15, y: startY + 0.95, w: cardWidth - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: startY + 1.4, w: cardWidth - 0.6, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(ch.desc, {
      x: x + 0.15, y: startY + 1.5, w: cardWidth - 0.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Solution
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: startY + 1.9, w: cardWidth - 0.4, h: 0.4,
      fill: { color: theme.accent, transparency: 80 }
    });
    slide.addText("解法：" + ch.solution, {
      x: x + 0.2, y: startY + 1.9, w: cardWidth - 0.4, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("规模越大，越需要制度化，而非依赖个人信任", {
    x: 0.5, y: 4.2, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("92", {
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
  pres.writeFile({ fileName: "slide-92-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
