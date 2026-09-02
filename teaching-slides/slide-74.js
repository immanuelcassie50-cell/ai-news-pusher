const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("节奏模式案例一：快对话应用场景", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Scenario title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.55,
    fill: { color: theme.green, transparency: 20 }
  });
  slide.addText("场景：市场部需要快速生成多版本推广文案", {
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
    { role: "人", action: "输入核心信息：产品卖点、目标人群、推广渠道", time: "1分钟" },
    { role: "AI", action: "生成5个版本文案初稿", time: "30秒" },
    { role: "人", action: "筛选并提出修改方向", time: "2分钟" },
    { role: "AI", action: "根据反馈调整优化", time: "30秒" },
    { role: "人", action: "最终审核并定稿", time: "1分钟" }
  ];

  steps.forEach((step, i) => {
    const y = 2.15 + i * 0.52;

    // Role badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.7, h: 0.4,
      fill: { color: step.role === "人" ? theme.blue : theme.green }
    });
    slide.addText(step.role, {
      x: 0.5, y: y, w: 0.7, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Action
    slide.addText(step.action, {
      x: 1.3, y: y + 0.02, w: 6.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.dark
    });

    // Time
    slide.addText(step.time, {
      x: 8.0, y: y + 0.02, w: 1.5, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Arrow
    if (i < steps.length - 1) {
      slide.addText("↓", {
        x: 0.75, y: y + 0.38, w: 0.3, h: 0.2,
        fontSize: 10, fontFace: "Arial",
        color: theme.gray,
        align: "center"
      });
    }
  });

  // Efficiency comparison
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.85,
    fill: { color: theme.light }
  });

  slide.addText("效率对比", {
    x: 0.7, y: 4.9, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const comp = [
    { label: "传统方式", value: "2小时" },
    { label: "人机协作", value: "5分钟" },
    { label: "效率提升", value: "24倍" }
  ];

  comp.forEach((c, i) => {
    const x = 2.5 + i * 2.5;
    slide.addText(c.label + "：" + c.value, {
      x: x, y: 5.0, w: 2.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: i === 2 ? theme.green : theme.dark,
      bold: i === 2
    });
  });

  return slide;
}

module.exports = { createSlide };
