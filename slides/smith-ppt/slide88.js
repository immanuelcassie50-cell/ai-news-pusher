const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("延伸学习", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("中国学者对斯密的研究", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Scholars section
  slide.addText("代表学者", {
    x: 0.5, y: 1.85, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const scholars = [
    { name: "严复", contribution: "首位系统译介斯密著作的中国学者" },
    { name: "陈寅恪", contribution: "从思想史角度研究斯密" },
    { name: "汤在新", contribution: "《近代上海 extracredit研究斯密对中国的影响" },
    { name: "韦森", contribution: "当代斯密思想与制度变迁研究" }
  ];

  scholars.forEach((s, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 2.3 + Math.floor(i / 2) * 0.7;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 0.6,
      fill: { color: i % 2 === 0 ? theme.secondary : theme.light }
    });
    slide.addText(s.name, {
      x: x + 0.1, y: y + 0.1, w: 1.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });
    slide.addText(s.contribution, {
      x: x + 1.3, y: y + 0.1, w: 3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF"
    });
  });

  // Research topics
  slide.addText("研究热点", {
    x: 0.5, y: 3.85, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const topics = [
    "斯密思想与儒学传统的比较研究",
    "中国市场经济改革中的斯密思想资源",
    "斯密的国家理论与中国治理现代化",
    "近代中国对斯密理论的接受与变形"
  ];

  topics.forEach((topic, i) => {
    slide.addText("• " + topic, {
      x: 0.5 + (i % 2) * 4.7, y: 4.3 + Math.floor(i / 2) * 0.4, w: 4.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("88", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
