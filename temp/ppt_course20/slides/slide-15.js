const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("信息发布者 vs 信息传播者", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 4.3, h: 3.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 2 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 4.3, h: 0.6,
    fill: { color: theme.secondary }
  });
  slide.addText("信息发布者", {
    x: 0.5, y: 1.35, w: 4.3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  const publisher = [
    "原始信息来源",
    "对内容负责",
    "有专业背景",
    "结论有依据",
    "例：论文作者、医生、研究员"
  ];
  publisher.forEach((item, i) => {
    slide.addText("• " + item, {
      x: 0.7, y: 2.1 + i * 0.55, w: 4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.35, w: 4.3, h: 3.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.35, w: 4.3, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("信息传播者", {
    x: 5.2, y: 1.35, w: 4.3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });
  const spreader = [
    "转发、解读、二次创作",
    "可能断章取义",
    "立场可能影响解读",
    "添加个人解读",
    "例：博主、媒体、朋友圈转发"
  ];
  spreader.forEach((item, i) => {
    slide.addText("• " + item, {
      x: 5.4, y: 2.1 + i * 0.55, w: 4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });
  slide.addText("关键问题：这条信息的原始来源是谁？", {
    x: 0.5, y: 5.05, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("15", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
