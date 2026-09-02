const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("行为经济学对斯密的补充", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("49", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Left panel - Smith's assumption
  slide.addText("斯密的「经济人」假设", {
    x: 0.5, y: 1.15, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.6, w: 4.3, h: 1.8,
    fill: { color: theme.primary }, rectRadius: 0.1
  });

  const smithAssumptions = [
    "完全理性计算",
    "完全自利动机",
    "完美信息获取",
    "瞬间市场出清"
  ];

  smithAssumptions.forEach((item, i) => {
    slide.addText("✗ " + item, {
      x: 0.7, y: 1.75 + i * 0.4, w: 4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF"
    });
  });

  // Right panel - Behavioral economics
  slide.addText("行为经济学的修正", {
    x: 5.2, y: 1.15, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.6, w: 4.3, h: 1.8,
    fill: { color: theme.secondary }, rectRadius: 0.1
  });

  const behavioralInsights = [
    "有限理性认知",
    "社会偏好互惠",
    "信息不对称普遍",
    "价格黏性与调整延迟"
  ];

  behavioralInsights.forEach((item, i) => {
    slide.addText("✓ " + item, {
      x: 5.4, y: 1.75 + i * 0.4, w: 4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF"
    });
  });

  // Arrow between
  slide.addText("→", {
    x: 4.6, y: 2.2, w: 0.6, h: 0.5,
    fontSize: 28, fontFace: "Georgia", color: theme.accent,
    align: "center", bold: true
  });

  // Bottom section - Key figures
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.6, w: 9, h: 0.05,
    fill: { color: theme.light }
  });

  slide.addText("行为经济学先驱", {
    x: 0.5, y: 3.8, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  const pioneers = [
    { name: "丹尼尔·卡尼曼", contribution: "前景理论/有限理性" },
    { name: "理查德·塞勒", contribution: "心理账户/助推理论" },
    { name: "赫伯特·西蒙", contribution: "有限理性决策模型" }
  ];

  pioneers.forEach((pioneer, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 4.25, w: 2.9, h: 0.75,
      fill: { color: "FFFFFF" }, rectRadius: 0.08,
      line: { color: theme.light, width: 1 }
    });
    slide.addText(pioneer.name, {
      x: x, y: 4.28, w: 2.9, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary,
      bold: true, align: "center"
    });
    slide.addText(pioneer.contribution, {
      x: x, y: 4.6, w: 2.9, h: 0.35,
      fontSize: 11, fontFace: "Calibri", color: theme.secondary,
      align: "center"
    });
  });

  return slide;
}

module.exports = { createSlide };
