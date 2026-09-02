// slide-51.js - 第七章 Section Divider: 风险偏好翻译
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 51,
  title: '第七章 - 风险偏好翻译'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.accent };

  // Chapter number
  slide.addText("第七章", {
    x: 0.5, y: 1.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle",
    transparency: 30
  });

  // Main title
  slide.addText("风险偏好翻译", {
    x: 0.5, y: 2.2, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("冲稳保是风险偏好的翻译，不是排列组合", {
    x: 0.5, y: 3.4, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle",
    transparency: 20
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.2, w: 3, h: 0.05,
    fill: { color: "FFFFFF", transparency: 50 }
  });

  // Page number badge (circle style)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: "FFFFFF", transparency: 70 }
  });
  slide.addText("51", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, bold: true,
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-51-preview.pptx" })
    .then(() => console.log("Created: slide-51-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
