// slide-47.js - Change Fatigue Prevention
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 47,
  title: '变革疲劳的预防与应对'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革疲劳的预防与应对", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("当员工经历多次变革后，可能出现以下症状：", {
    x: 0.5, y: 1.0, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // Symptoms
  const symptoms = [
    "对变革消息本能抵触",
    "参与意愿显著下降",
    "工作投入度降低",
    "负面情绪蔓延"
  ];

  symptoms.forEach((s, i) => {
    const y = 1.5 + i * 0.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(s, {
      x: 0.75, y: y, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Prevention strategies
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 1.5, w: 4.5, h: 3.5,
    fill: { color: theme.light }
  });

  slide.addText("预防策略：", {
    x: 4.7, y: 1.7, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const prevent = [
    "控制变革节奏，避免同时推进多个项目",
    "给员工留出恢复期",
    "及时庆祝阶段性胜利",
    "高层领导公开认可员工付出"
  ];

  prevent.forEach((p, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 4.7, y: 2.25 + i * 0.6, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });
    slide.addText(p, {
      x: 4.95, y: 2.2 + i * 0.6, w: 3.8, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-47-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
