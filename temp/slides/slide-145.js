// slide-145.js - Thank You
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 145, title: `感谢` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Full dark background
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  // Decorative shapes
  slide.addShape(pres.shapes.OVAL, { x: 7.5, y: 0.5, w: 2.5, h: 2.5, fill: { color: theme.accent, transparency: 70 } });
  slide.addShape(pres.shapes.OVAL, { x: 8.2, y: 1.2, w: 1.5, h: 1.5, fill: { color: theme.light, transparency: 80 } });
  // Thank you text
  slide.addText(`感谢`, { x: 0.5, y: 1.5, w: 9, h: 1.0, fontSize: 56, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center` });
  // Course name
  slide.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 2.6, w: 5, h: 0.06, fill: { color: theme.accent } });
  slide.addText(`思维重生课程`, { x: 0.5, y: 2.8, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.light, align: `center` });
  slide.addText(`从记模型到建判断力操作系统`, { x: 0.5, y: 3.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center` });
  // Wish message
  slide.addText(`祝你成为AI时代最会判断的人`, { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`145`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-145-preview.pptx` }).then(() => console.log(`Created slide-145-preview.pptx`));
}