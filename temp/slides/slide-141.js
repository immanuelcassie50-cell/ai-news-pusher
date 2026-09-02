// slide-141.js - The Judgment Continuum
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 141, title: `判断力是一个连续体` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`判断力是一个连续体`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Spectrum visual
  const stages = [
    { label: "无意识无能力", color: theme.secondary },
    { label: "有意识无能力", color: theme.secondary },
    { label: "有意识有能力", color: theme.accent },
    { label: "无意识有能力", color: theme.primary }
  ];
  // Timeline bar
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.4, w: 9, h: 0.4, fill: { color: theme.light }, rectRadius: 0.2 });
  // Arrow progression
  stages.forEach((s, i) => {
    const x = 0.5 + i * 2.3;
    slide.addShape(pres.shapes.OVAL, { x: x + 0.85, y: 1.35, w: 0.5, h: 0.5, fill: { color: s.color } });
    slide.addText((i + 1).toString(), { x: x + 0.85, y: 1.35, w: 0.5, h: 0.5, fontSize: 14, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(s.label, { x: x, y: 1.9, w: 2.2, h: 0.5, fontSize: 11, fontFace: `Microsoft YaHei`, color: s.color, bold: true, align: `center` });
  });
  // Key insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.7, w: 9, h: 0.7, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText(`用AI时\"有意识有能力\`，不用AI时\`无意识无能力\``, { x: 0.5, y: 2.7, w: 9, h: 0.7, fontSize: 16, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Goal statement
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.6, w: 9, h: 1.4, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText(`目标`, { x: 0.7, y: 3.75, w: 1, h: 0.4, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true });
  slide.addText(`在不使用AI时也能\"有意识有能力\`，最终达到\`无意识有能力\"`, { x: 0.7, y: 4.15, w: 8.6, h: 0.6, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`141`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-141-preview.pptx` }).then(() => console.log(`Created slide-141-preview.pptx`));
}