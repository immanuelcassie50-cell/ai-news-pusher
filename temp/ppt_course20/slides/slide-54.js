const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("习惯形成的时间周期", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const stages = [
    { days: "1-21天", title: "习惯化期", desc: "刻意提醒自己，依赖意志力", color: theme.light },
    { days: "22-66天", title: "强化期", desc: "逐渐自动化，但仍需意识参与", color: theme.accent },
    { days: "67-254天", title: "稳定期", desc: "成为无意识的自然反应", color: theme.secondary }
  ];
  stages.forEach((s, i) => {
    const y = 1.4 + i * 1.25;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 2.0, h: 1.0,
      fill: { color: s.color }
    });
    slide.addText(s.days, {
      x: 0.5, y: y, w: 2.0, h: 0.5,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: 0.5, y: y + 0.45, w: 2.0, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(s.desc, {
      x: 2.7, y: y, w: 6.5, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 10 }
  });
  slide.addText("关键洞察：平均需要66天才能形成稳定的习惯，比21天习惯法要长得多", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("54", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
