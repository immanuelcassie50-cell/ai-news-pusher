// slide-125.js - Content: 课程的五个核心要点
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 125, title: `课程的五个核心要点` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`课程的五个核心要点`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 24, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Five takeaways
  const takeaways = [
    { num: `1`, text: `AI的四大强项和局限：信息整合、框架生成、多方案推演、逻辑展开；判断框架适合、检验前提、价值取舍、承担责任` },
    { num: `2`, text: `人的四大判断边界：问题定义、框架选择、前提检验、价值判断` },
    { num: `3`, text: `判断力坐标系：四象限定位人机分工` },
    { num: `4`, text: `判断力地图：把坐标系应用到具体任务` },
    { num: `5`, text: `迁移使用：举一反三的能力` }
  ];
  takeaways.forEach((t, i) => {
    const y = 0.95 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: 0.78, fill: { color: theme.light } });
    slide.addShape(pres.shapes.OVAL, { x: 0.7, y: y + 0.14, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(t.num, { x: 0.7, y: y + 0.14, w: 0.5, h: 0.5, fontSize: 18, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(t.text, { x: 1.4, y: y + 0.05, w: 7.8, h: 0.68, fontSize: 12, fontFace: `Microsoft YaHei`, color: theme.primary, valign: `middle` });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`125`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-125-preview.pptx` }).then(() => console.log(`Created slide-125-preview.pptx`));
}