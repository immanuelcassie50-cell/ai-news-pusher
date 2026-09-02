// slide-144.js - The 30-Day Challenge
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 144, title: `30天判断力挑战` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`30天判断力挑战`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Challenge timeline
  const weeks = [
    { week: `Week 1`, task: `每天使用一次判断力地图（哪怕是小任务）` },
    { week: `Week 2`, task: `每次AI给结论前，先问\`前提是什么\"` },
    { week: `Week 3`, task: `在至少2个不同任务上验证判断力地图的通用性` },
    { week: `Week 4`, task: `更新你的判断力地图，加入新学到的东西` }
  ];
  weeks.forEach((w, i) => {
    const y = 1.0 + i * 0.95;
    // Week badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y + 0.1, w: 1.3, h: 0.6, fill: { color: theme.accent }, rectRadius: 0.1 });
    slide.addText(w.week, { x: 0.5, y: y + 0.1, w: 1.3, h: 0.6, fontSize: 13, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Task card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 2.0, y: y, w: 7.5, h: 0.8, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.1 });
    slide.addText(w.task, { x: 2.2, y: y, w: 7.1, h: 0.8, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary, valign: `middle` });
  });
  // Completion reward
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.7, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText(`完成奖励：判断力操作系统——启动`, { x: 0.5, y: 4.4, w: 9, h: 0.7, fontSize: 18, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`144`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-144-preview.pptx` }).then(() => console.log(`Created slide-144-preview.pptx`));
}