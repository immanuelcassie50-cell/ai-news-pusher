// slide-135.js - One More Thing
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 135, title: `最后一句话` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`最后一句话`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Large centered quote
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.2, w: 8.4, h: 1.8, fill: { color: theme.primary }, rectRadius: 0.12 });
  slide.addText(`\`判断力不是天赋，是可以训练的\``, { x: 0.8, y: 1.2, w: 8.4, h: 1.8, fontSize: 30, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Supporting points
  const points = [
    "每一个重要决策都是练习判断力的机会",
    "每一次使用AI都是检验判断力的机会",
    "判断力越练越强，不练则退化"
  ];
  points.forEach((p, i) => {
    const y = 3.3 + i * 0.55;
    slide.addShape(pres.shapes.OVAL, { x: 1.0, y: y + 0.1, w: 0.15, h: 0.15, fill: { color: theme.accent } });
    slide.addText(p, { x: 1.3, y: y, w: 7, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  // Call to action
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.9, w: 9, h: 0.5, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText(`从今天开始，把每一个任务都当作判断力练习`, { x: 0.5, y: 4.9, w: 9, h: 0.5, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`135`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-135-preview.pptx` }).then(() => console.log(`Created slide-135-preview.pptx`));
}