// slide-106.js - Cultivating Curiosity: 好奇心培养
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "content",
  index: 106,
  title: "好奇心培养"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: t.primary }
  });
  slide.addText("好奇心培养", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Left section - Natural traits
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.15, w: 4.35, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  slide.addText("天然好奇心", {
    x: 0.7, y: 1.35, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: t.primary, bold: true
  });

  const traits = [
    '对"具体的人为什么会做出这个选择"这件事天然有好奇心',
    "愿意多问一句、多琢磨一下",
    "而不是问完标准流程里的几个问题就觉得够了"
  ];

  traits.forEach((trait, i) => {
    const y = 1.85 + i * 0.6;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.85, y: y + 0.08, w: 0.12, h: 0.12,
      fill: { color: t.accent }
    });
    slide.addText(trait, {
      x: 1.1, y: y, w: 3.6, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: t.secondary,
      valign: "top"
    });
  });

  // Right section - Can be cultivated
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.15, y: 1.15, w: 4.35, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  slide.addText("可以培养", {
    x: 5.35, y: 1.35, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: t.accent, bold: true
  });

  const cultivable = [
    "并不是天赋标签",
    "可以通过刻意练习慢慢培养",
    '强迫自己在每次谈话里多问几个"为什么"'
  ];

  cultivable.forEach((item, i) => {
    const y = 1.85 + i * 0.6;
    slide.addShape(pres.shapes.OVAL, {
      x: 5.5, y: y + 0.08, w: 0.12, h: 0.12,
      fill: { color: t.primary }
    });
    slide.addText(item, {
      x: 5.75, y: y, w: 3.6, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: t.secondary,
      valign: "top"
    });
  });

  // Bottom highlight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 0.95,
    fill: { color: t.primary },
    rectRadius: 0.1
  });
  slide.addText("核心方法", {
    x: 0.7, y: 4.1, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: t.accent, bold: true
  });
  slide.addText('多问"为什么"——每次谈话多问几个为什么背后的为什么', {
    x: 0.7, y: 4.45, w: 8.6, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge (bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("106", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-106-preview.pptx" })
    .then(() => console.log("Created slide-106-preview.pptx"));
}
