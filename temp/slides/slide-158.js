// slide-158.js - Content: 常见问题与解决方案回顾
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 158, title: `常见问题与解决方案回顾` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`常见问题与解决方案回顾`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  const pairs = [
    { problem: `格式不稳定`, solution: `加硬性约束` },
    { problem: `规则被绕过`, solution: `改成可检测信号` },
    { problem: `边界情况乱发挥`, solution: `加强兜底规则` },
    { problem: `输出内容没依据`, solution: `补充知识库` }
  ];
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.95, w: 9, h: 3.8, fill: { color: theme.light }, rectRadius: 0.1 });
  pairs.forEach((pair, i) => {
    const y = 1.1 + i * 0.9;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.7, y: y, w: 3.8, h: 0.75, fill: { color: theme.bg }, rectRadius: 0.08 });
    slide.addText(pair.problem, { x: 0.7, y: y, w: 3.8, h: 0.75, fontSize: 12, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `center`, valign: `middle` });
    slide.addText(`->`, { x: 4.5, y: y, w: 0.6, h: 0.75, fontSize: 16, fontFace: `Arial`, color: theme.accent, bold: true, align: `center`, valign: `middle` });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.1, y: y, w: 4.2, h: 0.75, fill: { color: theme.accent }, rectRadius: 0.08 });
    slide.addText(pair.solution, { x: 5.1, y: y, w: 4.2, h: 0.75, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  });
  slide.addText(`158`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };