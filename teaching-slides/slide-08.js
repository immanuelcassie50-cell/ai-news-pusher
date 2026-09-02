const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // White background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: theme.bg }
  });

  // Header accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.08,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("催化师 vs 培训师 vs 教练", {
    x: 0.6, y: 0.4, w: 8, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Table header
  const tableX = 0.6;
  const tableY = 1.2;
  const colWidths = [1.8, 2.5, 2.5, 2.5];
  const rowHeight = 0.65;
  const headers = ["维度", "催化师", "培训师", "教练"];

  // Header row background
  slide.addShape(pres.ShapeType.rect, {
    x: tableX, y: tableY, w: 9.3, h: rowHeight,
    fill: { color: theme.primary }
  });

  let xPos = tableX;
  headers.forEach((header, i) => {
    slide.addText(header, {
      x: xPos, y: tableY + 0.15, w: colWidths[i], h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", align: "center", bold: true
    });
    xPos += colWidths[i];
  });

  // Table data
  const data = [
    ["角色", "空间创造者", "知识传授者", "能力发展者"],
    ["方法", "提问引导", "讲授灌输", "反馈引导"],
    ["关注", "过程+结果", "结果", "人的成长"],
    ["介入时机", "按需介入", "全程介入", "按目标介入"]
  ];

  data.forEach((row, rowIdx) => {
    const y = tableY + rowHeight * (rowIdx + 1);
    const bgColor = rowIdx % 2 === 0 ? theme.light : theme.bg;

    // Row background
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: y, w: 9.3, h: rowHeight,
      fill: { color: bgColor }
    });

    // Row border
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: y, w: 9.3, h: 0.01,
      fill: { color: theme.secondary, transparency: 50 }
    });

    xPos = tableX;
    row.forEach((cell, colIdx) => {
      const isFirstCol = colIdx === 0;
      slide.addText(cell, {
        x: xPos, y: y + 0.15, w: colWidths[colIdx], h: 0.4,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: isFirstCol ? theme.primary : theme.secondary,
        align: "center",
        bold: isFirstCol
      });
      xPos += colWidths[colIdx];
    });
  });

  // Bottom accent note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.6, w: 0.08, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("催化师的核心价值：不给答案，而是引导团队找到自己的答案", {
    x: 0.85, y: 4.7, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  return slide;
}

module.exports = { createSlide };
