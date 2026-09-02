// slide-133.js - The Path Forward
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 133, title: `接下来的路` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`接下来的路`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // 3 next steps
  const steps = [
    { num: `1`, title: `完成你的判断力地图`, desc: `今天的练习不是结束，是开始` },
    { num: `2`, title: `实践30天行动计划`, desc: `判断力需要刻意练习` },
    { num: `3`, title: `持续更新你的地图`, desc: `你的能力和AI能力都在进化` }
  ];
  steps.forEach((s, i) => {
    const y = 1.1 + i * 1.15;
    // Number box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y, w: 0.7, h: 0.9, fill: { color: theme.accent }, rectRadius: 0.1 });
    slide.addText(s.num, { x: 0.5, y: y, w: 0.7, h: 0.9, fontSize: 28, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Content card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.4, y: y, w: 6.5, h: 0.9, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.1 });
    slide.addText(s.title, { x: 1.6, y: y + 0.1, w: 6.1, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(s.desc, { x: 1.6, y: y + 0.5, w: 6.1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  // Commitment statement
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.5, w: 9, h: 0.6, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText(`判断力操作系统一旦建立，会不断进化`, { x: 0.5, y: 4.5, w: 9, h: 0.6, fontSize: 16, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`133`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-133-preview.pptx` }).then(() => console.log(`Created slide-133-preview.pptx`));
}