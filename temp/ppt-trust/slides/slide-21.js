function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("雷军事件经过", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, color: theme.primary,
    bold: true, align: "center"
  });

  // Date highlight
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 1.1, w: 8.8, h: 0.7,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("2026年6月15日，武汉街头", {
    x: 0.8, y: 1.2, w: 8.4, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 20, color: "FFFFFF",
    bold: true, align: "center"
  });

  // Event description box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 2.0, w: 8.8, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("事件：多台专业摄影设备，小学生说\"吃早饭还要这么多人拍照\"", {
    x: 0.8, y: 2.15, w: 8.4, h: 0.8,
    fontFace: "Microsoft YaHei", fontSize: 18, color: theme.primary,
    align: "center", valign: "middle"
  });

  // Two camps
  slide.addText("舆论两派", {
    x: 0.6, y: 3.3, w: 9, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.secondary,
    align: "center"
  });

  // Left camp
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 3.8, w: 4, h: 0.8,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });

  slide.addText("支持：真实记录生活", {
    x: 0.8, y: 3.9, w: 4, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 15, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Right camp
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.2, y: 3.8, w: 4, h: 0.8,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("质疑：摆拍感太强", {
    x: 5.2, y: 3.9, w: 4, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 15, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Key question
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.5, y: 4.85, w: 7, h: 0.65,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("关键问题：雷军到底做错了什么？", {
    x: 1.5, y: 4.92, w: 7, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 18, color: "FFFFFF",
    bold: true, align: "center"
  });

  return slide;
}
module.exports = { createSlide };
