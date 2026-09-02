const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("当代自由市场思想的分野", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("54", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Spectrum diagram
  slide.addText("当代自由市场思想流派", {
    x: 0.5, y: 1.15, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  // Spectrum bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.75, w: 9, h: 0.25,
    fill: { color: theme.light }
  });

  const schools = [
    { name: "古典自由主义", pos: 0.15, color: theme.secondary, thinkers: "斯密、哈耶克" },
    { name: "新古典经济学", pos: 0.4, color: theme.primary, thinkers: "弗里德曼、贝克尔" },
    { name: "新制度经济学", pos: 0.65, color: theme.accent, thinkers: "科斯、诺斯" },
    { name: "干预主义", pos: 0.9, color: theme.light, thinkers: "凯恩斯、克鲁格曼" }
  ];

  schools.forEach((school) => {
    const x = school.pos * 9 + 0.2;
    slide.addShape(pres.shapes.OVAL, {
      x: x - 0.15, y: 1.7, w: 0.35, h: 0.35,
      fill: { color: school.color }
    });
    slide.addText(school.name, {
      x: x - 0.7, y: 2.1, w: 1.4, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei", color: school.color,
      bold: true, align: "center"
    });
    slide.addText(school.thinkers, {
      x: x - 0.7, y: 2.45, w: 1.4, h: 0.35,
      fontSize: 9, fontFace: "Calibri", color: theme.secondary,
      align: "center"
    });
  });

  // Key distinctions table
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.0, w: 9, h: 0.05,
    fill: { color: theme.light }
  });

  slide.addText("对政府角色的不同主张", {
    x: 0.5, y: 3.2, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  const distinctions = [
    { dimension: "政府边界",古典: "守夜人：国防、司法、治安",现代: "积极干预：财政、货币、产业政策" },
    { dimension: "市场假设",古典: "信息完全、自发秩序",现代: "信息不对称、需要信号机制" },
    { dimension: "制度观点",古典: "自然演化",现代: "设计+演化混合" }
  ];

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.65, w: 9, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("维度", {
    x: 0.5, y: 3.65, w: 1.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });
  slide.addText("古典/奥地利学派", {
    x: 2.3, y: 3.65, w: 3.35, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });
  slide.addText("现代主流/凯恩斯", {
    x: 5.65, y: 3.65, w: 3.85, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  distinctions.forEach((row, i) => {
    const y = 4.05 + i * 0.45;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.45,
      fill: { color: i % 2 === 0 ? "FFFFFF" : theme.bg },
      line: { color: theme.light, width: 0.5 }
    });
    slide.addText(row.dimension, {
      x: 0.6, y: y, w: 1.6, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary,
      bold: true, valign: "middle"
    });
    slide.addText(row.古典, {
      x: 2.3, y: y, w: 3.35, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary,
      valign: "middle", align: "center"
    });
    slide.addText(row.现代, {
      x: 5.65, y: y, w: 3.85, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary,
      valign: "middle", align: "center"
    });
  });

  return slide;
}

module.exports = { createSlide };
