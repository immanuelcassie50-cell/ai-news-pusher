const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("主观价值理论的诞生", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Left: Comparison diagram
  // Objective Value column (old theory)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 2.8, h: 2.4,
    fill: { color: theme.secondary, transparency: 10 }
  });
  slide.addText("客观价值论（旧）", {
    x: 0.5, y: 1.3, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center"
  });
  slide.addText([
    { text: "• 劳动决定价值", options: { breakLine: true, fontSize: 12 } },
    { text: "• 生产成本定价", options: { breakLine: true, fontSize: 12 } },
    { text: "• 价值是固有的", options: { breakLine: true, fontSize: 12 } },
    { text: "• 供需决定价格", options: { fontSize: 12 } }
  ], {
    x: 0.65, y: 1.8, w: 2.5, h: 1.6,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Arrow
  slide.addText("→", {
    x: 3.4, y: 2.0, w: 0.6, h: 0.8,
    fontSize: 36, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center"
  });

  // Subjective Value column (new theory)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.1, y: 1.2, w: 2.8, h: 2.4,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("主观价值论（新）", {
    x: 4.1, y: 1.3, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });
  slide.addText([
    { text: "• 个人偏好决定价值", options: { breakLine: true, fontSize: 12 } },
    { text: "• 边际效用定价", options: { breakLine: true, fontSize: 12 } },
    { text: "• 价值是情境的", options: { breakLine: true, fontSize: 12 } },
    { text: "• 主观评价驱动", options: { fontSize: 12 } }
  ], {
    x: 4.25, y: 1.8, w: 2.5, h: 1.6,
    fontFace: "Microsoft YaHei", color: theme.secondary
  });

  // Right side: Key insight card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.2, y: 1.2, w: 2.5, h: 2.4,
    fill: { color: theme.primary }
  });
  slide.addText("核心洞见", {
    x: 7.2, y: 1.35, w: 2.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, align: "center"
  });
  slide.addText("\"钻石与水的悖论\"被解决：", {
    x: 7.35, y: 1.8, w: 2.2, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light
  });
  slide.addText("水很便宜但效用高\n钻石很贵但边际效用低", {
    x: 7.35, y: 2.5, w: 2.2, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Bottom: Implications
  slide.addText('对斯密"看不见的手"的重新诠释', {
    x: 0.5, y: 3.85, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.8,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("当每个人追求主观价值最大化的同时，价格体系自发地将资源配置到最有价值的地方——这正是市场秩序的精妙所在。", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("14", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
