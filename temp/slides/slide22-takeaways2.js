const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("22", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("本节小结（下）", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Checkmark points
  const points = [
    "AI重构地图四要素：目标场景/当前状态/目标状态/行动路径",
    "聚焦三陷阱：完美主义、范围蔓延、比较心理",
    "完成比完美更重要",
    "不要同时追两只兔子",
    "你的战场不在别人的赛道里"
  ];

  points.forEach((point, i) => {
    const y = 1.3 + i * 0.8;

    // Checkmark
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.1, w: 0.3, h: 0.3,
      fill: { color: "4CAF50" }
    });
    slide.addText("✓", {
      x: 0.6, y: y + 0.05, w: 0.3, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.bg, bold: true,
      align: "center"
    });

    // Point text
    slide.addText(point, {
      x: 1.1, y: y, w: 8.3, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  return slide;
}

module.exports = { createSlide };
