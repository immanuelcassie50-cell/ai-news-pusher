const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("四层信息分类法金句", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Four tiers visual
  const tiers = [
    { name: "Tier 1", title: "权威来源", desc: "经过时间检验的专业渠道", example: "WHO官网、国家卫健委、顶级期刊", color: theme.primary },
    { name: "Tier 2", title: "经验来源", desc: "有经验的专业人士或过来人", example: "你信任的医生、多年经验的老师", color: theme.secondary },
    { name: "Tier 3", title: "社群来源", desc: "同级别家长的实践经验", example: "家长群口碑、论坛真实反馈", color: theme.accent },
    { name: "Tier 4", title: "大众来源", desc: "算法推送的热门内容", example: "短视频、标题党文章", color: theme.light }
  ];

  tiers.forEach((tier, i) => {
    const y = 1.25 + i * 1.0;
    // Left color bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 0.15, h: 0.9,
      fill: { color: tier.color }
    });
    // Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.55, y: y, w: 9.05, h: 0.9,
      fill: { color: theme.bg, transparency: 10 },
      rectRadius: 0.06
    });
    // Tier badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.7, y: y + 0.1, w: 0.8, h: 0.35,
      fill: { color: tier.color },
      rectRadius: 0.05
    });
    slide.addText(tier.name, {
      x: 0.7, y: y + 0.1, w: 0.8, h: 0.35,
      fontSize: 10, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Title
    slide.addText(tier.title, {
      x: 1.6, y: y + 0.08, w: 1.5, h: 0.38,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // Description
    slide.addText(tier.desc, {
      x: 3.1, y: y + 0.08, w: 2.8, h: 0.38,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    // Example
    slide.addText("如: " + tier.example, {
      x: 0.7, y: y + 0.5, w: 8.7, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Key insight
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 5.25, w: 9.2, h: 0.35,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.05
  });
  slide.addText("金句: 信息分类不是歧视，是对自己认知资源的尊重", {
    x: 0.5, y: 5.25, w: 9.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("84", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
