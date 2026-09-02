const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("提问技术概述", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Central question mark illustration
  slide.addShape(pres.ShapeType.ellipse, {
    x: 4.0, y: 1.2, w: 2.0, h: 2.0,
    fill: { color: theme.accent, transparency: 85 },
    line: { color: theme.accent, width: 3 }
  });
  slide.addText("?", {
    x: 4.0, y: 1.2, w: 2.0, h: 2.0,
    fontSize: 72, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Four value cards around the center
  const values = [
    { title: "引导思考方向", desc: "问题决定讨论深度", x: 0.5, y: 1.3 },
    { title: "激发团队潜能", desc: "好的问题唤醒智慧", x: 7.0, y: 1.3 },
    { title: "揭示问题本质", desc: "穿透表面看到核心", x: 0.5, y: 3.0 },
    { title: "推动共识形成", desc: "通过对话达成理解", x: 7.0, y: 3.0 }
  ];

  values.forEach((val) => {
    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: val.x, y: val.y, w: 2.5, h: 1.5,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: val.x, y: val.y, w: 0.08, h: 1.5,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(val.title, {
      x: val.x + 0.2, y: val.y + 0.3, w: 2.2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Description
    slide.addText(val.desc, {
      x: val.x + 0.2, y: val.y + 0.85, w: 2.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  // Core principle box at bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 1.3,
    fill: { color: theme.primary }
  });

  slide.addText("核心观点", {
    x: 0.7, y: 4.9, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });

  slide.addText("提问是催化师最重要的工具。一个好问题胜过十个好答案。", {
    x: 0.7, y: 5.3, w: 8.5, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  return slide;
}

module.exports = { createSlide };
