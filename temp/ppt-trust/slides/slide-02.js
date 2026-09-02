function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Section header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText("内容导览", {
    x: 0.6, y: 0.25, w: 8, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Chapter items - 2 columns layout
  const chapters = [
    { num: "1", title: "开场与框架" },
    { num: "2", title: "韩红·走个面儿" },
    { num: "3", title: "雷军·热干面" },
    { num: "4", title: "李佳琦·79元眉笔" },
    { num: "5", title: "快案例与机制" },
    { num: "6", title: "方法论工具" },
    { num: "7", title: "收尾与迁移" }
  ];

  const startY = 1.5;
  const itemHeight = 0.55;

  chapters.forEach((ch, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i < 4 ? i : i - 4;
    const x = col === 0 ? 1.2 : 5.5;
    const y = startY + row * itemHeight;

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });

    slide.addText(ch.num, {
      x: x, y: y, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Chapter title
    slide.addText(ch.title, {
      x: x + 0.55, y: y, w: 3.5, h: 0.4,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Subtitle
  slide.addText("七个章节", {
    x: 0.6, y: 4.8, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}
module.exports = { createSlide };
