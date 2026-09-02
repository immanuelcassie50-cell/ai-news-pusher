const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("人力资本的核心洞见", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Central insight
  slide.addShape(pres.ShapeType.rect, {
    x: 1.5, y: 1.1, w: 7, h: 0.75,
    fill: { color: theme.accent }
  });
  slide.addText("人是一种资本品：投资于人可以产生回报", {
    x: 1.6, y: 1.2, w: 6.8, h: 0.55,
    fontFace: "Microsoft YaHei", fontSize: 16, color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Two-column layout
  // Left: Investment types
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.05, w: 4.4, h: 2.55,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("人力资本投资形式", {
    x: 0.6, y: 2.1, w: 4.2, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  const investments = [
    { type: "正规教育", detail: "学校教育年限" },
    { type: "在职培训", detail: "学徒制、技能培训" },
    { type: "健康投资", detail: "医疗、锻炼、营养" },
    { type: "迁移流动", detail: "寻找更好工作机会" },
    { type: "信息获取", detail: "培训、信息搜索" }
  ];

  investments.forEach((inv, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.65, y: 2.55 + i * 0.4, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(inv.type, {
      x: 0.85, y: 2.55 + i * 0.4, w: 1.5, h: 0.3,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary, bold: true
    });
    slide.addText(inv.detail, {
      x: 2.4, y: 2.55 + i * 0.4, w: 2.4, h: 0.3,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
    });
  });

  // Right: Returns calculation
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 2.05, w: 4.4, h: 2.55,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("教育回报率计算", {
    x: 5.2, y: 2.1, w: 4.2, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.accent, bold: true
  });

  slide.addText("收益 - 成本 = 净回报", {
    x: 5.3, y: 2.55, w: 4.1, h: 0.35,
    fontFace: "Georgia", fontSize: 13, color: theme.secondary, bold: true,
    align: "center"
  });

  slide.addText("收益：未来收入增量贴现值", {
    x: 5.4, y: 2.95, w: 4, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
  });
  slide.addText("成本：学费 + 机会成本（放弃的收入）", {
    x: 5.4, y: 3.25, w: 4, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
  });
  slide.addText("→ 高等教育年回报率约10-15%", {
    x: 5.4, y: 3.6, w: 4, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.accent, bold: true
  });
  slide.addText("（贝克尔测算，美国数据）", {
    x: 5.4, y: 3.9, w: 4, h: 0.25,
    fontFace: "Microsoft YaHei", fontSize: 9, color: theme.secondary
  });

  // Connection to Smith
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.75, w: 9, h: 0.75,
    fill: { color: theme.secondary }
  });
  slide.addText("斯密视角：人的才能是\"固定资本\"。贝克尔将此正式化为可测量的人力资本理论", {
    x: 0.6, y: 4.85, w: 8.8, h: 0.55,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("39", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
