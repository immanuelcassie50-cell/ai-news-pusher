// slide-78.js - Graduated Punishment (渐进式惩罚)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 78,
  title: '渐进式惩罚'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("渐进式惩罚", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Escalation ladder visual
  const steps = [
    { level: "第一次", action: "警告", detail: "口头或书面警告", color: theme.light },
    { level: "第二次", action: "罚款", detail: "收取一定比例违约金", color: theme.accent },
    { level: "第三次", action: "终止", detail: "终止合作、寻求赔偿", color: "c53030" }
  ];

  const stepWidth = 2.8;
  const startX = 0.75;
  const startY = 1.4;
  const stepHeight = 1.5;
  const gapX = 0.35;

  steps.forEach((step, idx) => {
    const x = startX + idx * (stepWidth + gapX);

    // Step box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: stepWidth, h: stepHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: stepWidth, h: 0.15,
      fill: { color: step.color }
    });

    // Level
    slide.addText(step.level, {
      x: x, y: startY + 0.3, w: stepWidth, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Action
    slide.addText(step.action, {
      x: x, y: startY + 0.7, w: stepWidth, h: 0.4,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: step.color, bold: true,
      align: "center", valign: "middle"
    });

    // Detail
    slide.addText(step.detail, {
      x: x + 0.15, y: startY + 1.1, w: stepWidth - 0.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Arrow between steps (except last)
    if (idx < steps.length - 1) {
      slide.addText("→", {
        x: x + stepWidth - 0.1, y: startY + 0.55, w: 0.8, h: 0.4,
        fontSize: 24, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Benefits section
  slide.addText("渐进式惩罚的优势", {
    x: 0.5, y: 3.2, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const benefits = [
    "给犯错方改正的机会",
    "避免因一时错误毁掉长期合作",
    "维持合作稳定性的同时保持威慑力"
  ];

  benefits.forEach((b, idx) => {
    const y = 3.7 + idx * 0.45;

    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(b, {
      x: 1.0, y: y, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("78", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-78-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
