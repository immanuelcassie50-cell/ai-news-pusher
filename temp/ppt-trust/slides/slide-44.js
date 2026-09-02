// slide-44.js - Section divider - 收尾与方法迁移
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // 装饰线条
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 1.5, w: 2, h: 0.05,
    fill: { color: theme.accent },
  });

  // 主标题
  slide.addText("收尾与方法迁移", {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontSize: 52, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center",
  });

  // 副标题
  slide.addText("怎么把今天这套东西，变成你自己以后能用的方法", {
    x: 0.5, y: 3.2, w: 9, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center",
  });

  // 装饰线条
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 4.2, w: 2, h: 0.05,
    fill: { color: theme.accent },
  });

  return slide;
}

module.exports = { createSlide };
