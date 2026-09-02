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
  slide.addText("为什么我们会被信息绑架？", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const mechanisms = [
    {
      name: "损失厌恶",
      formula: "损失的心理痛苦 > 获得的心理快乐",
      explanation: "错过\"正确\"方法的恐惧远大于采纳\"错误\"方法的遗憾"
    },
    {
      name: "双曲贴现",
      formula: "未来收益被系统性低估",
      explanation: "\"以后再说\"让我们不断推迟重要决策"
    },
    {
      name: "群体智慧（陷阱）",
      formula: "\"大家都在这样做\"≠ 这样做是对的",
      explanation: "从众效应在信息爆炸时代被算法放大"
    },
    {
      name: "稀缺心智",
      formula: "带宽被耗尽时决策质量下降",
      explanation: "当满脑子都是焦虑时，理性思考的空间就没了"
    }
  ];
  mechanisms.forEach((mech, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.7 + row * 1.8;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.6,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addText(mech.name, {
      x: x + 0.15, y: y + 0.1, w: 4.1, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.accent
    });
    slide.addText(mech.formula, {
      x: x + 0.15, y: y + 0.5, w: 4.1, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei", italic: true,
      color: theme.primary
    });
    slide.addText(mech.explanation, {
      x: x + 0.15, y: y + 0.9, w: 4.1, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("20", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
