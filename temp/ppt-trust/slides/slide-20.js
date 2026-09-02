function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Main title - Lei Jun name with hot dry noodles
  slide.addText("雷军·热干面", {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontFace: "Microsoft YaHei", fontSize: 56, color: "FFFFFF",
    bold: true, align: "center"
  });

  // Subtitle
  slide.addText("真实错配与摆拍感", {
    x: 0.5, y: 3.2, w: 9, h: 0.7,
    fontFace: "Microsoft YaHei", fontSize: 24, color: theme.light,
    align: "center"
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 4.1, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  return slide;
}
module.exports = { createSlide };
