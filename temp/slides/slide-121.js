// slide-121.js - Content: 建立你的AI工具包
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 121, title: `建立你的AI工具包` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`建立你的AI工具包`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Intro
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 9, h: 0.6, fill: { color: theme.primary } });
  slide.addText(`基于你的判断力地图，建立一个属于你的AI使用工具包`, { x: 0.7, y: 1.0, w: 8.6, h: 0.6, fontSize: 14, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, valign: `middle` });
  // Tool kit contents
  const tools = [
    { title: `常用框架库`, desc: `你在Q1/Q2任务中最常用的分析框架` },
    { title: `前提检验清单`, desc: `检验AI结论时必查的问题` },
    { title: `价值判断标准`, desc: `你的利益优先顺序和道德底线` },
    { title: `协作流程模板`, desc: `可复用的协作流程` }
  ];
  tools.forEach((t, i) => {
    const y = 1.8 + i * 0.9;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.8, fill: { color: theme.light } });
    slide.addShape(pres.shapes.OVAL, { x: 0.7, y: y + 0.2, w: 0.4, h: 0.4, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.7, y: y + 0.2, w: 0.4, h: 0.4, fontSize: 14, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(t.title, { x: 1.3, y: y + 0.1, w: 2.5, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(t.desc, { x: 1.3, y: y + 0.45, w: 7.9, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`121`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-121-preview.pptx` }).then(() => console.log(`Created slide-121-preview.pptx`));
}