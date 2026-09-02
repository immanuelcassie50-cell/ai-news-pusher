const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("制度经济学的现代复兴", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("47", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Left column - Key economists
  slide.addText("代表人物", {
    x: 0.5, y: 1.15, w: 4.3, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" }, rectRadius: 0.1,
    line: { color: theme.light, width: 1 }
  });

  const economists = [
    { name: "罗纳德·科斯", work: "《企业的性质》(1937)" },
    { name: "道格拉斯·诺斯", work: "制度变迁理论" },
    { name: "奥利弗·威廉姆森", work: "交易成本经济学" },
    { name: "埃莉诺·奥斯特罗姆", work: "公共池塘资源治理" }
  ];

  economists.forEach((econ, i) => {
    slide.addText(econ.name, {
      x: 0.7, y: 1.8 + i * 0.55, w: 4, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary,
      bold: true
    });
    slide.addText(econ.work, {
      x: 0.7, y: 2.1 + i * 0.55, w: 4, h: 0.3,
      fontSize: 12, fontFace: "Calibri", color: theme.light
    });
  });

  // Right column - Core ideas
  slide.addText("核心观点", {
    x: 5.2, y: 1.15, w: 4.3, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.65, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" }, rectRadius: 0.1,
    line: { color: theme.light, width: 1 }
  });

  const ideas = [
    "制度是经济绩效的核心决定因素",
    "交易成本决定制度选择",
    "产权保护促进长期投资",
    "制度变迁是渐进式的"
  ];

  ideas.forEach((idea, i) => {
    slide.addText([
      { text: "▸ ", options: { color: theme.accent } },
      { text: idea, options: { color: theme.secondary } }
    ], {
      x: 5.4, y: 1.85 + i * 0.55, w: 4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei"
    });
  });

  // Bottom insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.25, w: 9, h: 0.7,
    fill: { color: theme.secondary }, rectRadius: 0.08
  });
  slide.addText("制度经济学复兴：回归斯密「制度-行为-绩效」分析框架", {
    x: 0.7, y: 4.35, w: 8.6, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
