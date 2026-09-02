const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程回顾", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("关键人物地图", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Central figure
  slide.addShape(pres.ShapeType.ellipse, {
    x: 4.3, y: 2.5, w: 1.4, h: 1.4,
    fill: { color: theme.primary }
  });
  slide.addText("亚当\n斯密", {
    x: 4.3, y: 2.7, w: 1.4, h: 1.0,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Connected thinkers
  const thinkers = [
    { name: "大卫·休谟", x: 2.0, y: 2.0, role: "导师/好友" },
    { name: "约瑟夫·李嘉图", x: 6.5, y: 2.0, role: "继承者" },
    { name: "约翰·穆勒", x: 1.5, y: 4.0, role: "修正者" },
    { name: "弗里德里希·哈耶克", x: 6.0, y: 4.2, role: "回响者" },
    { name: "凯恩斯", x: 8.0, y: 2.8, role: "批判者" },
    { name: "马克思", x: 3.5, y: 4.3, role: "颠覆者" }
  ];

  thinkers.forEach(t => {
    // Connection line
    slide.addShape(pres.ShapeType.line, {
      x: 5.0, y: 3.2, w: t.x - 4.3, h: t.y - 3.2,
      line: { color: theme.light, width: 1 }
    });
    // Node
    slide.addShape(pres.ShapeType.ellipse, {
      x: t.x, y: t.y, w: 1.3, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText(t.name, {
      x: t.x, y: t.y, w: 1.3, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(t.role, {
      x: t.x, y: t.y + 0.35, w: 1.3, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("82", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
