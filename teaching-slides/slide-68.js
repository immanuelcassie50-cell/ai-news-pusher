const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("练习二：流程绘制 — 工作坊指引", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Workshop objectives
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("练习目标", {
    x: 0.7, y: 1.2, w: 1.5, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("绘制自己团队的核心业务流程，识别AI介入机会点", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  // Steps
  slide.addText("操作步骤", {
    x: 0.5, y: 2.0, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const steps = [
    { num: "1", title: "识别核心流程", desc: "确定要分析的业务流程（如：需求收集、方案设计、报告生成）" },
    { num: "2", title: "拆解步骤节点", desc: "将流程分解为3-8个关键步骤" },
    { num: "3", title: "标注每个步骤", desc: "标记：耗时、重复性、需要的能力" },
    { num: "4", title: "评估AI介入点", desc: "对每个步骤问：AI能否做？做得好不好？" },
    { num: "5", title: "设计协作模式", desc: "确定：纯AI、人机协作、纯人工" }
  ];

  steps.forEach((s, i) => {
    const y = 2.45 + i * 0.55;

    // Step number
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(s.title, {
      x: 1.0, y: y + 0.02, w: 2.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(s.desc, {
      x: 3.3, y: y + 0.02, w: 6.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Connecting line
    if (i < steps.length - 1) {
      slide.addShape(pres.ShapeType.rect, {
        x: 0.68, y: y + 0.4, w: 0.04, h: 0.15,
        fill: { color: theme.light }
      });
    }
  });

  // Duration and output
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.2, w: 4.3, h: 0.45,
    fill: { color: theme.light }
  });
  slide.addText("时长：30分钟 | 小组：3-5人", {
    x: 0.7, y: 5.28, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 5.2, w: 4.5, h: 0.45,
    fill: { color: theme.blue, transparency: 20 }
  });
  slide.addText("产出：业务流程图 + AI介入点标记", {
    x: 5.2, y: 5.28, w: 4.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.blue, bold: true
  });

  return slide;
}

module.exports = { createSlide };
