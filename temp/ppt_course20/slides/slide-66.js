const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("案例6: 择校的关键考量", {
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
    { text: "孩子快3岁，要考虑幼儿园了", options: { bullet: true, breakLine: true } },
    { text: "小区公立园便宜但担心质量", options: { bullet: true, breakLine: true } },
    { text: "私立园国际园价格高，理念新", options: { bullet: true, breakLine: true } },
    { text: "朋友选择了在家上学，觉得挺好", options: { bullet: true, breakLine: true } },
    { text: "全家对未来教育方向有分歧", options: { bullet: true } }
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
  slide.addText("核心挑战: 教育理念差异大，试错成本高", {
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
    { title: "公立幼儿园", desc: "就近入学，性价比高", pro: "费用低，教师有编制", con: "班额大，个性化关注少" },
    { title: "私立/国际园", desc: "小班教学，蒙氏/瑞吉欧等理念", pro: "理念先进", con: "质量参差，费用高" },
    { title: "在家上学", desc: "家长主导或在家学习社群", pro: "高度个性化", con: "社交机会少，家长压力大" }
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
  slide.addText("反思: 你选择学校的首要标准是什么？孩子的声音重要吗？", {
    x: 5.2, y: 4.75, w: 4.3, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("66", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
