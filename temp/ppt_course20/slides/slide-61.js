const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("案例1: 睡眠训练的选择", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Left column - situation
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
    { text: "宝宝6个月，每晚醒3-4次", options: { bullet: true, breakLine: true } },
    { text: "妈妈睡眠严重不足，白天无法工作", options: { bullet: true, breakLine: true } },
    { text: "妈妈读到\"哭声免疫法\"文章", options: { bullet: true, breakLine: true } },
    { text: "婆婆说\"哭就不抱，会哭坏孩子\"", options: { bullet: true, breakLine: true } },
    { text: "丈夫支持尝试睡眠训练", options: { bullet: true } }
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
  slide.addText("核心挑战: 不同方法的利弊不同，家人意见冲突", {
    x: 0.65, y: 3.95, w: 4.0, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Right column - options
  slide.addText("选项 Options", {
    x: 5.1, y: 1.4, w: 4.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent
  });

  const options = [
    { title: "哭声免疫法", desc: "任由宝宝哭一段时间再安抚，逐步拉长间隔", pro: "见效快", con: "可能影响安全依附" },
    { title: "温和引导法", desc: "逐步建立规律作息，用安抚替代奶睡", pro: "温和科学", con: "见效慢，需耐心" },
    { title: "暂时妥协", desc: "继续夜奶，等宝宝自然断夜奶", pro: "全家和谐", con: "妈妈长期睡眠剥夺" }
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

  // Reflection questions
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.1, y: 4.7, w: 4.5, h: 0.65,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.06
  });
  slide.addText("反思: 你的选择依据是什么？家人的意见如何协调？", {
    x: 5.2, y: 4.75, w: 4.3, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("61", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
