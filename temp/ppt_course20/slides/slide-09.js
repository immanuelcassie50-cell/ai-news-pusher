const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("真实案例：三位妈妈的经历", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const cases = [
    {
      name: "小雨妈妈",
      issue: "选择困难",
      story: "为了给孩子选幼儿园，调研了全市30多所幼儿园，纠结了半年仍无法决定",
      quote: "\"每个都有优点，我真的选不出来...\""
    },
    {
      name: "Coco妈妈",
      issue: "知识焦虑",
      story: "关注了50多个育儿公众号，收藏了上百篇文章，却越来越觉得自己不懂育儿",
      quote: "\"为什么看了这么多，还是不知道怎么做？\""
    },
    {
      name: "丸子妈妈",
      issue: "比较焦虑",
      story: "看到牛娃视频就焦虑，给孩子报了8个培训班，亲子关系变得紧张",
      quote: "\"我不想让娃输在起跑线上...\""
    }
  ];
  cases.forEach((c, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.3, w: 2.9, h: 3.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 1.05, y: 1.5, w: 0.8, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(c.name.charAt(0), {
      x: x + 1.05, y: 1.5, w: 0.8, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(c.name, {
      x: x, y: 2.4, w: 2.9, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.8, y: 2.85, w: 1.3, h: 0.35,
      fill: { color: theme.light }
    });
    slide.addText(c.issue, {
      x: x + 0.8, y: 2.85, w: 1.3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(c.story, {
      x: x + 0.15, y: 3.35, w: 2.6, h: 1.0,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(c.quote, {
      x: x + 0.15, y: 4.4, w: 2.6, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei", italic: true,
      color: theme.accent
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("9", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
