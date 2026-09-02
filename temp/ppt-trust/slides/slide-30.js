// slide-30.js - 位置错配小结
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("位置错配小结", {
    x: 0.5, y: 0.25, w: 4, h: 0.5,
    fontSize: 24,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Left column - 韩红
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 0.9, w: 4.3, h: 2.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 1.05, w: 1.4, h: 0.4,
    fill: { color: theme.secondary },
    rectRadius: 0.05
  });

  slide.addText("韩红", {
    x: 0.7, y: 1.05, w: 1.4, h: 0.4,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("边界信任", {
    x: 2.3, y: 1.05, w: 2.3, h: 0.4,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
    valign: "middle"
  });

  slide.addText([
    { text: "把私人情感、公共身份、商业交易捆绑", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "用公益姿态为商业目的背书" }
  ], {
    x: 0.7, y: 1.6, w: 3.9, h: 1.7,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right column - 李佳琦
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 0.9, w: 4.3, h: 2.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.4, y: 1.05, w: 1.4, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });

  slide.addText("李佳琦", {
    x: 5.4, y: 1.05, w: 1.4, h: 0.4,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("善意信任", {
    x: 7.0, y: 1.05, w: 2.3, h: 0.4,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
    valign: "middle"
  });

  slide.addText([
    { text: "用高收入视角否定别人处境", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "把个人感受凌驾于普通人现实之上" }
  ], {
    x: 5.4, y: 1.6, w: 3.9, h: 1.7,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Common insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.7, w: 9, h: 0.75,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("共同点：身份越高，同一句话越不能只按个人口吻理解", {
    x: 0.7, y: 3.7, w: 8.6, h: 0.75,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
    valign: "middle"
  });

  // Danger quote
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.7,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("\"我又没有恶意\" 是最危险的一句话", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.7,
    fontSize: 20,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
