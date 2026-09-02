const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }
  });

  // Decorative shapes
  slide.addShape(pres.ShapeType.ellipse, {
    x: -1, y: -1, w: 4, h: 4,
    fill: { color: theme.secondary, transparency: 85 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 7.5, y: 3.5, w: 3.5, h: 3.5,
    fill: { color: theme.accent, transparency: 85 }
  });

  slide.addText("MODULE 6", {
    x: 0.5, y: 1.5, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Arial", bold: true,
    color: theme.accent, align: "center", charSpacing: 8
  });

  slide.addText("建立你的家庭\n信息管理系统", {
    x: 0.5, y: 2.2, w: 9, h: 1.6,
    fontSize: 40, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 4.0, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("从混乱到有序，从焦虑到笃定", {
    x: 0.5, y: 4.3, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("69", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
