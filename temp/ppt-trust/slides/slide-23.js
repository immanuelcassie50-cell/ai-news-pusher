function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("小学生的穿透力", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, color: theme.primary,
    bold: true, align: "center"
  });

  // Quote highlight box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1, y: 1.1, w: 8, h: 1.3,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });

  slide.addText("小学生的话", {
    x: 1.2, y: 1.2, w: 7.6, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    align: "left"
  });

  slide.addText("\"吃早饭还要这么多人拍照\"", {
    x: 1.2, y: 1.55, w: 7.6, h: 0.7,
    fontFace: "Microsoft YaHei", fontSize: 24, color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  // Analysis section
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 2.6, w: 8.8, h: 1.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("分析：不是专业评论，是把成年人都感觉到却不好意思说破的东西直接说破", {
    x: 0.8, y: 2.75, w: 8.4, h: 0.7,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary,
    align: "center", valign: "middle"
  });

  // Comparison section
  slide.addText("对比", {
    x: 0.6, y: 3.85, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.secondary,
    align: "center"
  });

  // Lei Jun comparison
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 4.3, w: 4.2, h: 1.0,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("雷军·武汉热干面", {
    x: 0.8, y: 4.4, w: 3.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.light,
    align: "center"
  });

  slide.addText("舆论争议大", {
    x: 0.8, y: 4.8, w: 3.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: "FFFFFF",
    bold: true, align: "center"
  });

  // Huang Renxun comparison
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.2, y: 4.3, w: 4.2, h: 1.0,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });

  slide.addText("黄仁勋·北京炸酱面", {
    x: 5.4, y: 4.4, w: 3.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.light,
    align: "center"
  });

  slide.addText("舆论轻松很多", {
    x: 5.4, y: 4.8, w: 3.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: "FFFFFF",
    bold: true, align: "center"
  });

  return slide;
}
module.exports = { createSlide };
