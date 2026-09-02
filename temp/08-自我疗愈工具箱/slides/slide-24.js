const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "身体技巧场景指南",
  type: "content",
  pageNumber: 24
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("身体技巧场景指南", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Table header
  const colWidths = [1.6, 2.0, 1.6, 1.6, 1.6, 1.4];
  const headers = ["场景", "4-7-8呼吸", "腹式呼吸", "身体扫描", "PMR", "时长"];

  let tableX = 0.6;
  let tableY = 1.25;

  // Header row
  headers.forEach((header, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: tableY, w: colWidths[i], h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(header, {
      x: tableX, y: tableY, w: colWidths[i], h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    tableX += colWidths[i];
  });

  // Table data
  const scenarios = [
    { scene: "通勤", tech1: "●", tech2: "●", tech3: "", tech4: "", time: "1-2分钟" },
    { scene: "办公室", tech1: "", tech2: "●", tech3: "●", tech4: "●", time: "3-5分钟" },
    { scene: "会议前", tech1: "●", tech2: "●", tech3: "", tech4: "", time: "2-3分钟" },
    { scene: "午休", tech1: "", tech2: "●", tech3: "●", tech4: "", time: "3-5分钟" },
    { scene: "睡前", tech1: "", tech2: "", tech3: "●", tech4: "●", time: "5-10分钟" },
    { scene: "情绪危机", tech1: "●", tech2: "", tech3: "", tech4: "", time: "2分钟" }
  ];

  const rowHeight = 0.6;
  scenarios.forEach((row, rowIdx) => {
    tableX = 0.6;
    const y = tableY + 0.5 + rowIdx * rowHeight;
    const bgColor = rowIdx % 2 === 0 ? "FFFFFF" : theme.bg;

    const rowData = [row.scene, row.tech1, row.tech2, row.tech3, row.tech4, row.time];

    rowData.forEach((cell, colIdx) => {
      slide.addShape(pres.ShapeType.rect, {
        x: tableX, y: y, w: colWidths[colIdx], h: rowHeight,
        fill: { color: bgColor },
        line: { color: "E0E0E0", width: 0.5 }
      });

      const textColor = colIdx === 0 ? theme.secondary :
                       cell === "●" ? theme.primary :
                       colIdx === 5 ? theme.accent : theme.light;

      const fontWeight = colIdx === 0 || colIdx === 5;

      slide.addText(cell, {
        x: tableX, y: y, w: colWidths[colIdx], h: rowHeight,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: textColor, bold: fontWeight,
        align: "center", valign: "middle"
      });

      tableX += colWidths[colIdx];
    });
  });

  // Legend
  slide.addText("● = 推荐使用    空格 = 不适用", {
    x: 0.6, y: 5.0, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("24", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
