// slide-127.js - From Learning to Application
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 127, title: `从'知道'到'做到'` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`从\"知道\`到\`做到\"`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // The gap explanation
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.0, w: 9, h: 0.6, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText(`很多人\"知道\`但\`做不到\`，因为缺少系统`, { x: 0.5, y: 1.0, w: 9, h: 0.6, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true, align: `center`, valign: `middle` });
  // Why this course works - 4 cards
  const reasons = [
    { num: `1`, title: `有框架`, desc: `判断力坐标系帮你定位` },
    { num: `2`, title: `有工具`, desc: `F1-F10表单可直接使用` },
    { num: `3`, title: `有练习`, desc: `真实任务贯穿全程` },
    { num: `4`, title: `有计划`, desc: `30天行动计划确保落地` }
  ];
  reasons.forEach((r, i) => {
    const x = 0.5 + i * 2.35;
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.85, w: 2.2, h: 1.8, fill: { color: `FFFFFF` }, line: { color: theme.light, width: 1 }, rectRadius: 0.1 });
    // Number circle
    slide.addShape(pres.shapes.OVAL, { x: x + 0.8, y: 2.0, w: 0.6, h: 0.6, fill: { color: theme.accent } });
    slide.addText(r.num, { x: x + 0.8, y: 2.0, w: 0.6, h: 0.6, fontSize: 20, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Title
    slide.addText(r.title, { x: x + 0.1, y: 2.7, w: 2.0, h: 0.4, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `center` });
    // Description
    slide.addText(r.desc, { x: x + 0.1, y: 3.1, w: 2.0, h: 0.45, fontSize: 11, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center` });
  });
  // Arrow showing progression
  slide.addShape(pres.shapes.LINE, { x: 1.5, y: 4.0, w: 7, h: 0, line: { color: theme.secondary, width: 2, dashType: "dash" } });
  slide.addText(`→`, { x: 8.3, y: 3.85, w: 0.5, h: 0.3, fontSize: 20, fontFace: `Arial`, color: theme.accent });
  // Key message box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.3, w: 9, h: 0.7, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText(`判断力不是一天建成的，但你可以今天开始`, { x: 0.5, y: 4.3, w: 9, h: 0.7, fontSize: 18, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`127`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-127-preview.pptx` }).then(() => console.log(`Created slide-127-preview.pptx`));
}