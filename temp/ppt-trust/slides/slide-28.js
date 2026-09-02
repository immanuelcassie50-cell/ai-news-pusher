// slide-28.js - 核心金句
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Center decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 0.8, w: 1, h: 0.06,
    fill: { color: theme.accent }
  });

  // Main quote
  slide.addText("共情不是同意对方，", {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 36,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
    align: "center"
  });

  slide.addText("而是承认对方所站的位置是真实存在的", {
    x: 0.5, y: 1.9, w: 9, h: 0.8,
    fontSize: 36,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
    align: "center"
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3, y: 2.9, w: 4, h: 0.03,
    fill: { color: theme.light }
  });

  // Extension section
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.2, w: 8.4, h: 1.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  slide.addText("延伸", {
    x: 1.0, y: 3.35, w: 1, h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true
  });

  slide.addText("79元贵不贵见仁见智，但普通人有没有资格觉得贵不该被否定——", {
    x: 1.0, y: 3.7, w: 8, h: 0.4,
    fontSize: 15,
    fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("一旦否定打的就不再是价格的仗，是尊严的仗，没人能赢", {
    x: 1.0, y: 4.15, w: 8, h: 0.4,
    fontSize: 15,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  return slide;
}

module.exports = { createSlide };
