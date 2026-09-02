// slide-11.js - 麦金德与陆权论
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 11,
  title: '麦金德与陆权论'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("麦金德与陆权论", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("11", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left column - portrait area
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 3.2, h: 3.8,
    fill: { color: theme.light },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Portrait placeholder
  slide.addShape("ellipse", {
    x: 1.35, y: 1.5, w: 1.5, h: 1.5,
    fill: { color: theme.secondary }
  });
  slide.addText("麦金德", {
    x: 1.35, y: 2.2, w: 1.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Name and dates
  slide.addText("Sir Halford Mackinder", {
    x: 0.6, y: 3.2, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("1861-1947", {
    x: 0.6, y: 3.55, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Key info
  slide.addText([
    { text: "英国地理学家", options: { breakLine: true } },
    { text: "伦敦经济学院院长", options: { breakLine: true } },
    { text: "1904年提出心脏地带论", options: { breakLine: true } },
    { text: "《民主的理想与现实》1919" }
  ], {
    x: 0.6, y: 4.0, w: 3, h: 1.0,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "top"
  });

  // Right column - content
  slide.addText("陆权论的核心思想", {
    x: 4.0, y: 1.2, w: 5.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Accent line
  slide.addShape("rect", {
    x: 4.0, y: 1.7, w: 1.2, h: 0.06,
    fill: { color: theme.accent }
  });

  // Key points
  const points = [
    { title: "地理决定论", desc: "地理条件塑造国家命运，海洋与陆地的分布决定历史走向" },
    { title: "欧亚大陆核心", desc: "东欧平原是连接欧亚大陆心脏的关键枢纽地带" },
    { title: "技术变革意义", desc: "铁路技术打破海洋国家的绝对优势，陆权复兴" },
    { title: "全球战略视野", desc: "从全球视角而非区域视角审视地缘政治格局" }
  ];

  points.forEach((p, i) => {
    const y = 1.95 + i * 0.75;

    // Bullet circle
    slide.addShape("ellipse", {
      x: 4.0, y: y + 0.08, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });

    slide.addText(p.title, {
      x: 4.35, y: y, w: 5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(p.desc, {
      x: 4.35, y: y + 0.32, w: 5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

  // Quote box
  slide.addShape("rect", {
    x: 4.0, y: 4.95, w: 5.5, h: 0.55,
    fill: { color: theme.light }
  });
  slide.addText("「谁控制了东欧，谁就控制了心脏地带；谁控制了心脏地带，谁就控制了世界岛」", {
    x: 4.15, y: 4.95, w: 5.2, h: 0.55,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
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
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
