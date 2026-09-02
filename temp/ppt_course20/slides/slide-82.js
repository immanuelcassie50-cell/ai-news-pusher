const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("课程知识地图", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // 7 modules in a visual map
  const modules = [
    { num: "M1", title: "信息环境", desc: "信息过载的现状与挑战", color: theme.primary },
    { num: "M2", title: "焦虑根源", desc: "育儿焦虑的深层原因", color: theme.secondary },
    { num: "M3", title: "筛选技术", desc: "四层信息分类法", color: theme.accent },
    { num: "M4", title: "决策框架", desc: "三个锚点框架", color: theme.light },
    { num: "M5", title: "沟通策略", desc: "家庭协作与共识", color: theme.secondary },
    { num: "M6", title: "管理系统", desc: "四个组件构建系统", color: theme.accent },
    { num: "M7", title: "行动规划", desc: "总结与30天计划", color: theme.primary }
  ];

  modules.forEach((mod, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const x = 0.5 + col * 2.4;
    const y = 1.35 + row * 2.1;

    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: y, w: 2.2, h: 1.8,
      fill: { color: theme.bg },
      line: { color: mod.color, width: 2 },
      rectRadius: 0.1
    });
    // Module number
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.8, y: y + 0.15, w: 0.6, h: 0.5,
      fill: { color: mod.color }
    });
    slide.addText(mod.num, {
      x: x + 0.8, y: y + 0.15, w: 0.6, h: 0.5,
      fontSize: 12, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Title
    slide.addText(mod.title, {
      x: x + 0.1, y: y + 0.75, w: 2.0, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary, align: "center"
    });
    // Description
    slide.addText(mod.desc, {
      x: x + 0.1, y: y + 1.15, w: 2.0, h: 0.5,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Connecting lines (simplified)
  slide.addShape(pres.ShapeType.line, { x: 2.7, y: 2.25, w: 0.5, h: 0, line: { color: theme.light, width: 1, dashType: "dash" } });
  slide.addShape(pres.ShapeType.line, { x: 5.1, y: 2.25, w: 0.5, h: 0, line: { color: theme.light, width: 1, dashType: "dash" } });
  slide.addShape(pres.ShapeType.line, { x: 7.5, y: 2.25, w: 0.5, h: 0, line: { color: theme.light, width: 1, dashType: "dash" } });
  slide.addShape(pres.ShapeType.line, { x: 2.5, y: 3.45, w: 0.3, h: 0, line: { color: theme.light, width: 1, dashType: "dash" } });
  slide.addShape(pres.ShapeType.line, { x: 4.9, y: 3.45, w: 0.3, h: 0, line: { color: theme.light, width: 1, dashType: "dash" } });
  slide.addShape(pres.ShapeType.line, { x: 7.3, y: 3.45, w: 0.3, h: 0, line: { color: theme.light, width: 1, dashType: "dash" } });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("82", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
