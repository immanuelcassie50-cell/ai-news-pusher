const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("锚点设定常见误区", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("避开这些坑，让锚点真正发挥作用", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const mistakes = [
    {
      mistake: "把焦虑当锚点",
      desc: "因为害怕某个负面结果而设定规则，而非基于积极价值观",
      solution: "区分真正的教育原则和恐惧驱动的反应"
    },
    {
      mistake: "锚点过多过细",
      desc: "试图用规则控制一切细节，反而失去重点",
      solution: "抓大放小，核心锚点不超过5-7个"
    },
    {
      mistake: "只有要求没有支持",
      desc: "设定规则却不提供实现条件，导致频繁失败",
      solution: "每个锚点都配套具体的支持措施"
    },
    {
      mistake: "家庭成员各有一套",
      desc: "父母各定各的规则，孩子无所适从",
      solution: "父母先统一，再传递给孩子"
    }
  ];
  mistakes.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.7 + row * 1.85;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 0.45,
      fill: { color: theme.light }
    });
    slide.addText(m.mistake, {
      x: x + 0.1, y: y, w: 4.2, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, valign: "middle"
    });
    slide.addText("误区：" + m.desc, {
      x: x + 0.15, y: y + 0.5, w: 4.1, h: 0.55,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: y + 1.05, w: 4.1, h: 0.5,
      fill: { color: theme.bg }
    });
    slide.addText("建议：" + m.solution, {
      x: x + 0.25, y: y + 1.05, w: 3.9, h: 0.5,
      fontSize: 9, fontFace: "Microsoft YaHei", italic: true,
      color: theme.accent, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("47", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
