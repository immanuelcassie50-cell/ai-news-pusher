const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("三层筛选框架概览", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const layers = [
    { layer: "第一层", title: "事实层", desc: "数据核实", detail: "信息本身是否真实？数字来源可靠吗？", color: theme.secondary },
    { layer: "第二层", title: "来源层", desc: "可信度评估", detail: "发布者资质？利益关联？同行评审？", color: theme.accent },
    { layer: "第三层", title: "价值层", desc: "家庭适配", detail: "适合我的孩子吗？符合我的价值观？", color: theme.light }
  ];
  layers.forEach((l, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 2.9, h: 3.7,
      fill: { color: "FFFFFF" },
      line: { color: l.color, width: 2 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 2.9, h: 0.7,
      fill: { color: l.color }
    });
    slide.addText(l.layer, {
      x: x, y: 1.35, w: 2.9, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: i === 2 ? theme.primary : "FFFFFF", align: "center", valign: "bottom"
    });
    slide.addText(l.title, {
      x: x, y: 1.7, w: 2.9, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: i === 2 ? theme.primary : "FFFFFF", align: "center", valign: "top"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: 2.2, w: 2.5, h: 0.5,
      fill: { color: l.color, transparency: 80 }
    });
    slide.addText(l.desc, {
      x: x + 0.2, y: 2.2, w: 2.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: l.color, align: "center", valign: "middle"
    });
    slide.addText(l.detail, {
      x: x + 0.15, y: 2.9, w: 2.6, h: 1.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "top"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("22", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
