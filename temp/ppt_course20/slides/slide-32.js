const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("持续更新：与时俱进的信息管理", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fill: { color: theme.secondary, transparency: 30 }
  });
  slide.addText("信息环境不断变化，需要动态调整策略", {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });
  const practices = [
    { freq: "每周", action: "快速浏览信息源，更新收藏夹" },
    { freq: "每月", action: "复盘本月采纳的信息，效果如何？" },
    { freq: "每季度", action: "审视白名单，去除低质量来源" },
    { freq: "每年", action: "全面审视育儿理念和框架，必要时调整" }
  ];
  practices.forEach((p, i) => {
    const y = 1.85 + i * 0.85;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.3, h: 0.65,
      fill: { color: theme.accent }
    });
    slide.addText(p.freq, {
      x: 0.5, y: y, w: 1.3, h: 0.65,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(p.action, {
      x: 2.0, y: y, w: 7.5, h: 0.65,
      fontSize: 14, fontFace: "Microsoft YaHei",
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
  slide.addText("32", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
