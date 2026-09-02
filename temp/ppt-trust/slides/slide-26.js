// slide-26.js - 李佳琦事件经过
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page title
  slide.addText("经典案例重新拆解", {
    x: 0.5, y: 0.3, w: 7, h: 0.6,
    fontSize: 26,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Event card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  // Label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 1.15, w: 0.9, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });

  slide.addText("事件", {
    x: 0.7, y: 1.15, w: 0.9, h: 0.35,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("消费者说眉笔越来越贵了，回应被理解成质问工资涨了吗是不是不够努力", {
    x: 1.8, y: 1.15, w: 7.5, h: 0.7,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Impact card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.4, w: 9, h: 1.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.55, w: 0.9, h: 0.35,
    fill: { color: theme.secondary },
    rectRadius: 0.05
  });

  slide.addText("影响", {
    x: 0.7, y: 2.55, w: 0.9, h: 0.35,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("原本关于定价的讨论变成了普通人是否被理解被尊重的问题", {
    x: 1.8, y: 2.55, w: 7.5, h: 0.7,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Mechanism card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.8, w: 9, h: 1.2,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 2 },
    rectRadius: 0.08
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 3.95, w: 1.5, h: 0.35,
    fill: { color: theme.primary },
    rectRadius: 0.05
  });

  slide.addText("机制关联", {
    x: 0.7, y: 3.95, w: 1.5, h: 0.35,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("与韩红是同一种机制——位置错配", {
    x: 2.4, y: 3.95, w: 6.8, h: 0.7,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  return slide;
}

module.exports = { createSlide };
