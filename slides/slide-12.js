// slide-12.js - 心脏地带论核心观点
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '心脏地带论'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("心脏地带论核心观点", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("12", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Three regions diagram
  // Heartland box
  slide.addShape("rect", {
    x: 3.5, y: 1.3, w: 3, h: 1.6,
    fill: { color: theme.primary }
  });
  slide.addText("心脏地带", {
    x: 3.5, y: 1.5, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("Heartland", {
    x: 3.5, y: 1.85, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.light,
    align: "center", valign: "middle"
  });
  slide.addText("西伯利亚+中亚+东欧", {
    x: 3.5, y: 2.2, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });
  slide.addText("无法从海上到达", {
    x: 3.5, y: 2.5, w: 3, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Inner Marginal Rim
  slide.addShape("rect", {
    x: 2.0, y: 3.2, w: 6, h: 1.0,
    fill: { color: theme.secondary }
  });
  slide.addText("内新月地带 Inner Marginal Rim", {
    x: 2.0, y: 3.35, w: 6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("德国·土耳其·印度·中国", {
    x: 2.0, y: 3.7, w: 6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Outer Rim
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("外新月地带 Outer Rim — 英国、日本、美国等海上强国", {
    x: 0.5, y: 4.4, w: 9, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Arrow indicators (using text arrows)
  slide.addText("←", {
    x: 1.8, y: 2.0, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("→", {
    x: 7.7, y: 2.0, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Key insight box
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 2.8, h: 1.6,
    fill: { color: theme.light }
  });
  slide.addText("核心洞见", {
    x: 0.5, y: 1.4, w: 2.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("心脏地带的陆上力量可向四面扩张，而海洋国家难以从海上进入", {
    x: 0.6, y: 1.75, w: 2.6, h: 1.0,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Right side insight
  slide.addShape("rect", {
    x: 6.7, y: 1.3, w: 2.8, h: 1.6,
    fill: { color: theme.light }
  });
  slide.addText("历史规律", {
    x: 6.7, y: 1.4, w: 2.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("铁路时代使陆权国家首次具备与海权抗衡的能力", {
    x: 6.8, y: 1.75, w: 2.6, h: 1.0,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
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
  pres.writeFile({ fileName: "slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
