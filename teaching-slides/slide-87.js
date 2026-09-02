const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块四：效果衡量 — 效率计算示例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Case study title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 9, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("案例：市场部月度报告生成效率对比", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Comparison table
  const headers = ["指标", "传统方式", "人机协作", "提升比例"];
  const rows = [
    ["数据收集时间", "3小时", "40分钟", "4.5x"],
    ["报告撰写时间", "4小时", "1.5小时", "2.7x"],
    ["修改迭代次数", "5次", "2次", "2.5x"],
    ["总耗时", "7小时", "2小时", "3.5x"],
    ["人力成本", "¥800", "¥230", "3.5x"]
  ];

  // Header row
  headers.forEach((h, i) => {
    const x = 0.5 + i * 3;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.7, w: 2.9, h: 0.5,
      fill: { color: i === 3 ? theme.green : theme.primary }
    });
    slide.addText(h, {
      x: x, y: 1.78, w: 2.9, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Data rows
  rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      const x = 0.5 + ci * 3;
      const y = 2.2 + ri * 0.55;
      const bgColor = ci === 0 ? theme.light : (ri % 2 === 0 ? "ffffff" : theme.bg);

      slide.addShape(pres.ShapeType.rect, {
        x: x, y: y, w: 2.9, h: 0.5,
        fill: { color: bgColor },
        line: { color: theme.gray, width: 0.5 }
      });
      slide.addText(cell, {
        x: x + 0.1, y: y + 0.08, w: 2.7, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: ci === 3 ? theme.green : (ci === 0 ? theme.primary : theme.dark),
        bold: ci === 3,
        align: "center", valign: "middle"
      });
    });
  });

  // Calculation formula
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.6, w: 9, h: 0.9,
    fill: { color: theme.accent, transparency: 15 }
  });

  slide.addText("计算公式", {
    x: 0.7, y: 4.7, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("效率提升比 = 传统方式耗时 ÷ 人机协作耗时    |    成本节约比 = 传统成本 ÷ 人机协作成本", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.dark
  });

  return slide;
}

module.exports = { createSlide };
