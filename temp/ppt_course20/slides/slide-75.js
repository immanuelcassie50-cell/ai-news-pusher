const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("组件四：日志与复盘", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Log template
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.25, w: 5.8, h: 4.0,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 1.5 },
    rectRadius: 0.1
  });

  slide.addText("决策日志模板", {
    x: 0.55, y: 1.35, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary
  });

  const logFields = [
    { label: "日期", placeholder: "2024-xx-xx" },
    { label: "问题", placeholder: "要解决的核心问题是什么？" },
    { label: "选项", placeholder: "我考虑了哪些方案？" },
    { label: "决策", placeholder: "最终选择是什么？" },
    { label: "依据", placeholder: "这个决策的主要依据？" },
    { label: "结果", placeholder: "一段时间后的效果如何？" }
  ];

  logFields.forEach((field, i) => {
    const y = 1.8 + i * 0.52;
    slide.addText(field.label + ":", {
      x: 0.6, y: y, w: 0.8, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 1.4, y: y + 0.05, w: 4.6, h: 0.38,
      fill: { color: theme.bg },
      line: { color: theme.light, width: 0.5 }
    });
    slide.addText(field.placeholder, {
      x: 1.5, y: y + 0.05, w: 4.4, h: 0.38,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Reflection tips
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.4, y: 1.25, w: 3.2, h: 4.0,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.1
  });

  slide.addText("复盘三问", {
    x: 6.5, y: 1.35, w: 3.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent
  });

  const reflections = [
    { q: "预期 vs 实际", d: "结果符合预期吗？差在哪里？" },
    { q: "学到什么", d: "这次决策有什么可以改进？" },
    { q: "下次怎么改", d: "类似情况下次注意什么？" }
  ];

  reflections.forEach((r, i) => {
    const y = 1.85 + i * 1.1;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 6.55, y: y, w: 2.9, h: 0.95,
      fill: { color: theme.bg },
      rectRadius: 0.06
    });
    slide.addText(r.q, {
      x: 6.65, y: y + 0.1, w: 2.7, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(r.d, {
      x: 6.65, y: y + 0.45, w: 2.7, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("75", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
