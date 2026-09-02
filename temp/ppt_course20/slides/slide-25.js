const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("第三层：价值层 — 家庭适配", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 30 }
  });
  slide.addText("核心问题：这个选择适合我的家庭吗？", {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.light, align: "center", valign: "middle"
  });
  const questions = [
    { q: "与我的育儿理念一致吗？", example: "快乐教育 vs. 精英教育" },
    { q: "我的孩子当前阶段需要吗？", example: "敏感期、发育水平、兴趣倾向" },
    { q: "家庭资源能支持吗？", example: "时间、金钱、精力" },
    { q: "全家人都认可吗？", example: "需要家人配合执行" }
  ];
  questions.forEach((item, i) => {
    const y = 1.85 + i * 0.85;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(item.q, {
      x: 1.05, y: y, w: 5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, valign: "middle"
    });
    slide.addText("例：" + item.example, {
      x: 1.05, y: y + 0.38, w: 8.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei", italic: true,
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("25", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
