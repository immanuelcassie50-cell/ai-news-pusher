// slide-51.js - STEA步骤2: Translate
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 51,
  title: 'T - Translate 翻译需求'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("T - Translate 翻译需求", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Step indicator
  slide.addText("第二步", {
    x: 8.5, y: 0.2, w: 1, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "right", valign: "middle"
  });

  // Iceberg concept - visual representation
  // Iceberg top (visible behavior)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 4, h: 1.2,
    fill: { color: theme.light }
  });
  slide.addText("冰山上层：行为", {
    x: 0.7, y: 1.4, w: 3.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("哭闹、打人、哭诉", {
    x: 0.7, y: 1.85, w: 3.6, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // Arrow down
  slide.addText("▼", {
    x: 2.2, y: 2.5, w: 0.6, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Iceberg bottom (hidden needs)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.9, w: 4, h: 1.8,
    fill: { color: theme.primary }
  });
  slide.addText("冰山下层：需求", {
    x: 0.7, y: 3.0, w: 3.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("被看见、被关注、被尊重", {
    x: 0.7, y: 3.45, w: 3.6, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "top"
  });

  // Right side - key points
  const points = [
    { title: "问题常在", desc: "需求未被满足" },
    { title: "提问", desc: "\"你想要的是什么？\"" },
    { title: "假设", desc: "孩子行为背后有正当需求" }
  ];

  const startX = 5.0;
  const startY = 1.3;
  const itemHeight = 1.25;

  points.forEach((point, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 4.5, h: 1.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 0.06, h: 1.1,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(point.title, {
      x: startX + 0.2, y: y + 0.1, w: 4.1, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(point.desc, {
      x: startX + 0.2, y: y + 0.55, w: 4.1, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });
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
  pres.writeFile({ fileName: "slide-51-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
