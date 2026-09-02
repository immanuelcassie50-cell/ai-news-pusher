const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("信息过载的三个表现", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("深入解析", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const detailed = [
    {
      title: "选择悖论 (The Paradox of Choice)",
      explanation: "当选项数量超过大脑处理能力时，选择本身变成了压力源，反而导致决策质量下降或干脆放弃决策。",
      example: "研究显示：超市提供24种果酱时购买率为3%，提供6种时购买率为30%。"
    },
    {
      title: "知识幻觉 (Illusion of Knowledge)",
      explanation: "收集信息的过程带来\"我已经了解了\"的错觉，但收藏不等于理解，理解不等于应用。",
      example: "收藏100篇文章不如彻底弄懂3篇并付诸行动。"
    },
    {
      title: "社会比较焦虑 (Social Comparison Anxiety)",
      explanation: "社交媒体放大了\"别人家孩子\"的成功案例，制造不必要的竞争压力。",
      example: "朋友圈晒娃、奥数牛蛙、钢琴神童...都是经过筛选的展示。"
    }
  ];
  detailed.forEach((item, i) => {
    const y = 1.7 + i * 1.25;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.08, h: 1.1,
      fill: { color: theme.accent }
    });
    slide.addText(item.title, {
      x: 0.7, y: y, w: 8.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(item.explanation, {
      x: 0.7, y: y + 0.38, w: 8.8, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(item.example, {
      x: 0.7, y: y + 0.72, w: 8.8, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei", italic: true,
      color: theme.light
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("19", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
