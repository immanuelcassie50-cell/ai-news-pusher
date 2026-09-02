const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派核心命题（一）", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Proposition 1
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 0.6, h: 1.3,
    fill: { color: theme.primary }
  });
  slide.addText("1", {
    x: 0.5, y: 1.15, w: 0.6, h: 1.3,
    fontSize: 36, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("方法论个人主义", {
    x: 1.3, y: 1.25, w: 8, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("社会现象应从个体行动者的目的、信念和选择来解释，而非归因于\"社会\"、\"阶级\"或\"制度\"等抽象集体", {
    x: 1.3, y: 1.7, w: 8, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Proposition 2
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.6, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.6, w: 0.6, h: 1.3,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 0.5, y: 2.6, w: 0.6, h: 1.3,
    fontSize: 36, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("方法论主观主义", {
    x: 1.3, y: 2.7, w: 8, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("经济学研究的对象是人的主观状态——偏好、信念、预期——以及这些主观状态如何影响选择与行动", {
    x: 1.3, y: 3.15, w: 8, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Proposition 3
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.05, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.05, w: 0.6, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("3", {
    x: 0.5, y: 4.05, w: 0.6, h: 1.0,
    fontSize: 36, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("边际分析的重要性", {
    x: 1.3, y: 4.15, w: 8, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("经济决策发生在边际——追加的单位，而非总量或平均", {
    x: 1.3, y: 4.55, w: 8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("23", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
