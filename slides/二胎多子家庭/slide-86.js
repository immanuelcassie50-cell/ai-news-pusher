// slide-86.js - 30天行动计划第3页 - Week 3
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 86,
  title: '30天行动计划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("30天行动计划", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Week badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 1.5, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("第3周", {
    x: 0.5, y: 1.2, w: 1.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Week 3 focus title
  slide.addText("练习STEA", {
    x: 2.2, y: 1.2, w: 5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 9, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Day range
  slide.addText("第15-21天", {
    x: 0.8, y: 2.15, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Tasks
  const tasks = [
    "用四步法处理手足冲突",
    "记录处理过程和结果"
  ];

  tasks.forEach((task, idx) => {
    const y = 2.7 + idx * 0.8;

    // Check circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.9, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText("✓", {
      x: 0.9, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Task text
    slide.addText(task, {
      x: 1.5, y: y, w: 7.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Tip box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 4.2, w: 8.4, h: 0.55,
    fill: { color: theme.light, transparency: 70 },
    rectRadius: 0.08
  });
  slide.addText("小贴士：STEA四步法 — 停止、思考、共情、行动", {
    x: 1.0, y: 4.2, w: 8, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
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
  pres.writeFile({ fileName: "slide-86-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
