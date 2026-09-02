const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("核心锚点的筛选标准", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("什么是真正重要的原则？", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const criteria = [
    {
      title: "与价值观一致",
      desc: "锚点必须反映家庭核心价值观，不是临时应对问题的权宜之计"
    },
    {
      title: "长期稳定性",
      desc: "至少在3-5年内不会因为外界变化而轻易动摇"
    },
    {
      title: "具体可执行",
      desc: "能够转化为明确的行动指南，而非模糊的理念口号"
    },
    {
      title: "全家认可",
      desc: "经过充分讨论，获得主要家庭成员的理解和认同"
    }
  ];
  criteria.forEach((c, i) => {
    const y = 1.7 + i * 0.9;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.08, h: 0.75,
      fill: { color: theme.accent }
    });
    slide.addText(c.title, {
      x: 0.75, y: y + 0.08, w: 2.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(c.desc, {
      x: 0.75, y: y + 0.38, w: 8.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("41", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
