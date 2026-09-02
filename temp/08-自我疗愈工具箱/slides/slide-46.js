const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "练习：正念日志",
  type: "exercise",
  pageNumber: 46
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("46", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("练习：正念日志", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("为期一周的练习记录表", {
    x: 5, y: 0.45, w: 3.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Log header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });

  const headers = ["日期", "时间", "练习类型", "时长", "练习前状态", "练习后状态", "备注"];
  const colWidths = [1.3, 0.8, 1.5, 0.7, 1.5, 1.5, 1.7];
  let xPos = 0.5;

  headers.forEach((header, i) => {
    slide.addText(header, {
      x: xPos, y: 1.2, w: colWidths[i], h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    xPos += colWidths[i];
  });

  // Log rows
  for (let i = 0; i < 7; i++) {
    const y = 1.7 + i * 0.45;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.45,
      fill: { color: bgColor }
    });

    // Day number
    slide.addText("第" + (i + 1) + "天", {
      x: 0.5, y: y, w: 1.3, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Empty cells for writing
    for (let j = 1; j < 7; j++) {
      const cellX = 0.5 + [1.3, 0.8, 1.5, 0.7, 1.5, 1.5][j - 1] + (j > 4 ? 0.5 : 0);

      slide.addShape(pres.ShapeType.rect, {
        x: j === 1 ? 1.8 : (j === 2 ? 2.6 : (j === 3 ? 3.4 : (j === 4 ? 4.9 : (j === 5 ? 5.6 : 7.1)))),
        y: y + 0.08,
        w: j === 6 ? 1.7 : (j === 4 ? 0.7 : (j === 3 ? 1.5 : 0.8)),
        h: 0.3,
        fill: { color: theme.bg },
        line: { color: theme.accent, width: 0.5, dashType: "dash" }
      });
    }
  }

  // Practice suggestions box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
    fill: { color: "FFFFFF" }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.9, w: 0.1, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("建议练习类型：三分钟呼吸空间 | STOP五感 | 迷你冥想（呼吸计数/身体扎根）", {
    x: 0.7, y: 4.9, w: 8.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
