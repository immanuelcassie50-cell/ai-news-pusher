const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程回顾", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("全景图", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Five modules overview
  const modules = [
    { num: "一", title: "导论", desc: "斯密生平与时代背景", color: theme.primary },
    { num: "二", title: "人性论", desc: "道德情感与同情心", color: theme.secondary },
    { num: "三", title: "市场论", desc: "看不见的手与价格机制", color: theme.accent },
    { num: "四", title: "国家论", desc: "政府职能与公共工程", color: theme.light },
    { num: "五", title: "讨论与练习", desc: "互动思考与知识巩固", color: theme.primary }
  ];

  modules.forEach((m, i) => {
    const x = 0.5 + i * 1.9;
    // Module box
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.0, w: 1.7, h: 2.8,
      fill: { color: m.color }
    });
    // Module number
    slide.addText("模块" + m.num, {
      x: x, y: 2.1, w: 1.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });
    // Module title
    slide.addText(m.title, {
      x: x, y: 2.6, w: 1.7, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", bold: true
    });
    // Description - rotated text not supported, so vertical layout
    slide.addText(m.desc, {
      x: x + 0.1, y: 3.2, w: 1.5, h: 1.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });
  });

  // Bottom summary
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("核心主线：人性 → 市场 → 社会制度 → 现代反思", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("81", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
