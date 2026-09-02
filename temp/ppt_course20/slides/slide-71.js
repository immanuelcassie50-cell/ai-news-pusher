const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("家庭信息管理系统的四个组件", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Four components in 2x2 grid
  const components = [
    { num: "01", title: "信息来源清单", desc: "明确信任的信息源\n过滤噪音和低质内容", color: theme.primary },
    { num: "02", title: "评估标准卡", desc: "统一评估维度\n让判断有据可依", color: theme.secondary },
    { num: "03", title: "决策锚点卡", desc: "关键时刻的关键问题\n帮助快速决策", color: theme.accent },
    { num: "04", title: "日志与复盘", desc: "记录决策过程\n持续优化迭代", color: theme.light }
  ];

  components.forEach((comp, i) => {
    const x = 0.4 + (i % 2) * 4.8;
    const y = 1.3 + Math.floor(i / 2) * 2.1;

    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: y, w: 4.6, h: 1.9,
      fill: { color: theme.bg },
      line: { color: comp.color, width: 2 },
      rectRadius: 0.1
    });

    // Number badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.15, y: y + 0.15, w: 0.7, h: 0.5,
      fill: { color: comp.color },
      rectRadius: 0.06
    });
    slide.addText(comp.num, {
      x: x + 0.15, y: y + 0.15, w: 0.7, h: 0.5,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });

    slide.addText(comp.title, {
      x: x + 1.0, y: y + 0.2, w: 3.4, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });

    slide.addText(comp.desc, {
      x: x + 0.2, y: y + 0.75, w: 4.2, h: 1.0,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("71", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
