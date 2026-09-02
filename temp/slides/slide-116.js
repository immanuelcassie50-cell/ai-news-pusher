// slide-116.js - Thank You
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};
const slideConfig = { type: `content`, index: 116, title: `感谢` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  // Deep red background
  slide.background = { color: theme.primary };
  // Decorative top accent line
  slide.addShape(pres.shapes.RECTANGLE, { x: 4, y: 1.5, w: 2, h: 0.06, fill: { color: theme.accent } });
  // Title
  slide.addText(`感谢`, { x: 0, y: 1.7, w: 10, h: 1.2, fontSize: 48, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Subtitle
  slide.addText(`希望这本手册能帮你少走一点弯路`, { x: 0, y: 2.9, w: 10, h: 0.6, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.light, align: `center`, valign: `middle` });
  // Decorative bottom accent line
  slide.addShape(pres.shapes.RECTANGLE, { x: 4, y: 3.7, w: 2, h: 0.06, fill: { color: theme.accent } });
  // Author
  slide.addText(`罗宏伟`, { x: 0, y: 4.2, w: 10, h: 0.5, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.light, align: `center`, valign: `middle` });
  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, { x: 0.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`116`, { x: 0.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-116-preview.pptx` }).then(() => console.log(`Created slide-116-preview.pptx`));
}
