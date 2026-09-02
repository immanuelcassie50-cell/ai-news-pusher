const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("组件一：信息来源清单", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Three trust tiers
  const tiers = [
    {
      level: "Tier 1 - 核心信任源", color: theme.secondary,
      items: ["权威医学机构网站", "国家级教育政策文件", "长期跟踪的专家公号"],
      note: "优先级最高，遇到分歧以此为准"
    },
    {
      level: "Tier 2 - 参考信任源", color: theme.accent,
      items: ["知名育儿博主（持续关注1年+）", "口碑好的书籍", "身边有经验的家长"],
      note: "参考使用，交叉验证"
    },
    {
      level: "Tier 3 - 偶尔参考", color: theme.light,
      items: ["算法推荐的热门内容", "朋友圈转发文章", "短视频平台的科普"],
      note: "保持警惕，用Tier 1标准过滤"
    }
  ];

  tiers.forEach((tier, i) => {
    const y = 1.25 + i * 1.4;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 9.2, h: 1.25,
      fill: { color: theme.bg },
      line: { color: tier.color, width: 1.5 },
      rectRadius: 0.08
    });
    // Level tag
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.55, y: y + 0.1, w: 2.4, h: 0.35,
      fill: { color: tier.color },
      rectRadius: 0.05
    });
    slide.addText(tier.level, {
      x: 0.55, y: y + 0.1, w: 2.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Items
    slide.addText(tier.items.join("  |  "), {
      x: 0.6, y: y + 0.5, w: 8.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    // Note
    slide.addText(tier.note, {
      x: 0.6, y: y + 0.85, w: 8.8, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: tier.color, italic: true
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("72", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
