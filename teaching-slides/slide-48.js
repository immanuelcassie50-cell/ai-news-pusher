const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("催化方案设计练习", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Left side: Exercise steps
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.1, w: 4.4, h: 2.8,
    fill: { color: theme.light }
  });

  slide.addText("练习指引", {
    x: 0.6, y: 1.2, w: 4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const steps = [
    { num: "1", text: "选择一个真实问题" },
    { num: "2", text: "完整填写六要素" },
    { num: "3", text: "准备工具和应急预案" },
    { num: "4", text: "小组分享与反馈" }
  ];

  steps.forEach((s, i) => {
    const y = 1.7 + i * 0.55;

    // Step number
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(s.num, {
      x: 0.7, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Step text
    slide.addText(s.text, {
      x: 1.25, y: y, w: 3.3, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    // Connecting line
    if (i < steps.length - 1) {
      slide.addShape(pres.ShapeType.rect, {
        x: 0.88, y: y + 0.4, w: 0.04, h: 0.15,
        fill: { color: theme.accent, transparency: 50 }
      });
    }
  });

  // Right side: Template (6 elements)
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.1, w: 4.7, h: 4.15,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.1, w: 4.7, h: 0.45,
    fill: { color: theme.accent }
  });

  slide.addText("六要素模板", {
    x: 5.2, y: 1.1, w: 4.3, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    valign: "middle"
  });

  const templateFields = [
    { label: "问题定义", field: "用SMART原则描述问题" },
    { label: "目标设定", field: "期望达成的具体结果" },
    { label: "利益相关方", field: "影响力-关注度分析" },
    { label: "工具选择", field: "选择的催化工具及理由" },
    { label: "时间规划", field: "各环节时间分配" },
    { label: "应急预案", field: "预判的突发状况及对策" }
  ];

  templateFields.forEach((f, i) => {
    const y = 1.65 + i * 0.58;

    slide.addText(f.label, {
      x: 5.15, y: y, w: 1.3, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Input field
    slide.addShape(pres.ShapeType.rect, {
      x: 6.5, y: y + 0.08, w: 3.0, h: 0.4,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 0.5 }
    });

    slide.addText(f.field, {
      x: 6.6, y: y + 0.08, w: 2.8, h: 0.4,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Feedback section at bottom left
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.1, w: 4.4, h: 1.15,
    fill: { color: theme.primary }
  });

  slide.addText("反馈区", {
    x: 0.6, y: 4.2, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  slide.addText("小组成员填写反馈意见：", {
    x: 0.6, y: 4.55, w: 4, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Feedback lines
  for (let i = 0; i < 2; i++) {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 4.85 + i * 0.18, w: 4.0, h: 0.015,
      fill: { color: theme.secondary, transparency: 50 }
    });
  }

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.4, w: 10, h: 0.35,
    fill: { color: theme.accent }
  });

  slide.addText("团队协作，共同完善催化方案", {
    x: 0.5, y: 5.4, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
