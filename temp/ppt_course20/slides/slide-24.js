const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("第二层：来源层 — 可信度评估", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fill: { color: theme.accent, transparency: 30 }
  });
  slide.addText("核心问题：发布者值得信任吗？", {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent, align: "center", valign: "middle"
  });
  const criteria = [
    { item: "专业资质", check: "是否有相关领域认证？医生？研究员？", weight: "高" },
    { item: "利益关联", check: "是否从内容中获益？广告？付费推广？", weight: "高" },
    { item: "同行评审", check: "是否经过专业机构审核？学术期刊？", weight: "中" },
    { item: "历史记录", check: "过往观点是否准确？有无翻车历史？", weight: "中" }
  ];
  criteria.forEach((c, i) => {
    const y = 1.85 + i * 0.85;
    const weightColor = c.weight === "高" ? theme.light : theme.secondary;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 2.2, h: 0.65,
      fill: { color: theme.secondary }
    });
    slide.addText(c.item, {
      x: 0.5, y: y, w: 2.2, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(c.check, {
      x: 2.85, y: y, w: 5.5, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 8.5, y: y + 0.12, w: 0.9, h: 0.4,
      fill: { color: weightColor }
    });
    slide.addText("重要度 " + c.weight, {
      x: 8.5, y: y + 0.12, w: 0.9, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("24", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
