// slide-46.js - 面对年轻人的建议
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("面对年轻人的建议", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  // 洞察标签
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 1.2, h: 0.35,
    fill: { color: theme.accent },
  });
  slide.addText("洞察", {
    x: 0.5, y: 1.1, w: 1.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  // 洞察内容
  slide.addText("年轻人对被教育、被灌输道理的敏感度，比以前任何一代都高", {
    x: 1.9, y: 1.1, w: 7.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle",
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.6, w: 9, h: 0.02,
    fill: { color: theme.light },
  });

  // 两列对比
  // 左列 - 他们不缺
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.8, w: 4.3, h: 0.5,
    fill: { color: theme.secondary },
  });
  slide.addText("他们不缺", {
    x: 0.5, y: 1.8, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.3, w: 4.3, h: 0.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
  });
  slide.addText("道理", {
    x: 0.5, y: 2.3, w: 4.3, h: 0.8,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center", valign: "middle",
  });

  // 右列 - 他们缺
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.8, w: 4.3, h: 0.5,
    fill: { color: theme.accent },
  });
  slide.addText("他们缺", {
    x: 5.2, y: 1.8, w: 4.3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 2.3, w: 4.3, h: 0.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
  });
  slide.addText("自己想明白的过程", {
    x: 5.2, y: 2.3, w: 4.3, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle",
  });

  // 设计原则
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.35, w: 1.8, h: 0.35,
    fill: { color: theme.primary },
  });
  slide.addText("设计原则", {
    x: 0.5, y: 3.35, w: 1.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
  slide.addText([
    "少一点\"我告诉你应该怎样\"",
    "多一点\"我们一起看看这背后到底发生了什么\"",
  ].join("\n"), {
    x: 2.5, y: 3.3, w: 7, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
  });

  // 践行
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.15, w: 1.2, h: 0.35,
    fill: { color: theme.accent },
  });
  slide.addText("践行", {
    x: 0.5, y: 4.15, w: 1.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
  slide.addText("这道本身就是边界信任的实践", {
    x: 1.9, y: 4.15, w: 7.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle",
  });

  // 底部金句
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fill: { color: theme.primary },
  });
  slide.addText("道理讲得越少，留白留得越多，年轻人反而记得越牢", {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
}

module.exports = { createSlide };
