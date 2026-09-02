const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("课程反馈与建议", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Feedback form visual
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.25, w: 9.2, h: 3.8,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 1.5 },
    rectRadius: 0.1
  });

  slide.addText("您的反馈对我们很重要", {
    x: 0.5, y: 1.35, w: 9.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary
  });

  // Rating section
  slide.addText("课程满意度:", {
    x: 0.6, y: 1.8, w: 2.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  const ratings = ["1", "2", "3", "4", "5"];
  ratings.forEach((r, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: 2.8 + i * 0.55, y: 1.85, w: 0.45, h: 0.35,
      fill: { color: theme.light, transparency: 50 },
      line: { color: theme.accent, width: 1 }
    });
    slide.addText(r, {
      x: 2.8 + i * 0.55, y: 1.85, w: 0.45, h: 0.35,
      fontSize: 12, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
  });

  // Feedback areas
  const fields = [
    { label: "最有收获的知识点:", placeholder: "请填写..." },
    { label: "可以改进的地方:", placeholder: "请填写..." },
    { label: "其他建议:", placeholder: "请填写..." }
  ];

  fields.forEach((f, i) => {
    const y = 2.4 + i * 0.85;
    slide.addText(f.label, {
      x: 0.6, y: y, w: 3.0, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: y + 0.35, w: 8.8, h: 0.45,
      fill: { color: theme.bg },
      line: { color: theme.light, width: 0.5 }
    });
    slide.addText(f.placeholder, {
      x: 0.7, y: y + 0.38, w: 8.6, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Submit reminder
  slide.addShape(pres.ShapeType.roundRect, {
    x: 3.5, y: 4.75, w: 3.0, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.06
  });
  slide.addText("感谢您的反馈", {
    x: 3.5, y: 4.75, w: 3.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("97", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
