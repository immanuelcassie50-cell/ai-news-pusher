/**
 * Slide 98 - 选择适合你的工具组合
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("选择适合你的工具组合", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("根据你的核心需求，选择最匹配的工具组合", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Matrix table
  const tools = [
    { need: "快速平静", tools: "4-7-8呼吸法、隐藏版PMR", color: theme.primary },
    { need: "减少日常焦虑", tools: "3分钟呼吸空间、感恩日记", color: theme.light },
    { need: "改善睡眠", tools: "渐进式肌肉放松、身体扫描、睡前书写", color: theme.accent },
    { need: "减少内在批评", tools: "自我慈悲口述、早晨宣言", color: theme.primary },
    { need: "提升专注力", tools: "呼吸冥想、身体扫描", color: theme.light },
    { need: "缓解身体紧张", tools: "PMR、快速身体扫描", color: theme.accent }
  ];

  const tableX = 0.5;
  const tableY = 1.35;
  const rowH = 0.6;
  const col1W = 2.2;
  const col2W = 6.8;

  // Table header
  slide.addShape(pres.ShapeType.rect, {
    x: tableX, y: tableY, w: col1W + col2W, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("需求", {
    x: tableX, y: tableY, w: col1W, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("推荐工具组合", {
    x: tableX + col1W, y: tableY, w: col2W, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Table rows
  tools.forEach((row, i) => {
    const y = tableY + 0.5 + i * rowH;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;

    // Row background
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: y, w: col1W + col2W, h: rowH,
      fill: { color: bgColor },
      line: { color: theme.secondary, width: 0.5, transparency: 90 }
    });

    // Need cell with colored left bar
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: y, w: 0.1, h: rowH,
      fill: { color: row.color }
    });
    slide.addText(row.need, {
      x: tableX + 0.15, y: y, w: col1W - 0.2, h: rowH,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Tools cell
    slide.addText(row.tools, {
      x: tableX + col1W + 0.2, y: y, w: col2W - 0.4, h: rowH,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.05, w: 9, h: 0.45,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("提示：不要试图使用所有工具。选择2-3个核心工具，坚持练习，比浅尝辄止更有效", {
    x: 0.7, y: 5.05, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("98", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "选择适合你的工具组合",
  pageNumber: 98
};

module.exports = { createSlide, slideConfig };
