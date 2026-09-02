const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("你是哪种信息接收者？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const types = [
    {
      type: "海绵型",
      desc: "全盘吸收，相信一切",
      trait: ["容易焦虑", "决策困难", "经常后悔"],
      color: theme.light
    },
    {
      type: "过滤型",
      desc: "有选择地吸收",
      trait: ["批判思维", "效率优先", "偶尔遗漏"],
      color: theme.secondary
    },
    {
      type: "屏蔽型",
      desc: "选择性忽略",
      trait: ["心态好", "可能错过重要信息", "需要信息时主动搜索"],
      color: theme.accent
    }
  ];
  types.forEach((t, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.4, w: 2.9, h: 3.5,
      fill: { color: "FFFFFF" },
      line: { color: t.color, width: 2 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.4, w: 2.9, h: 0.7,
      fill: { color: t.color }
    });
    slide.addText(t.type, {
      x: x, y: 1.4, w: 2.9, h: 0.7,
      fontSize: 18, fontFace: "Microsoft YaHei", bold: true,
      color: i === 0 ? theme.primary : "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(t.desc, {
      x: x + 0.15, y: 2.2, w: 2.6, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
    slide.addText("特征：", {
      x: x + 0.15, y: 2.75, w: 2.6, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    t.trait.forEach((trait, j) => {
      slide.addText("• " + trait, {
        x: x + 0.2, y: 3.15 + j * 0.45, w: 2.5, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("16", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
