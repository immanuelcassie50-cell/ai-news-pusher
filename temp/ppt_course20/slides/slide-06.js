const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("信息过载的三个表现", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const manifestations = [
    {
      title: "选择悖论",
      desc: "选项太多导致无法做出决定，或决策质量下降",
      example: "\"早教班选哪个？线上还是线下？外教还是中教？\""
    },
    {
      title: "知识幻觉",
      desc: "收藏了很多文章就感觉学会了，实际并未消化",
      example: "\"这篇文章太有用了！\" —— 收藏夹吃灰中"
    },
    {
      title: "社会比较焦虑",
      desc: "看到别人家孩子的进展，产生不必要的担忧",
      example: "\"隔壁小明都会了，我家娃还不会...\""
    }
  ];
  manifestations.forEach((item, i) => {
    const y = 1.35 + i * 1.35;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(item.title, {
      x: 1.15, y: y - 0.05, w: 3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(item.desc, {
      x: 1.15, y: y + 0.35, w: 4, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 5.5, y: y, w: 4, h: 0.9,
      fill: { color: theme.light, transparency: 70 }
    });
    slide.addText(item.example, {
      x: 5.6, y: y, w: 3.8, h: 0.9,
      fontSize: 11, fontFace: "Microsoft YaHei", italic: true,
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("6", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
