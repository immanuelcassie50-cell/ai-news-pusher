const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("案例2: 辅食添加的时机", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Left - situation
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.3, w: 4.5, h: 3.9,
    fill: { color: theme.bg, transparency: 15 },
    rectRadius: 0.1
  });

  slide.addText("情境 Situation", {
    x: 0.55, y: 1.4, w: 4.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent
  });

  slide.addText([
    { text: "宝宝4个月，奶量下降明显", options: { bullet: true, breakLine: true } },
    { text: "妈妈查资料：WHO建议6个月加辅食", options: { bullet: true, breakLine: true } },
    { text: "但妈妈群有人说\"4个月加辅食更好\"", options: { bullet: true, breakLine: true } },
    { text: "宝宝湿疹反复，有过敏家族史", options: { bullet: true, breakLine: true } },
    { text: "妈妈很焦虑，不知道该信谁", options: { bullet: true } }
  ], {
    x: 0.55, y: 1.85, w: 4.2, h: 2.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Challenge box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.55, y: 3.9, w: 4.2, h: 0.55,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.06
  });
  slide.addText("核心挑战: 权威建议相互矛盾，个体情况不同", {
    x: 0.65, y: 3.95, w: 4.0, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Right - options
  slide.addText("选项 Options", {
    x: 5.1, y: 1.4, w: 4.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent
  });

  const options = [
    { title: "等到6个月", desc: "严格按WHO建议，等宝宝消化系统成熟", pro: "降低过敏风险", con: "奶量不足可能影响生长" },
    { title: "4个月开始", desc: "参考\"经验之谈\"，少量尝试高铁米粉", pro: "补充奶量不足", con: "过敏风险增加" },
    { title: "观察信号再加", desc: "看宝宝是否对食物感兴趣、有坐立能力", pro: "个性化判断", con: "需要家长有耐心" }
  ];

  options.forEach((opt, i) => {
    const y = 1.8 + i * 0.95;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.1, y: y, w: 4.5, h: 0.85,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 1 },
      rectRadius: 0.08
    });
    slide.addText((i + 1) + ". " + opt.title, {
      x: 5.2, y: y + 0.05, w: 4.3, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(opt.desc, {
      x: 5.2, y: y + 0.32, w: 4.3, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText("利: " + opt.pro + " | 弊: " + opt.con, {
      x: 5.2, y: y + 0.58, w: 4.3, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Reflection
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.1, y: 4.7, w: 4.5, h: 0.65,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.06
  });
  slide.addText("反思: 你更看重\"专家建议\"还是\"宝宝信号\"？为什么？", {
    x: 5.2, y: 4.75, w: 4.3, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("62", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
