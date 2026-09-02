const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派 vs 新古典经济学", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Comparison table
  const colW = 4.5;
  const rowH = 0.7;
  const tableX = 0.5;
  const tableY = 1.15;

  // Headers
  slide.addShape(pres.shapes.RECTANGLE, {
    x: tableX, y: tableY, w: colW, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派", {
    x: tableX, y: tableY, w: colW, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: tableX + colW, y: tableY, w: colW, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("新古典经济学", {
    x: tableX + colW, y: tableY, w: colW, h: 0.55,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const comparisons = [
    { aus: "动态过程视角", neo: "静态均衡分析" },
    { aus: "方法论个人主义", neo: "代表性个体假设" },
    { aus: "企业家精神核心", neo: "技术进步外生" },
    { aus: "价格传递真实信息", neo: "信息完全假设" },
    { aus: "反对数学形式主义", neo: "高度数学化" },
    { aus: "市场是发现程序", neo: "市场出清为常态" }
  ];

  comparisons.forEach((c, i) => {
    const y = tableY + 0.55 + i * rowH;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: tableX, y: y, w: colW, h: rowH,
      fill: { color: i % 2 === 0 ? "FFFFFF" : theme.light, transparency: i % 2 === 0 ? 0 : 60 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: tableX + colW, y: y, w: colW, h: rowH,
      fill: { color: i % 2 === 0 ? "FFFFFF" : theme.light, transparency: i % 2 === 0 ? 0 : 60 }
    });
    slide.addText(c.aus, {
      x: tableX + 0.15, y: y, w: colW - 0.3, h: rowH,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
    slide.addText(c.neo, {
      x: tableX + colW + 0.15, y: y, w: colW - 0.3, h: rowH,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.45,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("并非完全对立：两者共享\"边际分析\"基础，分歧在于对市场过程与信息的理解", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("25", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
