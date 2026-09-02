// slide-22.js - Content: 开场话术要求
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 22,
  title: "开场话术要求"
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
  slide.addText("开场话术要求", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Three requirement cards
  const cards = [
    {
      num: "1",
      title: "情绪接住优先",
      desc: "先共情，后解释"
    },
    {
      num: "2",
      title: "体现主动性",
      desc: '"我今天正想联系您"而不是"您好"'
    },
    {
      num: "3",
      title: "开放式问题",
      desc: "让客户开口说话"
    }
  ];

  cards.forEach((card, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.1, w: 2.9, h: 3.8,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.8,
      fill: { color: theme.secondary }
    });
    slide.addText(card.num, {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.8,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(card.title, {
      x: x + 0.2, y: 2.4, w: 2.5, h: 0.8,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(card.desc, {
      x: x + 0.2, y: 3.3, w: 2.5, h: 1.2,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "top"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("22", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };