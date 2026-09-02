const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("哈耶克与米塞斯的传承", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Timeline visualization
  const timelineY = 1.8;
  const timelineH = 0.08;

  // Timeline base line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: timelineY + 0.3, w: 8.4, h: 0.04,
    fill: { color: theme.light }
  });

  // Mises node
  slide.addShape(pres.shapes.OVAL, {
    x: 1.3, y: timelineY, w: 0.6, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("M", {
    x: 1.3, y: timelineY, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("米塞斯", {
    x: 0.9, y: timelineY + 0.7, w: 1.4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("1881-1973", {
    x: 0.9, y: timelineY + 1.0, w: 1.4, h: 0.25,
    fontSize: 10, fontFace: "Calibri",
    color: theme.secondary, align: "center"
  });

  // Hayek node
  slide.addShape(pres.shapes.OVAL, {
    x: 4.5, y: timelineY, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("H", {
    x: 4.5, y: timelineY, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("哈耶克", {
    x: 4.1, y: timelineY + 0.7, w: 1.4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("1899-1992", {
    x: 4.1, y: timelineY + 1.0, w: 1.4, h: 0.25,
    fontSize: 10, fontFace: "Calibri",
    color: theme.secondary, align: "center"
  });

  // Connection arrow
  slide.addText("→", {
    x: 2.2, y: timelineY + 0.05, w: 2, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.light, align: "center"
  });

  // Teacher-Student label
  slide.addText("师徒", {
    x: 2.7, y: timelineY - 0.35, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });

  // Bottom content - Two columns of shared ideas
  slide.addText("共同的理论遗产", {
    x: 0.5, y: 3.3, w: 9, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left column
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 4.4, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 0.06, h: 1.4,
    fill: { color: theme.primary }
  });
  slide.addText([
    { text: "方法论个人主义", options: { bold: true, breakLine: true, fontSize: 12 } },
    { text: "社会现象根植于个体行动与选择", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "价格理论", options: { bold: true, breakLine: true, fontSize: 12 } },
    { text: "价格传递分散在不同个体间的知识", options: { fontSize: 11 } }
  ], {
    x: 0.7, y: 3.95, w: 4.0, h: 1.1,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Right column
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.8, w: 4.4, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.8, w: 0.06, h: 1.4,
    fill: { color: theme.accent }
  });
  slide.addText([
    { text: "市场过程理论", options: { bold: true, breakLine: true, fontSize: 12 } },
    { text: "竞争性市场是发现程序（discovery procedure）", options: { breakLine: true, fontSize: 11 } },
    { text: "\n", options: { breakLine: true, fontSize: 5 } },
    { text: "知识分工", options: { bold: true, breakLine: true, fontSize: 12 } },
    { text: "无人拥有全部知识，价格体系协调分散信息", options: { fontSize: 11 } }
  ], {
    x: 5.3, y: 3.95, w: 4.0, h: 1.1,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("17", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
