const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("公共选择理论的核心命题", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Methodological individualism
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 4.4, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 2 }
  });
  slide.addText("方法论个人主义", {
    x: 0.6, y: 1.15, w: 4.2, h: 0.4,
    fontFace: "Microsoft YaHei", FontSize: 14, color: theme.secondary, bold: true
  });
  slide.addText([
    { text: "政治参与者都是理性的自我利益者", options: { bullet: true, breakLine: true } },
    { text: "政客追求选票和权力最大化", options: { bullet: true, breakLine: true } },
    { text: "官僚追求部门预算和影响力", options: { bullet: true, breakLine: true } },
    { text: "选民倾向于搭便车（理性无知）", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.6, w: 4.1, h: 1.4,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Implications for government
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.1, w: 4.4, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("政府失灵", {
    x: 5.2, y: 1.15, w: 4.2, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.accent, bold: true
  });
  slide.addText([
    { text: "利益集团操纵政策", options: { bullet: true, breakLine: true } },
    { text: "短视政策（选举周期）", options: { bullet: true, breakLine: true } },
    { text: "外部性被忽视", options: { bullet: true, breakLine: true } },
    { text: "政府产出难以量化监督", options: { bullet: true } }
  ], {
    x: 5.3, y: 1.6, w: 4.1, h: 1.4,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Key quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.3, w: 9, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("\"政治市场\"与\"经济市场\"同样需要竞争与规则约束", {
    x: 0.6, y: 3.4, w: 8.8, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 14, color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Policy implications
  slide.addText("政策含义", {
    x: 0.5, y: 4.15, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  const implications = [
    { title: "宪法约束", desc: "用宪法规制政府权力" },
    { title: "分权制衡", desc: "避免权力集中" },
    { title: "规则优于裁量", desc: "减少官员自由裁量权" }
  ];

  implications.forEach((impl, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 4.55, w: 2.95, h: 0.95,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(impl.title, {
      x: x + 0.1, y: 4.6, w: 2.75, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 12, color: theme.accent, bold: true
    });
    slide.addText(impl.desc, {
      x: x + 0.1, y: 4.95, w: 2.75, h: 0.5,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("41", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
