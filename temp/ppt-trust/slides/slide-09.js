// slide-09.js - 善意信任
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // 浅色背景
  slide.background = { color: theme.bg };

  // 左侧大序号
  slide.addText("03", {
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
  slide.addText("善意信任", {
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

  slide.addText("别人相信你——\"你不会借着优势占我便宜\"", {
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

  // 现状说明
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 2.2,
    w: 9,
    h: 0.55,
    fill: { color: theme.accent },
  });

  slide.addText("这是这两年最值钱、也最容易碎的一层", {
    x: 0.5,
    y: 2.2,
    w: 9,
    h: 0.55,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center",
    valign: "middle",
    bold: true,
  });

  // 正面案例
  slide.addText("正面案例", {
    x: 0.5,
    y: 3.0,
    w: 2,
    h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 3.4,
    w: 4.3,
    h: 1.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
  });

  slide.addText("鸿星尔克", {
    x: 0.7,
    y: 3.55,
    w: 3.9,
    h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  slide.addText("2021河南暴雨默默捐5000万物资", {
    x: 0.7,
    y: 3.95,
    w: 3.9,
    h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  slide.addText("-> 野性消费", {
    x: 0.7,
    y: 4.35,
    w: 3.9,
    h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
  });

  // 反面对比
  slide.addText("反面对比", {
    x: 5.2,
    y: 3.0,
    w: 2,
    h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.2,
    y: 3.4,
    w: 4.3,
    h: 1.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
  });

  slide.addText("边做边喊话", {
    x: 5.4,
    y: 3.55,
    w: 3.9,
    h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  slide.addText("vs", {
    x: 5.4,
    y: 3.95,
    w: 3.9,
    h: 0.3,
    fontSize: 12,
    fontFace: "Arial",
    color: theme.secondary,
    align: "center",
  });

  slide.addText("先做后不说，效果天差地别", {
    x: 5.4,
    y: 4.3,
    w: 3.9,
    h: 0.35,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
  });

  return slide;
}

module.exports = { createSlide };
