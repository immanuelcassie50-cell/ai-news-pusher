const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addText("课程全景图", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center"
  });
  slide.addText("7个模块", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  const modules = [
    { num: "01", title: "重新认识育儿信息", desc: "信息的来源与本质" },
    { num: "02", title: "信息过载的心理机制", desc: "焦虑与决策疲劳" },
    { num: "03", title: "三层筛选框架", desc: "核心方法论" },
    { num: "04", title: "证据评估技巧", desc: "如何辨别真伪" },
    { num: "05", title: "决策简化策略", desc: "化繁为简" },
    { num: "06", title: "家庭共识建立", desc: "全家达成一致" },
    { num: "07", title: "持续更新机制", desc: "与时俱进" }
  ];
  modules.forEach((mod, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.8 + col * 4.5;
    const y = 1.8 + row * 0.85;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.6, h: 0.6,
      fill: { color: theme.secondary }
    });
    slide.addText(mod.num, {
      x: x, y: y, w: 0.6, h: 0.6,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(mod.title, {
      x: x + 0.7, y: y, w: 3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(mod.desc, {
      x: x + 0.7, y: y + 0.32, w: 3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 5.0, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("2", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
