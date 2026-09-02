// slide-71.js - 描述性语言练习
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 71,
  title: '练习：转换语言'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：转换语言", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Instruction
  slide.addText("将下面的比较性语言转换为描述性语言", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left", valign: "middle"
  });

  // Practice items
  const practices = [
    { num: "1", before: '"你弟弟都比你强"', after: "我的转换：" },
    { num: "2", before: '"你怎么不学学姐姐"', after: "我的转换：" },
    { num: "3", before: '"他们都能做到，你为什么不行"', after: "我的转换：" }
  ];

  const cardWidth = 9;
  const cardHeight = 1.2;
  const startX = 0.5;
  const startY = 1.65;
  const gap = 0.15;

  practices.forEach((item, idx) => {
    const y = startY + idx * (cardHeight + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: startX + 0.2, y: y + 0.35, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: startX + 0.2, y: y + 0.35, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Before text
    slide.addText(item.before, {
      x: startX + 0.9, y: y + 0.15, w: 4, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "left", valign: "middle"
    });

    // After text
    slide.addText(item.after, {
      x: startX + 0.9, y: y + 0.6, w: 7.8, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });

    // Writing line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX + 2.0, y: y + 0.75, w: 7, h: 0.02,
      fill: { color: theme.light, transparency: 50 }
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.1, w: 0.05, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("先自己想一想，再看参考答案", {
    x: 0.7, y: 5.1, w: 8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-71-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
