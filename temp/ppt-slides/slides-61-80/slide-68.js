// slide-68.js - 收敛时机选择
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '收敛时机选择'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("收敛时机选择", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Timeline showing convergence timing
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.0, w: 8.4, h: 0.06,
    fill: { color: theme.secondary }
  });

  const timePoints = [
    { x: 1.0, label: "开始", desc: "设定议程\n明确产出目标", optimal: false },
    { x: 3.5, label: "30%", desc: "想法初步\n发散阶段", optimal: false },
    { x: 6.0, label: "60%", desc: "信息过载\n疲劳点出现", optimal: true },
    { x: 8.5, label: "80%", desc: "收尾阶段\n时间压力", optimal: false }
  ];

  timePoints.forEach((pt) => {
    // Node
    slide.addShape(pres.shapes.OVAL, {
      x: pt.x, y: 1.85, w: 0.35, h: 0.35,
      fill: { color: pt.optimal ? theme.accent : theme.secondary }
    });

    // Label above
    slide.addText(pt.label, {
      x: pt.x - 0.3, y: 1.35, w: 0.95, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: pt.optimal ? theme.accent : theme.primary, bold: true, align: "center"
    });

    // Description below
    slide.addText(pt.desc, {
      x: pt.x - 0.5, y: 2.3, w: 1.35, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Optimal zone highlight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.7, w: 2.0, h: 0.65,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("最佳收敛点", {
    x: 5.2, y: 1.7, w: 2.0, h: 0.65,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // Signals to converge section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.25, w: 9, h: 2.15,
    fill: { color: theme.light }
  });

  slide.addText("收敛信号", {
    x: 0.7, y: 3.4, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const signals = [
    "参与者开始重复观点，而非提出新想法",
    "出现疲劳迹象，参与度明显下降",
    "时间已经使用了约70%",
    "核心产出已经比较清晰
  ];

  signals.forEach((sig, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.7 + col * 4.5;
    const y = 3.85 + row * 0.6;

    slide.addText("→", {
      x: x, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent
    });
    slide.addText(sig, {
      x: x + 0.35, y: y, w: 4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("68", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };