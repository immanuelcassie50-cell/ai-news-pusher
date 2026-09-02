const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("芝加哥学派的方法论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Four methodological principles
  slide.addText("四大方法论原则", {
    x: 0.5, y: 1.05, w: 9, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary, bold: true
  });

  const methods = [
    {
      num: "1",
      title: "实证主义",
      desc: "经济学应像自然科学一样，用可检验的假说评价，而非规范判断",
      quote: "\"我们是什么\"而非\"我们应该是什么\""
    },
    {
      num: "2",
      title: "边际分析",
      desc: "所有决策都在边际上进行，分析增量变化而非总量",
      quote: "MV=PY 揭示货币边际效应"
    },
    {
      num: "3",
      title: "个人主义",
      desc: "从个体行为出发解释宏观经济现象，拒绝整体分析",
      quote: "宏观现象的微观基础"
    },
    {
      num: "4",
      title: "机会成本",
      desc: "每种选择都有成本，比较所有可选方案的代价",
      quote: "没有免费的午餐"
    }
  ];

  methods.forEach((m, i) => {
    const y = 1.5 + i * 0.82;
    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(m.num, {
      x: 0.5, y: y, w: 0.45, h: 0.45,
      fontFace: "Georgia", fontSize: 16, color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content
    slide.addText(m.title, {
      x: 1.1, y: y, w: 2, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 13, color: theme.primary, bold: true
    });
    slide.addText(m.desc, {
      x: 1.1, y: y + 0.32, w: 5.5, h: 0.45,
      fontFace: "Microsoft YaHei", fontSize: 10, color: theme.secondary
    });

    // Quote
    slide.addShape(pres.ShapeType.rect, {
      x: 6.8, y: y, w: 2.7, h: 0.75,
      fill: { color: theme.light, transparency: 70 }
    });
    slide.addText(m.quote, {
      x: 6.9, y: y + 0.05, w: 2.5, h: 0.65,
      fontFace: "Microsoft YaHei", fontSize: 9, color: theme.secondary,
      italic: true, valign: "middle"
    });
  });

  // Connection to Smith
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fill: { color: theme.secondary }
  });
  slide.addText("斯密的方法论遗产：归纳与演绎结合，从具体观察上升到一般理论", {
    x: 0.6, y: 4.95, w: 8.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("43", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
