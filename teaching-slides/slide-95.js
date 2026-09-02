const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块五：综合实战 — 团队协作评分表", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Scoring criteria
  slide.addText("团队人机协作能力评分标准", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Scoring table
  const headers = ["评分维度", "1分", "2分", "3分", "4分", "5分"];
  const rows = [
    ["任务定义清晰度", "模糊不清", "较模糊", "基本清晰", "很清晰", "非常清晰"],
    ["人机分工合理性", "分工混乱", "分工较乱", "基本合理", "很合理", "非常合理"],
    ["流程节奏把控", "节奏混乱", "节奏较差", "基本正常", "节奏很好", "节奏优秀"],
    ["效果衡量落实", "未衡量", "偶尔衡量", "有时衡量", "经常衡量", "持续衡量"],
    ["团队协作流畅度", "协作困难", "协作较难", "基本顺畅", "很顺畅", "非常顺畅"]
  ];

  // Header
  headers.forEach((h, i) => {
    const x = 0.5 + i * 1.9;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: 1.8, h: 0.5,
      fill: { color: i === 0 ? theme.primary : theme.accent }
    });
    slide.addText(h, {
      x: x, y: 1.58, w: 1.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Data rows
  rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      const x = 0.5 + ci * 1.9;
      const y = 2.0 + ri * 0.6;
      const bgColor = ci === 0 ? theme.light : (ri % 2 === 0 ? "ffffff" : theme.bg);

      slide.addShape(pres.ShapeType.rect, {
        x: x, y: y, w: 1.8, h: 0.55,
        fill: { color: bgColor },
        line: { color: theme.gray, width: 0.5 }
      });
      slide.addText(cell, {
        x: x + 0.05, y: y + 0.08, w: 1.7, h: 0.4,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: ci === 0 ? theme.primary : theme.dark,
        align: "center", valign: "middle"
      });
    });
  });

  // Scoring guide
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.65,
    fill: { color: theme.light }
  });

  slide.addText("评分说明：", {
    x: 0.7, y: 5.1, w: 1.5, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("1-2分需要改进 | 3分及格 | 4分良好 | 5分优秀    综合评分 = 各维度平均分", {
    x: 0.7, y: 5.35, w: 8.6, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
