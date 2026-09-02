// slide-164.js - 补充页：Q&A 问答环节
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 164, title: `Q&A 问答环节` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`Q&A 问答环节`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 2.5, y: 1.5, w: 5, h: 3.0, fill: { color: theme.light }, rectRadius: 0.15 });
  slide.addText(`?`, { x: 2.5, y: 1.7, w: 5, h: 1.5, fontSize: 80, fontFace: `Georgia`, color: theme.accent, bold: true, align: `center`, valign: `middle` });
  slide.addText(`欢迎提问`, { x: 2.5, y: 3.3, w: 5, h: 0.6, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center` });
  slide.addText(`164`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };