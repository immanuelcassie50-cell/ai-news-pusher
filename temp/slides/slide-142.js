// slide-142.js - The AI Partnership Model
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 142, title: `与AI建立伙伴关系` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`与AI建立伙伴关系`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // 3 stages of human-AI relationship
  const stages = [
    { num: `1`, title: `AI是答案机`, desc: `过度依赖AI做判断`, status: `需要改变`, statusColor: `EF4444` },
    { num: `2`, title: `AI是工具`, desc: `把AI当工具，人做判断`, status: `正确但被动`, statusColor: theme.secondary },
    { num: `3`, title: `AI是伙伴`, desc: `与AI协作，各自发挥优势`, status: `最佳状态`, statusColor: `10B981` }
  ];
  stages.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.0, w: 2.9, h: 2.8, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.12 });
    // Number
    slide.addShape(pres.shapes.OVAL, { x: x + 1.05, y: 1.2, w: 0.8, h: 0.8, fill: { color: i === 2 ? theme.accent : theme.secondary } });
    slide.addText(s.num, { x: x + 1.05, y: 1.2, w: 0.8, h: 0.8, fontSize: 24, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Title
    slide.addText(s.title, { x: x + 0.1, y: 2.15, w: 2.7, h: 0.5, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `center` });
    // Description
    slide.addText(s.desc, { x: x + 0.1, y: 2.65, w: 2.7, h: 0.5, fontSize: 11, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center` });
    // Status badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.6, y: 3.25, w: 1.7, h: 0.4, fill: { color: s.statusColor }, rectRadius: 0.1 });
    slide.addText(s.status, { x: x + 0.6, y: 3.25, w: 1.7, h: 0.4, fontSize: 10, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  });
  // The shift statement
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.1, w: 9, h: 0.6, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText(`从\"用AI替代判断\`到\`与AI共同判断\``, { x: 0.5, y: 4.1, w: 9, h: 0.6, fontSize: 16, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`142`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-142-preview.pptx` }).then(() => console.log(`Created slide-142-preview.pptx`));
}