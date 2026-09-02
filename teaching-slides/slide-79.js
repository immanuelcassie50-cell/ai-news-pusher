const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：节奏选择决策表", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Decision table
  slide.addText("根据以下维度选择合适的节奏模式", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Table headers
  const headers = ["维度", "快节奏", "中节奏", "慢节奏"];
  headers.forEach((h, i) => {
    const x = 0.5 + i * 2.4;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.45, w: 2.3, h: 0.5,
      fill: { color: i === 0 ? theme.primary : (i === 1 ? theme.green : (i === 2 ? theme.blue : theme.warm)) }
    });
    slide.addText(h, {
      x: x, y: 1.55, w: 2.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Table rows
  const rows = [
    { dim: "任务复杂度", fast: "简单明确", medium: "中等复杂度", slow: "高度复杂" },
    { dim: "时间紧迫度", fast: "高", medium: "中", slow: "低" },
    { dim: "需要人数", fast: "1-2人", medium: "3-5人", slow: "5人以上" },
    { dim: "迭代次数", fast: "1-2轮", medium: "3-5轮", slow: "多轮持续" },
    { dim: "风险程度", fast: "低风险", medium: "中等风险", slow: "高风险" },
    { dim: "典型场景", fast: "查询、转换", medium: "方案设计", slow: "战略规划" }
  ];

  rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      const x = 0.5 + ci * 2.4;
      const y = 1.95 + ri * 0.55;
      const bgColor = ci === 0 ? theme.light : (ri % 2 === 0 ? "ffffff" : theme.bg);

      slide.addShape(pres.ShapeType.rect, {
        x: x, y: y, w: 2.3, h: 0.5,
        fill: { color: bgColor },
        line: { color: theme.gray, width: 0.5 }
      });
      slide.addText(cell, {
        x: x + 0.1, y: y + 0.08, w: 2.1, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: ci === 0 ? theme.primary : theme.dark,
        valign: "middle",
        align: ci === 0 ? "center" : "center"
      });
    });
  });

  // Key principle
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.25, w: 9, h: 0.4,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("原则：节奏不是固定的，可以在项目进行中根据情况调整", {
    x: 0.7, y: 5.32, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  return slide;
}

module.exports = { createSlide };
