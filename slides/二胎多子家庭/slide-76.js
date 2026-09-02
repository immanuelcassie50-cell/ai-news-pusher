// slide-76.js - 家庭语言公约第1页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 76,
  title: '家庭语言公约'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("家庭语言公约", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Section indicator
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fill: { color: "FFFFFF", transparency: 20 },
    rectRadius: 0.1
  });
  slide.addText("第1页", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Avoid section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("避免使用的语言", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Avoid items
  const avoidItems = [
    { icon: "X", title: "比较性语言", desc: '"你看看你哥哥..."、"你怎么不如..."、"别人家的孩子..."', color: theme.accent },
    { icon: "X", title: "指责性语言", desc: '"都是你的错"、"你怎么总是..."、"你从来都不..."', color: theme.accent },
    { icon: "X", title: "标签化语言", desc: '"你就是懒"、"你就是笨"、"你永远都..."', color: theme.accent }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.8;
  const startX = 0.5;
  const cardY = 1.8;
  const gap = 0.35;

  avoidItems.forEach((item, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.8) / 2, y: cardY + 0.3, w: 0.8, h: 0.8,
      fill: { color: item.color }
    });
    slide.addText(item.icon, {
      x: x + (cardWidth - 0.8) / 2, y: cardY + 0.3, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.15, y: cardY + 1.2, w: cardWidth - 0.3, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.15, y: cardY + 1.7, w: cardWidth - 0.3, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom note
  slide.addText("这些语言会伤害孩子自尊，破坏手足关系", {
    x: 0.5, y: 5.1, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-76-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
