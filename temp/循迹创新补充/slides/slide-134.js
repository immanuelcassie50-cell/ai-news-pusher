// slide-134.js - 工具模板 | HMW问题转化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 134,
  title: '工具模板 | HMW问题转化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("工具模板 | HMW问题转化", {
    x: 0.5, y: 0.25, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("附录参考资料", {
    x: 0.5, y: 0.6, w: 7, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // HMW formula
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fill: { color: theme.light }
  });

  slide.addText("HMW = How might we... (我们如何能够...)", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // Transformation steps
  slide.addText("转化步骤", {
    x: 0.5, y: 1.9, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const steps = [
    { num: "1", title: "收集洞察", desc: "从用户研究中发现关键发现" },
    { num: "2", title: "识别障碍", desc: "找到阻碍用户达成目标的障碍" },
    { num: "3", title: "HMW转化", desc: "将障碍转化为HMW问题" },
    { num: "4", title: "优先级排序", desc: "根据影响力/可行性排序" }
  ];

  const stepW = 2.15;
  const stepH = 0.9;
  const stepStartX = 0.5;
  const stepY = 2.3;

  steps.forEach((step, i) => {
    const x = stepStartX + i * (stepW + 0.15);

    // Step card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: stepY, w: stepW, h: stepH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Number
    slide.addText(step.num, {
      x: x + 0.1, y: stepY + 0.1, w: 0.35, h: 0.35,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.5, y: stepY + 0.1, w: 1.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.1, y: stepY + 0.5, w: stepW - 0.2, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Arrow (except last)
    if (i < steps.length - 1) {
      slide.addText("→", {
        x: x + stepW + 0.02, y: stepY + 0.25, w: 0.2, h: 0.4,
        fontSize: 16, fontFace: "Arial",
        color: theme.light, align: "center"
      });
    }
  });

  // Example section
  slide.addText("示例转化", {
    x: 0.5, y: 3.4, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Example box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 }
  });

  // Left accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 0.08, h: 1.0,
    fill: { color: theme.accent }
  });

  slide.addText("用户洞察：", {
    x: 0.75, y: 3.88, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("用户反映早餐时间紧张，经常跳过早餐", {
    x: 2.2, y: 3.88, w: 7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("HMW问题：", {
    x: 0.75, y: 4.2, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("我们如何能够帮助用户在5分钟内准备好营养早餐？", {
    x: 2.2, y: 4.2, w: 7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Practice template
  slide.addText("练习模板", {
    x: 0.5, y: 5.0, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("用户洞察：__________  →  HMW问题：我们如何能够 __________？", {
    x: 2.3, y: 5.0, w: 7, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("134", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
