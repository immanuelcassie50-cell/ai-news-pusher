// slide-37.js - 专属时间三个关键
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 37,
  title: '专属时间的三个关键'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("专属时间的三个关键", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three key principles
  const keys = [
    {
      title: "质量胜于数量",
      desc: "哪怕每天只有15分钟，全心陪伴比心不在焉的一小时更有价值",
      color: theme.primary
    },
    {
      title: "专属而非独占",
      desc: "这是我和这个孩子的特别时光，不是把他和其他孩子隔离",
      color: theme.accent
    },
    {
      title: "孩子主导",
      desc: "让孩子选择做什么，父母是陪伴者而非导演",
      color: theme.secondary
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.5;
  const startX = 0.5;
  const gap = 0.35;

  keys.forEach((key, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top colored section
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.3, w: cardWidth, h: 1.2,
      fill: { color: key.color }
    });

    // Number
    slide.addText((idx + 1).toString(), {
      x: x, y: 1.4, w: cardWidth, h: 0.6,
      fontSize: 36, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(key.title, {
      x: x + 0.15, y: 2.7, w: cardWidth - 0.3, h: 0.7,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.4, y: 3.4, w: cardWidth - 0.8, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(key.desc, {
      x: x + 0.15, y: 3.55, w: cardWidth - 0.3, h: 1.1,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
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
  pres.writeFile({ fileName: "slide-37-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
