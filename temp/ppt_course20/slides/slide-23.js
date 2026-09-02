const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("第一层：事实层 — 数据核实", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fill: { color: theme.secondary, transparency: 30 }
  });
  slide.addText("核心问题：信息本身是真的吗？", {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary, align: "center", valign: "middle"
  });
  const checks = [
    { q: "数字有来源吗？", tip: "查看是否注明了调查机构、样本量、发布时间" },
    { q: "样本量足够吗？", tip: "小样本结论需谨慎，通常N>100才有统计意义" },
    { q: "是相关性还是因果性？", tip: "\"喝咖啡的人更长寿\"可能是混淆变量" },
    { q: "数据是否被断章取义？", tip: "原研究结论可能被夸大或歪曲" }
  ];
  checks.forEach((check, i) => {
    const y = 1.85 + i * 0.88;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(check.q, {
      x: 1.05, y: y, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, valign: "middle"
    });
    slide.addText(check.tip, {
      x: 1.05, y: y + 0.38, w: 8.4, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("23", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
