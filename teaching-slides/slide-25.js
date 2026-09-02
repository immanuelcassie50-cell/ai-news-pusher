const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("开放式提问 vs 封闭式提问", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // VS circle in center
  slide.addShape(pres.ShapeType.ellipse, {
    x: 4.4, y: 2.8, w: 1.2, h: 1.2,
    fill: { color: theme.accent }
  });
  slide.addText("VS", {
    x: 4.4, y: 2.8, w: 1.2, h: 1.2,
    fontSize: 24, fontFace: "Arial",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Left card - Open questions
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 3.7, h: 5.0,
    fill: { color: "ffffff" },
    line: { color: theme.light, width: 1 },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 }
  });

  // Left header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 3.7, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("开放式提问", {
    x: 0.5, y: 1.2, w: 3.7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Left content
  slide.addText("特点", {
    x: 0.7, y: 2.0, w: 3.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });
  slide.addText([
    { text: "需要详细回答", options: { bullet: true, breakLine: true } },
    { text: "鼓励深入思考", options: { bullet: true, breakLine: true } },
    { text: "开放可能性", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.35, w: 3.3, h: 1.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, margin: 0
  });

  slide.addText("示例", {
    x: 0.7, y: 3.4, w: 3.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });
  slide.addText('你怎么看这个问题？', {
    x: 0.7, y: 3.75, w: 3.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, margin: 0
  });
  slide.addText('能详细说说你的想法吗？', {
    x: 0.7, y: 4.2, w: 3.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, margin: 0
  });

  slide.addText("适用场景", {
    x: 0.7, y: 4.75, w: 3.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });
  slide.addText("探索想法 / 深挖原因 / 打开话题", {
    x: 0.7, y: 5.1, w: 3.3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  // Right card - Closed questions
  slide.addShape(pres.ShapeType.rect, {
    x: 5.8, y: 1.2, w: 3.7, h: 5.0,
    fill: { color: "ffffff" },
    line: { color: theme.light, width: 1 },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 }
  });

  // Right header
  slide.addShape(pres.ShapeType.rect, {
    x: 5.8, y: 1.2, w: 3.7, h: 0.7,
    fill: { color: theme.secondary }
  });
  slide.addText("封闭式提问", {
    x: 5.8, y: 1.2, w: 3.7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Right content
  slide.addText("特点", {
    x: 6.0, y: 2.0, w: 3.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, margin: 0
  });
  slide.addText([
    { text: "简短回答即可", options: { bullet: true, breakLine: true } },
    { text: "是/否或选择", options: { bullet: true, breakLine: true } },
    { text: "快速确认信息", options: { bullet: true } }
  ], {
    x: 6.0, y: 2.35, w: 3.3, h: 1.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, margin: 0
  });

  slide.addText("示例", {
    x: 6.0, y: 3.4, w: 3.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, margin: 0
  });
  slide.addText('你同意这个方案吗？', {
    x: 6.0, y: 3.75, w: 3.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, margin: 0
  });
  slide.addText('我们有几个人参与？', {
    x: 6.0, y: 4.2, w: 3.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, margin: 0
  });

  slide.addText("适用场景", {
    x: 6.0, y: 4.75, w: 3.3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, margin: 0
  });
  slide.addText("确认事实 / 结束讨论 / 收集数据", {
    x: 6.0, y: 5.1, w: 3.3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  return slide;
}

module.exports = { createSlide };
