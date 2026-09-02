// slide-100.js - SCAMPER: M (Modify 修改)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 100,
  title: 'SCAMPER | M - 修改'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.3,
    fill: { color: theme.primary }
  });

  slide.addText("SCAMPER", {
    x: 0.5, y: 0.2, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.light, charSpacing: 4
  });

  slide.addText("M - 修改", {
    x: 0.5, y: 0.45, w: 4, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("如何放大、缩小或改变？", {
    x: 5, y: 0.55, w: 4.5, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.light, align: "right"
  });

  // Four modification types - horizontal cards
  const modifications = [
    { title: "形态修改", desc: "改变形状、大小、外观" },
    { title: "功能修改", desc: "增强、减弱或改变功能" },
    { title: "体验修改", desc: "优化使用感受和交互" },
    { title: "规模修改", desc: "扩大或缩小使用范围" }
  ];

  const cardW = 2.1;
  const cardH = 2.4;
  const startX = 0.5;
  const startY = 1.6;
  const gap = 0.2;

  modifications.forEach((item, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: 0.08,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(String(i + 1).padStart(2, '0'), {
      x: x + 0.15, y: startY + 0.25, w: 0.5, h: 0.4,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.15, y: startY + 0.75, w: cardW - 0.3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.15, y: startY + 1.2, w: cardW - 0.3, h: 1,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Case study section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 1,
    fill: { color: theme.light }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 0.08, h: 1,
    fill: { color: theme.accent }
  });

  slide.addText("案例", {
    x: 0.75, y: 4.38, w: 1, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("宜家家具的平板包装设计", {
    x: 0.75, y: 4.6, w: 8.5, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("将拆卸后的家具平板化，大幅减少体积，降低运输成本，改变了整个家具行业的包装标准", {
    x: 0.75, y: 4.95, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("100", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };