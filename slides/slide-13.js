// slide-13.js - 心脏地带论图示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '心脏地带论图示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("心脏地带论：世界岛模型", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("13", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // World Island ellipse (center)
  slide.addShape("ellipse", {
    x: 2.0, y: 1.2, w: 6, h: 3.5,
    fill: { color: theme.light },
    line: { color: theme.secondary, width: 1.5 }
  });
  slide.addText("世界岛 World Island", {
    x: 2.0, y: 1.3, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Heartland inner circle
  slide.addShape("ellipse", {
    x: 3.5, y: 2.0, w: 3, h: 2.0,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 2 }
  });
  slide.addText("HEARTLAND", {
    x: 3.5, y: 2.6, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("心脏地带", {
    x: 3.5, y: 3.0, w: 3, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Inner Marginal Rim - labels
  slide.addText("内新月地带", {
    x: 0.8, y: 2.4, w: 2.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("Middle East\nIndia\nChina", {
    x: 0.8, y: 2.7, w: 2.5, h: 0.7,
    fontSize: 9, fontFace: "Arial",
    color: theme.secondary,
    align: "center", valign: "top"
  });

  slide.addText("内新月地带", {
    x: 6.7, y: 2.4, w: 2.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("Germany\nEastern Europe", {
    x: 6.7, y: 2.7, w: 2.5, h: 0.6,
    fontSize: 9, fontFace: "Arial",
    color: theme.secondary,
    align: "center", valign: "top"
  });

  // Outer Rim boxes - left
  slide.addShape("rect", {
    x: 0.3, y: 4.0, w: 2.0, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("英国\nBritain", {
    x: 0.3, y: 4.0, w: 2.0, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Outer Rim boxes - right
  slide.addShape("rect", {
    x: 7.7, y: 4.0, w: 2.0, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("美国\nAmerica", {
    x: 7.7, y: 4.0, w: 2.0, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Japan
  slide.addShape("rect", {
    x: 8.5, y: 1.4, w: 1.2, h: 0.7,
    fill: { color: theme.secondary }
  });
  slide.addText("日本", {
    x: 8.5, y: 1.4, w: 1.2, h: 0.7,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Arrows for sea power penetration (dashed lines represented)
  slide.addText("～", {
    x: 1.5, y: 3.5, w: 0.8, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent,
    align: "center", valign: "middle"
  });
  slide.addText("～", {
    x: 7.7, y: 3.5, w: 0.8, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Legend
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText([
    { text: "■ ", options: { color: theme.primary } },
    { text: "心脏地带（陆权核心）   ", options: { color: theme.secondary } },
    { text: "■ ", options: { color: theme.accent } },
    { text: "外新月地带（海权代表）   ", options: { color: theme.secondary } },
    { text: "～～", options: { color: theme.accent } },
    { text: "海洋渗透受阻", options: { color: theme.secondary } }
  ], {
    x: 0.6, y: 5.0, w: 8.8, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    align: "left", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
