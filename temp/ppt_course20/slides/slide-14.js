const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("每类来源的典型特征与可信度", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 0.45,
    fill: { color: theme.secondary }
  });
  const headers = ["信息来源", "典型特征", "可信度指标", "建议策略"];
  headers.forEach((h, i) => {
    const widths = [2, 3, 1.5, 2.5];
    let xPos = 0.5;
    for (let j = 0; j < i; j++) xPos += widths[j];
    slide.addText(h, {
      x: xPos, y: 1.25, w: widths[i], h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
  });
  const rows = [
    { source: "育儿博主", features: "个人经验、故事化", credibility: "视资质而定", strategy: "参考而非奉行" },
    { source: "权威专家", features: "有数据支持", credibility: "高但需核实", strategy: "优先查阅" },
    { source: "商业品牌", features: "夸大效果", credibility: "利益相关", strategy: "保持警惕" },
    { source: "学术论文", features: "方法严谨", credibility: "最高", strategy: "深度学习" }
  ];
  rows.forEach((row, i) => {
    const y = 1.7 + i * 0.75;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.7,
      fill: { color: bgColor },
      line: { color: theme.secondary, width: 0.5 }
    });
    const widths = [2, 3, 1.5, 2.5];
    const values = [row.source, row.features, row.credibility, row.strategy];
    let xPos = 0.5;
    for (let j = 0; j < 4; j++) {
      slide.addText(values[j], {
        x: xPos, y: y, w: widths[j], h: 0.7,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: j === 3 ? theme.secondary : theme.primary,
        align: "center", valign: "middle"
      });
      xPos += widths[j];
    }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("14", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
