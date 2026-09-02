// slide-132.js - The Judgment Paradox
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 132, title: `判断力的悖论` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`判断力的悖论`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Central paradox statement
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.5, y: 1.1, w: 7, h: 0.8, fill: { color: theme.accent }, rectRadius: 0.1 });
  slide.addText(`AI越强大，人类判断力越重要`, { x: 1.5, y: 1.1, w: 7, h: 0.8, fontSize: 22, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Why section
  const points = [
    "更多AI输出需要人类判断真伪",
    "更多选择需要人类判断价值",
    "更多变化需要人类判断方向"
  ];
  points.forEach((p, i) => {
    const y = 2.2 + i * 0.7;
    // Number circle
    slide.addShape(pres.shapes.OVAL, { x: 1.0, y: y + 0.05, w: 0.4, h: 0.4, fill: { color: theme.primary } });
    slide.addText((i + 1).toString(), { x: 1.0, y: y + 0.05, w: 0.4, h: 0.4, fontSize: 14, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Text
    slide.addText(p, { x: 1.6, y: y, w: 5, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  // Key insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.3, w: 9, h: 0.8, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText(`AI不是来取代判断力的，AI让判断力变得更加重要`, { x: 0.5, y: 4.3, w: 9, h: 0.8, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`132`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-132-preview.pptx` }).then(() => console.log(`Created slide-132-preview.pptx`));
}