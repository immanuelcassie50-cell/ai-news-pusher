const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("从维也纳到芝加哥", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Timeline visualization
  const timelineY = 1.4;
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: timelineY + 0.15, w: 8.4, h: 0.08,
    fill: { color: theme.light }
  });

  // Timeline points
  const timePoints = [
    { year: "1870s", event: "奥地利学派\n兴起", x: 1.2 },
    { year: "1930s", event: "芝加哥大学\n经济学系重建", x: 3.5 },
    { year: "1950s", event: "弗里德曼\n任教芝加哥", x: 5.8 },
    { year: "1960s", event: "科斯、贝克尔\n等新秀崛起", x: 8.0 }
  ];

  timePoints.forEach((point) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: point.x - 0.12, y: timelineY + 0.08, w: 0.24, h: 0.24,
      fill: { color: theme.accent }
    });
    slide.addText(point.year, {
      x: point.x - 0.5, y: timelineY + 0.4, w: 1, h: 0.3,
      fontFace: "Georgia", fontSize: 12, color: theme.primary, bold: true,
      align: "center"
    });
    slide.addText(point.event, {
      x: point.x - 0.7, y: timelineY + 0.7, w: 1.4, h: 0.6,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary,
      align: "center"
    });
  });

  // Two columns
  // Left: Austrian School influence
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.7, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("奥地利学派的影响", {
    x: 0.6, y: 2.8, w: 4.1, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });
  slide.addText([
    { text: "门格尔（C. Menger）：边际革命", options: { bullet: true, breakLine: true } },
    { text: "庞巴维克：主观价值理论", options: { bullet: true, breakLine: true } },
    { text: "哈耶克：价格信号的重要性", options: { bullet: true, breakLine: true } },
    { text: "方法论上的个人主义", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.25, w: 4, h: 1.5,
    fontFace: "Microsoft YaHei", fontSize: 12, color: theme.secondary
  });

  // Right: Chicago transformation
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 2.7, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("芝加哥的蜕变", {
    x: 5.3, y: 2.8, w: 4.1, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });
  slide.addText([
    { text: "亨利·西蒙斯：自由市场旗帜", options: { bullet: true, breakLine: true } },
    { text: "弗兰克·奈特：风险与不确定性", options: { bullet: true, breakLine: true } },
    { text: "抵制凯恩斯革命", options: { bullet: true, breakLine: true } },
    { text: "实证经济学方法论", options: { bullet: true } }
  ], {
    x: 5.3, y: 3.25, w: 4, h: 1.5,
    fontFace: "Microsoft YaHei", fontSize: 12, color: theme.secondary
  });

  // Key quote box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("\"芝加哥学派不是单一学说，而是对自由市场秩序的不同论证\"", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 12, color: theme.secondary,
    italic: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("30", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
