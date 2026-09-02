const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("哈耶克的自发秩序", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Central concept diagram
  slide.addText("自发秩序的形成机制", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Flow diagram - horizontal process
  const boxY = 1.7;
  const boxH = 1.0;
  const boxW = 2.0;
  const arrowW = 0.5;

  // Box 1: Individual Goals
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: boxY, w: boxW, h: boxH,
    fill: { color: theme.light, transparency: 30 }
  });
  slide.addText("个体\n追求目标", {
    x: 0.5, y: boxY, w: boxW, h: boxH,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Arrow 1
  slide.addText("→", {
    x: 2.5, y: boxY, w: arrowW, h: boxH,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, align: "center", valign: "middle"
  });

  // Box 2: Interaction
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.0, y: boxY, w: boxW, h: boxH,
    fill: { color: theme.accent, transparency: 70 }
  });
  slide.addText("互动与\n竞争", {
    x: 3.0, y: boxY, w: boxW, h: boxH,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Arrow 2
  slide.addText("→", {
    x: 5.0, y: boxY, w: arrowW, h: boxH,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, align: "center", valign: "middle"
  });

  // Box 3: Rules
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: boxY, w: boxW, h: boxH,
    fill: { color: theme.primary, transparency: 80 }
  });
  slide.addText("规则\n演化", {
    x: 5.5, y: boxY, w: boxW, h: boxH,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Arrow 3
  slide.addText("→", {
    x: 7.5, y: boxY, w: arrowW, h: boxH,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, align: "center", valign: "middle"
  });

  // Box 4: Order
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.0, y: boxY, w: boxW - 0.3, h: boxH,
    fill: { color: theme.primary }
  });
  slide.addText("自发\n秩序", {
    x: 8.0, y: boxY, w: boxW - 0.3, h: boxH,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Key properties section
  slide.addText("自发秩序的核心特征", {
    x: 0.5, y: 2.95, w: 9, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 2x2 grid of properties
  const propW = 4.4;
  const propH = 0.9;
  const propGap = 0.2;
  const propY1 = 3.4;
  const propY2 = 4.4;

  const props = [
    { title: "无明确领导者", desc: "没有任何中央权威在控制整个系统", x: 0.5, y: propY1 },
    { title: "依赖规则而非指令", desc: "参与者遵守普遍规则，而非接受命令", x: 5.1, y: propY1 },
    { title: "信息分散化", desc: "每个参与者只拥有部分信息，整体协调自发产生", x: 0.5, y: propY2 },
    { title: "演化与适应", desc: "不适用的规则会被淘汰，适应性强的规则留存", x: 5.1, y: propY2 }
  ];

  props.forEach(p => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: p.x, y: p.y, w: propW, h: propH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.06 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: p.x, y: p.y, w: 0.06, h: propH,
      fill: { color: theme.accent }
    });
    slide.addText(p.title, {
      x: p.x + 0.2, y: p.y + 0.1, w: propW - 0.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(p.desc, {
      x: p.x + 0.2, y: p.y + 0.45, w: propW - 0.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("19", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
