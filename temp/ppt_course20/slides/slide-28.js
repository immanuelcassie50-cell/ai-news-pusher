const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("建立你的信息白名单", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("定期维护的可靠信息来源清单", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const whitelist = [
    { category: "权威机构", examples: "WHO、卫健委、顶级儿童医院官方发布", keep: "长期订阅" },
    { category: "学术资源", examples: "PubMed、Cochrane、权威期刊", keep: "定期查阅" },
    { category: "可信赖的专家", examples: "有资质、无利益关联、历史记录良好", keep: "重点关注" },
    { category: "实战家长", examples: "经历相似、理性客观、愿意分享失败经验", keep: "参考借鉴" }
  ];
  whitelist.forEach((item, i) => {
    const y = 1.7 + i * 0.9;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 2.0, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText(item.category, {
      x: 0.5, y: y, w: 2.0, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(item.examples, {
      x: 2.7, y: y, w: 5.3, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 8.2, y: y + 0.15, w: 1.3, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(item.keep, {
      x: 8.2, y: y + 0.15, w: 1.3, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "middle"
    });
  });
  slide.addText("建议：控制在20个以内，每季度回顾更新一次", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("28", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
