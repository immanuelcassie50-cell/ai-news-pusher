// slide-12.js - 案例总览
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // 浅色背景
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("三个案例，三种塌法", {
    x: 0.5,
    y: 0.35,
    w: 9,
    h: 0.7,
    fontSize: 28,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  // 表格头部
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.6,
    fill: { color: theme.primary },
  });

  slide.addText("案例", {
    x: 0.5,
    y: 1.2,
    w: 3,
    h: 0.6,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center",
    valign: "middle",
    bold: true,
  });

  slide.addText("踩中哪一层", {
    x: 3.5,
    y: 1.2,
    w: 3,
    h: 0.6,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center",
    valign: "middle",
    bold: true,
  });

  slide.addText("属于哪种机制", {
    x: 6.5,
    y: 1.2,
    w: 3,
    h: 0.6,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center",
    valign: "middle",
    bold: true,
  });

  // 表格行1
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.8,
    w: 9,
    h: 0.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
  });

  slide.addText("韩红\"走个面儿\"", {
    x: 0.5,
    y: 1.8,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center",
    valign: "middle",
  });

  slide.addText("边界信任", {
    x: 3.5,
    y: 1.8,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center",
    valign: "middle",
  });

  slide.addText("位置错配", {
    x: 6.5,
    y: 1.8,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center",
    valign: "middle",
    bold: true,
  });

  // 表格行2
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 2.6,
    w: 9,
    h: 0.8,
    fill: { color: theme.bg },
    line: { color: theme.light, width: 1 },
  });

  slide.addText("雷军热干面", {
    x: 0.5,
    y: 2.6,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center",
    valign: "middle",
  });

  slide.addText("真实信任", {
    x: 3.5,
    y: 2.6,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center",
    valign: "middle",
  });

  slide.addText("真实错配", {
    x: 6.5,
    y: 2.6,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center",
    valign: "middle",
    bold: true,
  });

  // 表格行3
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 3.4,
    w: 9,
    h: 0.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
  });

  slide.addText("李佳琦79元眉笔", {
    x: 0.5,
    y: 3.4,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center",
    valign: "middle",
  });

  slide.addText("善意信任", {
    x: 3.5,
    y: 3.4,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center",
    valign: "middle",
  });

  slide.addText("位置错配", {
    x: 6.5,
    y: 3.4,
    w: 3,
    h: 0.8,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center",
    valign: "middle",
    bold: true,
  });

  // 底部提示
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 4.5,
    w: 9,
    h: 0.7,
    fill: { color: theme.light },
  });

  slide.addText("韩红和李佳琦，机制上其实是同一类——位置错配", {
    x: 0.5,
    y: 4.5,
    w: 9,
    h: 0.7,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center",
    valign: "middle",
    bold: true,
  });

  return slide;
}

module.exports = { createSlide };
