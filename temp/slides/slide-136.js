// slide-136.js - Module 1 Summary Slide
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 136, title: `模块一：AI能做什么` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`模块一：AI能做什么`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // 4 key points
  const points = [
    { num: `1`, title: `AI的四大强项`, desc: `信息整合、框架生成、多方案推演、逻辑展开` },
    { num: `2`, title: `AI的四大局限`, desc: `判断框架适合、检验前提、价值取舍、承担责任` },
    { num: `3`, title: `AI能力的四个边界`, desc: `问题定义、框架选择、前提检验、价值判断` },
    { num: `4`, title: `核心原则`, desc: `AI是超强工具，人是最终判断者` }
  ];
  points.forEach((p, i) => {
    const y = 1.0 + i * 1.05;
    // Number circle
    slide.addShape(pres.shapes.OVAL, { x: 0.5, y: y + 0.15, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(p.num, { x: 0.5, y: y + 0.15, w: 0.5, h: 0.5, fontSize: 18, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Content card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.2, y: y, w: 8.3, h: 0.85, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.1 });
    slide.addText(p.title, { x: 1.4, y: y + 0.1, w: 3, h: 0.35, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p.desc, { x: 1.4, y: y + 0.45, w: 7.9, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`136`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-136-preview.pptx` }).then(() => console.log(`Created slide-136-preview.pptx`));
}