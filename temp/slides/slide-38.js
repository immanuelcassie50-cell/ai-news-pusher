// slide-38.js - 第五章 倒推规划 Section Divider
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 38,
  title: '第五章 倒推规划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Chapter number badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.6, w: 1.6, h: 0.6,
    fill: { color: "FFFFFF", transparency: 85 },
    rectRadius: 0.1
  });
  slide.addText("第五章", {
    x: 0.5, y: 1.6, w: 1.6, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Main title
  slide.addText("倒推规划", {
    x: 0.5, y: 2.4, w: 9, h: 1.0,
    fontSize: 52, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Subtitle
  slide.addText("先问十年后想过什么日子", {
    x: 0.5, y: 3.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    valign: "middle"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 2.5, h: 0.06,
    fill: { color: "FFFFFF", transparency: 50 }
  });

  // Page number badge (circle style - bottom-left per requirement)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: "FFFFFF" }
  });
  slide.addText("38", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-38-preview.pptx" })
    .then(() => console.log("Preview saved: slide-38-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
