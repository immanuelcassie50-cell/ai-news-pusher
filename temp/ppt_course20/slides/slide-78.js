const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("家庭会议的召开方式", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Meeting format options
  const formats = [
    { title: "日常快会", time: "5-10分钟", when: "晚饭时", suitable: "日常信息分享", color: theme.light },
    { title: "周末例会", time: "30分钟", when: "周六上午", suitable: "本周决策复盘", color: theme.accent },
    { title: "专题讨论", time: "1小时+", when: "需要时召开", suitable: "重大问题决策", color: theme.secondary }
  ];

  formats.forEach((fmt, i) => {
    const x = 0.4 + i * 3.2;
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.3, w: 3.0, h: 2.5,
      fill: { color: theme.bg },
      line: { color: fmt.color, width: 2 },
      rectRadius: 0.1
    });
    slide.addText(fmt.title, {
      x: x + 0.1, y: 1.45, w: 2.8, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });
    // Time badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.6, y: 1.95, w: 1.8, h: 0.35,
      fill: { color: fmt.color, transparency: 60 },
      rectRadius: 0.05
    });
    slide.addText(fmt.time, {
      x: x + 0.6, y: 1.95, w: 1.8, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText("时间: " + fmt.when, {
      x: x + 0.15, y: 2.45, w: 2.7, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText("适合: " + fmt.suitable, {
      x: x + 0.15, y: 2.8, w: 2.7, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Tips box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 4.0, w: 9.2, h: 1.2,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("成功开会的小贴士", {
    x: 0.55, y: 4.1, w: 3.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  slide.addText("1) 提前告知议题  2) 每个人都有发言权  3) 不批评只记录  4) 结论要明确  5) 指定执行人和时间点", {
    x: 0.55, y: 4.5, w: 8.9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("78", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
