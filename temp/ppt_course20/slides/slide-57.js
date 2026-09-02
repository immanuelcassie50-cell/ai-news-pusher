const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("家庭协作：让家人也参与进来", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const roles = [
    {
      title: "父母以身作则",
      items: ["孩子通过观察学习", "一起参与比单独要求更有效", "建立家庭统一的习惯清单"],
      color: theme.secondary
    },
    {
      title: "让爸爸也参与",
      items: ["避免妈妈独自承担压力", "分工合作互相支持", "男性育儿视角的补充"],
      color: theme.accent
    },
    {
      title: "孩子参与决策",
      items: ["给予适当的选择权", "尊重孩子的节奏", "培养内在动机而非外部压力"],
      color: theme.light
    }
  ];
  roles.forEach((r, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 2.9, h: 2.6,
      fill: { color: r.color, transparency: 25 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: 2.9, h: 0.5,
      fill: { color: r.color }
    });
    slide.addText(r.title, {
      x: x, y: 1.35, w: 2.9, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    r.items.forEach((item, j) => {
      slide.addText("•  " + item, {
        x: x + 0.15, y: 1.95 + j * 0.6, w: 2.6, h: 0.55,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.15, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 10 }
  });
  slide.addText("家庭协作的核心：统一目标、分工合作、彼此支持，而不是互相指责", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary, valign: "middle"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("57", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
