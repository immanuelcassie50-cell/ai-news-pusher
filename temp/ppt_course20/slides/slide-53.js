const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("复盘问句清单", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const questions = [
    "我当时收集了哪些信息？是否有遗漏重要来源？",
    "我是如何评估这些信息可信度的？标准合理吗？",
    "我的判断受到了哪些情绪或偏见的影响？",
    "如果重来，我会在信息收集或分析上做什么调整？",
    "这次经历可以加入我的决策清单吗？"
  ];
  questions.forEach((q, i) => {
    const y = 1.3 + i * 0.82;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(q, {
      x: 1.0, y: y, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
    if (i < questions.length - 1) {
      slide.addShape(pres.ShapeType.rect, {
        x: 1.0, y: y + 0.5, w: 8.5, h: 0.01,
        fill: { color: theme.secondary, transparency: 70 }
      });
    }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("53", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
