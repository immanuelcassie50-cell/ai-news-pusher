const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("20", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("聚焦的常见陷阱三：比较心理", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Problem section
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.3, w: 4.3, h: 2.5,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1 },
    rectRadius: 0.1
  });

  slide.addText("问题", {
    x: 0.7, y: 1.45, w: 1, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("看别人做得好，盲目跟风\n觉得自己落后了\n选择标准变成'别人在做什么'", {
    x: 0.7, y: 1.9, w: 3.9, h: 1.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Solution section
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.2, y: 1.3, w: 4.3, h: 2.5,
    fill: { color: "4CAF50", transparency: 90 },
    line: { color: "4CAF50", width: 1 },
    rectRadius: 0.1
  });

  slide.addText("解决方案", {
    x: 5.4, y: 1.45, w: 1.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "4CAF50", bold: true
  });

  slide.addText("回到自己的核心目标\n每个人的路径不同\n聚焦自己的TOP1，不被外界干扰", {
    x: 5.4, y: 1.9, w: 3.9, h: 1.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 0.06,
    fill: { color: theme.primary }
  });

  slide.addText(""你的战场不在别人的赛道里"", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
