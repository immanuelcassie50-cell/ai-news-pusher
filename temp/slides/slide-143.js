// slide-143.js - Your Commitment
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 143, title: `你的承诺` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`你的承诺`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // 3 commitment blocks
  const commitments = [
    "我承诺每次用AI处理复杂任务前，先画判断力地图",
    "我承诺对AI的结论进行前提检验",
    "我承诺持续训练我的判断力，不因AI而退化"
  ];
  commitments.forEach((c, i) => {
    const y = 1.0 + i * 1.1;
    // Checkbox
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y + 0.15, w: 0.45, h: 0.45, fill: { color: theme.bg }, line: { color: theme.accent, width: 2 }, rectRadius: 0.08 });
    slide.addText(`☐`, { x: 0.5, y: y + 0.15, w: 0.45, h: 0.45, fontSize: 18, fontFace: `Arial`, color: theme.accent, align: `center`, valign: `middle` });
    // Commitment text
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.1, y: y, w: 8.4, h: 0.8, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.1 });
    slide.addText(c, { x: 1.3, y: y, w: 8.0, h: 0.8, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary, valign: `middle` });
  });
  // Signature line
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.6, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText(`签名：__________________  日期：__________`, { x: 0.5, y: 4.5, w: 9, h: 0.6, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`143`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-143-preview.pptx` }).then(() => console.log(`Created slide-143-preview.pptx`));
}