const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Full-width header with gradient effect (multiple bars)
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 2.2,
    fill: { color: theme.primary }
  });

  // Main title
  slide.addText("最后的思考", {
    x: 0.5, y: 0.8, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Georgia",
    color: "FFFFFF", bold: true, align: "center"
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 4.0, y: 1.85, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Central reflection quote
  slide.addText("学习斯密，不是为了记住他的结论，", {
    x: 0.5, y: 2.6, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });
  slide.addText("而是为了学会像他一样思考：", {
    x: 0.5, y: 3.1, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Three key takeaways
  const takeaways = [
    { num: "1", text: "在自利与利他之间寻找平衡" },
    { num: "2", text: "在自发秩序与有意设计之间保持谦逊" },
    { num: "3", text: "在市场效率与道德关怀之间不负良心" }
  ];

  takeaways.forEach((t, i) => {
    const y = 3.75 + i * 0.55;
    slide.addShape(pres.ShapeType.ellipse, {
      x: 1.5, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(t.num, {
      x: 1.5, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Calibri",
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(t.text, {
      x: 2.1, y: y, w: 6.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Thank you
  slide.addText("感谢聆听", {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("90", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
