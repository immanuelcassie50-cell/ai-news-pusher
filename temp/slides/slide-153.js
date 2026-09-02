// slide-153.js - Section Divider: 课程总结
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `section`, index: 153, title: `课程总结` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  slide.addText(`课程总结`, { x: 0.5, y: 2.4, w: 9, h: 1.2, fontSize: 54, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.3, w: 2, h: 0.06, fill: { color: theme.accent } });
  slide.addText(`153`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: `FFFFFF`, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };