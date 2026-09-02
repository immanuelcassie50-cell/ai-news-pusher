// slide-03.js - Course Positioning (课程定位)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '课程定位'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程定位", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three cards layout
  const cards = [
    {
      title: "课程类型",
      content: "企业内训 / 方法论工作坊",
      icon: "01"
    },
    {
      title: "目标受众",
      content: "客户经理与客户成功团队",
      icon: "02"
    },
    {
      title: "先修要求",
      content: "无特别要求",
      icon: "03"
    }
  ];

  const cardWidth = 2.8;
  const cardHeight = 2.8;
  const startX = 0.65;
  const cardY = 1.6;
  const gap = 0.35;

  cards.forEach((card, idx) => {
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
      fill: { color: theme.primary }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.6) / 2, y: cardY + 0.4, w: 0.6, h: 0.6,
      fill: { color: theme.light }
    });
    slide.addText(card.icon, {
      x: x + (cardWidth - 0.6) / 2, y: cardY + 0.4, w: 0.6, h: 0.6,
      fontSize: 16, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Card title
    slide.addText(card.title, {
      x: x + 0.15, y: cardY + 1.2, w: cardWidth - 0.3, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Card content
    slide.addText(card.content, {
      x: x + 0.15, y: cardY + 1.8, w: cardWidth - 0.3, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3A",
    secondary: "4A4E69",
    accent: "9A8C98",
    light: "E8E8E8",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
