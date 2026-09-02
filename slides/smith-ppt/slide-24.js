const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派核心命题（二）", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Proposition 4
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 0.6, h: 1.3,
    fill: { color: theme.primary }
  });
  slide.addText("4", {
    x: 0.5, y: 1.15, w: 0.6, h: 1.3,
    fontSize: 36, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("市场过程理论", {
    x: 1.3, y: 1.25, w: 8, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("市场不是静态的均衡状态，而是持续的企业家发现过程——错误、纠正、新发现永不停歇", {
    x: 1.3, y: 1.7, w: 8, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Proposition 5
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.6, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.6, w: 0.6, h: 1.3,
    fill: { color: theme.accent }
  });
  slide.addText("5", {
    x: 0.5, y: 2.6, w: 0.6, h: 1.3,
    fontSize: 36, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("价格传递信息", {
    x: 1.3, y: 2.7, w: 8, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("价格体系是人类最伟大的信息处理装置——汇总分散知识，使无需中央指令的协调成为可能", {
    x: 1.3, y: 3.15, w: 8, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Proposition 6
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.05, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.05, w: 0.6, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addText("6", {
    x: 0.5, y: 4.05, w: 0.6, h: 1.0,
    fontSize: 36, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("时间偏好与利率", {
    x: 1.3, y: 4.15, w: 8, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("利率反映社会的时间偏好结构，是连接现在与未来的桥梁", {
    x: 1.3, y: 4.55, w: 8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("24", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
