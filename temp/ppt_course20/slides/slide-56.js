const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("遇到旧习惯反弹怎么办？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 4.3, h: 1.4,
    fill: { color: theme.light, transparency: 30 }
  });
  slide.addText("为什么会反弹？", {
    x: 0.7, y: 1.45, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  slide.addText([
    { text: "大脑喜欢节能", options: { breakLine: true } },
    { text: "环境暗示依然存在", options: { breakLine: true } },
    { text: "压力或疲劳降低自控力", options: {} }
  ], {
    x: 0.7, y: 1.85, w: 3.9, h: 0.85,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.35, w: 4.3, h: 1.4,
    fill: { color: theme.secondary, transparency: 30 }
  });
  slide.addText("反弹是正常的", {
    x: 5.4, y: 1.45, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary
  });
  slide.addText([
    { text: "研究表明平均需要3-4次尝试", options: { breakLine: true } },
    { text: "不要因为一次失败就放弃", options: { breakLine: true } },
    { text: "关键是每次都重新开始", options: {} }
  ], {
    x: 5.4, y: 1.85, w: 3.9, h: 0.85,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  const strategies = [
    { title: "接纳而非自责", desc: "自我同情比自我批评更有效" },
    { title: "分析触发因素", desc: "记录反弹时的情境和情绪" },
    { title: "调整环境设计", desc: "减少接触旧习惯的触发线索" },
    { title: "从小重新开始", desc: "不要试图一下子回到巅峰状态" }
  ];
  strategies.forEach((s, i) => {
    const y = 3.0 + i * 0.6;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText((i + 1).toString(), {
      x: 0.5, y: y, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: 1.0, y: y, w: 2.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(s.desc, {
      x: 3.5, y: y, w: 5.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("56", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
