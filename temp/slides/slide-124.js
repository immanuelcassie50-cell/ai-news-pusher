// slide-124.js - Content: 课程即将完成
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 124, title: `课程即将完成` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`课程即将完成`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Reflection questions
  slide.addText(`反思问题`, { x: 0.5, y: 1.0, w: 2, h: 0.4, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true });
  const questions = [
    "你的判断力地图完成了吗？",
    "你的人机协作方案设计好了吗？",
    "你的30天行动计划制定了吗？"
  ];
  questions.forEach((q, i) => {
    const y = 1.5 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.95, fill: { color: theme.light } });
    slide.addShape(pres.shapes.OVAL, { x: 0.7, y: y + 0.22, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.7, y: y + 0.22, w: 0.5, h: 0.5, fontSize: 18, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(q, { x: 1.4, y: y, w: 7.8, h: 0.95, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, valign: `middle` });
  });
  // Next
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.9, w: 9, h: 0.6, fill: { color: theme.primary } });
  slide.addText(`下一步：进入课程总结`, { x: 0.7, y: 4.9, w: 8.5, h: 0.6, fontSize: 14, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, valign: `middle` });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`124`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-124-preview.pptx` }).then(() => console.log(`Created slide-124-preview.pptx`));
}