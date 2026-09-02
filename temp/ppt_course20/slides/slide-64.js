const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("案例4: 屏幕时间的界限", {
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
    { text: "孩子2岁，喜欢看手机上的动画片", options: { bullet: true, breakLine: true } },
    { text: "妈妈限制每天30分钟\"Peppa Pig\"", options: { bullet: true, breakLine: true } },
    { text: "爷爷奶奶宠爱：\"看一下怎么了\"", options: { bullet: true, breakLine: true } },
    { text: "幼儿园同学都在看，手机是社交话题", options: { bullet: true, breakLine: true } },
    { text: "有人说\"好的App也能早教\"", options: { bullet: true } }
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
  slide.addText("核心挑战: 规则执行不一致，长辈配合难", {
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
    { title: "严格限制30分钟", desc: "全家统一规则，使用家长控制App", pro: "清晰一致", con: "冲突增多，孩子叛逆" },
    { title: "允许\"教育内容\"", desc: "筛选优质App，时间可适当延长", pro: "有选择地利用", con: "标准难统一" },
    { title: "用活动替代", desc: "用户外/绘本/游戏填满时间", pro: "减少依赖", con: "家长精力消耗大" }
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
  slide.addText("反思: 你担心的是\"屏幕本身\"还是\"看屏幕取代了什么\"？", {
    x: 5.2, y: 4.75, w: 4.3, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("64", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
