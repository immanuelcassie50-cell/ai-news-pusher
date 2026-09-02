const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("团队诊断练习", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Left side: Exercise steps
  const steps = [
    { num: "1", title: "选择团队", desc: "选择一个你熟悉的工作团队" },
    { num: "2", title: "五维诊断", desc: "用五维度工具进行诊断评分" },
    { num: "3", title: "找出短板", desc: "识别最需要改善的维度" },
    { num: "4", title: "设计策略", desc: "为短板维度设计改善方案" }
  ];

  // Vertical stepper
  steps.forEach((s, i) => {
    const y = 1.15 + i * 1.0;

    // Step number circle
    slide.addShape("ellipse", {
      x: 0.6, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(s.num, {
      x: 0.6, y: y, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Connecting line (except last)
    if (i < steps.length - 1) {
      slide.addShape("rect", {
        x: 0.82, y: y + 0.5, w: 0.06, h: 0.5,
        fill: { color: theme.accent, transparency: 50 }
      });
    }

    // Step content
    slide.addText(s.title, {
      x: 1.3, y: y, w: 2.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(s.desc, {
      x: 1.3, y: y + 0.3, w: 2.5, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right side: Template card
  slide.addShape("rect", {
    x: 4.2, y: 1.1, w: 5.5, h: 4.2,
    fill: { color: theme.light }
  });

  // Template header
  slide.addShape("rect", {
    x: 4.2, y: 1.1, w: 5.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("练习模板", {
    x: 4.4, y: 1.1, w: 5.1, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    valign: "middle"
  });

  // Template content
  const templateItems = [
    { label: "团队名称", value: "________________________" },
    { label: "目标清晰度评分", value: "[1-5分] ________" },
    { label: "角色分工评分", value: "[1-5分] ________" },
    { label: "流程效率评分", value: "[1-5分] ________" },
    { label: "关系质量评分", value: "[1-5分] ________" },
    { label: "资源充足度评分", value: "[1-5分] ________" },
    { label: "最需改善维度", value: "________________________" },
    { label: "改善策略", value: "________________________" }
  ];

  templateItems.forEach((item, i) => {
    const y = 1.75 + i * 0.42;

    slide.addText(item.label, {
      x: 4.4, y: y, w: 1.8, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    slide.addText(item.value, {
      x: 6.3, y: y, w: 3.2, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Dotted line under each
    slide.addShape("rect", {
      x: 6.3, y: y + 0.32, w: 3.2, h: 0.02,
      fill: { color: theme.secondary, transparency: 60 }
    });
  });

  // Bottom tip
  slide.addShape("rect", {
    x: 0, y: 5.4, w: 10, h: 0.35,
    fill: { color: theme.primary }
  });

  slide.addText("提示：诊断结果没有对错，关键是客观真实地评估现状", {
    x: 0.5, y: 5.4, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
