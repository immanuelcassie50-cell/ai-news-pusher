const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });

  // Day badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.3, w: 1.2, h: 0.5,
    fill: { color: theme.accent }
  });

  slide.addText("Day 1", {
    x: 0.5, y: 0.3, w: 1.2, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("第一天学习总结", {
    x: 1.9, y: 0.3, w: 7, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("6个核心要点回顾", {
    x: 1.9, y: 0.7, w: 7, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Key points - 2x3 grid
  const points = [
    { num: "01", title: "行动学习循环", desc: "体验-反思-认知-行动" },
    { num: "02", title: "催化师角色定位", desc: "中立引导者，非决策者" },
    { num: "03", title: "静默书写-分类-排序", desc: "IDEA方法的三个步骤" },
    { num: "04", title: "ORID聚焦式会话", desc: "目标-现实-选择-行动" },
    { num: "05", title: "六顶思考帽", desc: "平行思维工具" },
    { num: "06", title: "角色边界认知", desc: "保持中立的重要性" }
  ];

  const pStartX = 0.5;
  const pStartY = 1.4;
  const pW = 2.9;
  const pH = 1.85;
  const pGapX = 0.2;
  const pGapY = 0.2;

  points.forEach((pt, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = pStartX + col * (pW + pGapX);
    const y = pStartY + row * (pH + pGapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: pW, h: pH,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top color accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: pW, h: 0.08,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(pt.num, {
      x: x + 0.2, y: y + 0.2, w: 0.7, h: 0.6,
      fontSize: 28, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(pt.title, {
      x: x + 0.2, y: y + 0.8, w: pW - 0.4, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(pt.desc, {
      x: x + 0.2, y: y + 1.25, w: pW - 0.4, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

  // Bottom summary bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.7, w: 10, h: 1.3,
    fill: { color: theme.light }
  });

  // Decorative left accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.7, w: 0.1, h: 1.3,
    fill: { color: theme.accent }
  });

  slide.addText("明日预告", {
    x: 0.4, y: 5.85, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("深度练习与反馈  |  角色扮演实战  |  小组讨论与复盘", {
    x: 0.4, y: 6.2, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle"
  });

  // Decorative circles
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.8, y: 5.9, w: 0.4, h: 0.4,
    fill: { color: theme.accent, transparency: 30 }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.1, y: 6.2, w: 0.3, h: 0.3,
    fill: { color: theme.secondary, transparency: 40 }
  });

  return slide;
}

module.exports = { createSlide };
