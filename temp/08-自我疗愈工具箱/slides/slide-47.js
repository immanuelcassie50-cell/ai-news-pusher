const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "模块三小结",
  type: "summary",
  pageNumber: 47
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("47", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("模块三小结", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Key takeaways section
  slide.addText("核心收获", {
    x: 0.5, y: 1.2, w: 3, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const takeaways = [
    {
      title: "三分钟呼吸空间",
      desc: "快速有效的紧急正念练习"
    },
    {
      title: "五感正念",
      desc: "STOP四步法，随时可用的锚点"
    },
    {
      title: "迷你冥想",
      desc: "1-2分钟的简短练习"
    }
  ];

  takeaways.forEach((item, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.7, w: 2.95, h: 1.4,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.7, w: 2.95, h: 0.08,
      fill: { color: theme.primary }
    });

    // Number
    slide.addText("0" + (i + 1), {
      x: x + 0.15, y: 1.85, w: 0.5, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.15, y: 2.25, w: 2.65, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.15, y: 2.65, w: 2.65, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "middle"
    });
  });

  // Core message box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.35, w: 9, h: 1.2,
    fill: { color: theme.primary }
  });

  slide.addText("核心信息", {
    x: 0.7, y: 3.45, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText('"记住去练习" 比完美练习更重要', {
    x: 0.7, y: 3.8, w: 8.6, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom tips
  const tips = [
    "不需要长时间、不需要安静环境",
    "从STOP开始，从1分钟开始",
    "嵌入式正念让练习融入日常"
  ];

  tips.forEach((tip, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 4.7, w: 2.95, h: 0.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.08 }
    });

    slide.addText("✓ " + tip, {
      x: x + 0.1, y: 4.7, w: 2.75, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
