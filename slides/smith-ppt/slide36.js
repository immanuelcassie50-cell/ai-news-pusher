const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("科斯定理", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Classic formulation
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 9, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText("若交易成本为零，产权的初始配置不影响资源最终配置效率", {
    x: 0.6, y: 1.25, w: 8.8, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 16, color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Three-part explanation
  const parts = [
    {
      title: "前提条件",
      content: "交易成本 = 零\n（协商无代价）",
      color: theme.secondary
    },
    {
      title: "核心逻辑",
      content: "自愿交易会使资源\n流向最高价值用途",
      color: theme.light
    },
    {
      title: "结论",
      content: "无论产权归谁\n市场都能达到效率",
      color: theme.primary
    }
  ];

  parts.forEach((part, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.15, w: 2.95, h: 1.4,
      fill: { color: "FFFFFF" },
      line: { color: part.color, width: 2 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.15, w: 2.95, h: 0.4,
      fill: { color: part.color }
    });
    slide.addText(part.title, {
      x: x, y: 2.18, w: 2.95, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF", bold: true,
      align: "center"
    });
    slide.addText(part.content, {
      x: x + 0.1, y: 2.6, w: 2.75, h: 0.9,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary,
      align: "center", valign: "middle"
    });
  });

  // Arrows between boxes
  slide.addText("→", {
    x: 3.3, y: 2.55, w: 0.4, h: 0.5,
    fontFace: "Arial", fontSize: 24, color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("→", {
    x: 6.4, y: 2.55, w: 0.4, h: 0.5,
    fontFace: "Arial", fontSize: 24, color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Real-world caveat
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.75, w: 9, h: 0.9,
    fill: { color: theme.secondary, transparency: 90 }
  });
  slide.addText("现实修正：交易成本从来不为零", {
    x: 0.6, y: 3.8, w: 8.8, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 13, color: theme.accent, bold: true
  });
  slide.addText("因此产权初始配置很重要！法律制度、产权保护对经济发展至关重要", {
    x: 0.6, y: 4.15, w: 8.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Example
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("案例：污染权归工厂还是居民，决定了是否需要政府干预，而非市场结果", {
    x: 0.6, y: 4.9, w: 8.8, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("36", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
