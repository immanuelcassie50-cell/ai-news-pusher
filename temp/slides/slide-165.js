// slide-165.js - 结束页：感谢聆听
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `ending`, index: 165, title: `感谢聆听` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  slide.addText(`感谢聆听`, { x: 0.5, y: 2.0, w: 9, h: 1.2, fontSize: 54, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center` });
  slide.addShape(pres.shapes.RECTANGLE, { x: 4.0, y: 3.4, w: 2, h: 0.06, fill: { color: theme.accent } });
  slide.addText(`祝各位构建出不请假的数字员工团队`, { x: 0.5, y: 3.8, w: 9, h: 0.6, fontSize: 16, fontFace: `Microsoft YaHei`, color: `FFFFFF`, align: `center` });
  slide.addText(`165`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: `FFFFFF`, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };