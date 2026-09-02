// slide-62.js - 中立原则
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 62,
  title: '中立原则'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("中立原则", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Icon grid - 5 principles
  const principles = [
    { icon: "⚖", title: "立场中立", desc: "不偏袒任何一方" },
    { icon: "🎯", title: "问题导向", desc: "聚焦事实而非情绪" },
    { icon: "🔇", title: "倾听优先", desc: "让各方充分表达" },
    { icon: "📋", title: "过程公正", desc: "确保每个人都有机会" },
    { icon: "🛡", title: "情绪隔离", desc: "不让情绪影响判断" }
  ];

  principles.forEach((p, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.6 + col * 3.1;
    const y = 1.4 + row * 1.7;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.4,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.06, h: 1.4,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.35, w: 0.7, h: 0.7,
      fill: { color: theme.light }
    });
    slide.addText(p.icon, {
      x: x + 0.25, y: y + 0.35, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      align: "center", valign: "middle"
    });

    // Title and description
    slide.addText(p.title, {
      x: x + 1.05, y: y + 0.25, w: 1.7, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(p.desc, {
      x: x + 1.05, y: y + 0.7, w: 1.7, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("核心：引导者不是裁判，而是促进对话的催化剂", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("62", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };