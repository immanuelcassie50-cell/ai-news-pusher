function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("信任不是一整块，是叠起来的", {
    x: 0.6, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Five layers - stacked cards
  const layers = [
    { num: "01", title: "能力信任", desc: "你做得到" },
    { num: "02", title: "真实信任", desc: "你不是在演" },
    { num: "03", title: "善意信任", desc: "你不会占我便宜" },
    { num: "04", title: "一致性信任", desc: "你说的是一回事" },
    { num: "05", title: "边界信任", desc: "你知道自己的位置" }
  ];

  const startY = 1.15;
  const layerHeight = 0.6;
  const colors = [theme.accent, theme.secondary, theme.primary, theme.secondary, theme.accent];

  layers.forEach((layer, i) => {
    const y = startY + i * layerHeight;
    const isEven = i % 2 === 0;

    // Layer bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: layerHeight - 0.08,
      fill: { color: isEven ? colors[i] : "FFFFFF" },
      line: isEven ? null : { color: theme.light, width: 1 }
    });

    // Number
    slide.addText(layer.num, {
      x: 0.7, y: y, w: 0.6, h: layerHeight - 0.08,
      fontSize: 18, fontFace: "Arial",
      color: isEven ? "FFFFFF" : theme.accent, bold: true, valign: "middle"
    });

    // Title
    slide.addText(layer.title, {
      x: 1.4, y: y, w: 2, h: layerHeight - 0.08,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: isEven ? "FFFFFF" : theme.primary, bold: true, valign: "middle"
    });

    // Description
    slide.addText(layer.desc, {
      x: 3.5, y: y, w: 5.5, h: layerHeight - 0.08,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: isEven ? theme.light : theme.secondary, valign: "middle"
    });
  });

  // Bottom formula bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 4.55, w: 10, h: 1.075,
    fill: { color: theme.light }
  });

  slide.addText("个人信任 = 能力 + 真实 + 善意 + 一致性 + 边界感", {
    x: 0.5, y: 4.75, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  return slide;
}
module.exports = { createSlide };
