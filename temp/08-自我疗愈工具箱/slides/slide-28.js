const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "模块二小结",
  type: "summary",
  pageNumber: 28
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

  // Title
  slide.addText("模块二小结", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three technique summary cards
  const techniques = [
    {
      title: "呼吸调节法",
      duration: "1-2分钟",
      benefits: [
        "快速激活副交感神经",
        "随时随地可练习",
        "情绪爆发时紧急平复"
      ],
      color: theme.primary
    },
    {
      title: "身体扫描",
      duration: "3-5分钟",
      benefits: [
        "增加身心连接",
        "改善睡眠质量",
        "觉察被忽略的身体感觉"
      ],
      color: theme.accent
    },
    {
      title: "渐进式肌肉放松",
      duration: "3-5分钟",
      benefits: [
        "释放身体紧张",
        "建立张力觉察能力",
        "改善慢性疼痛"
      ],
      color: theme.light
    }
  ];

  const cardW = 2.9;
  const cardH = 3.5;
  const gap = 0.25;
  const startX = 0.6;

  techniques.forEach((tech, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Color header
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: cardW, h: 0.8,
      fill: { color: tech.color }
    });

    // Title
    slide.addText(tech.title, {
      x: x, y: 1.3, w: cardW, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Duration
    slide.addText(tech.duration, {
      x: x, y: 1.75, w: cardW, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF",
      align: "center", valign: "middle"
    });

    // Benefits label
    slide.addText("核心收益", {
      x: x + 0.2, y: 2.15, w: cardW - 0.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: tech.color, bold: true,
      align: "left", valign: "middle"
    });

    // Benefits list
    slide.addText(
      tech.benefits.map((b, idx) => ({
        text: b,
        options: { bullet: true, breakLine: idx < tech.benefits.length - 1 }
      })),
      {
        x: x + 0.2, y: 2.5, w: cardW - 0.4, h: 2.0,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        valign: "top",
        paraSpaceAfter: 8
      }
    );
  });

  // Key takeaway
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.9, w: 8.8, h: 0.55,
    fill: { color: theme.primary }
  });

  slide.addText("关键：选择1-2种技巧，每天坚持练习，形成习惯后将成为你随身携带的情绪急救箱", {
    x: 0.8, y: 4.9, w: 8.4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("28", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
