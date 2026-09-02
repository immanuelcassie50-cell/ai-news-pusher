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
  slide.addText("课后支持与跟进", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Support options
  const supports = [
    { title: "课后答疑群", desc: "课程结束后可加入专属答疑群，讲师定期回答问题", icon: "群" },
    { title: "30天陪伴", desc: "每天早间推送一条课程要点提醒，帮助巩固记忆", icon: "每" },
    { title: "月度复盘会", desc: "每月一次线上复盘会，学员分享实践心得", icon: "月" },
    { title: "工具模板包", desc: "提供信息来源清单、评估标准卡、日志模板下载", icon: "具" }
  ];

  supports.forEach((s, i) => {
    const y = 1.3 + i * 1.0;
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.4, y: y, w: 9.2, h: 0.9,
      fill: { color: theme.bg, transparency: 10 },
      rectRadius: 0.08
    });
    // Icon
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText(s.icon, {
      x: 0.6, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Title
    slide.addText(s.title, {
      x: 1.3, y: y + 0.12, w: 2.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // Description
    slide.addText(s.desc, {
      x: 1.3, y: y + 0.48, w: 8.0, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("96", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
