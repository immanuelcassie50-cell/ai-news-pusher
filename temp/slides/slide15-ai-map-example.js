const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("15", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("AI重构地图示例", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Example label
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.1, w: 1.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("案例：销售日报", {
    x: 0.5, y: 1.15, w: 1.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: false,
    align: "center"
  });

  // Four quadrants for the example
  const quadW = 4.3;
  const quadH = 1.6;
  const quads = [
    {
      title: "目标场景",
      content: "每天生成销售日报，汇报给领导",
      x: 0.5, y: 1.7
    },
    {
      title: "当前状态",
      content: "手动整理数据，耗时60分钟",
      x: 5.0, y: 1.7
    },
    {
      title: "目标状态",
      content: "AI自动生成，耗时10分钟",
      x: 0.5, y: 3.5
    },
    {
      title: "行动路径",
      content: "用Claude API + 数据模板自动化",
      x: 5.0, y: 3.5
    }
  ];

  quads.forEach((q) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: q.x, y: q.y, w: quadW, h: quadH,
      fill: { color: theme.bg },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    // Title bar
    slide.addShape(pres.ShapeType.rect, {
      x: q.x, y: q.y, w: quadW, h: 0.45,
      fill: { color: theme.primary, transparency: 10 }
    });
    slide.addText(q.title, {
      x: q.x + 0.15, y: q.y + 0.08, w: quadW - 0.3, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Content
    slide.addText(q.content, {
      x: q.x + 0.15, y: q.y + 0.6, w: quadW - 0.3, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Arrow showing transformation
  slide.addText("60min → 10min", {
    x: 7.0, y: 5.15, w: 2.2, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: "4CAF50", bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
