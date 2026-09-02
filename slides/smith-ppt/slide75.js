const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("讨论问题四", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("信息时代的看不见的手", {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Question box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.1, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("核心问题", {
    x: 0.7, y: 2.2, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("算法推荐、大数据定价、平台经济——技术能否替代'看不见的手'？", {
    x: 0.7, y: 2.55, w: 8.6, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Two perspectives
  const perspectives = [
    {
      title: "技术乐观派",
      points: ["算法实现精准供需匹配", "大数据消除信息不对称", "平台替代市场更高效"],
      x: 0.5
    },
    {
      title: "斯密视角派",
      points: ["价格信号仍是核心机制", "信任机制无法被算法替代", "道德情感，市场根基"],
      x: 5.2
    }
  ];

  perspectives.forEach(p => {
    slide.addShape(pres.ShapeType.rect, {
      x: p.x, y: 3.5, w: 4.3, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.15 }
    });
    slide.addText(p.title, {
      x: p.x + 0.2, y: 3.6, w: 3.9, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    p.points.forEach((pt, i) => {
      slide.addText("• " + pt, {
        x: p.x + 0.2, y: 4.05 + i * 0.4, w: 3.9, h: 0.35,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("75", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
