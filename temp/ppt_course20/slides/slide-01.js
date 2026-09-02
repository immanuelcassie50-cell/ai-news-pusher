const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 3.8, w: 10, h: 1.825,
    fill: { color: theme.primary, transparency: 85 }
  });
  slide.addText("家庭教育中的\"科学育儿信息过载\"", {
    x: 0.5, y: 1.8, w: 9, h: 1,
    fontSize: 40, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center"
  });
  slide.addText("如何筛选与决策", {
    x: 0.5, y: 2.8, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  slide.addText("课程20", {
    x: 0.5, y: 4.2, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });
  return slide;
};
module.exports = { createSlide };
