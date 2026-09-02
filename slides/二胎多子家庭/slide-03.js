// slide-03.js - Course Introduction 1 (为什么这门课)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '为什么这门课？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("为什么这门课？", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Content items with icons
  const items = [
    "二胎/多子家庭已成为中国家庭的常态",
    "手足关系的质量影响孩子一生的社交能力",
    "父母的养育方式决定了家庭氛围的基调",
    "公平感直接影响每个孩子的心理健康"
  ];

  const startY = 1.4;
  const itemHeight = 0.9;

  items.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.7, y: y + 0.1, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content text
    slide.addText(item, {
      x: 1.4, y: y, w: 8, h: 0.7,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 3, h: 0.03,
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
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
