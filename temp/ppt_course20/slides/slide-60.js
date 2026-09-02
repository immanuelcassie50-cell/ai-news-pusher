const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("案例工作坊说明", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Subtitle
  slide.addText("学习格式", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // 5 sections in a row
  const sections = [
    { label: "情境", desc: "发生了什么", icon: "1" },
    { label: "挑战", desc: "核心困境", icon: "2" },
    { label: "选项", desc: "可行的路", icon: "3" },
    { label: "决策", desc: "你会选哪个", icon: "4" },
    { label: "反思", desc: "为什么这样选", icon: "5" }
  ];

  const sectionW = 1.7;
  const startX = 0.6;
  const gap = 0.15;

  sections.forEach((sec, i) => {
    const x = startX + i * (sectionW + gap);

    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.95, w: sectionW, h: 2.4,
      fill: { color: theme.bg },
      line: { color: theme.secondary, width: 1.5 },
      rectRadius: 0.1
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (sectionW - 0.5) / 2, y: 2.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(sec.icon, {
      x: x + (sectionW - 0.5) / 2, y: 2.1, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });

    // Label
    slide.addText(sec.label, {
      x: x, y: 2.7, w: sectionW, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });

    // Description
    slide.addText(sec.desc, {
      x: x + 0.1, y: 3.15, w: sectionW - 0.2, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Bottom note
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 4.5, w: 8.8, h: 0.7,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("每个案例没有\"正确答案\"，重要的是理清自己的价值观和决策逻辑", {
    x: 0.6, y: 4.5, w: 8.8, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("60", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
