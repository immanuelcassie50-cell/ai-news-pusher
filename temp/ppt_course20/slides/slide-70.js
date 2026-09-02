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
  slide.addText("为什么需要一个系统？", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Two column comparison
  // Left - Without system
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.3, w: 4.5, h: 3.9,
    fill: { color: theme.light, transparency: 80 },
    rectRadius: 0.1
  });
  slide.addText("Without System 无系统", {
    x: 0.5, y: 1.4, w: 4.3, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.light
  });

  const withoutPoints = [
    "信息碎片化，找不到想要的内容",
    "决策标准模糊，全凭感觉和情绪",
    "家人各执己见，无法达成共识",
    "过段时间就忘了当初为什么那么选",
    "重复踩坑，同类问题反复纠结"
  ];
  slide.addText(withoutPoints.map((pt, i) => ({
    text: pt,
    options: { bullet: true, breakLine: i < withoutPoints.length - 1 }
  })), {
    x: 0.55, y: 1.95, w: 4.2, h: 3.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Right - With system
  slide.addShape(pres.ShapeType.roundRect, {
    x: 5.1, y: 1.3, w: 4.5, h: 3.9,
    fill: { color: theme.secondary, transparency: 80 },
    rectRadius: 0.1
  });
  slide.addText("With System 有系统", {
    x: 5.2, y: 1.4, w: 4.3, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary
  });

  const withPoints = [
    "信息有序归档，随用随取",
    "评估标准明确，决策有据可依",
    "全家共享框架，沟通更高效",
    "记录决策过程，方便复盘改进",
    "形成家庭知识积累代代传承"
  ];
  slide.addText(withPoints.map((pt, i) => ({
    text: pt,
    options: { bullet: true, breakLine: i < withPoints.length - 1 }
  })), {
    x: 5.25, y: 1.95, w: 4.2, h: 3.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "top"
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("70", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
