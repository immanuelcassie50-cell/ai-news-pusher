// slide-108.js - Section Divider: Q&A Section
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",    // deep red
  secondary: "333333",  // dark gray
  accent: "C41E3A",     // bright red
  light: "999999",      // gray
  bg: "F5F5F5"          // light gray background
};
const slideConfig = { type: `section`, index: 108, title: `关于职业本身` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  // Large Q&A text as visual anchor
  slide.addText("Q&A", {
    x: 0.5, y: 1.5, w: 9, h: 2,
    fontSize: 120, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 3.6, w: 2, h: 0.06,
    fill: { color: theme.light }
  });
  // Section title
  slide.addText("关于职业本身", {
    x: 0.5, y: 3.9, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  // Page number badge (circle, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("108", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-108-preview.pptx` }).then(() => console.log(`Created slide-108-preview.pptx`));
}
