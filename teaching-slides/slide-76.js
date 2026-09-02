const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：节奏模式 — 快节奏案例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Scenario description
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.55,
    fill: { color: theme.green, transparency: 20 }
  });
  slide.addText("场景：客服部门需要快速处理30条用户反馈", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.dark, bold: true
  });

  // Process flow
  slide.addText("操作流程", {
    x: 0.5, y: 1.75, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const steps = [
    { role: "人", action: "收集30条用户反馈并分类", time: "3分钟", color: theme.blue },
    { role: "AI", action: "批量分析反馈类型和情感", time: "1分钟", color: theme.green },
    { role: "人", action: "确认分类结果并提出修改", time: "2分钟", color: theme.blue },
    { role: "AI", action: "生成30条个性化回复草稿", time: "2分钟", color: theme.green },
    { role: "人", action: "审核并发送最终回复", time: "5分钟", color: theme.blue }
  ];

  steps.forEach((step, i) => {
    const y = 2.15 + i * 0.52;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.7, h: 0.4,
      fill: { color: step.color }
    });
    slide.addText(step.role, {
      x: 0.5, y: y, w: 0.7, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(step.action, {
      x: 1.3, y: y + 0.02, w: 6.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark
    });

    slide.addText(step.time, {
      x: 8.0, y: y + 0.02, w: 1.5, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Efficiency comparison
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.85, w: 9, h: 0.8,
    fill: { color: theme.light }
  });

  slide.addText("效率对比", {
    x: 0.7, y: 4.95, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const comp = [
    { label: "传统方式", value: "3小时" },
    { label: "人机协作", value: "13分钟" },
    { label: "效率提升", value: "14倍" }
  ];

  comp.forEach((c, i) => {
    const x = 2.5 + i * 2.5;
    slide.addText(c.label + "：" + c.value, {
      x: x, y: 5.05, w: 2.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: i === 2 ? theme.green : theme.dark,
      bold: i === 2
    });
  });

  return slide;
}

module.exports = { createSlide };
