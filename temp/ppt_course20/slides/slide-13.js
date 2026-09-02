const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("育儿信息的四大来源", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const sources = [
    {
      title: "1. 社交传播",
      desc: "朋友圈转发、家族群科普文章",
      trait: "情感化、标题党多",
     可信度: "★★☆"
    },
    {
      title: "2. 专家意见",
      desc: "医生、教育家、心理咨询师",
      trait: "专业但可能脱离实际",
     可信度: "★★★"
    },
    {
      title: "3. 商业营销",
      desc: "品牌软文、机构推广",
      trait: "目标明确：让你付费",
     可信度: "★☆☆"
    },
    {
      title: "4. 学术研究",
      desc: "论文、期刊、机构报告",
      trait: "严谨但难读、结论有限",
     可信度: "★★★"
    }
  ];
  sources.forEach((src, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.35 + row * 2.0;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addText(src.title, {
      x: x + 0.2, y: y + 0.1, w: 3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(src.desc, {
      x: x + 0.2, y: y + 0.5, w: 3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(src.trait, {
      x: x + 0.2, y: y + 0.9, w: 3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei", italic: true,
      color: theme.light
    });
    slide.addText(src.可信度, {
      x: x + 3.3, y: y + 0.1, w: 1, h: 0.4,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: theme.accent
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("13", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
