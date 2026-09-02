const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("三个案例的共同模式", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Central pattern diagram
  slide.addShape(pres.ShapeType.ellipse, {
    x: 3.8, y: 2.3, w: 2.4, h: 2.4,
    fill: { color: theme.secondary, transparency: 80 },
    line: { color: theme.secondary, width: 2 }
  });
  slide.addText("信息\n过载\n困境", {
    x: 3.8, y: 2.3, w: 2.4, h: 2.4,
    fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  // Four patterns around
  const patterns = [
    { x: 0.5, y: 1.4, text: "信息多\n决策难", sub: "公号算法推送更多" },
    { x: 7.0, y: 1.4, text: "标准多\n共识难", sub: "专家说法互相矛盾" },
    { x: 0.5, y: 3.8, text: "角色多\n沟通难", sub: "每个家人一套逻辑" },
    { x: 7.0, y: 3.8, text: "焦虑多\n行动难", sub: "越看越不知道怎么做" }
  ];

  patterns.forEach(p => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: p.x, y: p.y, w: 2.5, h: 1.3,
      fill: { color: theme.bg },
      line: { color: theme.accent, width: 1.5 },
      rectRadius: 0.08
    });
    slide.addText(p.text, {
      x: p.x + 0.1, y: p.y + 0.1, w: 2.3, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(p.sub, {
      x: p.x + 0.1, y: p.y + 0.85, w: 2.3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Connecting arrows (simple lines)
  slide.addShape(pres.ShapeType.line, { x: 3.0, y: 2.05, w: 0.8, h: 0.6, line: { color: theme.accent, width: 1.5 } });
  slide.addShape(pres.ShapeType.line, { x: 6.2, y: 2.05, w: 0.8, h: 0.6, line: { color: theme.accent, width: 1.5 } });
  slide.addShape(pres.ShapeType.line, { x: 3.0, y: 4.0, w: 0.8, h: -0.6, line: { color: theme.accent, width: 1.5 } });
  slide.addShape(pres.ShapeType.line, { x: 6.2, y: 4.0, w: 0.8, h: -0.6, line: { color: theme.accent, width: 1.5 } });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("68", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
