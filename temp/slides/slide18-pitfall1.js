const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("18", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("聚焦的常见陷阱一：完美主义", {
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

  slide.addText("总觉得准备不够，不敢开始\n等待'完美时机'\n反复修改计划，迟迟不行动", {
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

  slide.addText("先完成，再完美\n接受'够用就好'\n设定启动阈值，到点就开干", {
    x: 5.4, y: 1.9, w: 3.9, h: 1.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 0.06,
    fill: { color: theme.primary }
  });

  slide.addText(""完成比完美更重要"", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
