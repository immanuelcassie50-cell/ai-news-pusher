const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "正念为什么有效",
  type: "content",
  pageNumber: 35
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
  slide.addText("35", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("正念为什么有效", {
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

  // Three mechanism cards
  const mechanisms = [
    {
      title: "注意力机制",
      icon: "🎯",
      points: [
        '训练"注意力肌肉"',
        "减少走神和分心",
        "提升专注持续时间"
      ]
    },
    {
      title: "情绪调节机制",
      icon: "🔄",
      points: [
        "增加情绪觉察",
        "减少反应性",
        "培养接纳态度"
      ]
    },
    {
      title: "压力反应机制",
      icon: "🧘",
      points: [
        "激活副交感神经",
        "降低皮质醇水平",
        "改善自主神经系统"
      ]
    }
  ];

  mechanisms.forEach((mech, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 3.2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top colored bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 0.7,
      fill: { color: theme.primary }
    });

    slide.addText(mech.title, {
      x: x, y: 1.35, w: 2.9, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Points
    mech.points.forEach((point, j) => {
      const py = 2.15 + j * 0.7;

      // Bullet dot
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.2, y: py + 0.15, w: 0.12, h: 0.12,
        fill: { color: theme.accent }
      });

      slide.addText(point, {
        x: x + 0.45, y: py, w: 2.3, h: 0.55,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "left", valign: "middle"
      });
    });
  });

  // Research support footer
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.6, w: 9, h: 0.65,
    fill: { color: theme.bg }
  });

  slide.addText("研究支持: Harvard研究 | Lazar脑成像研究 | Holzel神经可塑性研究", {
    x: 0.5, y: 4.65, w: 9, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
