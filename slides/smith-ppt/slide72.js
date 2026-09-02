const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("讨论问题一", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("斯密的误读", {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Question box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.1, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("核心问题", {
    x: 0.7, y: 2.2, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("斯密真的说过自私是美德吗？他被误读了多远？", {
    x: 0.7, y: 2.55, w: 8.6, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Discussion points
  const points = [
    { q: "误读一", a: "斯密是'自私的鼓吹者'——这个标签从何而来？" },
    { q: "误读二", a: "《国富论》vs《道德情操论》：两本书的自私观是否矛盾？" },
    { q: "误读三", a: "'看不见的手'被用来为市场原教旨主义背书，斯密会同意吗？" },
    { q: "讨论", a: "为什么会出现'经济人假设'这样的简化？你能举出身边的例子吗？" }
  ];

  points.forEach((point, i) => {
    const y = 3.6 + i * 0.55;
    slide.addText(point.q, {
      x: 0.5, y: y, w: 1.2, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(point.a, {
      x: 1.7, y: y, w: 7.8, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("72", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
