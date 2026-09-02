const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块四：效果衡量 — 持续改进机制", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // PDCA cycle visualization
  slide.addText("PDCA持续改进循环", {
    x: 0.5, y: 1.0, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const pdca = [
    { letter: "P", title: "Plan", cn: "计划", desc: "设定改进目标\n制定衡量指标", color: theme.green, x: 0.8, y: 1.5 },
    { letter: "D", title: "Do", cn: "执行", desc: "实施人机协作\n记录实际数据", color: theme.blue, x: 2.8, y: 2.5 },
    { letter: "C", title: "Check", cn: "检查", desc: "对比实际效果\n分析目标差距", color: theme.warm, x: 0.8, y: 3.5 },
    { letter: "A", title: "Act", cn: "改进", desc: "优化协作流程\n更新最佳实践", color: theme.accent, x: 2.8, y: 4.5 }
  ];

  // Draw connecting arrows
  slide.addShape(pres.ShapeType.line, {
    x: 1.9, y: 2.0, w: 0.7, h: 0.5,
    line: { color: theme.secondary, width: 2 }
  });
  slide.addShape(pres.ShapeType.line, {
    x: 1.9, y: 4.0, w: 0.7, h: -0.5,
    line: { color: theme.secondary, width: 2 }
  });

  pdca.forEach((p) => {
    slide.addShape(pres.ShapeType.rect, {
      x: p.x, y: p.y, w: 1.8, h: 1.0,
      fill: { color: "ffffff" },
      line: { color: p.color, width: 2 }
    });

    slide.addShape(pres.ShapeType.ellipse, {
      x: p.x + 0.15, y: p.y + 0.15, w: 0.7, h: 0.7,
      fill: { color: p.color }
    });
    slide.addText(p.letter, {
      x: p.x + 0.15, y: p.y + 0.15, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(p.cn, {
      x: p.x + 0.9, y: p.y + 0.2, w: 0.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: p.color, bold: true
    });

    slide.addText(p.desc, {
      x: p.x + 0.9, y: p.y + 0.5, w: 0.8, h: 0.45,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  // Right side - Action items
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.5, w: 4.5, h: 3.8,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.5, w: 4.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("持续改进行动清单", {
    x: 5.2, y: 1.58, w: 4.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const actions = [
    { freq: "每周", action: "回顾本周AI使用数据", icon: "📊" },
    { freq: "每月", action: "分析效率提升指标", icon: "📈" },
    { freq: "每季度", action: "评估ROI并调整策略", icon: "💰" },
    { freq: "持续", action: "更新最佳实践文档", icon: "📝" },
    { freq: "随时", action: "收集团队反馈建议", icon: "💬" }
  ];

  actions.forEach((a, i) => {
    const y = 2.15 + i * 0.6;

    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 0.8, h: 0.4,
      fill: { color: theme.accent, transparency: 20 }
    });
    slide.addText(a.freq, {
      x: 5.2, y: y, w: 0.8, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(a.icon + " " + a.action, {
      x: 6.1, y: y + 0.05, w: 3.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark,
      valign: "middle"
    });
  });

  // Next module teaser
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 5.0, w: 4.5, h: 0.6,
    fill: { color: theme.secondary }
  });
  slide.addText("下一步：模块五 — 综合实战应用", {
    x: 5.2, y: 5.15, w: 4.1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  return slide;
}

module.exports = { createSlide };
