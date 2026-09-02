const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("警惕：常见的信息陷阱", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const traps = [
    { name: "幸存者偏差", example: "只看到成功案例，忽视大量失败案例", warning: "\"我邻居的孩子就这样教的，挺好的\"" },
    { name: "专家头衔滥用", example: "非相关领域专家的背书", warning: "\"XX明星推荐\"、\"哈佛教授说\"" },
    { name: "恐惧营销", example: "制造焦虑来吸引关注", warning: "\"不看就会害了孩子\"" },
    { name: "伪科学包装", example: "把常识重新包装成\"科学发现\"", warning: "\"最新研究证明...\"" }
  ];
  traps.forEach((trap, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.3 + row * 2.0;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 2 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 0.5,
      fill: { color: theme.light }
    });
    slide.addText(trap.name, {
      x: x, y: y, w: 4.4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(trap.example, {
      x: x + 0.15, y: y + 0.6, w: 4.1, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(trap.warning, {
      x: x + 0.15, y: y + 1.1, w: 4.1, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei", italic: true,
      color: theme.accent
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("29", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
