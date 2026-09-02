const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("决策日志的正确打开方式", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const tips = [
    { icon: "A", title: "即时记录", desc: "决策后24小时内记录，趁记忆清晰" },
    { icon: "B", title: "聚焦过程", desc: "记录你的思考过程，而非只是结果" },
    { icon: "C", title: "诚实面对", desc: "即使是错误的判断也要如实记录" },
    { icon: "D", title: "定期翻阅", desc: "每周回顾一次，观察自己的思维模式" }
  ];
  tips.forEach((tip, i) => {
    const x = 0.5 + (i % 2) * 4.6;
    const y = 1.35 + Math.floor(i / 2) * 1.9;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1.5 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(tip.icon, {
      x: x, y: y, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(tip.title, {
      x: x + 0.7, y: y + 0.1, w: 3.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(tip.desc, {
      x: x + 0.15, y: y + 0.65, w: 4.1, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("51", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
