const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("三层框架的实际应用", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("案例：要不要送孩子去感统训练？", {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", italic: true,
    color: theme.secondary, align: "center"
  });
  const caseStudy = [
    { layer: "第一层", title: "事实层", content: "查阅研究文献：感统训练对正常儿童效果不显著；对感觉处理障碍儿童有改善作用。", pass: "通过" },
    { layer: "第二层", title: "来源层", content: "信息来源：某感统训练机构 vs. 权威医疗机构。研究显示该机构存在夸大宣传。", pass: "存疑" },
    { layer: "第三层", title: "价值层", content: "孩子没有明显感觉处理问题；每周两节课会增加孩子负担；全家对培训班已有抵触。", pass: "不通过" }
  ];
  caseStudy.forEach((c, i) => {
    const y = 1.7 + i * 1.2;
    const passColor = c.pass === "通过" ? theme.secondary : c.pass === "存疑" ? theme.accent : theme.light;
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 8.5, h: 1.0,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 1.2, h: 1.0,
      fill: { color: theme.secondary }
    });
    slide.addText(c.layer, {
      x: 0.5, y: y, w: 1.2, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "bottom"
    });
    slide.addText(c.title, {
      x: 0.5, y: y + 0.5, w: 1.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "top"
    });
    slide.addText(c.content, {
      x: 1.85, y: y, w: 6.4, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 8.4, y: y + 0.3, w: 0.5, h: 0.4,
      fill: { color: passColor }
    });
    slide.addText(c.pass, {
      x: 8.4, y: y + 0.3, w: 0.5, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
  });
  slide.addText("结论：不需要送孩子去感统训练", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center"
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("26", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
