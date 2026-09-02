// slide-161.js - 结束页：不请假的团队
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `ending`, index: 161, title: `不请假的团队` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.primary } });
  slide.addText(`不请假的团队`, { x: 0.5, y: 1.8, w: 9, h: 1.0, fontSize: 48, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center` });
  slide.addText(`构建AI数字员工协作体系`, { x: 0.5, y: 2.8, w: 9, h: 0.6, fontSize: 20, fontFace: `Microsoft YaHei`, color: `FFFFFF`, align: `center` });
  slide.addShape(pres.shapes.RECTANGLE, { x: 4.0, y: 3.6, w: 2, h: 0.06, fill: { color: theme.accent } });
  slide.addText(`感谢参与 | 罗宏伟 · 课程设计`, { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 14, fontFace: `Microsoft YaHei`, color: `FFFFFF`, align: `center` });
  slide.addText(`161`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: `FFFFFF`, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };