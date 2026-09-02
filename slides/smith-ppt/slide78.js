const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("练习三", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("绘制思想谱系图", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Instructions
  slide.addText("请在下方空白处绘制斯密思想的影响流变图", {
    x: 0.5, y: 1.75, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Drawing area
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.2, w: 9, h: 2.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1, dashType: "dash" }
  });

  //提示文字
  slide.addText("在此绘制你的思想谱系图", {
    x: 0.5, y: 3.2, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Hint structure
  const hintY = 4.7;
  slide.addText("提示：从斯密出发，延伸至：古典学派 → 新古典 → 凯恩斯 → 现代经济思想", {
    x: 0.5, y: hintY, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Node examples on the side
  slide.addShape(pres.ShapeType.rect, {
    x: 7.5, y: 2.3, w: 1.8, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("斯密", {
    x: 7.5, y: 2.3, w: 1.8, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 7.5, y: 2.85, w: 1.8, h: 0.45,
    fill: { color: theme.secondary }
  });
  slide.addText("李嘉图", {
    x: 7.5, y: 2.85, w: 1.8, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 7.5, y: 3.4, w: 1.8, h: 0.45,
    fill: { color: theme.light }
  });
  slide.addText("穆勒", {
    x: 7.5, y: 3.4, w: 1.8, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("78", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
