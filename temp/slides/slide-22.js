// slide-22.js - Chapter 3 Section Divider: 信息收集不是查数据，是替人过滤噪音
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 22,
  title: '第三章 - 信息收集不是查数据'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large chapter number
  slide.addText("第三章", {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle",
    transparency: 30
  });

  // Main title
  slide.addText("信息收集不是查数据", {
    x: 0.5, y: 2.0, w: 9, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("是替人过滤噪音", {
    x: 0.5, y: 3.1, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle",
    transparency: 20
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.9, w: 3, h: 0.06,
    fill: { color: "FFFFFF", transparency: 50 }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: "FFFFFF", transparency: 70 }
  });
  slide.addText("22", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-22-preview.pptx" })
    .then(() => console.log("Created: slide-22-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
