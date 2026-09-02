// slide-02.js - Table of Contents (目录)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '课程目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课程目录", {
    x: 0.5, y: 0.3, w: 3, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.5, h: 0.04,
    fill: { color: theme.primary }
  });

  // English subtitle
  slide.addText("CONTENTS", {
    x: 2.2, y: 0.95, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.light, bold: false, align: "left", valign: "middle"
  });

  // TOC items - 5 modules
  const tocItems = [
    { num: "01", title: "理解公平感的本质", time: "40分钟" },
    { num: "02", title: "看见差异的价值", time: "45分钟" },
    { num: "03", title: "设计专属时间", time: "50分钟" },
    { num: "04", title: "冲突转化四步法", time: "55分钟" },
    { num: "05", title: "语言重塑系统", time: "45分钟" }
  ];

  const startY = 1.5;
  const itemHeight = 0.75;
  const col1X = 0.5;
  const col2X = 5.2;

  tocItems.forEach((item, idx) => {
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: col1X, y: startY + idx * itemHeight, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(item.num, {
      x: col1X, y: startY + idx * itemHeight, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title text
    slide.addText(item.title, {
      x: col1X + 0.7, y: startY + idx * itemHeight, w: 3.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Time badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: col2X + 0.7, y: startY + idx * itemHeight + 0.1, w: 0.9, h: 0.3,
      fill: { color: theme.light, transparency: 50 },
      rectRadius: 0.05
    });
    slide.addText(item.time, {
      x: col2X + 0.7, y: startY + idx * itemHeight + 0.1, w: 0.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Right decorative block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.5, y: 0, w: 0.5, h: 5.625,
    fill: { color: theme.light }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
