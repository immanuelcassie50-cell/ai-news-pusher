const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }
  });

  // Decorative elements
  slide.addShape(pres.ShapeType.ellipse, {
    x: -2, y: -2, w: 5, h: 5,
    fill: { color: theme.secondary, transparency: 85 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 7.5, y: 3.5, w: 4, h: 4,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8, y: -1.5, w: 3, h: 3,
    fill: { color: theme.light, transparency: 90 }
  });

  // Thank you text
  slide.addText("谢谢", {
    x: 0.5, y: 1.5, w: 9, h: 1.2,
    fontSize: 60, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center"
  });

  slide.addText("Thank You", {
    x: 0.5, y: 2.7, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, align: "center", charSpacing: 6
  });

  // Divider
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 3.5, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Final message
  slide.addText("祝愿每个家庭都能找到适合自己的育儿信息管理方式", {
    x: 0.5, y: 3.8, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Course info
  slide.addText(" Course 20: 家庭教育中的科学育儿信息过载", {
    x: 0.5, y: 4.5, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("98", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
