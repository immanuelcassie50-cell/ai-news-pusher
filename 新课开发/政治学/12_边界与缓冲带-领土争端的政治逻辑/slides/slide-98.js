// slide-98.js - 案例：克里米亚公投的争议
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.accent }
  });

  // Header
  slide.addText("案例：克里米亚公投的争议", {
    x: 0.5, y: 0.25, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Timeline section
  slide.addText("时间线", {
    x: 0.5, y: 0.95, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Timeline line
  slide.addShape(pres.shapes.LINE, {
    x: 0.8, y: 1.65, w: 8.4, h: 0,
    line: { color: theme.secondary, width: 2 }
  });

  // Timeline events
  const events = [
    { date: "2014.2", event: "亚努科维奇下台" },
    { date: "2014.3", event: "俄军进驻克里米亚" },
    { date: "2014.3.16", event: "公投举行" },
    { date: "2014.3.18", event: "俄宣布合并" }
  ];

  events.forEach((ev, i) => {
    const x = 1.0 + i * 2.3;

    // Timeline dot
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.3, y: 1.5, w: 0.3, h: 0.3,
      fill: { color: i === 2 ? theme.accent : theme.primary }
    });

    // Date
    slide.addText(ev.date, {
      x: x - 0.1, y: 1.85, w: 1.1, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.secondary, align: "center"
    });

    // Event
    slide.addText(ev.event, {
      x: x - 0.2, y: 2.1, w: 1.3, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center"
    });
  });

  // Two column comparison - international reactions
  // Left - Support Russia
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 4.3, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 4.3, h: 0.45,
    fill: { color: theme.primary }
  });

  slide.addText("支持俄罗斯立场", {
    x: 0.6, y: 2.8, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  const supportItems = [
    "公投符合国际法程序",
    "保护克里米亚俄语居民",
    "历史正义：1954年前属于俄罗斯",
    "科索沃先例可作为依据"
  ];

  supportItems.forEach((item, i) => {
    slide.addText("• " + item, {
      x: 0.7, y: 3.3 + i * 0.35, w: 3.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Right - Support Ukraine
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.75, w: 4.3, h: 2.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.75, w: 4.3, h: 0.45,
    fill: { color: theme.accent }
  });

  slide.addText("支持乌克兰立场", {
    x: 5.3, y: 2.8, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  const opposeItems = [
    "违反乌克兰宪法和领土完整",
    "公投在军事占领下进行",
    "联合国大会决议：公投无效",
    "科索沃情况与克里米亚不同"
  ];

  opposeItems.forEach((item, i) => {
    slide.addText("• " + item, {
      x: 5.4, y: 3.3 + i * 0.35, w: 3.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Bottom key insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.55,
    fill: { color: theme.secondary, transparency: 80 }
  });

  slide.addText("关键启示：相同的法律原则（民族自决vs领土完整）可以被对立的双方引用", {
    x: 0.6, y: 4.98, w: 8.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("98", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "c9ada7",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: './slide-98-preview.pptx' });
}

module.exports = { createSlide };
