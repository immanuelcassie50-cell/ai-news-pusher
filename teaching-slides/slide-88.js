const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块四：效果衡量 — 四维雷达图解读", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Introduction
  slide.addText("团队人机协作能力全面评估", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Four dimensions visualized as radar
  const dimensions = [
    { name: "效率", score: 85, max: 100, color: theme.green },
    { name: "质量", score: 78, max: 100, color: theme.blue },
    { name: "价值", score: 92, max: 100, color: theme.warm },
    { name: "能力", score: 70, max: 100, color: theme.accent }
  ];

  // Radar visualization (simplified as bars)
  const centerX = 2.5;
  const centerY = 3.2;
  const maxRadius = 1.8;

  // Draw radar background circles
  [1, 0.66, 0.33].forEach((scale, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: centerX - maxRadius * scale, y: centerY - maxRadius * scale,
      w: maxRadius * 2 * scale, h: maxRadius * 2 * scale,
      fill: { color: theme.light, transparency: 50 + i * 15 },
      line: { color: theme.secondary, width: 0.5 }
    });
  });

  // Draw axis lines
  for (let i = 0; i < 4; i++) {
    const angle = (i * 90 - 90) * Math.PI / 180;
    const x2 = centerX + Math.cos(angle) * maxRadius;
    const y2 = centerY + Math.sin(angle) * maxRadius;
    slide.addShape(pres.ShapeType.line, {
      x: centerX, y: centerY, w: x2 - centerX, h: y2 - centerY,
      line: { color: theme.secondary, width: 0.5 }
    });
  }

  // Draw score shapes
  dimensions.forEach((dim, i) => {
    const angle = (i * 90 - 90) * Math.PI / 180;
    const radius = (dim.score / dim.max) * maxRadius;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    // Score point
    slide.addShape(pres.ShapeType.ellipse, {
      x: x - 0.15, y: y - 0.15, w: 0.3, h: 0.3,
      fill: { color: dim.color }
    });

    // Label
    const labelRadius = maxRadius + 0.3;
    const labelX = centerX + Math.cos(angle) * labelRadius;
    const labelY = centerY + Math.sin(angle) * labelRadius;

    slide.addText(dim.name + "\n" + dim.score + "%", {
      x: labelX - 0.5, y: labelY - 0.25, w: 1, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: dim.color, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Key metrics on right side
  slide.addShape(pres.ShapeType.rect, {
    x: 5.5, y: 1.5, w: 4, h: 3.5,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.5, y: 1.5, w: 4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("各维度详细评分", {
    x: 5.7, y: 1.58, w: 3.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const detailedMetrics = [
    { dim: "效率维度", items: ["任务完成速度: 85%", "AI响应时间: <30秒", "交互轮次: 平均3轮"], color: theme.green },
    { dim: "质量维度", items: ["准确率: 92%", "满意度: 4.2/5", "目标达成: 78%"], color: theme.blue },
    { dim: "价值维度", items: ["成本节约: 45%", "效率提升: 3.5倍", "ROI: 280%"], color: theme.warm },
    { dim: "能力维度", items: ["熟练度: B+", "协作流畅度: B", "AI素养: B-"], color: theme.accent }
  ];

  detailedMetrics.forEach((m, i) => {
    const y = 2.1 + i * 0.8;

    slide.addText(m.dim, {
      x: 5.7, y: y, w: 1.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: m.color, bold: true
    });

    m.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: 5.7, y: y + 0.28 + j * 0.18, w: 3.6, h: 0.2,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });
  });

  // Overall score
  slide.addShape(pres.ShapeType.rect, {
    x: 5.5, y: 5.1, w: 4, h: 0.5,
    fill: { color: theme.green }
  });
  slide.addText("综合评分：81分 (B+) — 良好水平", {
    x: 5.7, y: 5.18, w: 3.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  return slide;
}

module.exports = { createSlide };
