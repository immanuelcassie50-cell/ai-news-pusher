// slide-162.js - 结束页（可选）：开始行动
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `ending`, index: 162, title: `开始行动` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  slide.addText(`开始行动`, { x: 0.5, y: 2.0, w: 9, h: 1.0, fontSize: 54, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center` });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 2.5, y: 3.3, w: 5, h: 1.0, fill: { color: theme.accent }, rectRadius: 0.1 });
  slide.addText(`30天后，你将感谢今天开始行动的自己`, { x: 2.5, y: 3.3, w: 5, h: 1.0, fontSize: 14, fontFace: `Microsoft YaHei`, color: `FFFFFF`, align: `center`, valign: `middle` });
  slide.addText(`162`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: `FFFFFF`, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };