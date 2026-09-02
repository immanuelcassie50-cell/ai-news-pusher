// slide-78.js - 跟踪机制
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 78,
  title: '跟踪机制'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("跟踪机制", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Tracking cycle visualization
  const cycleSteps = [
    { label: "约定", desc: "明确下次检查时间" },
    { label: "提醒", desc: "提前1-2天发送提醒" },
    { label: "回顾", desc: "检查进展与障碍" },
    { label: "调整", desc: "必要时调整计划" }
  ];

  // Central circle
  slide.addShape(pres.shapes.OVAL, {
    x: 4.0, y: 2.3, w: 2, h: 2,
    fill: { color: theme.primary }
  });
  slide.addText("跟踪\n循环", {
    x: 4.0, y: 2.3, w: 2, h: 2,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Cycle steps around center
  const angleStep = 360 / 4;
  const radius = 2.2;
  const centerX = 5.0;
  const centerY = 3.3;

  cycleSteps.forEach((step, i) => {
    const angle = (i * angleStep - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle) - 0.9;
    const y = centerY + radius * Math.sin(angle) - 0.5;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 1.8, h: 1.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 1.8, h: 0.05,
      fill: { color: theme.accent }
    });

    slide.addText(step.label, {
      x: x, y: y + 0.15, w: 1.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(step.desc, {
      x: x, y: y + 0.5, w: 1.8, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Right side - Tracking methods
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 1.2, w: 2, h: 3.7,
    fill: { color: theme.light }
  });

  slide.addText("跟踪方式", {
    x: 7.5, y: 1.35, w: 2, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  const methods = ["周例会\n回顾", "邮件\n更新", "在线\n文档", "企业\n微信"];
  methods.forEach((m, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 7.85, y: 1.85 + i * 0.75, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(m, {
      x: 8.3, y: 1.85 + i * 0.75, w: 1.1, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 6.7, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("关键原则：跟踪不是监督，而是支持和推动", {
    x: 0.7, y: 5.0, w: 6.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("78", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };