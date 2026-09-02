const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("制度与经济发展的关系", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("48", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // North's thesis diagram
  slide.addText("诺斯的制度转型路径", {
    x: 0.5, y: 1.15, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  // Three boxes showing path
  const stages = [
    { title: "第一阶段", content: "无序状态\n产权无保障\n交易成本极高" },
    { title: "第二阶段", content: "习俗经济\n非正式约束\n重复博弈" },
    { title: "第三阶段", content: "法治国家\n正式制度\n可预期秩序" }
  ];

  stages.forEach((stage, i) => {
    const x = 0.7 + i * 3.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.65, w: 2.7, h: 1.6,
      fill: { color: "FFFFFF" }, rectRadius: 0.1,
      line: { color: theme.primary, width: 2 }
    });
    slide.addText(stage.title, {
      x: x, y: 1.7, w: 2.7, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary,
      bold: true, align: "center"
    });
    slide.addText(stage.content, {
      x: x + 0.15, y: 2.1, w: 2.4, h: 1.1,
      fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary,
      align: "center", valign: "top"
    });

    // Arrow between boxes
    if (i < 2) {
      slide.addText("→", {
        x: x + 2.7, y: 2.2, w: 0.4, h: 0.5,
        fontSize: 24, color: theme.accent, align: "center"
      });
    }
  });

  // Key insight section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 9, h: 0.05,
    fill: { color: theme.light }
  });

  slide.addText("斯密视角的制度观", {
    x: 0.5, y: 3.7, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  const insights = [
    "斯密早已指出：正义制度是市场运作的前提（《道德情操论》）",
    "制度成本直接影响分工深度与市场范围",
    "可预期的法律环境降低交易风险，促进资本积累"
  ];

  insights.forEach((insight, i) => {
    slide.addText([
      { text: "• ", options: { color: theme.accent, bold: true } },
      { text: insight, options: { color: theme.secondary } }
    ], {
      x: 0.7, y: 4.15 + i * 0.35, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei"
    });
  });

  return slide;
}

module.exports = { createSlide };
