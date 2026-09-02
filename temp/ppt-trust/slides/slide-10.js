// slide-10.js - 一致性信任
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // 浅色背景
  slide.background = { color: theme.bg };

  // 左侧大序号
  slide.addText("04", {
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
  slide.addText("一致性信任", {
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

  slide.addText("别人相信你——\"你说的、做的、卖的，是一回事\"", {
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

  // 核心观点
  slide.addText("核心观点", {
    x: 0.5,
    y: 2.25,
    w: 2,
    h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
  });

  slide.addText("每一次公开表达，都是一次隐性承诺", {
    x: 0.5,
    y: 2.65,
    w: 9,
    h: 0.5,
    fontSize: 18,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
  });

  // 承诺说明
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 3.3,
    w: 9,
    h: 0.9,
    fill: { color: theme.light },
  });

  slide.addText("承诺不一定写在合同里，只要影响了别人的判断、消费或支持，就进了你的信任账户", {
    x: 0.7,
    y: 3.3,
    w: 8.6,
    h: 0.9,
    fontSize: 15,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle",
  });

  // 警示区块
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 4.4,
    w: 9,
    h: 0.7,
    fill: { color: theme.accent },
  });

  slide.addText("警示：叙事突然反转，会让人觉得被骗进了一笔交易", {
    x: 0.5,
    y: 4.4,
    w: 9,
    h: 0.7,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center",
    valign: "middle",
    bold: true,
  });

  return slide;
}

module.exports = { createSlide };
