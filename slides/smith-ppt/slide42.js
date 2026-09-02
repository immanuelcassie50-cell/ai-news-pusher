const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("布坎南的立宪经济学", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Two-level analysis
  slide.addText("两层分析框架", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary, bold: true
  });

  // Pre-constitutional level
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.55, w: 4.4, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 2 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.55, w: 4.4, h: 0.45,
    fill: { color: theme.secondary }
  });
  slide.addText("立宪前（规则制定）", {
    x: 0.6, y: 1.6, w: 4.2, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 13, color: "FFFFFF", bold: true
  });
  slide.addText([
    { text: "在\"无知之幕\"后选择规则", options: { bullet: true, breakLine: true } },
    { text: "不知道自己的具体位置", options: { bullet: true, breakLine: true } },
    { text: "追求公正的制度设计", options: { bullet: true, breakLine: true } },
    { text: "一次性博弈，避免机会主义", options: { bullet: true } }
  ], {
    x: 0.7, y: 2.1, w: 4.1, h: 1.1,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Post-constitutional level
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.55, w: 4.4, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.55, w: 4.4, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("立宪后（规则下行为）", {
    x: 5.2, y: 1.6, w: 4.2, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 13, color: "FFFFFF", bold: true
  });
  slide.addText([
    { text: "在既定规则内最大化", options: { bullet: true, breakLine: true } },
    { text: "个人利益驱动行为", options: { bullet: true, breakLine: true } },
    { text: "市场交易与政治过程", options: { bullet: true, breakLine: true } },
    { text: "规则决定结果", options: { bullet: true } }
  ], {
    x: 5.3, y: 2.1, w: 4.1, h: 1.1,
    fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
  });

  // Arrow
  slide.addText("→", {
    x: 4.65, y: 2.1, w: 0.7, h: 0.5,
    fontFace: "Arial", fontSize: 28, color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Key insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.45, w: 9, h: 0.75,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("核心洞见：规则的规则决定了社会游戏的走向，应先确定\"好规则\"", {
    x: 0.6, y: 3.55, w: 8.8, h: 0.55,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Implications for Smith
  slide.addText("与斯密思想的关联", {
    x: 0.5, y: 4.35, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  const connections = [
    { smith: "法律框架保护产权", modern: "立宪经济学：宪法保障自由" },
    { smith: "正义规则决定市场", modern: "规则经济学：好规则带来好结果" },
    { smith: "守夜人政府", modern: "有限政府：权力需被约束" }
  ];

  connections.forEach((conn, i) => {
    const y = 4.75 + i * 0.38;
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.5, y: y + 0.08, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });
    slide.addText(conn.smith, {
      x: 0.7, y: y, w: 4, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
    });
    slide.addText("→ " + conn.modern, {
      x: 4.8, y: y, w: 4.7, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.accent
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("42", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
