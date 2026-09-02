const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addText("模块内容详情", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center"
  });
  const sections = [
    { title: "模块1：重新认识育儿信息", items: ["育儿信息的四大来源", "发布者vs传播者", "信息接收者类型"] },
    { title: "模块2：信息过载的心理机制", items: ["认知负荷理论", "决策疲劳", "确认偏误"] },
    { title: "模块3：三层筛选框架", items: ["事实层：数据核实", "来源层：可信度评估", "价值层：家庭适配"] }
  ];
  sections.forEach((sec, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.3, w: 2.9, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText(sec.title, {
      x: x, y: 1.3, w: 2.9, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.8, w: 2.9, h: 2.4,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    sec.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.15, y: 2.0 + j * 0.7, w: 2.6, h: 0.6,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
