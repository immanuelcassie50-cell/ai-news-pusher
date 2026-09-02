const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("组件二：评估标准卡", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // 5 evaluation dimensions
  const dimensions = [
    { icon: "1", title: "来源可信度", questions: "是谁说的？有无利益关联？同行怎么看？", color: theme.primary },
    { icon: "2", title: "证据强度", questions: "是个案还是研究？有无对照组？样本量多大？", color: theme.secondary },
    { icon: "3", title: "适用性判断", questions: "适合我家孩子吗？年龄/性格/情境匹配吗？", color: theme.accent },
    { icon: "4", title: "可操作性", questions: "我能做到吗？需要多少资源？代价值得吗？", color: theme.light },
    { icon: "5", title: "长期影响", questions: "短期有效，长期呢？有没有隐藏风险？", color: theme.primary }
  ];

  dimensions.forEach((dim, i) => {
    const y = 1.2 + i * 0.85;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 9.2, h: 0.75,
      fill: { color: theme.bg, transparency: 10 },
      rectRadius: 0.06
    });
    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.55, y: y + 0.12, w: 0.5, h: 0.5,
      fill: { color: dim.color }
    });
    slide.addText(dim.icon, {
      x: 0.55, y: y + 0.12, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Title
    slide.addText(dim.title, {
      x: 1.2, y: y + 0.08, w: 2.0, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // Questions
    slide.addText(dim.questions, {
      x: 3.3, y: y + 0.08, w: 6.1, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    // Separator line
    if (i < dimensions.length - 1) {
      slide.addShape(pres.ShapeType.line, {
        x: 0.5, y: y + 0.78, w: 9.0, h: 0,
        line: { color: theme.light, width: 0.5, transparency: 60 }
      });
    }
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("73", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
