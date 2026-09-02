const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("讨论问题三", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("自发秩序与设计", {
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
  slide.addText("社会秩序是从自由竞争中自发涌现，还是需要精心设计？", {
    x: 0.7, y: 2.55, w: 8.6, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Spectrum diagram
  slide.addText("极简设计", {
    x: 0.5, y: 3.5, w: 1.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, align: "left"
  });
  slide.addText("自发涌现", {
    x: 7.7, y: 3.5, w: 1.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, align: "right"
  });

  // Gradient bar simulation (multiple rectangles)
  const colors = [theme.secondary, theme.light, theme.accent, theme.primary];
  colors.forEach((c, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 2.3 + i * 1.5, y: 3.5, w: 1.5, h: 0.3,
      fill: { color: c }
    });
  });

  // Thinkers positions
  const thinkers = [
    { name: "哈耶克", x: 2.8, pos: "自发秩序" },
    { name: "斯密", x: 5.3, pos: "看不见的手" },
    { name: "凯恩斯", x: 7.5, pos: "政府干预" },
    { name: "计划派", x: 8.8, pos: "顶层设计" }
  ];
  thinkers.forEach(t => {
    slide.addText(t.name, {
      x: t.x, y: 3.85, w: 1, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(t.pos, {
      x: t.x - 0.3, y: 4.1, w: 1.6, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Discussion questions
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 9, h: 0.9,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText("思辨题：互联网平台（淘宝、微信）是自发涌现还是设计产物？", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("74", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
