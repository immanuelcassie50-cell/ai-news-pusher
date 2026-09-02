const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("家庭内部的决策共识", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("育儿决策需要全家参与", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const points = [
    { title: "共同确定核心价值观", desc: "在信息筛选前，先对齐家庭的育儿核心价值" },
    { title: "分工明确", desc: "谁负责信息收集？谁做最终决定？谁执行？" },
    { title: "定期复盘", desc: "每月回顾决策效果，及时调整" },
    { title: "避免育儿观念冲突", desc: "分歧时回到\"三层框架\"理性讨论" }
  ];
  points.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.7 + row * 1.7;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.5,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.1, h: 1.5,
      fill: { color: theme.accent }
    });
    slide.addText(p.title, {
      x: x + 0.25, y: y + 0.15, w: 4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(p.desc, {
      x: x + 0.25, y: y + 0.7, w: 4, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("31", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
