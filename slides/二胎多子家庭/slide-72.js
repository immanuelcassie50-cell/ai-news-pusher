// slide-72.js - 描述性语言练习参考答案
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 72,
  title: '参考答案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("参考答案", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Answer items
  const answers = [
    {
      num: "1",
      before: '"你弟弟都比你强"',
      after: '"我看到你在努力，这次比上次进步了3分"'
    },
    {
      num: "2",
      before: '"你怎么不学学姐姐"',
      after: '"你也有自己的长处，比如画画时很专注"'
    },
    {
      num: "3",
      before: '"他们都能做到，你为什么不行"',
      after: '"这件事对你来说有点难，我们一起想办法"'
    }
  ];

  const cardWidth = 9;
  const cardHeight = 1.2;
  const startX = 0.5;
  const startY = 1.1;
  const gap = 0.15;

  answers.forEach((item, idx) => {
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

    // Before text (smaller, with strikethrough concept)
    slide.addText("Before: " + item.before, {
      x: startX + 0.9, y: y + 0.15, w: cardWidth - 1.1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "left", valign: "middle"
    });

    // After text (emphasized)
    slide.addText("→ After: " + item.after, {
      x: startX + 0.9, y: y + 0.55, w: cardWidth - 1.1, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });
  });

  // Key insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("核心原则：描述具体行为，表达信任和支持", {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "slide-72-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
