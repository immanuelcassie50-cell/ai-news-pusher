const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("不同场景的工具选择", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("场景-工具矩阵对照表", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Table header
  const headerY = 1.5;
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: headerY, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("场景", {
    x: 0.5, y: headerY, w: 2.8, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("推荐工具组合", {
    x: 3.3, y: headerY, w: 3.4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("工具特点", {
    x: 6.7, y: headerY, w: 2.8, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Table rows
  const rows = [
    { scene: "新团队破冰", tools: "静默书写 + 六帽", features: "打破沉默，激发多元视角", color: theme.accent },
    { scene: "问题解决会议", tools: "ORID + 利益相关方", features: "结构化提问，全面分析问题", color: theme.primary },
    { scene: "项目复盘", tools: "AAR + ORID", features: "还原事实，洞察改进点", color: "#43aa8b" },
    { scene: "战略规划", tools: "六帽 + 利益相关方", features: "系统思考，预判风险机会", color: theme.secondary },
    { scene: "团队融合", tools: "团队诊断 + ORID", features: "发现问题，促进相互理解", color: "#e07a5f" }
  ];

  rows.forEach((row, i) => {
    const y = headerY + 0.55 + i * 0.7;
    const bgColor = i % 2 === 0 ? "ffffff" : theme.light;

    // Row background
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.7,
      fill: { color: bgColor }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.08, h: 0.7,
      fill: { color: row.color }
    });

    // Scene name
    slide.addText(row.scene, {
      x: 0.7, y: y, w: 2.6, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Tool badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 3.4, y: y + 0.17, w: 3.2, h: 0.36,
      fill: { color: row.color, transparency: 15 },
      rectRadius: 0.06
    });
    slide.addText(row.tools, {
      x: 3.4, y: y + 0.17, w: 3.2, h: 0.36,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: row.color, bold: true,
      align: "center", valign: "middle"
    });

    // Features
    slide.addText(row.features, {
      x: 6.8, y: y, w: 2.6, h: 0.7,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Table border
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: headerY, w: 9, h: 4.05,
    line: { color: theme.secondary, width: 0.5, transparency: 70 }
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.65, w: 9, h: 0.05,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide };
