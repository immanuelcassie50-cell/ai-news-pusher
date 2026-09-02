const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("斯密市场理论的当代补充", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("53", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Smith's core contributions
  slide.addText("斯密的原创贡献", {
    x: 0.5, y: 1.15, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  const smithContributions = [
    { title: "分工理论", desc: "劳动分工受市场范围限制" },
    { title: "看不见的手", desc: "自利行为自动促进社会福利" },
    { title: "自由市场", desc: "反对重商主义、政府干预" },
    { title: "道德情感", desc: "市场经济需要正义支撑" }
  ];

  smithContributions.forEach((item, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 1.6 + i * 0.7, w: 4.3, h: 0.6,
      fill: { color: "FFFFFF" }, rectRadius: 0.08,
      line: { color: theme.primary, width: 1.5 }
    });
    slide.addText(item.title, {
      x: 0.65, y: 1.62 + i * 0.7, w: 1.4, h: 0.28,
      fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary,
      bold: true
    });
    slide.addText(item.desc, {
      x: 0.65, y: 1.9 + i * 0.7, w: 4, h: 0.28,
      fontSize: 11, fontFace: "Calibri", color: theme.secondary
    });
  });

  // Arrow
  slide.addText("→", {
    x: 4.6, y: 2.8, w: 0.6, h: 0.5,
    fontSize: 28, fontFace: "Georgia", color: theme.accent,
    align: "center", bold: true
  });

  // Modern supplements
  slide.addText("现代经济学的补充", {
    x: 5.2, y: 1.15, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  const supplements = [
    { theory: "信息经济学",补充: "信息不对称导致市场失灵" },
    { theory: "行为经济学",补充: "有限理性修正理性人假设" },
    { theory: "制度经济学",补充: "制度框架决定交易成本" },
    { theory: "博弈论",补充: "策略互动下的均衡分析" }
  ];

  supplements.forEach((item, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.2, y: 1.6 + i * 0.7, w: 4.3, h: 0.6,
      fill: { color: theme.secondary }, rectRadius: 0.08
    });
    slide.addText(item.theory, {
      x: 5.35, y: 1.62 + i * 0.7, w: 1.6, h: 0.28,
      fontSize: 13, fontFace: "Microsoft YaHei", color: theme.light,
      bold: true
    });
    slide.addText(item.补充, {
      x: 5.35, y: 1.9 + i * 0.7, w: 4, h: 0.28,
      fontSize: 11, fontFace: "Calibri", color: "FFFFFF"
    });
  });

  // Bottom synthesis
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.55, w: 9, h: 0.5,
    fill: { color: theme.accent }, rectRadius: 0.08
  });
  slide.addText("综合：当代市场理论 = 斯密框架 + 信息 + 行为 + 制度", {
    x: 0.5, y: 4.55, w: 9, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
