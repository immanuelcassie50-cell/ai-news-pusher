const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("案例分析：三人讨论与汇报", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Three person cards
  const persons = [
    { name: "妈妈 Lily", role: "焦虑型搜索者", icon: "M", color: theme.accent,
      points: ["每天刷育儿公号10+篇", "收藏夹有200+篇待读", "经常转发给家人"] },
    { name: "爸爸 David", role: "沉默型决策者", icon: "D", color: theme.secondary,
      points: ["看到信息直接做决定", "很少解释原因", "事后才说\"我查过了\""] },
    { name: "奶奶 Grandma", role: "经验型守护者", icon: "G", color: theme.light,
      points: ["觉得过去经验最靠谱", "对新技术持怀疑态度", "常说\"你就是我这么带大的\""] }
  ];

  persons.forEach((p, i) => {
    const x = 0.4 + i * 3.2;
    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.3, w: 3.0, h: 4.0,
      fill: { color: theme.bg, transparency: 10 },
      rectRadius: 0.1
    });
    // Avatar circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 1.1, y: 1.5, w: 0.8, h: 0.8,
      fill: { color: p.color }
    });
    slide.addText(p.icon, {
      x: x + 1.1, y: 1.5, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Name
    slide.addText(p.name, {
      x: x + 0.1, y: 2.4, w: 2.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });
    // Role tag
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.4, y: 2.8, w: 2.2, h: 0.35,
      fill: { color: p.color, transparency: 70 },
      rectRadius: 0.05
    });
    slide.addText(p.role, {
      x: x + 0.4, y: 2.8, w: 2.2, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "middle"
    });
    // Points
    slide.addText(p.points.map((pt, j) => ({
      text: pt,
      options: { bullet: true, breakLine: j < p.points.length - 1 }
    })), {
      x: x + 0.15, y: 3.3, w: 2.7, h: 1.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "top"
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("67", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
