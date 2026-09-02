const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("三个锚点框架金句", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Three anchors with quotes
  const anchors = [
    {
      name: "信息锚点",
      quote: "值得花时间的信息，才值得认真对待",
      sub: "先过滤，再深入",
      color: theme.primary
    },
    {
      name: "决策锚点",
      quote: "可逆的决策快速试，不可逆的多方验证",
      sub: "风险与收益的平衡",
      color: theme.secondary
    },
    {
      name: "共识锚点",
      quote: "没有共识的决策，执行起来代价更大",
      sub: "沟通是决策的一部分",
      color: theme.accent
    }
  ];

  anchors.forEach((anchor, i) => {
    const x = 0.4 + i * 3.2;
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.3, w: 3.0, h: 3.5,
      fill: { color: theme.bg },
      line: { color: anchor.color, width: 2 },
      rectRadius: 0.1
    });
    // Top bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.3, w: 3.0, h: 0.6,
      fill: { color: anchor.color }
    });
    slide.addText(anchor.name, {
      x: x, y: 1.35, w: 3.0, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Quote
    slide.addText("「", {
      x: x + 0.1, y: 2.0, w: 0.5, h: 0.6,
      fontSize: 40, fontFace: "Georgia",
      color: anchor.color
    });
    slide.addText(anchor.quote, {
      x: x + 0.15, y: 2.4, w: 2.7, h: 1.4,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "top"
    });
    // Sub text
    slide.addText(anchor.sub, {
      x: x + 0.15, y: 4.0, w: 2.7, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Key takeaway
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 5.0, w: 9.2, h: 0.45,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.05
  });
  slide.addText("金句: 锚点不是限制，而是决策的加速器", {
    x: 0.5, y: 5.05, w: 9.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("85", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
