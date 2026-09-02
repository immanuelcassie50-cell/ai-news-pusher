const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("底线锚点：家庭共识的形成", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("不可逾越的红线是如何建立的？", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const steps = [
    { num: "1", title: "识别分歧点", desc: "找到家庭成员间观点冲突最明显的话题" },
    { num: "2", title: "追溯根本诉求", desc: "理解每个人立场背后的真实需求是什么" },
    { num: "3", title: "寻找共同目标", desc: "提炼全家人都认可的更高层价值" },
    { num: "4", title: "明确底线边界", desc: "确定哪些是绝对不可妥协的，哪些可以灵活" }
  ];
  steps.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.75, w: 2.15, h: 2.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.7, y: 1.95, w: 0.75, h: 0.75,
      fill: { color: theme.accent }
    });
    slide.addText(s.num, {
      x: x + 0.7, y: 1.95, w: 0.75, h: 0.75,
      fontSize: 22, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: x + 0.1, y: 2.85, w: 1.95, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });
    slide.addText(s.desc, {
      x: x + 0.1, y: 3.35, w: 1.95, h: 1,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.75, w: 9, h: 0.04,
    fill: { color: theme.accent }
  });
  slide.addText("底线锚点的形成是动态过程，需要定期回顾和调整", {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("42", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
