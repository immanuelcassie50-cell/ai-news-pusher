// slide-102.js - SCAMPER: E (Eliminate 消除)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 102,
  title: 'SCAMPER | E - 消除'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: theme.primary }
  });

  slide.addText("SCAMPER", {
    x: 0.5, y: 0.2, w: 3, h: 0.25,
    fontSize: 11, fontFace: "Arial",
    color: theme.light, charSpacing: 4
  });

  slide.addText("E - 消除", {
    x: 0.5, y: 0.42, w: 4, h: 0.5,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("什么可以去除或简化？", {
    x: 5.5, y: 0.5, w: 4, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.light, align: "right"
  });

  // Four elimination types - diagonal layout
  const eliminations = [
    { title: "功能消除", desc: "移除非核心功能，聚焦本质" },
    { title: "环节消除", desc: "省略不必要的步骤和流程" },
    { title: "复杂度消除", desc: "简化操作，降低学习成本" },
    { title: "成本消除", desc: "去除不必要的开支和资源消耗" }
  ];

  const startY = 1.45;
  const boxW = 4.35;
  const boxH = 1.35;
  const gapX = 0.3;
  const gapY = 0.2;

  eliminations.forEach((item, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * (boxW + gapX);
    const y = startY + row * (boxH + gapY);

    // Box with shadow
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: boxW, h: boxH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 5, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.85, y: y + 0.25, w: boxW - 1.1, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.85, y: y + 0.65, w: boxW - 1.1, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Case study - full width
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.55, w: 9, h: 0.9,
    fill: { color: theme.light }
  });

  // Left accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.55, w: 0.08, h: 0.9,
    fill: { color: theme.accent }
  });

  slide.addText("经典案例", {
    x: 0.75, y: 4.62, w: 1.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("苹果移除手机键盘", {
    x: 0.75, y: 4.88, w: 3, h: 0.3,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("用触摸屏完全替代物理键盘，消除了传统手机的形态限制，开创了智能手机新时代", {
    x: 3.8, y: 4.88, w: 5.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("102", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };