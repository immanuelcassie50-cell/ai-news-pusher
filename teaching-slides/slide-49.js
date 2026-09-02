const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("模拟催化会议", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Timeline with 5 phases
  const phases = [
    { num: "1", title: "开场", desc: "介绍议题和规则", time: "5分钟", icon: "🎯" },
    { num: "2", title: "静默书写", desc: "独立思考", time: "5分钟", icon: "✍" },
    { num: "3", title: "分享与分类", desc: "集体讨论", time: "15分钟", icon: "💬" },
    { num: "4", title: "追问深化", desc: "聚焦关键", time: "10分钟", icon: "🔍" },
    { num: "5", title: "总结共识", desc: "明确行动", time: "5分钟", icon: "✅" }
  ];

  // Timeline base line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 2.95, w: 8.4, h: 0.06,
    fill: { color: theme.secondary }
  });

  // Timeline phases
  phases.forEach((p, i) => {
    const x = 0.8 + i * 2.1;

    // Node circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 2.65, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });

    // Number in circle
    slide.addText(p.num, {
      x: x, y: 2.65, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Time badge above
    slide.addShape(pres.ShapeType.rect, {
      x: x - 0.15, y: 2.2, w: 1.0, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText(p.time, {
      x: x - 0.15, y: 2.2, w: 1.0, h: 0.35,
      fontSize: 10, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Phase title below
    slide.addText(p.title, {
      x: x - 0.3, y: 3.45, w: 1.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(p.desc, {
      x: x - 0.4, y: 3.8, w: 1.5, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // Icon
    slide.addText(p.icon, {
      x: x - 0.15, y: 4.15, w: 1.0, h: 0.4,
      fontSize: 20,
      align: "center", valign: "middle"
    });

    // Arrow between nodes (except last)
    if (i < phases.length - 1) {
      slide.addText("→", {
        x: x + 0.7, y: 2.7, w: 1.4, h: 0.6,
        fontSize: 16, fontFace: "Arial",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    }
  });

  // Total time indicator
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 5.0, w: 3, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("总时长: 40分钟", {
    x: 3.5, y: 5.0, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
