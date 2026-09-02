// slide-93.js - 历史协议的现代诠释
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("历史协议的现代诠释", {
    x: 0.5, y: 0.2, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Timeline section
  const timelineY = 1.8;
  slide.addText("历史条约的诠释演变", {
    x: 0.5, y: 1.1, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Timeline line
  slide.addShape(pres.shapes.LINE, {
    x: 0.8, y: timelineY + 0.6, w: 8.4, h: 0,
    line: { color: theme.secondary, width: 2 }
  });

  // Timeline points
  const timePoints = [
    { year: "签署时", interpretation: "原始意图", color: theme.primary },
    { year: "数十年后", interpretation: "情境变化", color: theme.secondary },
    { year: "当代", interpretation: "现代适用", color: theme.accent }
  ];

  timePoints.forEach((point, i) => {
    const x = 1.5 + i * 3.0;

    // Timeline dot
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.7, y: timelineY + 0.4, w: 0.4, h: 0.4,
      fill: { color: point.color }
    });

    // Year label
    slide.addText(point.year, {
      x: x, y: timelineY + 0.9, w: 1.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });

    // Interpretation
    slide.addText(point.interpretation, {
      x: x, y: timelineY + 1.2, w: 1.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
  });

  // Arrow indicating evolution
  slide.addText("→", {
    x: 4.5, y: timelineY + 0.35, w: 1, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center"
  });

  // Examples section
  slide.addText("典型案例", {
    x: 0.5, y: 3.3, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Example cards
  const examples = [
    {
      treaty: "威斯特伐利亚和约 (1648)",
      modern: "民族国家原则的起源 vs 现代主权概念"
    },
    {
      treaty: "凡尔赛条约 (1919)",
      modern: "战后秩序 vs 殖民地独立运动"
    },
    {
      treaty: "联合国海洋法公约",
      modern: "领海定义 vs 南海岛礁建设争议"
    }
  ];

  examples.forEach((ex, i) => {
    const x = 0.4 + i * 3.15;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.8, w: 3.0, h: 1.5,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 0.5 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.8, w: 0.08, h: 1.5,
      fill: { color: theme.accent }
    });

    // Treaty name
    slide.addText(ex.treaty, {
      x: x + 0.2, y: 3.9, w: 2.6, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Modern interpretation
    slide.addText(ex.modern, {
      x: x + 0.2, y: 4.35, w: 2.6, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("93", {
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
  pres.writeFile({ fileName: './slide-93-preview.pptx' });
}

module.exports = { createSlide };
