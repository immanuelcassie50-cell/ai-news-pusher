const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("信息焦虑的心理机制", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const mechanisms = [
    {
      title: "认知负荷超载",
      desc: "大脑一次能处理的信息有限，过多选择会耗尽认知资源"
    },
    {
      title: "损失厌恶",
      desc: "我们更害怕错过\"正确\"信息，而非\"错误\"信息的危害"
    },
    {
      title: "从众效应",
      desc: "\"大家都在这样做\"成为默认的行动理由"
    },
    {
      title: "确认偏误",
      desc: "更容易接受支持自己已有观点的信息"
    }
  ];
  mechanisms.forEach((mech, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.4 + row * 1.7;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.4,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.12, h: 1.4,
      fill: { color: theme.accent }
    });
    slide.addText(mech.title, {
      x: x + 0.25, y: y + 0.15, w: 4, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(mech.desc, {
      x: x + 0.25, y: y + 0.65, w: 4, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("7", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
