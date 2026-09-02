// slide-123.js - Content: 模块四核心要点
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 123, title: `模块四核心要点` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`模块四核心要点`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Four key takeaways
  const takeaways = [
    "场景卡是核心工具，贯穿整个课程",
    "判断力地图帮你看清人机分工",
    "迁移能力让你举一反三",
    "30天行动计划确保落地"
  ];
  takeaways.forEach((t, i) => {
    const y = 1.1 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.85, fill: { color: theme.light } });
    slide.addShape(pres.shapes.OVAL, { x: 0.7, y: y + 0.17, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.7, y: y + 0.17, w: 0.5, h: 0.5, fontSize: 18, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(t, { x: 1.4, y: y, w: 7.8, h: 0.85, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, valign: `middle` });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`123`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-123-preview.pptx` }).then(() => console.log(`Created slide-123-preview.pptx`));
}