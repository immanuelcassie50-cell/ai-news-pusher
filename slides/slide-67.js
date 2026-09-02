// slide-67.js - 思想史坐标系：横向与纵向
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 67,
  title: '思想史坐标系：横向与纵向'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("思想史坐标系：横向与纵向", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Coordinate system visual
  // Y-axis label
  slide.addText("纵向：时间演变", {
    x: 0.3, y: 2.5, w: 0.4, h: 1.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle",
    rotate: 270
  });

  // X-axis label
  slide.addText("横向：思想流派", {
    x: 3.5, y: 4.85, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Vertical timeline (left side)
  const timePeriods = [
    { period: "18世纪斯密", y: 1.5 },
    { period: "19世纪边际革命", y: 2.4 },
    { period: "20世纪综合与分化", y: 3.3 },
    { period: "21世纪新发展", y: 4.2 }
  ];

  // Timeline line
  slide.addShape("rect", {
    x: 1.2, y: 1.5, w: 0.03, h: 3.1,
    fill: { color: theme.light }
  });

  timePeriods.forEach((tp, idx) => {
    // Timeline dot
    slide.addShape("ellipse", {
      x: 1.05, y: tp.y + 0.15, w: 0.3, h: 0.3,
      fill: { color: idx === 0 ? theme.primary : theme.light }
    });

    // Period text
    slide.addText(tp.period, {
      x: 1.5, y: tp.y, w: 2.5, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: idx === 0,
      align: "left", valign: "middle"
    });
  });

  // Horizontal spectrum (right side)
  // Austrian <-> Chicago
  slide.addShape("rect", {
    x: 4.5, y: 1.5, w: 5, h: 0.06,
    fill: { color: theme.light }
  });

  // Austrian marker
  slide.addShape("ellipse", {
    x: 4.5, y: 1.6, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("奥地利学派", {
    x: 4.2, y: 2.05, w: 1.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "top"
  });
  slide.addText("方法论个人主义", {
    x: 4.0, y: 2.4, w: 1.6, h: 0.4,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "top"
  });

  // Chicago marker
  slide.addShape("ellipse", {
    x: 9.1, y: 1.6, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("芝加哥学派", {
    x: 8.6, y: 2.05, w: 1.2, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "top"
  });
  slide.addText("制度分析", {
    x: 8.5, y: 2.4, w: 1.4, h: 0.4,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "top"
  });

  // Arrows showing spectrum
  slide.addText("←─────────────────────────────→", {
    x: 4.5, y: 1.55, w: 5, h: 0.3,
    fontSize: 9, fontFace: "Arial",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Connecting lines from time periods to spectrum
  const connectingPoints = [1.65, 2.55, 3.45, 4.35];
  connectingPoints.forEach((y, idx) => {
    slide.addShape(pres.shapes.LINE, {
      x: 4.0, y: y, w: 0.5, h: 0,
      line: { color: theme.light, width: 1, dashType: "dash" }
    });
  });

  // Cross intersection annotation
  slide.addShape("rect", {
    x: 5.5, y: 3.0, w: 3, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addText("坐标系的价值", {
    x: 5.5, y: 3.1, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("理解一个思想家的位置：\n他在哪个时代？\n他属于哪个流派？", {
    x: 5.6, y: 3.5, w: 2.8, h: 0.9,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("67", {
    x: 9.0, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Georgia",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-67-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
