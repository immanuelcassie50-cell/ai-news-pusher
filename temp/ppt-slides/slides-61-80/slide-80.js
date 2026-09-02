// slide-80.js - 持续改进
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 80,
  title: '持续改进'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("持续改进", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // PDCA Cycle visualization
  const cycleSteps = [
    { label: "Plan\n计划", desc: "设定改进目标", color: theme.primary },
    { label: "Do\n执行", desc: "实施改进措施", color: theme.accent },
    { label: "Check\n检查", desc: "评估实施效果", color: theme.secondary },
    { label: "Act\n处理", desc: "固化成功经验", color: theme.primary }
  ];

  // Central circle
  slide.addShape(pres.shapes.OVAL, {
    x: 3.75, y: 2.1, w: 2.5, h: 2.5,
    fill: { color: theme.light }
  });
  slide.addText("PDCA\n持续循环", {
    x: 3.75, y: 2.1, w: 2.5, h: 2.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Cycle steps
  const angleStep = 360 / 4;
  const radius = 2.4;
  const centerX = 5.0;
  const centerY = 3.35;

  cycleSteps.forEach((step, i) => {
    const angle = (i * angleStep - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle) - 0.85;
    const y = centerY + radius * Math.sin(angle) - 0.85;

    // Circle
    slide.addShape(pres.shapes.OVAL, {
      x: x, y: y, w: 1.7, h: 1.7,
      fill: { color: step.color }
    });

    slide.addText(step.label, {
      x: x, y: y + 0.25, w: 1.7, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(step.desc, {
      x: x, y: y + 1.0, w: 1.7, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center"
    });
  });

  // Right side - Improvement areas
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.3, y: 1.2, w: 2.2, h: 3.5,
    fill: { color: theme.light }
  });

  slide.addText("改进领域", {
    x: 7.3, y: 1.35, w: 2.2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  const areas = [
    "引导技术",
    "时间管理",
    "参与激发",
    "产出质量",
    "文档沉淀",
    "后续跟踪"
  ];

  areas.forEach((area, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 7.5, y: 1.85 + i * 0.45, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(area, {
      x: 7.7, y: 1.85 + i * 0.45, w: 1.7, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom - Key takeaway
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 6.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("每次工作坊都是一次学习机会，复盘是最高效的成长方式", {
    x: 0.7, y: 4.9, w: 6.3, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("80", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };