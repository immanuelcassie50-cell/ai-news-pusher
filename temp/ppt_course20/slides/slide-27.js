const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("快速筛选的10秒法则", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("拿到一条信息，10秒内做出初步判断", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const rules = [
    { second: "1-3秒", action: "看标题和来源", filter: "标题党、情绪煽动 → 直接忽略" },
    { second: "4-6秒", action: "扫全文结构", filter: "无数据、无来源 → 降低可信度" },
    { second: "7-10秒", action: "判断是否值得深读", filter: "相关且可信 → 收藏待细读" }
  ];
  rules.forEach((r, i) => {
    const y = 1.75 + i * 1.1;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.3, h: 0.9,
      fill: { color: theme.accent }
    });
    slide.addText(r.second, {
      x: 0.5, y: y, w: 1.3, h: 0.9,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 2.0, y: y, w: 3, h: 0.9,
      fill: { color: theme.secondary }
    });
    slide.addText(r.action, {
      x: 2.0, y: y, w: 3, h: 0.9,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 4.3, h: 0.9,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addText(r.filter, {
      x: 5.3, y: y, w: 4.1, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.04,
    fill: { color: theme.accent }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("27", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
