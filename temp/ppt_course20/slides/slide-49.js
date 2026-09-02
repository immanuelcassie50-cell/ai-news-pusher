const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("为什么知道但做不到？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const reasons = [
    { title: "知识幻觉", desc: "以为\"知道了\"就等于\"掌握了\"，忽视了大量练习的必要性" },
    { title: "认知吝啬", desc: "大脑偏好走捷径，遇到问题时自动退回默认模式" },
    { title: "情绪劫持", desc: "压力、焦虑等情绪占据认知资源，理性决策空间被挤压" },
    { title: "缺乏反馈", desc: "看不到自己判断的正误，缺乏即时反馈来校准" }
  ];
  reasons.forEach((r, i) => {
    const y = 1.35 + i * 1.0;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.45, h: 0.45,
      fill: { color: theme.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(r.title, {
      x: 1.1, y: y, w: 2.0, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, valign: "middle"
    });
    slide.addText(r.desc, {
      x: 1.1, y: y + 0.42, w: 8.3, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("49", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
