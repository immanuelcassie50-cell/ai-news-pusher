const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("本模块核心要点", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const points = [
    { num: "01", text: "了解四大信息来源是筛选的第一步" },
    { num: "02", text: "区分\"发布者\"和\"传播者\"，追根溯源" },
    { num: "03", text: "认清自己是哪种信息接收者" },
    { num: "04", text: "从被动接收转向主动筛选" },
    { num: "05", text: "建立自己的信息白名单和过滤机制" }
  ];
  points.forEach((p, i) => {
    const y = 1.35 + i * 0.8;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.7, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(p.num, {
      x: 0.5, y: y, w: 0.7, h: 0.6,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(p.text, {
      x: 1.4, y: y, w: 8, h: 0.6,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.04,
    fill: { color: theme.accent }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("18", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
