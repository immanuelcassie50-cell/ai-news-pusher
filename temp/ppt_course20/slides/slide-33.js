const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 2.0, w: 10, h: 2.0,
    fill: { color: theme.secondary, transparency: 20 }
  });
  slide.addText("课程总结", {
    x: 0.5, y: 1.4, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });
  slide.addText("科学育儿，从\"减法\"开始", {
    x: 0.5, y: 2.1, w: 9, h: 0.9,
    fontSize: 36, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center"
  });
  slide.addText("不是学得越多越好，而是筛选得越准越有效", {
    x: 0.5, y: 3.0, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center"
  });
  const takeaways = [
    "认识信息过载的本质",
    "掌握三层筛选框架",
    "建立信息白名单",
    "简化决策流程"
  ];
  takeaways.forEach((t, i) => {
    const x = 0.8 + i * 2.25;
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.7, y: 4.1, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(t, {
      x: x, y: 4.5, w: 2.1, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });
  });
  slide.addText("课程20 | 家庭教育中的科学育儿信息过载", {
    x: 0.5, y: 5.1, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center"
  });
  return slide;
};
module.exports = { createSlide };
