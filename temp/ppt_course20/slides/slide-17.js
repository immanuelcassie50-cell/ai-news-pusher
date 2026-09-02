const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("主动筛选者 vs 被动接收者", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const left = {
    title: "主动筛选者",
    color: theme.secondary,
    traits: [
      "明确自己的需求",
      "设定信息来源白名单",
      "定期清理无效关注",
      "有决策框架，不被牵着走",
      "内心平静，焦虑感低"
    ]
  };
  const right = {
    title: "被动接收者",
    color: theme.light,
    traits: [
      "被算法推送主导",
      "看到什么就看什么",
      "信息越积越多",
      "容易被他人的优先级带跑",
      "经常感到信息过载"
    ]
  };
  [left, right].forEach((side, i) => {
    const x = i === 0 ? 0.5 : 5.2;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 4.3, h: 3.5,
      fill: { color: "FFFFFF" },
      line: { color: side.color, width: 2 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 4.3, h: 0.6,
      fill: { color: side.color }
    });
    slide.addText(side.title, {
      x: x, y: 1.35, w: 4.3, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true,
      color: i === 0 ? "FFFFFF" : theme.primary, align: "center", valign: "middle"
    });
    side.traits.forEach((trait, j) => {
      slide.addText((i === 0 ? "✓ " : "○ ") + trait, {
        x: x + 0.2, y: 2.1 + j * 0.55, w: 4, h: 0.5,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
    });
  });
  slide.addText("目标：成为主动筛选者，掌握信息主动权", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("17", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
