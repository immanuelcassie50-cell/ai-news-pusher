// slide-131.js - Why This Matters Now
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 131, title: `为什么这件事现在特别重要` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`为什么这件事现在特别重要`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // 3 reasons in large cards
  const reasons = [
    { num: `01`, title: `AI能力爆发`, desc: `AI能做的东西越来越多，判断力边界在移动` },
    { num: `02`, title: `信息过载`, desc: `数据越多，越需要判断力筛选` },
    { num: `03`, title: `决策加速`, desc: `变化越快，判断力越重要` }
  ];
  reasons.forEach((r, i) => {
    const x = 0.5 + i * 3.1;
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 3.0, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.12 });
    // Large number
    slide.addText(r.num, { x: x + 0.2, y: 1.3, w: 1.5, h: 0.8, fontSize: 42, fontFace: "Arial", color: theme.accent, bold: true });
    // Title
    slide.addText(r.title, { x: x + 0.2, y: 2.1, w: 2.5, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    // Description
    slide.addText(r.desc, { x: x + 0.2, y: 2.65, w: 2.5, h: 1.2, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  // Key message box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.7, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText(`在AI时代，判断力不是\"锦上添花\`，是\`必备能力\``, { x: 0.5, y: 4.4, w: 9, h: 0.7, fontSize: 18, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`131`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-131-preview.pptx` }).then(() => console.log(`Created slide-131-preview.pptx`));
}