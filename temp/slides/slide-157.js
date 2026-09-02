// slide-157.js - Content: 30天行动计划提示
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 157, title: `30天行动计划提示` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`30天行动计划提示`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.9, w: 9, h: 4.4, fill: { color: theme.light }, rectRadius: 0.1 });
  const tips = [
    "选一个最合适的场景建第一个Skill",
    "用真实数据测试，不要用为它定制的数据",
    "找1-2个种子用户，帮他们成功用一次",
    "建立反馈机制，持续迭代"
  ];
  tips.forEach((tip, i) => {
    const y = 1.2 + i * 1.0;
    slide.addShape(pres.shapes.OVAL, { x: 0.8, y: y + 0.1, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.8, y: y + 0.1, w: 0.5, h: 0.5, fontSize: 16, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(tip, { x: 1.5, y: y, w: 7.8, h: 0.7, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.secondary, valign: `middle` });
  });
  slide.addText(`157`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };