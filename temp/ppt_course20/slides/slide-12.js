const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("我们每天被什么样的信息包围？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const sources = [
    { type: "社交媒体", icon: "S", examples: "微信群、朋友圈、小红书", risk: "高" },
    { type: "自媒体账号", icon: "M", examples: "育儿博主、意见领袖", risk: "中" },
    { type: "商业品牌", icon: "B", examples: "培训机构、奶粉、APP", risk: "高" },
    { type: "权威机构", icon: "A", examples: "卫健委、WHO、顶级医院", risk: "低" }
  ];
  sources.forEach((src, i) => {
    const y = 1.35 + i * 1.0;
    const riskColor = src.risk === "高" ? theme.light : src.risk === "中" ? theme.accent : theme.secondary;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.0, h: 0.8,
      fill: { color: theme.secondary }
    });
    slide.addText(src.icon, {
      x: 0.5, y: y, w: 1.0, h: 0.8,
      fontSize: 28, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(src.type, {
      x: 1.7, y: y, w: 2.2, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(src.examples, {
      x: 1.7, y: y + 0.38, w: 4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 8.0, y: y + 0.15, w: 0.8, h: 0.5,
      fill: { color: riskColor }
    });
    slide.addText(src.risk + "风险", {
      x: 8.0, y: y + 0.15, w: 0.8, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
