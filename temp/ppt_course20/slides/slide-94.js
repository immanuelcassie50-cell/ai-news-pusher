const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("讲师联系方式", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Contact card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 2.5, y: 1.5, w: 5.0, h: 3.5,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 2 },
    rectRadius: 0.15
  });

  // Avatar placeholder
  slide.addShape(pres.ShapeType.ellipse, {
    x: 4.25, y: 1.8, w: 1.5, h: 1.5,
    fill: { color: theme.secondary }
  });
  slide.addText("讲师", {
    x: 4.25, y: 1.8, w: 1.5, h: 1.5,
    fontSize: 20, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Contact info
  slide.addText("课程讲师", {
    x: 2.7, y: 3.4, w: 4.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center"
  });

  const contactItems = [
    "邮箱: instructor@example.com",
    "微信公众号: 科学育儿研究院",
    "微信群: 科学育儿互助群",
    "工作时间: 周一至周五 9:00-18:00"
  ];

  slide.addText(contactItems.map((c, i) => ({
    text: c,
    options: { breakLine: i < contactItems.length - 1 }
  })), {
    x: 2.8, y: 3.85, w: 4.4, h: 1.0,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Note
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 5.15, w: 9.2, h: 0.4,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.05
  });
  slide.addText("课后有任何问题，欢迎随时联系，我们将持续为您提供支持", {
    x: 0.5, y: 5.2, w: 9.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("94", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
