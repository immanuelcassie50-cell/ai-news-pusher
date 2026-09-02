// slide-26.js - Content: 写不出具体数字时的说法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '写不出具体数字时的说法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("写不出具体数字时，试试这几个说法", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Key message
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.light }
  });

  slide.addText("方向对、逻辑说得通，就足以支撑一个改善提案。", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // Example phrases
  const phrases = [
    "「根据我们Q1的投诉记录，每月约有X件因为这个原因升级投诉……」",
    "「我们知道每个月有X个客户流失，其中我们估计有约XX%和这个问题有关……」",
    "「按最保守估算，这个浪费每年消耗的人力成本不低于XX万元……」"
  ];

  phrases.forEach((phrase, i) => {
    const y = 2.0 + i * 1.0;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.85,
      fill: { color: theme.accent }
    });

    slide.addText(phrase, {
      x: 0.75, y: y + 0.1, w: 8.5, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };