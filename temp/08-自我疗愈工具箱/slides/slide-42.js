const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "迷你冥想1-2分钟",
  type: "content",
  pageNumber: 42
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
  slide.addText("42", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("迷你冥想1-2分钟", {
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

  // Three meditation cards
  const meditations = [
    {
      name: "Just Breathe",
      duration: "1分钟",
      title: "呼吸计数冥想",
      steps: [
        "舒适坐好，闭眼或微闭",
        "自然呼吸，不刻意控制",
        "心中默数：1-2-3-4...10",
        "循环往复，直到时间到"
      ],
      tip: "数数帮助注意力聚焦"
    },
    {
      name: "Body Anchor",
      duration: "2分钟",
      title: "身体扎根冥想",
      steps: [
        "感受双脚与地面的接触",
        "感受臀部与椅子的接触",
        "想象能量从脚底向下流淌",
        "感受身体被稳稳承托"
      ],
      tip: "快速缓解焦虑和紧张"
    },
    {
      name: "Loving Kindness",
      duration: "2分钟",
      title: "慈心短版冥想",
      steps: [
        "心中默念：愿我平安",
        "愿我健康，愿我幸福",
        "愿我被善待，被人关爱",
        "将善意扩展到更多人"
      ],
      tip: "快速改善情绪状态"
    }
  ];

  meditations.forEach((med, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 2.95, h: 3.9,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Header
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 2.95, h: 0.9,
      fill: { color: theme.primary }
    });

    // Duration badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 1.3, w: 0.7, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(med.duration, {
      x: x + 0.15, y: 1.3, w: 0.7, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(med.title, {
      x: x, y: 1.65, w: 2.95, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Steps
    med.steps.forEach((step, j) => {
      slide.addText((j + 1) + ".", {
        x: x + 0.15, y: 2.2 + j * 0.45, w: 0.3, h: 0.4,
        fontSize: 11, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "left", valign: "middle"
      });

      slide.addText(step, {
        x: x + 0.4, y: 2.2 + j * 0.45, w: 2.4, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "left", valign: "middle"
      });
    });

    // Tip
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 4.05, w: 2.65, h: 0.5,
      fill: { color: theme.bg }
    });

    slide.addText("💡 " + med.tip, {
      x: x + 0.2, y: 4.05, w: 2.55, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "middle"
    });

    // English name
    slide.addText(med.name, {
      x: x, y: 4.6, w: 2.95, h: 0.4,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, italic: true,
      align: "center", valign: "middle"
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
