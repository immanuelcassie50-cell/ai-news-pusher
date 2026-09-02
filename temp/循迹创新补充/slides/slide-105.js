// slide-105.js - SCAMPER实战案例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 105,
  title: 'SCAMPER实战案例'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Header
  slide.addText("实战案例", {
    x: 0.5, y: 0.25, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("SCAMPER实战案例", {
    x: 0.5, y: 0.5, w: 6, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("某产品创新全过程", {
    x: 6.5, y: 0.6, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "right"
  });

  // Three phase timeline
  const phases = [
    {
      title: "背景",
      content: "某传统零售企业面临电商冲击，门店客流持续下降，需要寻找数字化转型突破口"
    },
    {
      title: "SCAMPER分析",
      content: "通过S替代转型线上、通过C组合打通会员体系、通过E消除中间环节、建立DTC模式"
    },
    {
      title: "创新成果",
      content: "建立线上线下一体化会员系统，三个月内会员复购率提升40%，门店客流逆转增长"
    }
  ];

  const phaseW = 2.9;
  const phaseH = 2.8;
  const startX = 0.5;
  const startY = 1.25;
  const gap = 0.25;

  phases.forEach((phase, i) => {
    const x = startX + i * (phaseW + gap);

    // Phase box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: phaseW, h: phaseH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Phase number
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: phaseW, h: 0.5,
      fill: { color: i === 2 ? theme.accent : theme.primary }
    });
    slide.addText("0" + (i + 1), {
      x: x + 0.1, y: startY + 0.05, w: 0.4, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    slide.addText(phase.title, {
      x: x + 0.5, y: startY + 0.08, w: phaseW - 0.6, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    // Content
    slide.addText(phase.content, {
      x: x + 0.15, y: startY + 0.65, w: phaseW - 0.3, h: 2,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top",
      lineSpaceMult: 1.4
    });
  });

  // Arrow connectors
  for (let i = 0; i < 2; i++) {
    const x = startX + (i + 1) * (phaseW + gap) - gap / 2 - 0.15;
    slide.addText("→", {
      x: x, y: startY + phaseH / 2 - 0.2, w: 0.3, h: 0.4,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });
  }

  // Experience summary
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.65,
    fill: { color: theme.primary }
  });

  slide.addText("经验总结", {
    x: 0.7, y: 4.38, w: 1.2, h: 0.2,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("SCAMPER不是一次性工具，而是持续创新的思维方式——每次应用都能发现新的可能性", {
    x: 0.7, y: 4.58, w: 8.6, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("105", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };