// slide-130.js - The Four Modules Recap
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 130, title: `四模块学习路径回顾` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`四模块学习路径回顾`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Timeline visual
  const modules = [
    { num: `一`, title: `AI能做什么`, deliverable: `建立边界意识`, icon: `①` },
    { num: `二`, title: `人必须做什么`, deliverable: `掌握四大判断`, icon: `②` },
    { num: `三`, title: `判断力坐标系`, deliverable: `整合为系统`, icon: `③` },
    { num: `四`, title: `综合演练`, deliverable: `落地到行动`, icon: `④` }
  ];
  // Timeline line
  slide.addShape(pres.shapes.LINE, { x: 0.8, y: 2.2, w: 8.4, h: 0, line: { color: theme.secondary, width: 3 } });
  modules.forEach((m, i) => {
    const x = 0.8 + i * 2.3;
    // Circle node
    slide.addShape(pres.shapes.OVAL, { x: x, y: 1.95, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(m.icon, { x: x, y: 1.95, w: 0.5, h: 0.5, fontSize: 16, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Module box below
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x - 0.5, y: 2.6, w: 2.1, h: 2.3, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.1 });
    // Module number
    slide.addText(`模块` + m.num, { x: x - 0.4, y: 2.7, w: 1.9, h: 0.35, fontSize: 12, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center` });
    // Title
    slide.addText(m.title, { x: x - 0.4, y: 3.05, w: 1.9, h: 0.5, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `center` });
    // Divider
    slide.addShape(pres.shapes.LINE, { x: x - 0.3, y: 3.55, w: 1.7, h: 0, line: { color: theme.light, width: 1 } });
    // Arrow and deliverable
    slide.addText(`→`, { x: x - 0.4, y: 3.65, w: 1.9, h: 0.3, fontSize: 14, fontFace: `Arial`, color: theme.accent, align: `center` });
    slide.addText(m.deliverable, { x: x - 0.4, y: 3.95, w: 1.9, h: 0.8, fontSize: 12, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true, align: `center` });
  });
  // Arrow head on timeline
  slide.addText(`▶`, { x: 9.0, y: 2.05, w: 0.3, h: 0.3, fontSize: 12, fontFace: `Arial`, color: theme.secondary, align: `center` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`130`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-130-preview.pptx` }).then(() => console.log(`Created slide-130-preview.pptx`));
}