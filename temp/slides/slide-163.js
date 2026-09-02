// slide-163.js - 补充页：联系方式与资源
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 163, title: `联系方式与资源` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`联系方式与资源`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.9, w: 9, h: 4.4, fill: { color: theme.light }, rectRadius: 0.1 });
  const items = [
    { label: `课程答疑群`, value: `扫描二维码加入课程交流群` },
    { label: `Skill模板下载`, value: `访问课程官网下载最新模板` },
    { label: `持续更新`, value: `课程内容将根据学员反馈持续迭代` }
  ];
  items.forEach((item, i) => {
    const y = 1.2 + i * 1.2;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.7, y: y, w: 2.5, h: 0.8, fill: { color: theme.accent }, rectRadius: 0.08 });
    slide.addText(item.label, { x: 0.7, y: y, w: 2.5, h: 0.8, fontSize: 12, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(item.value, { x: 3.4, y: y, w: 5.9, h: 0.8, fontSize: 12, fontFace: `Microsoft YaHei`, color: theme.secondary, valign: `middle` });
  });
  slide.addText(`163`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };