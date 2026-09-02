const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("弗里德曼的货币理论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Central equation
  slide.addShape(pres.ShapeType.rect, {
    x: 2.5, y: 1.15, w: 5, h: 0.9,
    fill: { color: theme.secondary }
  });
  slide.addText("MV = PY", {
    x: 2.5, y: 1.2, w: 5, h: 0.8,
    fontFace: "Georgia", fontSize: 36, color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Equation breakdown
  const eqTerms = [
    { term: "M", desc: "货币供给量" },
    { term: "V", desc: "货币流通速度" },
    { term: "P", desc: "价格水平" },
    { term: "Y", desc: "实际产出" }
  ];

  eqTerms.forEach((item, i) => {
    const x = 0.7 + i * 2.35;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.2, w: 2.2, h: 0.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(item.term, {
      x: x, y: 2.22, w: 2.2, h: 0.35,
      fontFace: "Georgia", fontSize: 18, color: theme.accent, bold: true,
      align: "center"
    });
    slide.addText(item.desc, {
      x: x, y: 2.55, w: 2.2, h: 0.3,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary,
      align: "center"
    });
  });

  // Two implications
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.1, w: 4.4, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("货币数量论重构", {
    x: 0.6, y: 3.2, w: 4.2, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.accent, bold: true
  });
  slide.addText([
    { text: "V（流通速度）在长期相当稳定", options: { bullet: true, breakLine: true } },
    { text: "Y（产出）取决于技术与资源", options: { bullet: true, breakLine: true } },
    { text: "因此：物价水平P由货币量M决定", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.6, w: 4.1, h: 1.1,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 3.1, w: 4.4, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("政策含义", {
    x: 5.2, y: 3.2, w: 4.2, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.accent, bold: true
  });
  slide.addText([
    { text: "货币供给应稳定、可预测增长", options: { bullet: true, breakLine: true } },
    { text: "反对相机抉择的货币政策", options: { bullet: true, breakLine: true } },
    { text: "通胀：货币超发的唯一结果", options: { bullet: true } }
  ], {
    x: 5.3, y: 3.6, w: 4.1, h: 1.1,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Connection to Smith
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("斯密视角：货币是\"交换媒介\"，弗里德曼证明货币供给对价格有决定性影响", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary,
    align: "center"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("33", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
