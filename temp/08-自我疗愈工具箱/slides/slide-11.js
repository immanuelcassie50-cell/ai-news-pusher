/**
 * Slide 11 - 练习：识别你的压力源
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title with exercise badge
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.45, w: 0.8, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("练习", {
    x: 0.5, y: 0.45, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  slide.addText("识别你的压力源", {
    x: 1.4, y: 0.4, w: 7, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Instructions
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 9, h: 0.65,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addText("指导语：回顾过去一个月，识别那些经常让你感到压力、焦虑或烦恼的事件、人物或情境。将它们记录在下面的表格中，并评估对你的影响程度。", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.65,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle", bold: false,
    lineSpaceMult: 1.3
  });

  // Table header
  const tableX = 0.5;
  const tableY = 2.0;
  const tableW = 9;
  const col1W = 0.5;
  const col2W = 4.5;
  const col3W = 2.0;
  const col4W = 2.0;
  const rowH = 0.45;

  // Header background
  slide.addShape(pres.ShapeType.rect, {
    x: tableX, y: tableY, w: tableW, h: rowH,
    fill: { color: theme.primary }
  });

  // Header texts
  slide.addText("序号", {
    x: tableX, y: tableY, w: col1W, h: rowH,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });
  slide.addText("压力源描述", {
    x: tableX + col1W, y: tableY, w: col2W, h: rowH,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });
  slide.addText("影响程度 (1-10)", {
    x: tableX + col1W + col2W, y: tableY, w: col3W, h: rowH,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });
  slide.addText("应对方式", {
    x: tableX + col1W + col2W + col3W, y: tableY, w: col4W, h: rowH,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  // Table rows
  const rowColors = ["FFFFFF", theme.bg];
  for (let i = 0; i < 5; i++) {
    const rowY = tableY + rowH + i * rowH;
    const bgColor = rowColors[i % 2];

    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: rowY, w: tableW, h: rowH,
      fill: { color: bgColor }
    });

    // Grid lines
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: rowY, w: tableW, h: 0.01,
      fill: { color: theme.secondary, transparency: 70 }
    });

    // Row number
    slide.addText(String(i + 1), {
      x: tableX, y: rowY, w: col1W, h: rowH,
      fontSize: 11, fontFace: "Arial",
      color: theme.secondary, align: "center", valign: "middle", bold: false
    });

    // Placeholder for description
    slide.addText("点击输入...", {
      x: tableX + col1W + 0.1, y: rowY, w: col2W - 0.2, h: rowH,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, transparency: 50, valign: "middle", bold: false
    });

    // Placeholder for rating
    slide.addText("1-10", {
      x: tableX + col1W + col2W, y: rowY, w: col3W, h: rowH,
      fontSize: 11, fontFace: "Arial",
      color: theme.secondary, transparency: 50, align: "center", valign: "middle", bold: false
    });

    // Placeholder for coping
    slide.addText("点击输入...", {
      x: tableX + col1W + col2W + col3W + 0.1, y: rowY, w: col4W - 0.2, h: rowH,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, transparency: 50, valign: "middle", bold: false
    });
  }

  // Note
  slide.addText("提示：影响程度 1-3 为轻度，4-6 为中度，7-10 为重度。请根据实际情况填写。", {
    x: 0.5, y: 4.6, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Page number
  slide.addText("11", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "exercise",
  module: "Module 1",
  title: "练习：识别你的压力源",
  pageNumber: 11
};

module.exports = { createSlide, slideConfig };
