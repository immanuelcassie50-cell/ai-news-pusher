const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("案例5: 疫苗选择与摇摆", {
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
    { text: "宝宝2个月，要接种脊灰疫苗", options: { bullet: true, breakLine: true } },
    { text: "免费IPV或自费五联？价格差10倍", options: { bullet: true, breakLine: true } },
    { text: "网上有人说\"进口苗更安全\"", options: { bullet: true, breakLine: true } },
    { text: "又有人说\"不良反应被夸大了\"", options: { bullet: true, breakLine: true } },
    { text: "新手妈妈完全不知道如何判断", options: { bullet: true } }
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
  slide.addText("核心挑战: 专业信息看不懂，立场不同结论不同", {
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
    { title: "全程免费疫苗", desc: "严格按照国家免疫程序接种", pro: "安全验证成熟", con: "针次多，可能反应大" },
    { title: "全程自费疫苗", desc: "选择五联/十三价等，减少针次", pro: "减少痛苦", con: "费用高，信息不对称" },
    { title: "混合选择", desc: "只选必要的自费，如十三价肺炎", pro: "平衡风险与成本", con: "需要研究判断" }
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
  slide.addText("反思: 面对专业领域，你的决策信任谁？依据是什么？", {
    x: 5.2, y: 4.75, w: 4.3, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("65", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
