// slide-119.js - Content: 建立你的质量检验标准
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 119, title: `建立你的质量检验标准` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`建立你的质量检验标准`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Why
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 9, h: 0.9, fill: { color: theme.primary } });
  slide.addText(`为什么质量检验点重要？`, { x: 0.7, y: 1.05, w: 3, h: 0.35, fontSize: 13, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true });
  slide.addText(`AI的输出可能看起来合理但实际有问题。没有检验标准，容易过度依赖AI。`, { x: 0.7, y: 1.4, w: 8.5, h: 0.4, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF` });
  // Three types
  slide.addText(`三种检验点`, { x: 0.5, y: 2.1, w: 2, h: 0.4, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true });
  const types = [
    { title: `前提检验点`, desc: `AI结论的前提是否成立？` },
    { title: `逻辑检验点`, desc: `AI的推演逻辑是否合理？` },
    { title: `价值检验点`, desc: `结论是否符合我的价值观和底线？` }
  ];
  types.forEach((t, i) => {
    const y = 2.6 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.75, fill: { color: theme.light } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.12, h: 0.75, fill: { color: theme.accent } });
    slide.addText(t.title, { x: 0.8, y: y + 0.1, w: 2.5, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(t.desc, { x: 0.8, y: y + 0.4, w: 8.4, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`119`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-119-preview.pptx` }).then(() => console.log(`Created slide-119-preview.pptx`));
}