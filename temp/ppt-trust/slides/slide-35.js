// slide-35.js - Section: 方法论工具
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 2.2, w: 10, h: 1.3,
    fill: { color: theme.accent },
  });

  slide.addText("方法论工具", {
    x: 0.5, y: 1.3, w: 9, h: 0.8,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center",
  });

  slide.addText("四个能带走、能自查、能修复的工具", {
    x: 0.5, y: 2.35, w: 9, h: 0.9,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle",
  });

  return slide;
}

module.exports = { createSlide };
