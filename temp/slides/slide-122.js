// slide-122.js - Content: 人机协作的常见陷阱
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 122, title: `人机协作的常见陷阱` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`人机协作的常见陷阱`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Six pitfalls
  const pitfalls = [
    { num: `1`, title: `过度依赖AI`, desc: `把判断责任推给AI` },
    { num: `2`, title: `过度排斥AI`, desc: `拒绝使用AI辅助` },
    { num: `3`, title: `只看表面`, desc: `不验证AI的输出` },
    { num: `4`, title: `框架套用`, desc: `不判断框架是否适合就套用` },
    { num: `5`, title: `忽略前提`, desc: `不检验AI结论的前提假设` },
    { num: `6`, title: `价值模糊`, desc: `不明确自己的价值判断标准` }
  ];
  pitfalls.forEach((p, i) => {
    const x = 0.5 + (i % 2) * 4.7;
    const y = 1.0 + Math.floor(i / 2) * 1.35;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.3, h: 1.15, fill: { color: theme.light } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 0.6, h: 1.15, fill: { color: theme.accent } });
    slide.addText(p.num, { x: x, y: y, w: 0.6, h: 1.15, fontSize: 22, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(p.title, { x: x + 0.8, y: y + 0.2, w: 3.3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p.desc, { x: x + 0.8, y: y + 0.6, w: 3.3, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`122`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-122-preview.pptx` }).then(() => console.log(`Created slide-122-preview.pptx`));
}