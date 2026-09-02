// slide-15.js - 韩红：三条边界叠加
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page title
  slide.addText("这句话同时碰到了三条边界", {
    x: 0.5, y: 0.25, w: 7, h: 0.55,
    fontSize: 24,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Table header
  const headerY = 0.9;
  const col1X = 0.5, col2X = 3.5, col3X = 6.5;
  const colW = 2.8;
  const rowH = 0.5;

  // Header background
  slide.addShape(pres.ShapeType.rect, {
    x: col1X, y: headerY, w: colW * 3 + 0.2, h: rowH,
    fill: { color: theme.primary }
  });

  slide.addText("被碰到的边界", {
    x: col1X, y: headerY, w: colW, h: rowH,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("她的表达对应的动作", {
    x: col2X, y: headerY, w: colW, h: rowH,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("公众的心理翻译", {
    x: col3X, y: headerY, w: colW, h: rowH,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  // Table rows
  const rows = [
    {
      boundary: "消费自主边界",
      action: "号召大家\"带第一波票房\"",
      translation: "你希望我为你的商业项目掏钱",
      color: theme.accent
    },
    {
      boundary: "身份边界",
      action: "用巨大影响力发出号召",
      translation: "你有影响力，我不响应就不近人情",
      color: theme.secondary
    },
    {
      boundary: "代表权边界",
      action: "使用\"两千多万兄弟姐妹\"",
      translation: "你凭什么替我做出这个支持承诺",
      color: theme.primary
    }
  ];

  const dataY = 1.45;
  const dataRowH = 1.0;

  rows.forEach((row, i) => {
    const y = dataY + i * dataRowH;

    // Row background
    slide.addShape(pres.ShapeType.rect, {
      x: col1X, y: y, w: colW * 3 + 0.2, h: dataRowH - 0.08,
      fill: { color: i % 2 === 0 ? "FFFFFF" : theme.bg }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: col1X, y: y, w: 0.08, h: dataRowH - 0.08,
      fill: { color: row.color }
    });

    // Cell 1 - Boundary
    slide.addText(row.boundary, {
      x: col1X + 0.15, y: y, w: colW - 0.15, h: dataRowH - 0.08,
      fontSize: 14,
      fontFace: "Microsoft YaHei",
      color: row.color,
      bold: true,
      valign: "middle"
    });

    // Cell 2 - Action
    slide.addText(row.action, {
      x: col2X + 0.1, y: y, w: colW - 0.1, h: dataRowH - 0.08,
      fontSize: 13,
      fontFace: "Microsoft YaHei",
      color: theme.primary,
      bold: false,
      valign: "middle"
    });

    // Cell 3 - Translation
    slide.addText(row.translation, {
      x: col3X + 0.1, y: y, w: colW - 0.1, h: dataRowH - 0.08,
      fontSize: 13,
      fontFace: "Microsoft YaHei",
      color: theme.secondary,
      bold: false,
      valign: "middle"
    });
  });

  // Bottom conclusion
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("三条边界单独看都不严重，叠在一起，效果不一样", {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fontSize: 18,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
