// slide-11.js - 边界信任
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // 浅色背景
  slide.background = { color: theme.bg };

  // 左侧大序号
  slide.addText("05", {
    x: 0.3,
    y: 0.3,
    w: 1.2,
    h: 1.0,
    fontSize: 48,
    fontFace: "Arial",
    color: theme.accent,
    bold: true,
  });

  // 标题
  slide.addText("边界信任", {
    x: 1.5,
    y: 0.45,
    w: 4,
    h: 0.7,
    fontSize: 32,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  // 定义区块
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.3,
    w: 9,
    h: 0.7,
    fill: { color: theme.primary },
  });

  slide.addText("别人相信你——\"你知道自己是谁，也知道自己不能替谁做主\"", {
    x: 0.5,
    y: 1.3,
    w: 9,
    h: 0.7,
    fontSize: 18,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center",
    valign: "middle",
  });

  // 关键观点
  slide.addText("关键", {
    x: 0.5,
    y: 2.25,
    w: 2,
    h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
  });

  slide.addText("边界是双向的", {
    x: 0.5,
    y: 2.65,
    w: 9,
    h: 0.45,
    fontSize: 18,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  // 两列说明
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 3.2,
    w: 4.3,
    h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
  });

  slide.addText("公众人物", {
    x: 0.7,
    y: 3.35,
    w: 3.9,
    h: 0.35,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  slide.addText("不能越界索取", {
    x: 0.7,
    y: 3.75,
    w: 3.9,
    h: 0.4,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.2,
    y: 3.2,
    w: 4.3,
    h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
  });

  slide.addText("围观者", {
    x: 5.4,
    y: 3.35,
    w: 3.9,
    h: 0.35,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  slide.addText("不能越界消费别人", {
    x: 5.4,
    y: 3.75,
    w: 3.9,
    h: 0.4,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  // 案例区块
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 4.5,
    w: 9,
    h: 0.7,
    fill: { color: theme.light },
  });

  slide.addText("案例：大衣哥朱之文被堵家门口拍照", {
    x: 0.5,
    y: 4.5,
    w: 9,
    h: 0.7,
    fontSize: 15,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center",
    valign: "middle",
  });

  return slide;
}

module.exports = { createSlide };
