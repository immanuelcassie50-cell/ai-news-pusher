// slide-06.js - Self-assessment 1 (你是哪种家庭类型)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '你是哪种家庭类型？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("你是哪种家庭类型？", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three types in horizontal cards
  const types = [
    {
      label: "A",
      title: "准备型",
      desc: "正在考虑生育二胎"
    },
    {
      label: "B",
      title: "过渡型",
      desc: "已有二胎，处于适应期"
    },
    {
      label: "C",
      title: "稳定型",
      desc: "多子家庭，面临日常挑战"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.2;
  const startX = 0.5;
  const cardY = 1.4;
  const gap = 0.35;

  types.forEach((type, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }
    });

    // Label letter
    slide.addText(type.label, {
      x: x, y: cardY + 0.4, w: cardWidth, h: 0.8,
      fontSize: 48, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(type.title, {
      x: x + 0.2, y: cardY + 1.4, w: cardWidth - 0.4, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(type.desc, {
      x: x + 0.2, y: cardY + 2.1, w: cardWidth - 0.4, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
