const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：节点判断案例练习", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Case scenario
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 1.3,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 0.12, h: 1.3,
    fill: { color: theme.accent }
  });

  slide.addText("案例：市场部使用AI生成季度报告", {
    x: 0.8, y: 1.15, w: 8.5, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("背景：市场部每月需要生成包含数据分析、竞品对比、市场洞察的季度报告。\n以往人工完成需要2天，现在尝试使用AI辅助。", {
    x: 0.8, y: 1.55, w: 8.5, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  // Node analysis
  slide.addText("节点判断分析", {
    x: 0.5, y: 2.5, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const analyses = [
    { node: "节点1", decision: "✓ AI适合", reason: "任务明确、数据充足", color: theme.green },
    { node: "节点2", decision: "⚠ 需调整", reason: "AI缺少行业洞察，需人工补充", color: theme.warm },
    { node: "节点3", decision: "✓ 风险可控", reason: "报告类任务出错影响小", color: theme.green },
    { node: "节点4", decision: "✓ 正常", reason: "AI输出稳定，定期检查", color: theme.green },
    { node: "节点5", decision: "✓ 达标", reason: "效率提升60%，质量可接受", color: theme.green }
  ];

  analyses.forEach((a, i) => {
    const y = 2.95 + i * 0.5;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.2, h: 0.4,
      fill: { color: theme.secondary }
    });
    slide.addText(a.node, {
      x: 0.5, y: y, w: 1.2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addShape(pres.ShapeType.rect, {
      x: 1.8, y: y, w: 1.5, h: 0.4,
      fill: { color: a.color, transparency: 20 }
    });
    slide.addText(a.decision, {
      x: 1.8, y: y, w: 1.5, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: a.color, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(a.reason, {
      x: 3.4, y: y + 0.02, w: 6.1, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
