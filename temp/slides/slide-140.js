// slide-140.js - Key Insight - The Map Metaphor
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 140, title: `判断力地图的本质` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`判断力地图的本质`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Metaphor statement
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.0, w: 9, h: 0.6, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText(`判断力地图就像你的人生GPS`, { x: 0.5, y: 1.0, w: 9, h: 0.6, fontSize: 20, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // GPS features
  const gpsFeatures = [
    "你现在在哪里（象限定位）",
    "你要去哪里（目标）",
    "哪条路最合适（人机分工）",
    "什么时候该转弯（关键判断点）"
  ];
  gpsFeatures.forEach((f, i) => {
    const y = 1.85 + i * 0.65;
    // Arrow icon
    slide.addShape(pres.shapes.OVAL, { x: 1.0, y: y + 0.1, w: 0.35, h: 0.35, fill: { color: theme.accent } });
    slide.addText(`→`, { x: 1.0, y: y + 0.1, w: 0.35, h: 0.35, fontSize: 14, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(f, { x: 1.5, y: y, w: 4.5, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  // Without GPS warning
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.5, y: 1.85, w: 4, h: 2.2, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText(`没有判断力地图`, { x: 5.5, y: 2.0, w: 4, h: 0.4, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true, align: `center` });
  slide.addText(`你可能在错误的方向上走得很努力，但永远到不了想去的地方`, { x: 5.7, y: 2.5, w: 3.6, h: 1.3, fontSize: 13, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`140`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-140-preview.pptx` }).then(() => console.log(`Created slide-140-preview.pptx`));
}