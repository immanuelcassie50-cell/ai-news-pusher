const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("米塞斯：人的行为学", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Left side - Biography card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 3.2, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 3.2, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("Ludwig von Mises", {
    x: 0.7, y: 1.4, w: 2.8, h: 0.35,
    fontSize: 16, fontFace: "Georgia",
    color: theme.primary, bold: true, italic: true
  });
  slide.addText("1881-1973", {
    x: 0.7, y: 1.8, w: 2.8, h: 0.25,
    fontSize: 12, fontFace: "Calibri",
    color: theme.light
  });
  slide.addText([
    { text: "奥地利学派第二代领袖", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "维也纳大学博士", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "纽约大学教授（1949年后）", options: { breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "《人的行为》（1949）", options: { fontSize: 12 } }
  ], {
    x: 0.7, y: 2.2, w: 2.8, h: 2.3,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Right side - Core ideas
  slide.addText("Praxeology：人的行为学", {
    x: 4.0, y: 1.15, w: 5.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "米塞斯将经济学建立在\"人的行为\"这一普遍事实之上：", options: { breakLine: true, fontSize: 13 } },
    { text: "\n", options: { breakLine: true, fontSize: 8 } },
    { text: "人是有目的的行动者（purposeful action），而非单纯的反应者（mere reaction）", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "行动必然涉及选择与取舍（value judgments）", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "手段与目的之间的推理可被系统化研究", options: { bullet: true, breakLine: true, fontSize: 12 } },
    { text: "\n", options: { breakLine: true, fontSize: 6 } },
    { text: "先验性：行动学公理不依赖经验验证", options: { bullet: true, fontSize: 12 } }
  ], {
    x: 4.0, y: 1.65, w: 5.5, h: 2.5,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Bottom quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("\"行动学是关于人的一般性科学，不涉及特定的历史时期或环境。\"", {
    x: 0.7, y: 4.5, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.bg, italic: true
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("16", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
