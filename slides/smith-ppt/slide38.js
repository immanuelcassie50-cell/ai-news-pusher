const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header with accent stripe
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0.85, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("贝克尔：人力资本论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 28, color: "FFFFFF", bold: true
  });

  // Portrait placeholder
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 2.3, h: 2.6,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 1 }
  });
  slide.addText("Gary\nBecker\n1930-2014", {
    x: 0.5, y: 1.7, w: 2.3, h: 1.6,
    fontFace: "Georgia", fontSize: 14, color: theme.secondary,
    align: "center", valign: "middle", italic: true
  });

  // Key facts
  slide.addText("生平要点", {
    x: 3.1, y: 1.15, w: 6.4, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary, bold: true
  });

  const facts = [
    "1992年诺贝尔经济学奖",
    "将经济学方法拓展到非市场领域先驱",
    "芝加哥学派核心成员",
    "《人力资本》(1964) 开创性著作",
    "把教育、犯罪、婚姻都纳入经济分析"
  ];

  facts.forEach((fact, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: 3.1, y: 1.58 + i * 0.38, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });
    slide.addText(fact, {
      x: 3.35, y: 1.5 + i * 0.38, w: 6.15, h: 0.36,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.secondary
    });
  });

  // Human capital definition
  slide.addShape(pres.ShapeType.rect, {
    x: 3.1, y: 3.55, w: 6.4, h: 0.8,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("人力资本：体现在人身上的技能、知识、健康等质量因素", {
    x: 3.2, y: 3.65, w: 6.2, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 13, color: theme.secondary,
    valign: "middle"
  });

  // Core contributions
  slide.addText("核心贡献", {
    x: 0.5, y: 4.5, w: 9, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary, bold: true
  });

  const contributions = [
    { title: "教育投资回报", desc: "用收入数据衡量教育经济价值" },
    { title: "在职培训", desc: "企业承担培训成本的逻辑" },
    { title: "时间价值", desc: "把时间视为稀缺资源" }
  ];

  contributions.forEach((c, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 4.85, w: 2.95, h: 0.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addText(c.title, {
      x: x + 0.1, y: 4.88, w: 2.75, h: 0.3,
      fontFace: "Microsoft YaHei", fontSize: 11, color: theme.accent, bold: true
    });
    slide.addText(c.desc, {
      x: x + 0.1, y: 5.18, w: 2.75, h: 0.35,
      fontFace: "Microsoft YaHei", fontSize: 9, color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("38", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontFace: "Calibri", fontSize: 11, color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
