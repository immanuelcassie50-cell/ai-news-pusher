const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("六顶思考帽操作指南", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Left side: Operation flow (vertical flowchart)
  const steps = [
    { num: "1", title: "介绍六帽概念", desc: "讲解每顶帽子的含义" },
    { num: "2", title: "宣布使用哪顶帽", desc: "明确本次讨论的目标" },
    { num: "3", title: "集体按帽思考", desc: "全员同时佩戴思考" },
    { num: "4", title: "转换帽子继续", desc: "切换角度深入讨论" },
    { num: "5", title: "总结整合", desc: "汇总各帽观点结论" }
  ];

  const startY = 1.2;
  const stepHeight = 0.75;

  steps.forEach((step, i) => {
    const y = startY + i * stepHeight;

    // Step number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.08, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(step.num, {
      x: 0.6, y: y + 0.08, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    // Step title
    slide.addText(step.title, {
      x: 1.25, y: y + 0.05, w: 2.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Step description
    slide.addText(step.desc, {
      x: 1.25, y: y + 0.35, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Connecting line (except last)
    if (i < steps.length - 1) {
      slide.addShape(pres.ShapeType.line, {
        x: 0.85, y: y + 0.6, w: 0, h: 0.15,
        line: { color: theme.secondary, width: 1.5 }
      });
    }
  });

  // Right side: Time allocation table
  slide.addShape(pres.ShapeType.rect, {
    x: 4.2, y: 1.2, w: 5.3, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("时间分配建议", {
    x: 4.2, y: 1.2, w: 5.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Table header
  const tableData = [
    [
      { text: "帽色", options: { fill: { color: theme.light }, color: theme.primary, bold: true, align: "center" } },
      { text: "用途", options: { fill: { color: theme.light }, color: theme.primary, bold: true, align: "center" } },
      { text: "建议时间", options: { fill: { color: theme.light }, color: theme.primary, bold: true, align: "center" } }
    ],
    [
      { text: "白帽", options: { align: "center", fill: { color: "FFFFFF" } } },
      { text: "客观事实", options: { align: "center", fill: { color: "FFFFFF" } } },
      { text: "10-15分钟", options: { align: "center", fill: { color: "FFFFFF" } } }
    ],
    [
      { text: "红帽", options: { align: "center", fill: { color: "F8F8F8" } } },
      { text: "情感直觉", options: { align: "center", fill: { color: "F8F8F8" } } },
      { text: "5-10分钟", options: { align: "center", fill: { color: "F8F8F8" } } }
    ],
    [
      { text: "黑帽", options: { align: "center", fill: { color: "FFFFFF" } } },
      { text: "风险评估", options: { align: "center", fill: { color: "FFFFFF" } } },
      { text: "15-20分钟", options: { align: "center", fill: { color: "FFFFFF" } } }
    ],
    [
      { text: "黄帽", options: { align: "center", fill: { color: "F8F8F8" } } },
      { text: "价值挖掘", options: { align: "center", fill: { color: "F8F8F8" } } },
      { text: "10-15分钟", options: { align: "center", fill: { color: "F8F8F8" } } }
    ],
    [
      { text: "绿帽", options: { align: "center", fill: { color: "FFFFFF" } } },
      { text: "创意生成", options: { align: "center", fill: { color: "FFFFFF" } } },
      { text: "15-30分钟", options: { align: "center", fill: { color: "FFFFFF" } } }
    ],
    [
      { text: "蓝帽", options: { align: "center", fill: { color: "F8F8F8" } } },
      { text: "进程控制", options: { align: "center", fill: { color: "F8F8F8" } } },
      { text: "5-10分钟", options: { align: "center", fill: { color: "F8F8F8" } } }
    ]
  ];

  slide.addTable(tableData, {
    x: 4.2, y: 1.75, w: 5.3,
    colW: [1.2, 2.1, 2],
    rowH: 0.4,
    fontFace: "Microsoft YaHei",
    fontSize: 11,
    color: theme.primary,
    border: { pt: 0.5, color: theme.secondary },
    valign: "middle"
  });

  // Tips section at bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 4.2, y: 4.7, w: 5.3, h: 0.9,
    fill: { color: theme.light },
    line: { color: theme.accent, width: 1 }
  });

  slide.addText("使用技巧", {
    x: 4.4, y: 4.78, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "一次只戴一顶帽", options: { bullet: true, breakLine: true } },
    { text: "鼓励沉默者发言", options: { bullet: true, breakLine: true } },
    { text: "控制讨论不走偏", options: { bullet: true } }
  ], {
    x: 4.4, y: 5.05, w: 4.9, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide };
