// slide-160.js - Content: 最后一句话
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 160, title: `最后一句话` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`最后一句话`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.0, y: 1.5, w: 8, h: 2.8, fill: { color: theme.primary }, rectRadius: 0.15 });
  slide.addText(`\"`, { x: 1.3, y: 1.6, w: 0.8, h: 0.8, fontSize: 60, fontFace: `Georgia`, color: theme.accent, bold: true });
  slide.addText(`数字员工不是取代你，而是放大你。与其担心被AI替代，不如学会用AI放大自己的价值。`, { x: 1.5, y: 2.2, w: 7.0, h: 1.8, fontSize: 18, fontFace: `Microsoft YaHei`, color: `FFFFFF`, valign: `middle` });
  slide.addText(`\"`, { x: 7.7, y: 3.3, w: 0.8, h: 0.8, fontSize: 60, fontFace: `Georgia`, color: theme.accent, bold: true });
  slide.addText(`160`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };