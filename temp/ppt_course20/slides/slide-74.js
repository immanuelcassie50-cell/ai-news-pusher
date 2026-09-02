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
  slide.addText("组件三：决策锚点卡", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Subtitle
  slide.addText("关键时刻的灵魂拷问，帮助你快速做出决策", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Three anchor cards
  const anchors = [
    {
      title: "信息锚点",
      question: "这条信息值得我花时间吗？",
      sub: "用Tier 1标准快速过滤\n不重要的直接跳过",
      color: theme.primary
    },
    {
      title: "决策锚点",
      question: "如果我选错了，最坏的结果是什么？",
      sub: "可逆的决策快速试\n不可逆的多方验证",
      color: theme.secondary
    },
    {
      title: "共识锚点",
      question: "我们全家能接受这个决定吗？",
      sub: "提前沟通减少阻力\n有分歧时求同存异",
      color: theme.accent
    }
  ];

  anchors.forEach((anchor, i) => {
    const x = 0.4 + i * 3.2;
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.75, w: 3.0, h: 3.5,
      fill: { color: theme.bg },
      line: { color: anchor.color, width: 2 },
      rectRadius: 0.1
    });
    // Top color bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.75, w: 3.0, h: 0.6,
      fill: { color: anchor.color }
    });
    slide.addText(anchor.title, {
      x: x, y: 1.8, w: 3.0, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Question mark
    slide.addText("?", {
      x: x + 0.1, y: 2.5, w: 2.8, h: 1.0,
      fontSize: 60, fontFace: "Arial", bold: true,
      color: anchor.color, align: "center", valign: "middle",
      transparency: 70
    });
    // Question
    slide.addText(anchor.question, {
      x: x + 0.15, y: 2.55, w: 2.7, h: 0.9,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    // Sub text
    slide.addText(anchor.sub, {
      x: x + 0.15, y: 4.5, w: 2.7, h: 0.65,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("74", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
