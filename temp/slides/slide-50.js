// slide-50.js - 模块二 Section Divider: 协作与沟通
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 50,
  title: '模块二 - 协作与沟通'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large "02" number - dominant visual element
  slide.addText("02", {
    x: 0.5, y: 1.0, w: 9, h: 1.8,
    fontSize: 120, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle",
    transparency: 20
  });

  // Module label
  slide.addText("模块二", {
    x: 0.5, y: 2.0, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle",
    transparency: 40
  });

  // Main title
  slide.addText("协作与沟通", {
    x: 0.5, y: 2.7, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("风险偏好翻译与冲突处理", {
    x: 0.5, y: 3.8, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle",
    transparency: 25
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.6, w: 3, h: 0.05,
    fill: { color: "FFFFFF", transparency: 50 }
  });

  // Page number badge (circle style)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: "FFFFFF", transparency: 70 }
  });
  slide.addText("50", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-50-preview.pptx" })
    .then(() => console.log("Created: slide-50-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
